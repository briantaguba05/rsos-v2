import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import firebase from "../../firebase";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("adminCommand");
    this.unsubscribe = null;
    this.state = {
      adminCommand: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const adminCommand = [];
    querySnapshot.forEach((doc) => {
      const { ID, MotorcycleType, Name, UserType } = doc.data();
      adminCommand.push({
        key: doc.id,
        ID,
        MotorcycleType,
        Name,
        UserType,
      });
    });
    this.setState({
      adminCommand,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Member List</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/dashboard/admin/create">Add Member</Link>
            </h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Motorcycle Type</th>
                  <th>Name</th>
                  <th>User Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.adminCommand.map((board) => (
                  <tr>
                    <td>
                      <Link to={`/dashboard/admin/show/${board.key}`}>
                        {board.ID}
                      </Link>
                    </td>
                    <td>{board.MotorcycleType}</td>
                    <td>{board.Name}</td>
                    <td>{board.UserType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUser;
