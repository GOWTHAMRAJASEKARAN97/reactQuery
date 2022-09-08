import { useState } from "react";
import { useAddAvengers } from "./CustomQueries/useAddAvengers";

const AddAvengers = () => {
  const [name, setName] = useState("");
  const [realName, setRealName] = useState("");
  const { mutate: addAvenger } = useAddAvengers();

  const addAvengerHandler = (e) => {
    e.preventDefault();
    console.log({ name, realName });
    const avenger = { name, realName };
    addAvenger(avenger);
    setName("");
    setRealName("");
  };

  return (
    <>
      <h3>addAvengers</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Avenger Name'
      />
      <input
        type="text"
        value={realName}
        onChange={(e) => setRealName(e.target.value)}
        placeholder='Enter Avenger Real Name'

      />
      <button onClick={(e) => addAvengerHandler(e)}>Add Avenger</button>
    </>
  );
};

export default AddAvengers;
