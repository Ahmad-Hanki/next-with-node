import Form from "./Form"
import Notes from "./Notes"

const NoteClient = async () => {
  
  return (
    <div className="flex gap-5">
        <Form/>
        <Notes/>
    </div>
  )
}

export default NoteClient