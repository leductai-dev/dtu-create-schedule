import React, { useState, useEffect,useRef } from 'react';
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import {Action_ShowContextMenu,Action_HideContextMenu} from '../../../../Actions/Actions_ContextMenu'
Subject.propTypes = {

}


function Subject(props) {
    const dispatch = useDispatch()
    const sub = useRef(null);
    useEffect(() => {
        document.addEventListener('contextmenu',handleContext)
        return () => {
            document.removeEventListener('contextmenu',handleContext);
        }
    },[])

    const handleContext =(e)=>{
        if(sub.current ==e.target ||sub.current ==e.target.parentElement){
            e.preventDefault()
            let data = {
                show:true,
                subject:subject,
                clientX:e.clientX,
                clientY:e.clientY       
            }
            console.log(data);
            dispatch(Action_ShowContextMenu(data))
        }
    }
    const style = props.subject ? 
    {backgroundColor:`rgba(${props.subject.color.r},${props.subject.color.g},${props.subject.color.b},${props.subject.color.a})`}
    : null
   
    const {subject} = props
    
    return (
        <>
        {subject ? (
           <td>
               <div style={style} ref={sub} className="cell_tb3">
                    <img src="./images/book.png" alt="img_Subject" className="subject_ico" />
                    <span>{subject.class_id} |</span>
                    <span>{subject.subject_name} | </span>
                    <span>{subject.room}, </span>
                    <span>{subject.location} </span>
                    <span>{subject.time}</span>
                </div> 
            </td>
        ):<td></td>
        }
        </>
    )
}

export default Subject




