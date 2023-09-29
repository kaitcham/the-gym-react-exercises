import React from "react";

const BuildinfForm = () => {
  const [inputs, setInputs] = React.useState({
    firstname: "",
    lastname: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${inputs.firstname} ${inputs.lastname}`);
  };

  return (
    <form
      className="space-y-5 [&_input]:border [&_input]:px-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="firstname"></label>
        <input
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastname"></label>
        <input
          type="text"
          name="lastname"
          value={inputs.lastname}
          onChange={handleChange}
        />
      </div>
      <button>submit</button>
    </form>
  );
};

export default BuildinfForm;
