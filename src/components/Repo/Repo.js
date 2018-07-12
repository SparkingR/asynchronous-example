import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Repo.module.scss'

const cx = classNames.bind(styles)

const Repo = ({
  className,
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
    <div className={cx('repo-data', className)}>
      <div className={cx('repo-text')}>
        <a className={cx('repo-name')} href={htmlUrl}>
          {name}
        </a>
        <div className={cx('repo-description')}>{description}</div>
      </div>
      {language && <div>{language}</div>}
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
  className: PropTypes.string,
  htmlUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  stars: PropTypes.number,
  forks: PropTypes.number,
  followers: PropTypes.number,
  attention: PropTypes.number,
}

Repo.defaultProps = {
  className: '',
  htmlUrl: '',
  name: '',
  description: '',
  language: '',
  stars: 0,
  forks: 0,
  followers: 0,
  attention: 0,
}

export default Repo
