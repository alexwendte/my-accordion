import React, { Component } from 'react'
import './styles/App.css'
import Accordion from './Accordion'

const accordionItems = [
  { title: 'Item 1', contents: <div>Contents of Item 1</div> },
  { title: 'Item 2', contents: <div>Contents of Item 2</div> },
  { title: 'Item 3', contents: <div>Contents of Item 3</div> },
]

const Usage = props => (
  <div>
    <h3>Content on Top</h3>
    <Accordion top items={accordionItems} />
    <h3>Content on Bottom</h3>
    <Accordion items={accordionItems} />
    <h3>More than One open</h3>
    <Accordion moreThanOneOpen items={accordionItems} />
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Usage />
      </div>
    )
  }
}

export default App
