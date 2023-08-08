import React from 'react'
import styles from './DashboardHeading.module.css'
const DashboardHeading = ({icon,title}) => {
  return (
    <div className='row'>
          <div className='col-sm'>
          {icon}
          <span className={styles.headings}>{title}</span>
          </div>
        </div>
  )
}

export default DashboardHeading