import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { LogoSignIn } from '../components/LogoSignIn';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'luizarthur1234@gmail.com',
      password: '12345678',
    })
    setIsUserSignedIn(true);
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <LogoSignIn />
      <header className='flex flex-col items-center'>
        <Heading />
        <Text size='lg' className='text-gray-400 mt-2'>Faça login e comece a usar!</Text>
      </header>
      <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full gap-4 max-w-sm mt-10'>
        {isUserSignedIn && <Text>Login realizado!</Text>} 
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='exemplo@email.com' />
          </TextInput.Root>
        </label>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='********' />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'>Lembrar de mim</Text>
        </label>
        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <Link to="/createLogin" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</Link>
        </Text>
      </footer>
    </div>
  )
}
