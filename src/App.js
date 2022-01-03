import React, { Component } from 'react';
import Radium from 'radium';

import Aux from './hoc/Hoc'
import Layouts from './components/Layouts/Layouts'
import BugerBuilder from './containers/BugerBuilder/BugerBuilder';

class App extends Component{

  render(){    
    return(
      <Aux>
          <Layouts></Layouts>
          <BugerBuilder></BugerBuilder>
      </Aux>
    );
  }
}

export default Radium(App);
