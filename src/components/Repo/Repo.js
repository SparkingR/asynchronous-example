import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Repo.module.scss'

const cx = classNames.bind(styles)

const Repo = ({
  requestState,
  name,
  description,
  language,
  stars,
  forks,
  followers,
  attention,
}) => {
  let content
  switch (requestState) {
    case 'success':
      content = (
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
      break

    case 'loading':
      content = <div className={cx('loader')} />
      break

    case 'error':
      content = (
        <FontAwesomeIcon
          className={cx('error-icon')}
          icon={faExclamationTriangle}
          inverse
        />
      )
      break

    default:
      content = <div />
      break
  }
  return <div className={cx('repo')}>{content}</div>
}

Repo.propTypes = {
  requestState: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  attention: PropTypes.number.isRequired,
}

export default Repo
