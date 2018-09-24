import React, { Component } from 'react'
import './styles/App.css'
import Accordion from './Accordion'

const accordionItems = [
  { title: 'Item 1', contents: <div>Contents of Item 1</div> },
  { title: 'Item 2', contents: <div>Contents of Item 2</div> },
  { title: 'Item 3', contents: <div>Contents of Item 3</div> },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion items={accordionItems} />
      </div>
    )
  }
}

export default App
