import express, { Request, Response } from "express";
import connectDB from "./db/index";
import cors from "cors";
import "dotenv/config";
const app = express();
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running in  on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});
