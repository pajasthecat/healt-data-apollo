import express from 'express';
import GrapQlSchema from 'express-graphql'
import schema from './schema';

const app = express();

app.use("/graphql", GrapQlSchema({
 schema: schema,
 graphiql: true
}));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Listening to ${PORT}`));