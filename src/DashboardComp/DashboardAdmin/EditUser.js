import React, { Component } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      ID: "",
      MotorcycleType: "",
      Name: "",
      UserType: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("adminCommand")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const adminCommand = doc.data();
        this.setState({
          key: doc.id,
          ID: adminCommand.ID,
          MotorcycleType: adminCommand.MotorcycleType,
          UserType: adminCommand.UserType,
          Name: adminCommand.Name,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ adminCommand: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { ID, MotorcycleType, Name, UserType } = this.state;

    const updateRef = firebase
      .firestore()
      .collection("adminCommand")
      .doc(this.state.key);
    updateRef
      .set({
        ID,
        MotorcycleType,
        Name,
        UserType,
      })
      .then((docRef) => {
        this.setState({
          key: "",
          ID: "",
          Name: "",
          MotorcycleType: "",
          UserType: "",
        });
        this.props.history.push(
          "/dashboard/admin/show/" + this.props.match.params.id
        );
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">EDIT BOARD</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link
                to={`/dashboard/admin/show/${this.state.key}`}
                class="btn btn-primary"
              >
                User List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  name="text"
                  value={this.state.Name}
                  onChange={this.onChange}
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="description">ID:</label>
                <input
                  type="number"
                  class="form-control"
                  name="id"
                  value={this.state.ID}
                  onChange={this.onChange}
                  placeholder="ID#"
                />
              </div>
              <div class="form-group">
                <label for="author">Motorcycle Type:</label>
                <input
                  type="text"
                  class="form-control"
                  name="motorcycle-type"
                  value={this.state.author}
                  onChange={this.onChange}
                  placeholder="Motorcycle Type"
                />
              </div>
              <div class="form-group">
                <label for="author">User Type:</label>
                <input
                  type="text"
                  class="form-control"
                  name="user-type"
                  value={this.state.UserType}
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

export default EditUser;
