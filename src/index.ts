import express from "express";
import GrapQlSchema from "express-graphql";
import schema from "./schemas/schema";
import cors from "cors";

const app = express();

app.use(cors());
app.use(
  "/graphql",
  GrapQlSchema({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to ${PORT}`));
