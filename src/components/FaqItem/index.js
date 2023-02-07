import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const alt = isActive ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={alt} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="list-items">
        <div className="text-container">
          <h1 className="text">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
