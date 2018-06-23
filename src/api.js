import axios from 'axios'
import qs from 'query-string'
import { host, contributorsLimit } from './config'

const request = ({
  method,
  endpoint,
  query = undefined,
  fullUrl = undefined,
}) => {
  const stringifiedQuery = qs.stringify(query)
  const separator = stringifiedQuery ? '?' : ''
  const url = fullUrl || [host, endpoint, separator, stringifiedQuery].join('')

  return axios({
    method,
    url,
  }).catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.warn(error.response.data)
      console.warn(error.response.status)
      console.warn(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.warn(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.warn('Error', error.message)
    }
    console.warn(error.config)
  })
}

export const getRepo = keyWord =>
  request({
    method: 'GET',
    endpoint: '/search/repositories',
    query: { q: keyWord },
  })
    // get the best match of searched results
    // which is the first element by github's sorting
    .then(res => res.data.items[0])
    .then(repo => ({
      name: repo.full_name,
      description: repo.description,
      language: repo.language,
      forks: repo.forks,
      stars: repo.stargazers_count,
      contributorsUrl: repo.contributors_url,
    }))

export const getContributors = contributorsUrl =>
  request({
    method: 'GET',
    fullUrl: contributorsUrl,
  })
    .then(res => res.data.slice(0, contributorsLimit))
    .then(contributors => contributors.map(e => e.login))

export const getUserFollowers = userId =>
  request({
    method: 'GET',
    endpoint: `/users/${userId}`,
  }).then(res => res.data.followers)
