import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Repo.module.scss'

const cx = classNames.bind(styles)

const Repo = ({
  htmlUrl,
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
        <a className={cx('repo-name')} href={htmlUrl}>
          {name}
        </a>
        <div className={cx('repo-description')}>{description}</div>
      </div>
      {language ? <div>{language}</div> : null}
      <div>stars : {stars}</div>
      <div>forks : {forks}</div>
      <div>
        top5 contributors{"'"} total followers : {followers}
      </div>
    </div>
    <div className={cx('repo-attention')}>Attention : {attention}</div>
  </Fragment>
)

Repo.propTypes = {
  htmlUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  attention: PropTypes.number.isRequired,
}

export default Repo
