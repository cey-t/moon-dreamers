import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", name, surname);
    setName("");
    setSurname("");
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>
          Name
          <input
            type="text"
            placeholder="Melek"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
        </label>

        <label>
          Surname
          <input
            type="text"
            placeholder="Kar"
            name="surname"
            onChange={handleSurnameChange}
            value={surname}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
