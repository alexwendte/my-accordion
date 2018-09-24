import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Accordion extends Component {
  state = {
    openIndex: undefined,
  }

  handleClick = index => {
    this.setState(({ openIndex }) => (openIndex === index ? { openIndex: null } : { openIndex: index }))
  }

  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <div
            className="item"
            key={item.title}
            onKeyDown={() => {
              this.handleClick(index)
            }}
            onClick={() => this.handleClick(index)}
            role="Button"
            tabIndex="0"
          >
            <p className="title">{item.title}</p>
            {index === this.state.openIndex && item.contents}
          </div>
        ))}
      </div>
    )
  }
}

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
}
