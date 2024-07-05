import express from "express";
import addNoteRouter from "./routes/addNoteRoute";
import getNotesRouter from "./routes/getNotesRouter";
import cors from "cors";
import deleteNoteRouter from "./routes/deleteNoteRouter";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api", getNotesRouter); // get
app.use("/api", addNoteRouter); // add
app.use('/api', deleteNoteRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
