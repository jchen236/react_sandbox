import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid'
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Interactive UX',
        category: 'Information Science'
      },
      {
        id: uuid.v4(),
        title: 'Database Architecture',
        category: 'CS'
      },
      {
        id: uuid.v4(),
        title: 'Compilers',
        category: 'CS'
      }
    ]});
  }

  // Updates the state with a new project
  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }
  render() {
    return (
      <div className="App">
        My App
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
