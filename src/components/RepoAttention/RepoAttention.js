import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './RepoAttention.module.scss'

const cx = classNames.bind(styles)

const RepoAttention = ({
  name,
  description,
  language,
  stars,
  forks,
  followers,
  attention,
}) => (
  <Fragment>
    <div className={cx('repo-data')}>
      <div className={cx('repo-text')}>
        <div className={cx('repo-name')}>{name}</div>
        <div className={cx('repo-description')}>{description}</div>
      </div>
      <div>{language}</div>
      <div>stars : {stars}</div>
      <div>forks : {forks}</div>
      <div>
        top5 contributors{"'"} total followers : {followers}
      </div>
    </div>
    <div className={cx('repo-attention')}>Attention : {attention}</div>
  </Fragment>
)

RepoAttention.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  attention: PropTypes.number.isRequired,
}

export default RepoAttention
