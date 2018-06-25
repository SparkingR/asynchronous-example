/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SearchBar.module.scss'

const cx = classNames.bind(styles)

const SearchBar = ({ inputValue, onChange, onClick, onKeyDown }) => (
  <div className={cx('search-bar')}>
    <input
      type="text"
      placeholder=" Github repo name ? "
      className={cx('text-field')}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={inputValue}
    />
    <button className={cx('submit-btn')} onClick={onClick}>
      <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} inverse />
    </button>
  </div>
)

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
}

export default SearchBar
