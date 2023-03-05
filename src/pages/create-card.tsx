import "src/styles/card-page.css";
import InputField from "src/common/input-field";
import Button from "src/common/button";
import Card from "src/components/card";
import useCard from "src/hooks/card";

function CreateCardpage() {
  const { showCard, values, lastNameRef, firstNameRef, handleSubmit } =
    useCard();

  return (
    <div className="card-page">
      <form onSubmit={handleSubmit}>
        <div className="inputs-wrapper">
          <InputField
            placeholder="Please enter a last name"
            label="Last Name"
            type="text"
            name="last_name"
            inputRef={lastNameRef}
            required
          />
          <InputField
            placeholder="Please enter a first name"
            label="First Name"
            type="text"
            name="first_name"
            inputRef={firstNameRef}
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
