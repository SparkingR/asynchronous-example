/* eslint-disable */
import axios from 'axios'
import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import RepoAttention from '../components/RepoAttention/RepoAttention'
// import logo from '../assets/logo.svg'
import { getRepo, getContributors, getUserFollowers } from '../api'

const cx = classNames.bind(styles)
class App extends Component {
  state = { repo: {} }

  componentDidMount() {
    getRepo('react')
      .then(repo => {
        this.setState({ repo: repo })
        return repo.contributorsUrl
      })
      .then(contributorsUrl => getContributors(contributorsUrl))
      .then(contributors =>
        axios.all(contributors.map(e => getUserFollowers(e)))
      )
      .then(followers => {
        const { repo } = this.state
        const totalFollowers = followers.reduce((a, b) => a + b, 0)
        const attention = repo.stars + repo.forks + totalFollowers
        const newRepo = {
          ...this.state.repo,
          attention,
          followers: totalFollowers,
        }
        this.setState({ repo: newRepo })
      })
  }

  render() {
    const { repo } = this.state
    return (
      <div className={cx('app')}>
        <Header />
        <SearchBar />
        <RepoAttention
          name={repo.name || ''}
          description={repo.description || ''}
          language={repo.language || ''}
          stars={repo.stars || 0}
          forks={repo.forks || 0}
          followers={repo.followers || 0}
          attention={repo.attention || 0}
        />
        {/* <img src={logo} className={cx('app-logo')} alt="logo" /> */}
      </div>
    )
  }
}

export default App
