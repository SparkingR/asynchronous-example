import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { isEmpty } from 'lodash'
import styles from './App.module.scss'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import Content from '../features/Content'
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
          this.setState(() => ({
            repo: res,
            requestState: isEmpty(res) ? 'nomatch' : 'success',
          }))
        )
        .catch(err => {
          console.error('Error', err.config)
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
    }
  }

  render() {
    const { repo, inputValue, requestState } = this.state
    return (
      <div className={cx('app')}>
        <Header
          className={cx({ 'hearder-offset': requestState === 'initial' })}
        />
        <SearchBar
          className={cx({ 'search-bar-offset': requestState === 'initial' })}
          inputValue={inputValue}
          onChange={this.handleChange}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
        />
        <Content
          requestState={requestState}
          htmlUrl={repo.htmlUrl}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          stars={repo.stars}
          forks={repo.forks}
          followers={repo.followers}
          attention={repo.attention}
        />
      </div>
    )
  }
}

export default App
