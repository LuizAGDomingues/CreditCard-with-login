import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';

interface CreateLoginModalProps{
  accountName: string;
}

function CreateLoginModal({accountName}: CreateLoginModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className='mt-4'>
        <Button type='submit'>Criar sua conta</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content className='bg-gray-800 w-[420px] h-[300px] rounded shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Dialog.Title>Conta criada com sucesso!</Dialog.Title>
            <Dialog.Description>Seja bem vindo {accountName}</Dialog.Description>
            <Dialog.Close>
              <button>OK!</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CreateLoginModal