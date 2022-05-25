import React from 'react'
import Backdrop from '../Backdrop'
import classes from './index.module.css'

export default function BackDrop(props) {
  return (
    <Backdrop onClick={props.onCancel} className={classes.ConfirmOuter}>
        <div className={classes.Confirm}>
            <p className={classes.ConfirmText}>{props.confirmText}</p>
            <div>
                <button onClick={(e) =>props.onCancel(e)} className={classes.Cancel}>取消</button>
                <button onClick={(e)=>props.onOk(e)} className={classes.Ok}>确认</button>
            </div>
        </div>
    </Backdrop>
  )
}
