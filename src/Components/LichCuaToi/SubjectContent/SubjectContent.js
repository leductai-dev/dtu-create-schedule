import { useSelector,useDispatch } from 'react-redux'
import $ from "jquery";
import PropTypes from 'prop-types'
import Subject from './Components/Subject';
import React, {useEffect, } from 'react';

function SubjectContent(props) {
  const schedules = useSelector((state) => state.subjects)
/*   useEffect(() => {
   console.log("Component Start");
},[schedules]); */
  const days = ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ Nhật']
  const times = ['07:00','08:00','09:00','10:00','11:00','12:00','13:00',
            '14:00','15:00','16:00','17:00','18:00','19:00',
            '20:00','21:00','22:00','23:00','24:00']

     console.log(schedules);       
    const handle_render_days =()=>{
        let result = days.map(function(day,index){
          return  <th className='max_w' scope="col">{day}</th>
        })
        return (<thead>
                <tr>
                <th className="th_day max_w"  scope="col">Time</th>
                {result}
                </tr>
              </thead>)
    }

    const handle_render_schedule =()=>{
      var result =  times.map(function(time,index){
        return (
          <tr>
            <th scope="row">{time}</th>
              {days.map(function(day,index){
                const result = schedules.find(schedule => schedule.day==day && schedule.time ==time)
                return result ? <Subject subject={result}/>:<Subject />
                })
              }
          </tr>
        )
      })
    return <tbody>{result}</tbody>
    }
    
    
       /*  const handle_render_schedule =()=>{
             var result =  times.map(function(time,index){
              return (
                <tr>
                  <th scope="row">{time}</th>
                  { days.map(function(day,index){
                        var resul = null
                        schedules.forEach(function(schedule,index){
                          if( schedule.day==day && schedule.time == time){
                               resul =  <td><div class="cell_tb3">
                                <p >{schedule.subject}</p>
                                <p>MTH 402Ab</p>
                              </div> </td>
                              }else{
                                 resul  =<td></td>
                              }
                        })
                        return resul
                      })
                      }
                </tr>
              )
            })
            return <tbody>{result}</tbody>
          } */

            

           
      
    return (
        <div className="contain_right">
          <div className="schedule_main">
          <div className="schedule_head">
            <div className="schedule_head_left">
              <img src="./images/schedule.png" id="img_schedule" alt="" />
              <button className=" btn_gd  dropdown-toggle" type="button" data-toggle="dropdown">Giai đoạn 1
                <i className="fa fa-caret-down" aria-hidden="true" /></button>
              <ul className="dropdown-menu ul_gd2">
                <li className="lh_0">
                  <button className="btn_choose_gd btn_choose_gd_1  dropdown-toggle" type="button" data-toggle="dropdown">Giai đoạn 2</button>
                </li>
                <li className="lh_0">
                  <button className="btn_choose_gd btn_choose_gd_2 dropdown-toggle" type="button" data-toggle="dropdown">Giai đoạn 2</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="schedule_head_main">
          </div>
          <div className="schedule_head_right">
          </div>
        </div>
        <div className="schedule_content">
          <div className="fake_content">
            <table className="table table_schedule table-bordered">
              {handle_render_days()}
              {handle_render_schedule()}
            </table>
          </div>
        </div>
      </div>
    )
}

SubjectContent.propTypes = {

}

export default SubjectContent

