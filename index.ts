import http from "http";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./src/config/config";
import morgan from "morgan";
import mongoose from "mongoose";
import apiRoutes from "./src/routes/api";
import controllerAuth from "./src/controllers/auth";

const app: Application = express();

//MORGAN
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

//DATABASE
mongoose.connect(
  "mongodb+srv://team.utzoz.azure.mongodb.net/nodejs-project?retryWrites=true&w=majority",
  {
    user: "Thien",
    pass: "UjTtnz1aeUyQnjZc",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database Connected");
});

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS
var corsOptions = {
  origin: "http://127.0.0.1:5501",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/home", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    message: "Hello World!",
  });
});

//ROUTES
app.post("/login", controllerAuth.login);
app.use("/api", controllerAuth.checkAuth, apiRoutes);

//ERROR HANDLING
app.use((req: Request, res: Response) => {
  const error = new Error("Not found");

  res.status(404).json({
    message: error.message,
  });
});

try {
  const httpServer = http.createServer(app);
  httpServer.listen(config.server.port, () => {
    console.log(
      `Server is running ${config.server.hostname}:${config.server.port}`
    );
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
