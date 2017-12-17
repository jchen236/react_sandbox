import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Interactive UX',
          category: 'Information Science'
        },
        {
          title: 'Database Architecture',
          category: 'CS'
        },
        {
          title: 'Compilers',
          category: 'CS'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
