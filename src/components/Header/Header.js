import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header = ({ className }) => (
  <div className={cx('header', className)}>
    <FontAwesomeIcon icon={faGithub} size="6x" inverse />
    <span className={cx('title')}>Github Repo Attention</span>
  </div>
)

Header.propTypes = {
  className: PropTypes.string,
}

Header.defaultProps = {
  className: '',
}

export default Header
