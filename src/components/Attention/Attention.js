import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Attention.module.scss'

const cx = classNames.bind(styles)

const Attention = ({ attention }) => (
  <div className={cx('attention-container')}>
    <div className={cx('attention-text')}>Attention</div>
    <div className={cx('attention-number')}>{attention}</div>
  </div>
)

Attention.propTypes = {
  attention: PropTypes.string.isRequired,
}

export default Attention
