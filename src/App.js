import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PagedrawSidebar from './pagedraw/sidebar';
import PagedrawPost from './pagedraw/post';
import PagedrawContainer from './pagedraw/container';

class App extends Component {
  render() {
    return (
      <PagedrawContainer onChangeRoute={() => { }}
        posts={[
          {
            content: 'Hello',
            name: 'Josh',
            date: '4/1'
          },
          {
            content: 'Bye',
            name: 'Tom',
            date: '4/1'
          },
          {
            content: 'Yes',
            name: 'Felicia',
            date: '4/1'
          },
          {
            content: 'Hello',
            name: 'Josh',
            date: '4/1'
          }
        ]} />
    );
  }
}

export default App;
