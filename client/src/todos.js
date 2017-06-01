import React from 'react'

import './todos.less'

export default class Todos extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <ul className="todoList">
          <h2>Todos</h2>
          <li>Add server side rendering</li>
          <li className="done">Add react router support</li>
          <li className="done">Add less support</li>
        </ul>
      </div>
    )
  }
}
