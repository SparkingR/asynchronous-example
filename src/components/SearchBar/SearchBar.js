/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SearchBar.module.scss'

const cx = classNames.bind(styles)

const SearchBar = ({ className, inputValue, onChange, onClick, onKeyDown }) => (
  <div className={cx('search-bar', className)}>
    <input
      type="text"
      placeholder=" Github repo name ? "
      className={cx('text-field')}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={inputValue}
    />
    <button className={cx('submit-btn')} onClick={onClick}>
      <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
    </button>
  </div>
)

SearchBar.propTypes = {
  className: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
}

SearchBar.defaultProps = {
  className: '',
}

export default SearchBar
