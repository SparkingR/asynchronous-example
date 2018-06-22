import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './COMPONENT_NAME.module.scss'

const cx = classNames.bind(styles)

const COMPONENT_NAME = ({}) => {
  return (
    <div className={cx('component_name')}>
      COMPONENT_NAME
    </div>
  )
}

COMPONENT_NAME.propTypes = {

}
COMPONENT_NAME.defaultProps = {

}

export default COMPONENT_NAME
