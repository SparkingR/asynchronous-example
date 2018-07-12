import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './NoMatchHolder.module.scss'

const cx = classNames.bind(styles)

const NoMatchHolder = ({ className }) => (
  <div className={cx('no-match-holder', className)}>
    No Matched Result.<br />Search Again!
  </div>
)

NoMatchHolder.propTypes = {
  className: PropTypes.string,
}

NoMatchHolder.defaultProps = {
  className: '',
}

export default NoMatchHolder
