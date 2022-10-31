import React, { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode;
}

function Modal(props: ModalProps) {
  return (
    <div className='bg-gray-800 w-[420px] h-[300px] flex flex-col items-center justify-between rounded border border-cyan-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      {props.children}
    </div>
  )
}
