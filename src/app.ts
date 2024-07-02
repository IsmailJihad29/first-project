import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/students/student.route";
const app: Application = express();

app.use(express.json());
app.use(cors());




//applications routes 
app.use('/api/v1/students', StudentRoutes)


app.get("/", (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
