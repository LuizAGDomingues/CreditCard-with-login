import React, { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode;
}

export function Modal(props: ModalProps) {
  return (
    <div className=`bg-gray-800 w-[420px] h-[300px] flex items-center rounded border border-cyan-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`>
      {props.children}
    </div>
  )
}
