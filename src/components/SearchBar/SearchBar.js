import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SearchBar.module.scss'

const cx = classNames.bind(styles)

class SearchBar extends Component {
  state = { value: '' }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <input
        type="text"
        placeholder=" Github repo name ? "
        className={cx('search-bar')}
        onChange={this.handleChange}
        value={this.state.value}
      />
    )
  }
}

export default SearchBar
