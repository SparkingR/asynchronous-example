import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './RepoAttention.module.scss'

const cx = classNames.bind(styles)

const RepoAttention = ({
  language,
  star,
  fork,
  contributor,
  follow,
  attention,
}) => (
  <Fragment>
    <div className={cx('repo-data')}>
      <div className={cx('repo-name')}>styled-components/styled-components</div>
      <div>{language}</div>
      <div>stars : {star}</div>
      <div>forks : {fork}</div>
      <div>contributors : {contributor}</div>
      <div>
        top5 contributors{"'"} followers : {follow}
      </div>
    </div>
    <div className={cx('repo-attention')}>Attention : {attention}</div>
  </Fragment>
)

RepoAttention.propTypes = {
  language: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  fork: PropTypes.number.isRequired,
  contributor: PropTypes.number.isRequired,
  follow: PropTypes.number.isRequired,
  attention: PropTypes.number.isRequired,
}

export default RepoAttention
