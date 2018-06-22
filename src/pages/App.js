import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import RepoAttention from '../components/RepoAttention/RepoAttention'
// import logo from '../assets/logo.svg'

const cx = classNames.bind(styles)
class App extends Component {
  render() {
    return (
      <div className={cx('app')}>
        <Header />
        <SearchBar />
        <RepoAttention
          language="Javascript"
          star={12345}
          fork={324}
          contributor={3242}
          follow={989}
          attention="123124"
        />
        {/* <img src={logo} className={cx('app-logo')} alt="logo" /> */}
      </div>
    )
  }
}

export default App
