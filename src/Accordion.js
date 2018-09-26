import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Accordion extends Component {
  static getState(moreThanOne, index, openIndexes) {
    if (moreThanOne) {
      return [...openIndexes.slice(0, index), !openIndexes[index], ...openIndexes.slice(index + 1, openIndexes.length)]
    }
    return openIndexes.map((curItem, curIndex) => index === curIndex)
  }

  state = {
    // I need to make this the size of the contents array and fill it with false
    openIndexes: new Array(this.props.items.length).fill(false),
  }

  handleClick = index => {
    this.setState(({ openIndexes }) => {
      const newState = Accordion.getState(this.props.moreThanOneOpen, index, openIndexes)
      return { openIndexes: newState }
    })
  }

  Button = ({ item, index }) => (
    <button className="title" onClick={() => this.handleClick(index)}>
      {item.title}
    </button>
  )

  Content = ({ shouldDisplay, contents }) => (shouldDisplay ? <div className="contents">{contents}</div> : null)

  render() {
    const { top, items } = this.props
    return (
      <div>
        {items.map((item, index) => (
          <div className="item" key={item.title}>
            {!top && <this.Button item={item} index={index} />}
            <this.Content shouldDisplay={this.state.openIndexes[index]} contents={item.contents} />
            {top && <this.Button item={item} index={index} />}
          </div>
        ))}
      </div>
    )
  }
}

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
}
