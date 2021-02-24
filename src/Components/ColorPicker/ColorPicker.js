'use strict'

import React, { useState, useEffect,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import {Action_HideColorPicker} from '../../Actions/Actions_ColorPicker'
import {Action_ChangeSubjectColor} from '../../Actions/Actions_Subject'

import { SketchPicker } from 'react-color'
import { ChromePicker } from 'react-color'
ColorPicker.propTypes = {

}

function ColorPicker(props) {
    const [_color,set_color] = useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      })
    const colorPick = useSelector((state) => state.colorPicker)
    const dispatch = useDispatch()
    const popover ={
        position: 'absolute',
        zIndex: '2',
    }
    const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }
  
    const handleChange = (color) => {
       const data = {...colorPick.subject,color:color.rgb}
       dispatch(Action_ChangeSubjectColor(data))
       set_color(color.rgb)
    }
    const handleClosed = () => {
        dispatch(Action_HideColorPicker(false))
    }


    const {show} = colorPick
    const color = colorPick.show ? colorPick.subject.color : null
    return( show||null )&&
            <div style={popover}>
                <div style={cover}  onClick={()=>{handleClosed()} }/>
                <SketchPicker color={_color} onChange={(color)=>{handleChange(color)} } />
            </div>
    };

export default ColorPicker