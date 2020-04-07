import React, { useState } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PerCapitaUsdComponent from "./components/perCapitaUsdComponent";
import ChooseInputComponent from "./components/chooseInputComponent";

const App: React.FunctionComponent = () => {

  const [country, setCountry] = useState<string>('SE');
  const [year, setYear] = useState<number>(2016);

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <h1 style={{ margin: "auto", display: "block", width: 300, padding: '20px', fontSize: '50px' }}>
        Health data
        </h1>
      <PerCapitaUsdComponent countryCode={country} year={year} />
    </ApolloProvider>
  );
};

export default App;
