import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './COMPONENT_NAME.scss'

const cx = classNames.bind(styles)

class COMPONENT_NAME extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    return (
      <div className={cx('component_name')}>
        COMPONENT_NAME
      </div>
    )
  }
}

export default COMPONENT_NAME
