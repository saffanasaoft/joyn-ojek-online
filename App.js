import React,{Component} from 'react'
import Route from './src/routes/router'
import store from './src/redux/store'
import {Provider} from 'react-redux'


class App extends Component{
  render(){
    return(  
      <Provider store={store}>
        <Route/>
      </Provider>
      )
  }
}

export default App;