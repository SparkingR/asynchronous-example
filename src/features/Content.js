import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import Repo from '../components/Repo/Repo'
import Loader from '../components/Loader/Loader'
import ErrorHolder from '../components/ErrorHolder/ErrorHolder'
import NoMatchHolder from '../components/NoMatchHolder/NoMatchHolder'

const cx = classNames.bind(styles)

const Content = ({ className, requestState, ...repoData }) => {
  let main
  switch (requestState) {
    case 'success':
      main = <Repo {...repoData} />
      break
    case 'loading':
      main = <Loader />
      break
    case 'error':
      main = <ErrorHolder />
      break
    case 'nomatch':
      main = <NoMatchHolder />
      break
    default:
      main = <div />
  }
  return <div className={cx('content', className)}>{main}</div>
}

Content.propTypes = {
  className: PropTypes.string,
  requestState: PropTypes.oneOf([
    'initial',
    'loading',
    'success',
    'error',
    'nomatch',
  ]).isRequired,
  htmlUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  stars: PropTypes.number,
  forks: PropTypes.number,
  followers: PropTypes.number,
  attention: PropTypes.number,
}

Content.defaultProps = {
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

export default Content
