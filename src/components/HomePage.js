import React, { Component } from 'react';
import Clock from './Clock';
import './home.scss';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      clock: [
        {
          name: 'America',
          date: new Date(),
          timeZone: 'America/New_York',
          highlighted: false,
        },
        {
          name: 'UK',
          date: new Date(),
          timeZone: 'Europe/London',
          highlighted: true,
        },
        {
          name: 'Australia',
          date: new Date(),
          timeZone: 'Australia/Sydney',
          highlighted: false,
        }
      ]
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    for (var i = 0; i < this.state.clock.length; i++) {
      const { clock } = this.state;
      clock[i].date = new Date();
      this.setState({ clock });
  }
  }

  render() {
    return (
      <div>
        {this.state.clock.map((cardData, index) => {
          return (<Clock
            key={index}
            index={index}
            date={cardData.date}
            timeZone={cardData.timeZone}
            name={cardData.name}
            highlighted={cardData.highlighted}
          />)
        })
        }  
      </div>     
    );
  }
}

