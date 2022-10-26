import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';

function CreateLoginModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='mt-4'>
        <Button type='submit'>Criar sua conta</Button>
      </Dialog.Trigger>
      <Dialog.Portal></Dialog.Portal></Dialog.Portal>
      <Dialog.Content className='bg-gray-800 w-96 h-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

      </Dialog.Content>
    </Dialog.Root>
  )
}

export default CreateLoginModal