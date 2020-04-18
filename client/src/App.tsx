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
      <h1 style={{ margin: "auto", display: "block", width: 400, padding: '20px', fontSize: '50px' }}>
        Covid19 related data
        </h1>
      <GridLayoutComponent year={2015} />
    </ApolloProvider>
  );
};

export default App;
