import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom'

import Intro from 'admin/components/intro'

export default class AdminPanel extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Intro} />
      </Switch>
    )
  }
}
