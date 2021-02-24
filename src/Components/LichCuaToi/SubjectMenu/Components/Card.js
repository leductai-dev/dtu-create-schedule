import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import ModalInfo from '../../SubjectInfoModal/SubjectInfoModal'
Card.propTypes = {

}
function Card({schedule,index}) {
  const [modalInfo, setModalInfo] = useState(false);
  const handleShowModal =(show)=>{
    setModalInfo(show)
  }

    return (
      <>
        <div className="card">
        <div className id="headingOne" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls="collapseOne">
          <button className=" btn_subject"><img className="img_down" src="./images/chevron.png" alt="" />
            Toán cao cấp A1
          </button>
        </div>
        <div id={`collapse${index}`} className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
          <div className="collsapse_contain">
            <ul>
              <li className="collsapse_item"><button  className="btn_handle">Thông tin môn học</button></li>
              <li className="collsapse_item"><button onClick={()=>{handleShowModal(true)}} className="btn_handle">Thông tin lớp học</button></li>
              <li className="collsapse_item"><button className="btn_handle">Phòng chát</button></li>
              <li className="collsapse_item"><button className="btn_handle">Bỏ chọn môn này</button></li>
            </ul>
          </div>
        </div>
        </div>
        {modalInfo? <ModalInfo show={()=>{handleShowModal()}} />:null}
      </>
    )
}

export default Card

