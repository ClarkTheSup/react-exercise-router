import React from 'react';
import { Route } from 'react-router';
import NotMatch from "./NotMatch";

class User extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    let userId = this.props.match.params.user;
    let regexp = /[a-zA-Z]+/;
    let isNotNum = regexp.test(userId);
    if(isNotNum) {
      return <Route component={NotMatch}/>
    }
    return <div>User profile page.</div>
  }
}

export default User;