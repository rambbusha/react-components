import React from 'react';
import ReactDOM from 'react-dom';

import {CardOne} from './components/gb-card-1';
import {CardTwo} from './components/gb-card-2';
import {CardFour} from './components/gb-card-4';
import {CardFive} from './components/gb-card-5';


class App extends React.Component {

render() {
   return (
       <div>
          <div><CardOne/></div>
          <div><CardTwo /></div>
          <div><CardFour/></div>
          <div><CardFive/></div>
      </div>
   );

}
}


ReactDOM.render(<App/>, document.getElementById('root'));
