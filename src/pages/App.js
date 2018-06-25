import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import Repo from '../components/Repo/Repo'
import { getAttention } from '../api'

const cx = classNames.bind(styles)
class App extends Component {
  state = {
    repo: {},
    inputValue: '',
    requestState: 'initial',
  }

  handleChange = event => {
    const newValue = event.target.value
    this.setState(() => ({
      inputValue: newValue,
    }))
  }

  searchRepo = () => {
    const keyWord = this.state.inputValue
    const keyWordTrim = keyWord.trim()
    if (keyWordTrim) {
      this.setState(() => ({
        requestState: 'loading',
      }))

      getAttention(keyWordTrim)
        .then(res =>
          this.setState(() => ({ repo: res, requestState: 'success' }))
        )
        .catch(err => {
          console.error('error', err)
          this.setState(() => ({ requestState: 'error' }))
        })
    }
  }

  handleClick = () => {
    this.searchRepo()
  }

  handleKeyDown = event => {
    switch (event.keyCode) {
      case 13:
        this.searchRepo()
        break
      default:
        break
    }
  }

  render() {
    const { repo, inputValue, requestState } = this.state
    return (
      <div className={cx('app')}>
        <Header />
        <SearchBar
          inputValue={inputValue}
          onChange={this.handleChange}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
        />
        <Repo
          requestState={requestState}
          name={repo.name || ''}
          description={repo.description || ''}
          language={repo.language || ''}
          stars={repo.stars || 0}
          forks={repo.forks || 0}
          followers={repo.followers || 0}
          attention={repo.attention || 0}
        />
      </div>
    )
  }
}

export default App
