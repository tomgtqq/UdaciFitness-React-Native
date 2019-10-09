import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      {/*flex:1 want this component to take up all the available space */}
      <View style={{flex:1}}> 
        <History />
      </View>
    </Provider>
  )
}

