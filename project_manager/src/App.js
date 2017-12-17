import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid'
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos'
import $ from 'jquery'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }


  getTodos() {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({
            todos: data
          }, function() {
            console.log(this.state);
          });
        }.bind(this),
        error: function(xjr, status, err) {
          console.log(err);
        }
      });
  }

  getProjects() {
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
  componentWillMount() {
    this.getProjects(); 
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  // Updates the state with a new project
  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    });
  }
  render() {
    return (
      <div className="App">
        My App
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete = {this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
