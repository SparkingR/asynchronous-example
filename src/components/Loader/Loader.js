import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Loader.module.scss'

const cx = classNames.bind(styles)

const Loader = ({ className }) => <div className={cx('loader', className)} />

Loader.propTypes = {
  className: PropTypes.string,
}

Loader.defaultProps = {
  className: '',
}

export default Loader
