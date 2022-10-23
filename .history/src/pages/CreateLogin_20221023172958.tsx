import { Envelope, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { LogoCreateLogin } from '../components/LogoCreateLogin';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

export function CreateLogin() {


  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <LogoCreateLogin />
      <header className='flex flex-col items-center'>
        <Heading />
        <Text size='lg' className='text-gray-400 mt-2'>Crie sua conta abaixo e aproveite!</Text>
      </header>
      <form className='flex flex-col items-stretch w-full gap-4 max-w-sm mt-10'>
        <label htmlFor="name" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Nome</Text>
          <TextInput.Root>
            <TextInput.Input type='name' id='name' placeholder='Luiz' />
          </TextInput.Root>
        </label>
        <label htmlFor="lastName" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sobrenome</Text>
          <TextInput.Root>
            <TextInput.Input type='lastName' id='lastName' placeholder='Domingues' />
          </TextInput.Root>
        </label>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='exemplo@email.com' />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='********' />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Repita sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='rePassword' placeholder='********' />
          </TextInput.Root>
        </label>
        <Button type='submit' className='mt-4'>Criar sua conta</Button>
      </form>
    </div>
  )
}
