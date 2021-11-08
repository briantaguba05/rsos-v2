import React, { Component } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

class ScheduleEdit extends Component {
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
      .collection("schedule")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const schedule = doc.data();
        this.setState({
          key: doc.id,
          Title: schedule.Title,
          Date: schedule.Date,
          Description: schedule.Description,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ schedule: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { Title, Date, Description } = this.state;

    const updateRef = firebase
      .firestore()
      .collection("schedule")
      .doc(this.state.key);
    updateRef
      .set({
        Title,
        Date,
        Description,
      })
      .then((docRef) => {
        this.setState({
          key: "",
          Title: "",
          Date: "",
          Description: "",
        });
        this.props.history.push(
          "/dashboard/admin/schedule/list" + this.props.match.params.id
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
            <h3 class="panel-title">EDIT SCHEDULE</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link
                to={`/dashboard/admin/schedule/list/${this.state.key}`}
                class="btn btn-primary"
              >
                User List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  name="Title"
                  value={this.state.Title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>
              <div class="form-group">
                <label for="description">Date:</label>
                <input
                  type="date"
                  class="form-control"
                  name="date"
                  value={this.state.Date}
                  onChange={this.onChange}
                  placeholder="Date"
                />
              </div>
              <div class="form-group">
                <label for="author">Description:</label>
                <input
                  type="text"
                  class="form-control"
                  name="description"
                  size="50"
                  value={this.state.Description}
                  onChange={this.onChange}
                  placeholder="Description"
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

export default ScheduleEdit;
