/* eslint-disable no-bitwise */
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { ToastContext } from '@context'
import Toast from './Toast.component'

const StlyedToastWrapper = styled.div`
  position: fixed;
  padding: 0;
  width: 10rem;
  box-sizing: border-box;
  color: rgba(96, 96, 89, 1);
  top: 1rem;
  right: 1.5rem;
`

const randomInt = () => (Math.random() * 46656) | 0
const strGen = num => `000 ${num.toString(36)}`.slice(-3)

const generateUEID = () => strGen(randomInt()) + strGen(randomInt())

function withToast(Component) {
  return function _withToast(props) {
    const [toasts, setToasts] = useState([])

    const add = content => {
      const id = generateUEID()
      setToasts([...toasts, { id, content }])
    }

    const remove = id => setToasts(toasts.filter(t => t.id !== id))

    return (
      <ToastContext.Provider value={{ add, remove }}>
        <Component {...props} />

        {createPortal(
          <StlyedToastWrapper>
            {toasts &&
              toasts.map(({ id, content }) => (
                <Toast key={id} remove={() => remove(id)}>
                  {content}
                </Toast>
              ))}
          </StlyedToastWrapper>,
          document.body
        )}
      </ToastContext.Provider>
    )
  }
}

export default withToast
