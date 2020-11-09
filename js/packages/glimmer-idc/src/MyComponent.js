import './App.css';

import Component from '@glimmer/component';
import { createTemplate, setComponentTemplate } from '@glimmer/core';

import logo from './logo.svg';

export default class MyComponent extends Component {
  logo = logo;
}

setComponentTemplate(
  createTemplate(`
    <div id="intro">
      <img src={{this.logo}}/>

      <h1>hello, glimmer 2!</h1>
      <h3>
        you can get started by editing <code>src/App.js</code>,
        and run tests by visiting <a href="./tests">/tests</a>
      </h3>
    </div>
  `),
  MyComponent
);