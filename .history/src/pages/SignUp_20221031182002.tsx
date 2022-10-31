import { FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Envelope, Lock } from 'phosphor-react';
import { Heading } from '../components/Heading';
import { LogoSignUp } from '../components/LogoSignUp';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { validateSignUpForm } from '../services/validationFunctions';
import { createUser } from '../services/firebase';

export function SignUp() {
  const history = useNavigate();
  const [enableModalCreateUser, setEnableModalCreateUser] = useState(false);
  const [enableModalError, setEnableModalError] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSignUp(event: FormEvent){
    event.preventDefault();
    if (validateSignUpForm({accountName, email, password, confirmPassword})){
      setEnableModalCreateUser(true);
      createUser({email, password});
    } else {
      setEnableModalError(true);
    }
  }

  function handleBackToSignIn(){
    history("/");
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <LogoSignUp />
      <header className='flex flex-col items-center'>
        <Heading />
        <Text size='lg' className='text-gray-400 mt-2'>Crie sua conta abaixo e aproveite!</Text>
      </header>
      <form onSubmit={handleSignUp} className='flex flex-col items-stretch w-full gap-4 max-w-sm mt-10'>
        <label htmlFor="text" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Nome</Text>
          <TextInput.Root>
            <TextInput.Input type='text' id='name' placeholder='Luiz' onChange={(e) => setAccountName(e.target.value)}/>
          </TextInput.Root>
        </label>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='exemplo@email.com' onChange={(e) => setEmail(e.target.value)}/>
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Senha de 8 dígitos</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='********' onChange={(e) => setPassword(e.target.value)}/>
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Repita sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='confirmPassword' placeholder='********' onChange={(e) => setConfirmPassword(e.target.value)}/>
          </TextInput.Root>
        </label>
        <Button type='submit' className='mt-4'>Criar sua conta</Button>
      </form>
      { enableModalCreateUser ?
        <Modal>
          <Text size='lg' className='mt-3'>Conta criada com sucesso!</Text>
          <Text>Seja bem vindo {accountName}</Text>
          <button type='button' onClick={handleBackToSignIn} className='mb-5 py-2 px-3 bg-cyan-300 rounded font-semibold text-black text-sm transition-colors hover:ring-2 focus:ring-2 ring-white'>Continuar</button>
        </Modal>
        : null}
      { enableModalError ?
        <Modal>
          <Text>Preencha todos os campos corretamente</Text>
          <button type='button' onClick={(e) => setEnableModalError(false)} className='mb-5 py-2 px-3 bg-cyan-300 rounded font-semibold text-black text-sm transition-colors hover:ring-2 focus:ring-2 ring-white'>Ok</button>
        </Modal>
        : null
      }
    </div>
  )
}
