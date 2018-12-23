import React, { Component } from 'react';
import {users} from './mock-data';
import Users from './Users';

class UserDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
        users:users
    };
  }

  delUserById = (userId) => {
    let newUsers = this.state.users.slice(0);
    let index = newUsers.findIndex(user => userId === user.id);
    if(index > -1){
      newUsers.splice(index, 1);
      this.setState({users: newUsers});
    }
  }

  render() {
    return (
      <div className='grid'>
        {this.state.users.map(user =>
          <Users
            key={`user-${user.id}`}
            id={user.id}
            uname={user.name}
            phone={user.phone}
            delUser={this.delUserById}/>)}
      </div>
    );
  }
}

export default UserDashboard;
