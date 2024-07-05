"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      {pending && <button disabled>SUBMITtING</button>}

      {!pending && <button type="submit">SUBMIT</button>}
    </div>
  );
};

export default SubmitButton;
