import React, { Component } from "react";
import firebase from "../../firebase";
import { Link, useParams } from "react-router-dom";

class ShowUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminCommand: {},
      key: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("adminCommand")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          adminCommand: doc.data(),
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
      .collection("adminCommand")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document Successfully Deleted!");
        this.props.history.push("/dashboard/admin/list");
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
              <Link to="/">User List</Link>
            </h4>
            <h3 class="panel-title">{this.state.adminCommand.Name}</h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>ID:</dt>
              <dd>{this.state.adminCommand.ID}</dd>
              <dt>Motorcycle Type:</dt>
              <dd>{this.state.adminCommand.MotorcycleType}</dd>
              <dt>User Type:</dt>
              <dd>{this.state.adminCommand.UserType}</dd>
            </dl>
            <Link
              to={`/dashboard/admin/edit/${this.state.key}`}
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

export default ShowUser;
