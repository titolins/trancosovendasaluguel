import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p className="lead">
          This is a simple boiler plate app for easy starting a web application using a golang backend with a react/redux frontend.
          Technologies/applications/libraries/frameworks used in this includes, but may not be limited to: jspm, react, redux, es6, bootstrap, less, golang, go-zoo/bone.
          Thanks for everyone involved in the development of the mentioned applications. My aim here is to simply jumpstart a simple web application by putting all of these great libraries together.
        </p>
        <p>
          Please feel free to browse my repository and contribute to it in any manner you may see fit.
        </p>
        <a className="button btn-lg btn-primary" href="http://github.com/titolins/go_react_starter">Go to repository</a>
      </div>
    )
  }
}

