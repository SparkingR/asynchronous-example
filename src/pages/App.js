import React, { Component } from 'react'
import classNames from 'classnames/bind'
import logo from '../assets/logo.svg'
import styles from './App.module.scss'

const cx = classNames.bind(styles)
class App extends Component {
  render() {
    return (
      <div className={cx('app')}>
        <header className={cx('app-header')}>
          <img src={logo} className={cx('app-logo')} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={cx('app-link')}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
