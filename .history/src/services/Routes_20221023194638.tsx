import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { CreateLogin } from '../pages/CreateLogin'
import { CreditCard } from '../pages/CreditCard'
import { SignIn } from '../pages/SignIn'

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<SignIn/>} />
      <Route path="/createLogin" element={<CreateLogin/>} />
    </Switch>
  )
}
