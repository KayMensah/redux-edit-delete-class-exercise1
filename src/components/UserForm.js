import React, { useState } from "react";
import { addUserAction } from "../actions/action";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
      gen: gen,
    };

    props.addUser(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={gen}
        onChange={(e) => setGen(e.target.value)}
        placeholder="Gen"
      />
      <input type="submit" />
    </form>
  );
};

//aka mapDispatchToProps
const sendActionAsProps = {
  addUser: addUserAction,
};

export default connect(null, sendActionAsProps)(Form);
