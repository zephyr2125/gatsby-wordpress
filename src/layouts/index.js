import React from "react";
import PropTypes from "prop-types";
import "../assets/scss/main.scss";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const API_URL = process.env.REACT_APP_API_URL_GRAPHQL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Basic ${token}` : "Basic " + API_TOKEN,
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
const Layout = ({ children }) => {
  return (
      <ApolloProvider client={client}>
        <div className="site-main">
          <div className="container_site">
            <header id='site__header'>
              <Header />
            </header>
            <main className="main">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </ApolloProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
