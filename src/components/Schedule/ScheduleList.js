import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import firebase from "../../firebase";

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("schedule");
    this.unsubscribe = null;
    this.state = {
      schedule: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const schedule = [];
    querySnapshot.forEach((doc) => {
      const { Date, Description, Title } = doc.data();
      schedule.push({
        key: doc.id,
        Date,
        Description,
        Title,
      });
    });
    this.setState({
      schedule,
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
            <h3 class="panel-title">Schedule List</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/dashboard/admin/schedule/add">Add Schedule</Link>
            </h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.schedule.map((board) => (
                  <tr>
                    <td>
                      <Link to={`/dashboard/admin/schedule/show/${board.key}`}>
                        {board.Title}
                      </Link>
                    </td>
                    <td>{board.Date}</td>
                    <td>{board.Description}</td>
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

export default ScheduleList;
