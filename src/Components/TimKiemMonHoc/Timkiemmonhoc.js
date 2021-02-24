import React, {useState, useRef,useEffect} from 'react';
import $ from 'jquery'
import PropTypes from 'prop-types'
import {CorsRequest} from '../../Utils/cors';
Timkiemmonhoc.propTypes = {

}
function Timkiemmonhoc(props) {
  const namhoc = useRef(null);

  const load_NamHoc =()=>{
    CorsRequest(
      {method: 'GET',
      url: 'http://courses.duytan.edu.vn/Modules/academicprogram/ajax/LoadNamHoc.aspx?namhocname=cboNamHoc2&id=2&t=1609950969284',
      data: null
      },
      function printResult(result) {
      $(".frmsearch:first-child > .cbo-left:first-child > .cbo-right:first-child ").html(result);
      $('#cboNamHoc2 > option:last-child').attr('selected', 'selected')
      let namhoc_value = $('#cboNamHoc2  option:last-child').val()
      CorsRequest({  //api load  học kì
          method: 'GET',
          url: `http://courses.duytan.edu.vn/Modules/academicprogram/ajax/LoadHocKy.aspx?namhoc=${namhoc_value}&hockyname=cboHocKy2&t=1609950969284`,
          data: null,
      }, function printResult(res) {
          $(".frmsearch:first-child > .cbo-left:last-child > .cbo-right:first-child ").html(res);
          $('#cboHocKy2 > option:last-child').attr('selected', 'selected')
      });
      $("#cboNamHoc2").change(function () {
          var namhoc_value = $(this).val();
          CorsRequest({  //api load  học kì
              method: 'GET',
              url: `http://courses.duytan.edu.vn/Modules/academicprogram/ajax/LoadHocKy.aspx?namhoc=${namhoc_value}&hockyname=cboHocKy2&t=1609950969284`,
              data: null,
          }, function printResult(res) {
              $(".frmsearch:first-child > .cbo-left:last-child > .cbo-right:first-child ").html(res)
          });
      })
  })
  }
  const load_MonHoc =()=>{
    CorsRequest({   // api load môn học
      method: 'GET',
      url: 'http://courses.duytan.edu.vn/Modules/academicprogram/ajax/LoadCourses.aspx?t=1609950969284',
      data: null,
  }, function printResult(result) {

      $(".frmsearch:last-child > .cbo-left:first-child > .cbo-right:first-child ").html(result);
      var arr = $("#cboCourse > option").not(':first-child')
      var result = arr.map(function (key, value) {
          return `<li class="subject_option"><span>${$(this).text()}</span></li>`
      })
      var res = `<div class="dropdown">
      <button onclick="handl_focusSearch()" class="dropdown-toggle" id="btn_choose_subject" type="button" data-toggle="dropdown">--Chọn môn học--</button>
      <i id="icon_dow" class="fa fa-angle-down" aria-hidden="true"></i>
      <ul class="dropdown-menu drop_subject">
      <input  class="search_subject" autocomplete="off" onkeyup="handle_search()" id="myInput" type="text" placeholder="Search..">
      ${Array.from(result).join('')}
      </ul>
      </div>`
      $(".frmsearch:last-child > .cbo-left:first-child > .cbo-right:first-child ").html(res)
      $(".subject_option").on('click', function (e) {
          let value = $(this).find('span').text().trim()
          $("#btn_choose_subject").text(value)
      })
  });
  }
  const RemoveSpecChar =(input)=>{
   
      var arrspec = new Array("'", "&", "=", "and", "or", " ");
      for (var i = 0; i < arrspec.length; i++) {
          var intIndexOfMatch = input.indexOf(arrspec[i]);
          while (intIndexOfMatch != -1) {
              input = input.replace(arrspec[i], arrspec[i] == " " ? "$" : "");
              intIndexOfMatch = input.indexOf(arrspec[i]);
          }
      }
      return input;
  }

  const handle_findSubject =()=>{
    if (document.getElementById('cboHocKy1')) {
        var hocky1 = document.getElementById('cboHocKy1').value;
        if (hocky1 == 0) {
            alert('Chưa chọn Học kỳ cần tìm');
            return;
        }
    }
    var hocky = null;
    if (document.getElementById('cboHocKy2')) {
        hocky = document.getElementById('cboHocKy2').value;
        if (hocky == 0) {
            alert('Chưa chọn Học kỳ cần tìm');
            return;
        }
    }
    const discipline = $("#btn_choose_subject").text().trim()
    if (discipline == '--Chọn môn học--') {
        alert('Chưa chọn Môn học cần tìm');
        return;
    }
    var keyword1 = document.getElementById('keyword1').value;
    keyword1 = RemoveSpecChar(keyword1);
    if (keyword1 == 'Nhập$Mã$số$của$Môn...') keyword1 = '';
    $('#ResultSearch').html("<center><img src='../images/ajax-loader.gif' alt='' /></center>");
    CorsRequest({   // api tìm kiếm môn học
        method: 'GET',
        url: `http://courses.duytan.edu.vn/Modules/academicprogram/CourseResultSearch.aspx?discipline=${discipline}&keyword1=${keyword1}&hocky=${hocky}&t=1610001406811`,
        // url: 'http://courses.duytan.edu.vn/Modules/academicprogram/CourseClassResult.aspx?courseid=35&semesterid=71&timespan=71&t=',
        data: null,
    }, function printResult(result) {
        $(".tag-content").css('padding', '20px 0px 0px 0px')

        if ($("#result_contain").text().length > 1) {
            $("#result_contain").html(result)
        }
        else {
            var test = '<tr><td id="result_contain">Hello</td></tr>'
            $("#tb_chuongtrinhdaotao > tbody").append(test)
            $("#result_contain").html(result)
        }

        $("td > a.hit").on('click', function (e) {
            e.preventDefault()
            let url = $(this).attr('href')
            let courseid = url.split('&')[1]
            let timespan = url.split('&')[2]
            let semesterid = 'semesterid=' + timespan.split('=')[1]
            CorsRequest({   // api tìm kiếm môn học
                method: 'GET',
                url: `http://courses.duytan.edu.vn/Modules/academicprogram/CourseClassResult.aspx?${courseid}&${semesterid}&${timespan}&t=`,
                data: null,
            }, function printResult(result) {
                $("#result_contain").html(result)

                $("table.tb-calendar > tbody > tr > td> a").click(function (e) {
                    e.target.setAttribute("target", "_blank");
                    let dtu_host = 'http://courses.duytan.edu.vn/Sites'
                    let href = e.target.href
                    let newUrl = href.replace(window.location.origin, dtu_host);
                    e.target.href = newUrl
                    e.target.click()
                })


                var a = $("table.tb-calendar > tbody > tr").not(".lop")
                a.each(function (key, value) {
                    var arr = $(this).nextUntil($("table.tb-calendar > tbody > tr").not(".lop")).find('td:first-child >a')
                    
                    if (arr.length > 1) {
                        var b = $(this).find('td.nhom-lop >div').text().trim()

                        var map = arr.map(function (key, value) {
                            if ($(this).text().trim() != b) {
                                return `<option value=${$(this).text().trim()}>${$(this).text().trim()}</option>`
                            }
                        })
                        var result = Array.from(map).join('')
                        $(this).find('td').append(`
                                                <div class="d-flex add_util">
                                                    <span>Chọn lớp</span>
                                                    <select class ="select_class">
                                                    ${result}
                                                    </select> 
                                                    <button onclick=handle_addSubject() class="btn_choose_class">Thêm</button>
                                                </div>`)
                    }
                    else {
                        var b = $(this).find('td.nhom-lop >div').text().trim()
                        $(this).find('td').append(`
                                                  <div class="d-flex add_util">
                                                      <span>Chọn lớp</span>
                                                      <select class ="select_class">
                                                        <option value=${b}>${b}</option>
                                                      </select> 
                                                    <button onclick=handle_addSubject() class="btn_choose_class">Thêm</button>
                                                  </div>`)
                    }
                })
            }
            )

        })

        $("table.tb-calendar > tbody > tr").not(".lop").find($(".nhom-lop")).css('position', 'relative')

    })
  }

return (
    <div className="tag-content" style={{clear: 'both' }} id="first">
      <div className="search">
        <div className="frmsearch">
          <div className="cbo-left">
            <div ref={namhoc} className="cbo-right">
              {/*Gọi Api load năm học */}
              {load_NamHoc()}
            </div>         
          </div>
          <div className="cbo-left" style={{marginLeft: '10px' }}>
            <div className="cbo-right">
               {/*Gọi Api load học kì */}
            </div>
          </div>
        </div>
        <div className="frmsearch">
          <div className="cbo-left">
            <div className="cbo-right">
               {/*Gọi Api load môn học */}
               {load_MonHoc()}
            </div>
          </div>
          <input type="text" placeholder="Nhập Mã số của Môn.." className="txtkeyword" name="frm_num" id="keyword1" />
          <input type="button" className="btnsearch" onClick={()=>{handle_findSubject()}} defaultValue="" id="btnSearchCourse" />
          <div className="clearfix">
          </div>
        </div>
      </div>
      <div className="note">
        <h3>
          Hướng dẫn:</h3>
        Chọn Năm học, sau đó, chọn Học kỳ trong Năm học
        đó mà bạn sẽ đăng ký Lớp học. Chọn
        Mã ngành của Môn (ví dụ ACC, AUD, CS,...) , sau
        đó, chọn Mã số của Môn (ví dụ: 101,
        201, 301,...) để tạo thành đầy đủ Mã Môn học (ví
        dụ ACC 201).
        <div style={{fontStyle: 'italic' }}>
          Lưu ý: Nhập * khi không biết chính xác Mã số
          của Môn. Ví dụ, 20* sẽ tìm tất cả các
          môn học có mã từ 200 đến 299.</div>
      </div>
    </div>
)
}


// ${map.length !== 1 ? '<option value="0">--Chọn một lớp--</option>' : ''} 
export default Timkiemmonhoc