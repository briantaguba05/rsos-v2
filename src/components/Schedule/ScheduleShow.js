import React, { Component } from "react";
import firebase from "../../firebase";
import { Link, useParams } from "react-router-dom";

class ScheduleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {},
      key: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("schedule")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          schedule: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        console.log("No Document Exists!");
      }
    });
  }

  delete(id) {
    firebase
      .firestore()
      .collection("schedule")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document Successfully Deleted!");
        this.props.history.push("/dashboard/admin/schedule/list");
      })
      .catch((error) => {
        console.error("Error Removing Document: ", error);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>
              <Link to="/">Schedule List</Link>
            </h4>
            <h3 class="panel-title">{this.state.schedule.Title}</h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Date:</dt>
              <dd>{this.state.schedule.Date}</dd>
              <dt>Description:</dt>
              <dd>{this.state.schedule.Description}</dd>
            </dl>
            <Link
              to={`/dashboard/admin/schedule/edit/${this.state.key}`}
              class="btn btn-success"
            >
              Edit
            </Link>
            &nbsp;
            <button
              onClick={this.delete.bind(this, this.state.key)}
              class="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleShow;
