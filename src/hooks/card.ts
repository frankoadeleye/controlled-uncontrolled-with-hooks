import { useState, useRef } from "react";

function useCard() {
  const lastNameRef = useRef(null);
  const firstNameRef = useRef(null);

  const [showCard, setShowCard] = useState(false);

  const [values, setValues] = useState({
    last_name: "",
    first_name: "",
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues({
      last_name: lastNameRef.current.value,
      first_name: firstNameRef.current.value,
    });
    setShowCard(true);
  };

  return {
    showCard,
    values,
    lastNameRef,
    firstNameRef,
    handleSubmit,
  };
}

export default useCard;
