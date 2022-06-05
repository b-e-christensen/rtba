import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* <ScrollContainer className="container" horizontal={true} vertical={true}> */}
        <App />
      {/* </ScrollContainer> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
