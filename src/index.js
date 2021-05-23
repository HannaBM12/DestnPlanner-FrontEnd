import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

