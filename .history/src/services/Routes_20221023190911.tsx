import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  )
}
