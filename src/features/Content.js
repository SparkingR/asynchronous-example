import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import Repo from '../components/Repo/Repo'
import Loader from '../components/Loader/Loader'
import ErrorHolder from '../components/ErrorHolder/ErrorHolder'

const cx = classNames.bind(styles)

const Content = ({ requestState, ...repoData }) => {
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
    default:
      main = <div />
      break
  }
  return <div className={cx('content')}>{main}</div>
}

Content.propTypes = {
  requestState: PropTypes.string.isRequired,
}

export default Content
