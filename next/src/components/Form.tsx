"use client";

import SubmitButton from "./SubmitButton";

const Form = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" name="title" />
      <textarea placeholder="Description" name="description" rows={6} />
      <SubmitButton />
    </form>
  );
};

export default Form;
