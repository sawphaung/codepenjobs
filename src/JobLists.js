import React, { Component } from 'react';
import axios from 'axios';
import JobLink from './JobLink';

export default class JobLists extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get(`https://codepen.io/jobs.json`)
      .then(res => {
        const data = res.data.jobs;
        this.setState({ data });
      })
      .catch(error => console.log(error));
  }
  render() {
    const { data } = this.state;
    return (
      <div className='card-container'>
        {data.map(item => (
          <div className='card' key={item.hashid}>
            <p>
              Job Title: <span>{item.title}</span>{' '}
            </p>
            <p>
              Location: <span>{item.location}</span>{' '}
            </p>
            <p>
              Company Name: <span>{item.company_name}</span>{' '}
            </p>
            <p>
              Feature Text:{' '}
              <span>
                {!item.featured_text && 'No'} {item.featured_text}
              </span>
            </p>
            <JobLink href={item.url} text='Job Post &rarr;' target='_blank' />
          </div>
        ))}
      </div>
    );
  }
}
