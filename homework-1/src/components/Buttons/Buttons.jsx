import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        const {backgroundColor, text, onClick} = this.props;
        return (<btn type ='button' className = 'btn-info' onClick={onClick} style={{ backgroundColor: backgroundColor }}> {text} </btn>)
    }

}