import React from 'react';
import './modal.css';

export default class Modal extends React.Component {
  state = { 
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})} className='modalBtn'>Open modal</button>

        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Modal Title</h1>
              <p>Awesome Modal</p>
              <button className='modalBtn' onClick={() => this.setState({ isOpen: false })}>Close modal</button>
            </div>
          </div>
        )}
 
      </React.Fragment>
    )
  }
}