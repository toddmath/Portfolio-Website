/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import { StyledToast, StyledToastText, StyledToastCloseBtn } from './Toast.styles'

const Toast = ({ children, remove }) => {
  const removeRef = useRef()
  removeRef.current = remove

  useEffect(() => {
    const duration = 2500
    const id = setTimeout(() => removeRef.current(), duration)
    return () => clearTimeout(id)
  }, [])

  return (
    <StyledToast>
      <StyledToastText>{children}</StyledToastText>
      <StyledToastCloseBtn onClick={remove}>&times;</StyledToastCloseBtn>
    </StyledToast>
  )
}

export default Toast
