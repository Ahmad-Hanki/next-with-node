"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import SubmitButton from "./SubmitButton";
const port = process.env.NEXT_PUBLIC_PORT_URL as string;

const Form = () => {
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const title = formData.get("title");
    const description = formData.get("description");
    try {
      const response = await axios.post(port!, {
        title,
        description,
      });
      const note = await response.data;
      if (note) {
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form action={handleSubmit} className="flex flex-col ">
      <input type="text" placeholder="Title" name="title" />
      <textarea placeholder="Description" name="description" rows={6} />
      <SubmitButton />
    </form>
  );
};

export default Form;
