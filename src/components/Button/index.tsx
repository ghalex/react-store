import React, { useState } from 'react'
// import PropTypes from 'prop-types'

import styles from './index.module.css'

interface Props {
  onClick: () => void
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  const [count, setCount] = useState(1)
  return (
    <div
      {...rest}
      className={styles.button}
      onClick={e => (rest.onClick ? rest.onClick() : setCount(count + 1))}
    >
      {new Array(count).fill(children)}
    </div>
  )
}

export default Button
