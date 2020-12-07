import React, { useState } from "react";
import FormUserDetails from "./UserFromDetails";

const UserForm = () => {
  const initialstate = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };
  const [user, setUser] = useState(initialstate);

  const nextStep = () => {
    const { step } = user;
    setUser({
      step: step + 1,
    });
  };

  const previousStep = () => {
    const { step } = user;
    setUser({
      step: step - 1,
    });
  };

  const handleChange = (input) => (e) => {
    setUser({ [input]: e.target.value });
  };
  const { step } = user;
  const { firstName, lastName, email, occupation, city, bio } = user;
  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          previousStep={previousStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return <h1>personal details</h1>;
    case 3:
      return <h2>confirm</h2>;
    case 4:
      return <h2>succ</h2>;
    default:
      return user;
  }
};

export default UserForm;
