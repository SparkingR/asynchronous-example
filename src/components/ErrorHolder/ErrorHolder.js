import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './ErrorHolder.module.scss'

const cx = classNames.bind(styles)

const ErrorHolder = () => (
  <FontAwesomeIcon
    className={cx('error-holder')}
    icon={faExclamationTriangle}
    inverse
  />
)

export default ErrorHolder
