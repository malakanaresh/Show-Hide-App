import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {malaka: true, naresh: true}

  onFirstMode = () => {
    const {malaka} = this.state
    if (malaka) {
      this.setState({malaka: false})
    } else {
      this.setState({malaka: true})
    }
  }

  onSecondMode = () => {
    const {naresh} = this.state
    if (naresh) {
      this.setState({naresh: false})
    } else {
      this.setState({naresh: true})
    }
  }

  render() {
    const {malaka} = this.state
    const {naresh} = this.state

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="bg-container">
          <div>
            <button type="button" onClick={this.onFirstMode}>
              Show/Hide Firstname
            </button>
            {malaka ? <p className="joe">Joe</p> : null}
          </div>
          <div>
            <button type="button" onClick={this.onSecondMode}>
              Show/Hide Lastname
            </button>
            {naresh ? <p className="jonas">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
