import React, { useEffect, useState } from 'react'

const NoSSR = ({ children, onSSR = <React.Fragment /> }) => {
  const [canRender, setCanRender] = useState(false)
  useEffect(
    () => {
      if (!canRender) {
        setCanRender(true)
      }
    },
    [canRender]
  )
  return canRender ? children : onSSR
}

export default NoSSR
