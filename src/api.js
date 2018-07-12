import axios from 'axios'
import idx from 'idx'
import { isUndefined, isEmpty } from 'lodash'
import { host, contributorsLimit } from './config'

// Use query-string
// import qs from 'query-string'
// const request = ({ method = 'get', endpoint, query = {}, fullUrl = '' }) => {
//   const stringifiedQuery = qs.stringify(query)
//   const separator = stringifiedQuery ? '?' : ''
//   const url = fullUrl || [host, endpoint, separator, stringifiedQuery].join('')

//   return axios({
//     method,
//     url,
//   }).catch(error => console.error('Error', error.config))
// }

export const request = ({
  method = 'get',
  endpoint,
  query = {},
  fullUrl = '',
}) => {
  const url = fullUrl || host + endpoint

  return axios({
    method,
    url,
    params: query,
  })
}

export const getRepo = keyWord =>
  request({
    method: 'GET',
    endpoint: '/search/repositories',
    query: { q: keyWord },
  })
    .then(res =>
      // get the best match of searched results
      // which is the first element by github's sorting
      idx(res, _ => _.data.items[0])
    )
    .then(
      repo =>
        !isUndefined(repo)
          ? {
              htmlUrl: repo.html_url,
              name: repo.full_name,
              description: repo.description || '',
              language: repo.language || '',
              forks: repo.forks,
              stars: repo.stargazers_count,
              contributorsUrl: repo.contributors_url,
            }
          : {}
    )

export const getContributorIds = contributorsUrl =>
  request({
    method: 'GET',
    fullUrl: contributorsUrl,
  })
    .then(
      res => (isEmpty(res.data) ? [] : res.data.slice(0, contributorsLimit))
    )
    .then(contributors => contributors.map(contributor => contributor.login))

export const getUserFollowers = userId =>
  request({
    method: 'GET',
    endpoint: `/users/${userId}`,
  }).then(res => res.data.followers)

export const getAttention = keyWord => {
  let repoData
  let isDone
  return getRepo(keyWord)
    .then(repo => {
      isDone = isEmpty(repo)
      if (isDone) return {}

      repoData = repo
      return getContributorIds(repo.contributorsUrl)
    })
    .then(contributorId => {
      if (isDone) return {}

      return axios.all(contributorId.map(id => getUserFollowers(id)))
    })
    .then(followers => {
      if (isDone) return {}

      const accumlator = (a, b) => a + b
      const initialValue = 0
      const totalFollowers = followers.reduce(accumlator, initialValue)
      const attention = repoData.stars + repoData.forks + totalFollowers
      return {
        ...repoData,
        attention,
        followers: totalFollowers,
      }
    })
}

// const funcWrap = func =>
//   function (inputs) {
//     return isEmpty(inputs) ? undefined : func(...Array.from(arguments))
//   }
