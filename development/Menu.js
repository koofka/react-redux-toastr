import React from 'react';
import {toastr} from './../src/';
import loremIpsum from 'lorem-ipsum';
import Avatar from './Avatar';
import messageText from './messageText';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type, avatar) {
    let options = {};

    let message = loremIpsum({count: 1});

    if (avatar) {
      options.icon = (<Avatar />);
      options.progressBar = true;
    }

    if (type == 'message') {
      message = loremIpsum({count: 19});
      options.component = () => (<div>hej</div>);
    }

    if (type == 'light') {
      const icon = 'warning';
      options.icon = icon;
      options.status = icon;
      options.progressBar = true;
      options.component = () => (<div>hej</div>);
    }

    toastr[type](loremIpsum(), message, options);
  }

  render() {
    return (
        <ul className="menu">
          <li className="success" onClick={() => {
            toastr.success(
              'In the beginning was the word',
              'and the Word was with God, and the Word was God...',
              {
                timeOut: 10000,
                progressBar: true
              }
            );
          }}>
            <span className="icon-check"/>
          </li>
          <li className="warning" onClick={() => this.handleClick('warning')}>
            <span className="icon-exclamation-triangle"/>
          </li>
          <li className="info" onClick={() => {
            toastr.info('Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through Me.', {
              progressBar: true,
              timeOut: 10000
            });
          }}>
            <span className="icon-info-circle"/>
          </li>
          <li className="error" onClick={() => this.handleClick('error')}>
            <span  className="icon-bug"/>
          </li>
          <li className="success" onClick={() => {
            toastr.success(
              'For God so loved the world',
              'that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life. - John 3:16',
              {
                icon: (<Avatar />),
                timeOut: 0
              });
          }}>
            <span className="icon-check"/>
            <span className="icon-person"/>
          </li>
          <li className="light" onClick={() => this.handleClick('light')}>
            <span className="icon-light"/>
          </li>
          <li className="message" onClick={() => {
            toastr.message('What can we do without love', messageText);
          }}>
            <span className="icon-email-envelope"/>
          </li>
          <li className="message" onClick={() => toastr.confirm('The confirm message')}>
            <span className="icon-check-5"/>
          </li>
      </ul>
    );
  }
}
