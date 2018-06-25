/* eslint-disable */
import axios from 'axios'
import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import RepoAttention from '../components/RepoAttention/RepoAttention'
// import logo from '../assets/logo.svg'
import { getAttention } from '../api'

const cx = classNames.bind(styles)
class App extends Component {
  state = { repo: {} }

  search = keyWord => {
    const keyWordTrim = keyWord.trim()
    keyWordTrim &&
      getAttention(keyWordTrim)
      .then(res => this.setState({ repo: res }))
      .catch(err => console.error('error', err))
  }

  handleClick = keyWord => {
    this.search(keyWord)
  }

  handleKeyDown = (event, keyWord) => {
    switch (event.keyCode) {
      case 13:
        this.search(keyWord)
        break
      default:
        break
    }
  }

  render() {
    const { repo } = this.state
    return (
      <div className={cx('app')}>
        <Header />
        <SearchBar
          handleClick={this.handleClick}
          handleKeyDown={this.handleKeyDown}
        />
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
