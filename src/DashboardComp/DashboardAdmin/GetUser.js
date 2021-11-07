import React, { useState } from "react";
import firebase from "../../firebase";

const GetUser = () => {
  const [info, setInfo] = useState([]);

  const db = firebase.firestore();

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("adminCommand")
      .get()
      .then((snapshot) => {
        // Loop through the data and store
        // it in array to display
        snapshot.forEach((doc) => {
          const data = doc.data();
          data.push(data);
        });
        this.setState({ data: info });
      });
  };

  // Display the result on the page
  return (
    <div>
      <center>
        <h2>Rider Details</h2>
      </center>

      {info.map((data) => (
        <Frame
          id={data.ID}
          motorcycleType={data.MotorcycleType}
          name={data.Name}
          userType={data.userType}
        />
      ))}
    </div>
  );
};

// Define how each display entry will be structured
const Frame = ({ id, motorcycleType, name, userType }) => {
  console.log(id + " " + motorcycleType + " " + name + " " + userType);
  return (
    <center>
      <div className="div">
        <p>ID : {id}</p>

        <p>Motorcycle Type : {motorcycleType}</p>

        <p>Name : {name}</p>

        <p>User Type : {userType}</p>
      </div>
    </center>
  );
};

export default GetUser;
