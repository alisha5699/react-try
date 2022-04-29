import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./Add.css";

export default function Add() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://graphqlzero.almansi.me/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query{
        users{
           data{
             id,
             name,
             username,
             email,
             address{
               street
             },
             phone,
             website
           }
       }
     }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data.users.data);
      });
  }, []);
  return (
    <>
      <section>
        <header>
          <div class="col">Name</div>
          <div class="col">Username</div>
          <div class="col">Email</div>
          <div class="col">Phone</div>
          <div class="col">Website</div>
          <div class="col">Address</div>
        </header>
        {users?.map((user) => (
          <div className="row">
            <div class="col">{user.name}</div>
            <div class="col">{user.username}</div>
            <div class="col">{user.email}</div>
            <div class="col">{user.phone}</div>
            <div class="col">{user.website}</div>
            <div class="col">{user.address.street}</div>
          </div>
        ))}
      </section>
    </>
  );
}
