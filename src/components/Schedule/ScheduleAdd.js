import React, { useState } from "react";
import firebase from "../../firebase";

const Schedule = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [userType, setUserType] = useState("");

  const db = firebase.firestore();

  const confirm = (e) => {
    e.preventDefault();

    db.collection("schedule")
      .add({
        Title: title,
        Date: date,
        Description: description,
      })
      .then((docRef) => {
        this.props.history.push("/dashboard/admin");
        alert("Data Successfully Submitted");
      })

      .catch((error) => {
        console.error("Error Adding Data: ", error);
      });
  };

  return (
    <div>
      <center>
        <h3>ADD RIDE SCHEDULE</h3>
        <form
          style={{ marginTop: "50px", marginBottom: "100px" }}
          onSubmit={(event) => {
            confirm(event);
          }}
        >
          <input
            type="text"
            placeholder="Ride Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Ride Description"
            size="50"
            height="100"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default Schedule;
