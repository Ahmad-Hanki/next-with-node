import axios from "axios";
import NoteCard from "./NoteCard";
const port = process.env.NEXT_PUBLIC_PORT_URL as string;
interface NoteProps {
  title: string;
  description: string;
  id: string;
}
const Notes = async () => {
  const res = await axios.get(port);
  const notes: NoteProps[] = await res.data
  return (
    <div className="grid grid-cols-2 gap-5">
      {notes.map(({ description, id, title }) => (
        <NoteCard key={id} description={description} id={id} title={title} />
      ))}
    </div>
  );
};

export default Notes;
