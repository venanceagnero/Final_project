import { express } from "express";
import { routes } from "./routes";
import { db } from "./database";

const app = express();

app.use(express.json());

routes.forEach((route) => {
    app[route.method](route.path, route.handler);
})
const start = async() => {
    await db.connect('mongodb://localhost:27017')
    await app.listen(8080);
    console.log("Server is listening on port 8080")
};
//will start server on port 8080
start();