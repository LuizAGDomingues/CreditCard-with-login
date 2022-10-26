import { FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Envelope, Lock } from 'phosphor-react';
import { Heading } from '../components/Heading';
import { LogoCreateLogin } from '../components/LogoCreateLogin';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import CreateLoginModal from '../components/CreateLoginModal';

export function CreateLogin() {
  const history = useNavigate();
  const [accountName, setAccountName] = useState('');

  function handleCreateLogin(event: FormEvent){
    event.preventDefault();
    // history("/");
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <LogoCreateLogin />
      <header className='flex flex-col items-center'>
        <Heading />
        <Text size='lg' className='text-gray-400 mt-2'>Crie sua conta abaixo e aproveite!</Text>
      </header>
      <form onSubmit={handleCreateLogin} className='flex flex-col items-stretch w-full gap-4 max-w-sm mt-10'>
        <label htmlFor="text" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Nome</Text>
          <TextInput.Root>
            <TextInput.Input type='text' id='name' placeholder='Luiz' onChange={(e) => setAccountName()} />
          </TextInput.Root>
        </label>
        <label htmlFor="text" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sobrenome</Text>
          <TextInput.Root>
            <TextInput.Input type='text' id='lastName' placeholder='Domingues' />
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
        <CreateLoginModal accountName='Luiz' />
      </form>
    </div>
  )
}
