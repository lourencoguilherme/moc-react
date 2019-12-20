import React, { Component } from 'react';
import { CarService } from './service/CarService';

export default class App extends Component {
  
  constructor() {
    super();
    this.carservice = new CarService();
  }

  componentDidMount() {
    this.carservice.getTeste()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        </header>
      </div>
    )
  }
}
