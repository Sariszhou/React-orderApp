import React from 'react'
import classes from './index.module.css'
import ReactDOM from 'react-dom'

export default function Backdrop(props) {
    const backdropRoot = document.getElementById('backdrop')
  return ReactDOM.createPortal(<div 
    {...props}
    className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
  </div>,backdropRoot)
  
}
