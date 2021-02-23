import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import logo from "./logo.svg";
import "./App.css";
import Messages from "./Messages";

const URI = "http://localhost:4000/api";

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Messages />

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
