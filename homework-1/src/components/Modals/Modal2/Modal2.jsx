import React, { Component } from 'react'
import './modal2.css'
import Buttons from '../../Buttons'
import { ReactComponent as CloseLogo } from './cross.svg'

export default class Modal2 extends Component {

    state = {
        title: 'In the project directory, you can run:',
              
    }

    
  render() {
const {show,handleClose} = this.props
    const {title, text} = this.state
    const buttonFirst = <Buttons backgroundColor="rgb(0 0 0 / 20%)" text="Oк" onClick = {handleClose}/>;
    const buttonSecond = <Buttons backgroundColor="rgb(0 0 0 / 20%)" text="Cancel" onClick = {handleClose}/>;
    const buttonLogo = <CloseLogo backgroundColor="rgb(0 0 0 / 20%)" text="Cancel" onClick = {handleClose}/>;
    return (
        <div className={show} >
            <div className='modal'>
        <div className="modal-main2">
            <header className='header-modal2'><h2>{title}</h2>{buttonLogo}</header>
            <main className='modal-content'>
            <p>The page will reload when you make changes.You may also see any lint errors in the console.</p>
            </main>
           
            <footer className='footer-modal'>
                {buttonFirst} {buttonSecond}
            </footer>
            </div>
        </div>
        </div>
    )
  }
}