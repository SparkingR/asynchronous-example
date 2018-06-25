/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SearchBar.module.scss'

const cx = classNames.bind(styles)

class SearchBar extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
  }

  state = { value: '' }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    const keyWord = this.state.value
    const { handleClick, handleKeyDown } = this.props
    return (
      <div className={cx('search-bar')}>
        <input
          type="text"
          placeholder=" Github repo name ? "
          className={cx('text-field')}
          onChange={this.handleChange}
          onKeyDown={e => handleKeyDown(e, keyWord)}
          value={this.state.value}
        />
        <div
          className={cx('submit-btn')}
          onClick={() => handleClick(keyWord)}
          role="button"
          tabIndex="0">
          <FontAwesomeIcon className={cx('icon')} icon={faSearch} inverse />
        </div>
      </div>
    )
  }
}

export default SearchBar
