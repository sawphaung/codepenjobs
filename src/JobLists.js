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
              <i class='fas fa-briefcase' /> <span>{item.title}</span>{' '}
            </p>
            <p>
              <i class='fas fa-map-marked-alt fa-sm' />
              <span>
                {!item.location && 'Not Posted'}
                {item.location}
              </span>{' '}
            </p>
            <p>
              <i class='fas fa-building fa-sm' />{' '}
              <span>{item.company_name}</span>{' '}
            </p>
            <p>
              <i class='fas fa-info-circle fa-sm' />{' '}
              <span>
                {!item.featured_text && 'Not in Description'}{' '}
                {item.featured_text}
              </span>
            </p>
            <JobLink href={item.url} text='Job Post &rarr;' target='_blank' />
          </div>
        ))}
      </div>
    );
  }
}
