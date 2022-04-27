import React from "react";
import PropTypes from "prop-types";
import "../assets/scss/main.scss";
import Header from "../components/header";
import Footer from "../components/footer";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL_GRAPHQ,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
