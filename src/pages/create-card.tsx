import "src/styles/card-page.css";
import InputField from "src/common/input-field";
import Button from "src/common/button";
import { useState } from "react";
import Card from "src/components/card";

function CreateCardpage() {
  const [showCard, setShowCard] = useState(false);

  const [values, setValues] = useState({
    last_name: "",
    first_name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowCard(true);
  };

  return (
    <div className="card-page">
      <form onSubmit={handleSubmit}>
        <div className="inputs-wrapper">
          <InputField
            placeholder="Please enter a last name"
            label="Last Name"
            type="text"
            name="last_name"
            onChange={handleChange}
            required
          />
          <InputField
            placeholder="Please enter a first name"
            label="First Name"
            type="text"
            name="first_name"
            onChange={handleChange}
            required
          />
        </div>
        <Button text="Create card" />
      </form>
      <div className="card-wrapper">
        <Card cardValues={values} showCard={showCard} />
      </div>
    </div>
  );
}

export default CreateCardpage;
