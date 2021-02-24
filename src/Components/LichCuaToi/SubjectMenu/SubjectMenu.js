import React from 'react'
import PropTypes from 'prop-types'
import Card from './Components/Card'

SubjectMenu.propTypes = {

}
function SubjectMenu(props) {
  var schedules = [
    {
    'day':'Thứ 2',
    'time':'07:00',
    'subject':'Toán cao cấpA1',
    'class':'MTH 214A'
  },
  {
    'day':'Thứ 4',
    'time':'08:00',
    'subject':'Toán cao cấpA2',
    'class':'MTH 214A'
  },
  {
    'day':'Chủ Nhật',
    'time':'12:00',
    'subject':'Toán cao cấp',
    'class':'MTH 214A'
  },
  {
    'day':'Thứ 7',
    'time':'12:00',
    'subject':'Toán cao cấp',
    'class':'MTH 214A'
  },
  {
    'day':'Thứ 2',
    'time':'12:00',
    'subject':'Toán cao cấp',
    'class':'MTH 214A'
  },
  {
    'day':'Thứ 3',
    'time':'12:00',
    'subject':'Toán cao cấp',
    'class':'MTH 214A'
  },
  {
    'day':'Thứ 4',
    'time':'12:00',
    'subject':'Toán cao cấp',
    'class':'MTH 214A'
  },
]
    return (
        <div className="contain_left">
        <div className="head_left"><i className="fa fa-th-list" aria-hidden="true" /> <span>Danh sách môn học</span></div>
        <div id="accordion">
          {schedules.map(function(schedule,index){
            return <Card  key={index} index={index} schedule={schedule}/>
          })}
        

         
      </div>
      </div>
    )
}



export default SubjectMenu

