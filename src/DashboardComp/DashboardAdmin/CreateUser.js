import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("adminCommand");
    this.state = {
      ID: "",
      Name: "",
      MotorcycleType: "",
      UserType: "",
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { ID, Name, MotorcycleType, UserType } = this.state;

    this.ref
      .add({
        ID,
        Name,
        MotorcycleType,
        UserType,
      })
      .then((docRef) => {
        this.setState({
          ID: "",
          Name: "",
          MotorcycleType: "",
          UserType: "",
        });
        this.props.history.push("/dashboard/admin/list");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { ID, MotorcycleType, Name, UserType } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">ADD USER</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/dashboard/admin/list" class="btn btn-primary">
                USER LIST
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">ID:</label>
                <input
                  type="number"
                  class="form-control"
                  name="title"
                  onChange={this.onChange}
                  placeholder="ID#"
                />
              </div>
              <div class="form-group">
                <label for="description">Name:</label>
                <textArea
                  class="form-control"
                  name="description"
                  onChange={this.onChange}
                  placeholder="Name"
                  cols="80"
                  rows="3"
                >
                  {Name}
                </textArea>
              </div>
              <div class="form-group">
                <label for="author">Motorcycle Type:</label>
                <input
                  type="text"
                  class="form-control"
                  name="author"
                  onChange={this.onChange}
                  placeholder="Motorcycle Type/Brand"
                />
              </div>
              <div class="form-group">
                <label for="author">User Type:</label>
                <input
                  type="number"
                  class="form-control"
                  name="author"
                  onChange={this.onChange}
                  placeholder="User Type"
                />
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
