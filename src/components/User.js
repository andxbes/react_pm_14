import classes from './User.module.css';
import { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    console.info('user constructor');
  }

  componentWillUnmount() {
    console.info('User will unmount', this.props.name);
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
