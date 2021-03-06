import React, { useState } from "react";
import firebase from "../../firebase";

const AdminConfirmUser = () => {
  const [id, setId] = useState("");
  const [motorcycleType, setMotorcycleType] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");

  const db = firebase.firestore();

  const confirm = (e) => {
    e.preventDefault();

    db.collection("adminCommand")
      .add({
        ID: id,
        MotorcycleType: motorcycleType,
        Name: name,
        UserType: userType,
      })
      .then((docRef) => {
        this.props.history.push("/dashboard/admin/list");
        alert("Data Successfully Submitted");
      })

      .catch((error) => {
        console.error("Error Adding Data: ", error);
      });
  };

  return (
    <div>
      <center>
        <h3>SET USER DATA</h3>
        <form
          style={{ marginTop: "50px", marginBottom: "100px" }}
          onSubmit={(event) => {
            confirm(event);
          }}
        >
          <input
            type="number"
            placeholder="ID Number"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Motorcycle Type/Brand/Model"
            onChange={(e) => {
              setMotorcycleType(e.target.value);
            }}
          />
          <br />
          <br />

          <input
            type="number"
            placeholder="User Type (1,2,3)"
            onChange={(e) => {
              setUserType(e.target.value);
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

export default AdminConfirmUser;
