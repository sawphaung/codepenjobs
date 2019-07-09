import React from 'react';
import './App.css';
import Header from './Header';
import JobLists from './JobLists';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <JobLists />
        </div>
      </div>
    );
  }
}

export default App;
