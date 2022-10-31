import React, { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode;
}

function Modal(props: ModalProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Modal