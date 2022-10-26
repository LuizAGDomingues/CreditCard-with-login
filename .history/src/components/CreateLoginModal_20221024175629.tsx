import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';

function CreateLoginModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button type='submit' className='mt-4'>Criar sua conta</Button>
      </Dialog.Trigger>
      <Dialog.Content className='bg-gray-800 w-64 h-64'>

      </Dialog.Content>
    </Dialog.Root>
  )
}

export default CreateLoginModal