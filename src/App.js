import React, { Component } from 'react';
import './App.css';

import Title from './Title/'
import Control from './Control/'
import Form from './Form/'
import List from './List/'

import task from './mocks/tasks.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: task.mockItems,
      isShowForm: false,
      strSearch: ''
    }

    this.handleToogleForm = this.handleToogleForm.bind(this);
    // this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleToogleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    })
  }

  handleSubmitSearch(strSearch) {
    this.setState({
      strSearch: strSearch
    });
  }

  render() {
    const strSearch = this.state.strSearch;
    let isShowForm = this.state.isShowForm;

    const itemsOrigin = this.state.items;
    let items = [];

    if (strSearch.length > 0) {
      itemsOrigin.forEach((item) => {
        if(item.name.toLowerCase().indexOf(strSearch) !== -1) {
          items.push(item);
        }
      });
    } else {
      items = itemsOrigin;
    }

    return (
      <div className="App">
        <div className="container">
          <Title />
          <Control 
            strSearch={this.state.strSearch} 
            isShowForm={isShowForm} 
            onClickAdd={this.handleToogleForm}
            handleSubmitSearch={(value) => {
              this.handleSubmitSearch(value)
            }} />
          { (isShowForm) 
            ? <Form onClickAdd={this.handleToogleForm} />
            : ''
          }
          <List items={items} />
        </div>
      </div>
    );
  }
}

export default App;
