import React, { Component } from 'react'

export default class Header extends Component {


  render() {

   const {openModal1, openModal2} = this.props

    return (
        <div className="header">
            <button className="button" type='button' onClick={openModal1}>
            Open first Modal 
            </button>
            <button className="button" type='button' onClick={openModal2}>
            Open second Modal 
        </button>
      </div> 


    )
  }
}
