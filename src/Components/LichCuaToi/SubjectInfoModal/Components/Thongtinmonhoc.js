import React, { useState, useEffect } from 'react';
import {CorsRequest} from '../../../../Utils/cors';
import $ from "jquery";
function Thongtinmonhoc() {
    useEffect(() => {
        CorsRequest({   // api tìm kiếm môn học
            method: 'GET',
            // url: `http://courses.duytan.edu.vn/Modules/academicprogram/CourseClassResult.aspx?${courseid}&${semesterid}&${timespan}&t=`,

            url: 'http://courses.duytan.edu.vn/Modules/academicprogram/CourseClassResult.aspx?courseid=35&semesterid=71&timespan=71&t=',
            data: null,
        }, function printResult(result) {
            $(".ContentInfo").html(result);
            var content = $(".tb_coursedetail").html()
            $(".ContentInfo").html(content);


        })

      },[]);
    
    return (
        <div className="ContentInfo container" id="home">
            Thong tin lop hoc
        </div>

    )
}

export default Thongtinmonhoc
