'use client'


import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
const port = process.env.NEXT_PUBLIC_PORT_URL as string;
interface NoteProps {
  title: string;
  description: string;
  id: string;
}
const NoteCard = ({ description, id, title }: NoteProps) => {
  const router = useRouter()
  const deleteHandler = async () => {
    try {
      await axios.delete(`${port}/${id}`);
      router.refresh()

    }catch(err) {
      console.log(err);
    }

  }
  return (
    <div className="bg-black/50 flex flex-col items-center h-fit p-10">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="flex gap-5">
        <button className="bg-red-400"
        onClick={deleteHandler}
        >Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
