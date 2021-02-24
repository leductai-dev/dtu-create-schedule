import React, { useState, useEffect } from 'react';
import Thongtinmonhoc from './Components/Thongtinmonhoc';
import Thongtinlophoc from './Components/Thongtinlophoc';
function SubjectInfoModal(props) {
    const [show, setShow] = useState(true);

    useEffect(() => {
      },[]);

    const handleToggleShow =(show)=>{
        setShow(show)
    }
    return (
        <div className="modal_background">
        <div className="modal_info ">
            <ul className="nav nav-tabs modal_head">
                <li className="nav-item">
                <a className={`${show?"active":""} cl_p1128`} onClick={()=>{handleToggleShow(true)}} data-toggle="tab" href="#">Thông tin môn học</a>
                </li>
                <li className="nav-item">
                <a className={`${!show?"active":""} cl_p1128`} onClick={()=>{handleToggleShow(false)}} data-toggle="tab " href="#">Thông tin lớp học</a>
                </li>
            </ul>
            <div className="modal_content">
                <div className="tab-content tab_customize ">
                    {show?<Thongtinmonhoc/>:<Thongtinlophoc/>}
                </div>
            </div>
            <div onClick={()=>{props.show(false)}} className="close_modal">Ok</div>
        </div>
        </div>


    )
}

export default SubjectInfoModal
