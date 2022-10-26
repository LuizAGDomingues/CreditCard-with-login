import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';

function CreateLoginModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button type='submit' className='mt-4'>Criar sua conta</Button>
      </Dialog.Trigger>
    </Dialog.Root>
  )
}

// 

export default CreateLoginModal