import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import GridLayoutComponent from "./components/gridLayoutComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FunctionComponent = () => {

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <GridLayoutComponent />
    </ApolloProvider>
  );
};

export default App;
