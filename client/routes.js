import {
  Switch,
  Route
} from 'react-router-dom'

import Homepage from 'homepage/components/app'
import Admin from 'admin/components/app'

import createAdminRoutes from 'admin/routes'
import createHomepageRoutes from 'homepage/routes'

export default (store) => {

  // create admin routes
  // do i have to create a method for generating each level of nested routes?
  // admin routes look like this:
  //  - if auth:
  //    - panel
  //      - intro
  //      - test
  //      - pictures
  //  - else:
  //    - login
  // create homepage routes
  //
  return() {
    <Switch>
    </Switch>
  }

}

