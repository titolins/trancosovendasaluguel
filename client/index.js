import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { tvaApp } from 'client/reducers';
import { App } from 'client';

import { module } from '@hot';

const $ = React.createElement;

let store = createStore(tvaApp);
let container = $(Provider, {store:store}, $(App, null, null));

export let component = ReactDOM.render(
  container,
  document.getElementById('container')
);

if (module)
  component.setState(module.component.state);
