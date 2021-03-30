import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'
import App from './App';
import "./index.css"
import { Provider } from "./Context/Context"


ReactDOM.render(
  <SpeechProvider appId="647e774b-e859-4888-83ed-87b456e5afc6" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
