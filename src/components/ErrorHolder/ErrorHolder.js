import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './ErrorHolder.module.scss'

const cx = classNames.bind(styles)

const ErrorHolder = ({ className }) => (
  <FontAwesomeIcon
    className={cx('error-holder', 'error-icon', className)}
    icon={faExclamationTriangle}
  />
)

ErrorHolder.propTypes = {
  className: PropTypes.string,
}

ErrorHolder.defaultProps = {
  className: '',
}

export default ErrorHolder
