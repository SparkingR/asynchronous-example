import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header = () => (
  <div className={cx('header')}>
    <FontAwesomeIcon className={cx('logo')} icon={faGithub} size="6x" inverse />
    <span className={cx('title')}>Github Repo Attention</span>
  </div>
)

export default Header
