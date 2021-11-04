import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";

const MyInfoFamily = () => {
  return (
    <>
      <h2>
        This page is for family info linked to the family member of a specific
        rider
      </h2>
    </>
  );
};

export default MyInfoFamily;
