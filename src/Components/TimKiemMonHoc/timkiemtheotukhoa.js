import React from 'react'
import PropTypes from 'prop-types'

timkiemtheotukhoa.propTypes = {

}

function timkiemtheotukhoa(props) {
    return (
        <div className="tag-content" style={{clear: 'both', display: 'none'}} id="second">
                    <div className="search">
                      <div className="frmsearch">
                        <div className="cbo-left">
                          <div className="cbo-right">
                            <span id="area-namhoc2" />
                            <div className="left-top">
                            </div>
                            <div className="right-bottom">
                            </div>
                          </div>
                        </div>
                        <div className="cbo-left" style={{marginLeft: '10px'}}>
                          <div className="cbo-right">
                            <span id="area-hocky2" />
                            <div className="left-top">
                            </div>
                            <div className="right-bottom">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frmsearch">
                        <input type="text" className="txtkeyword-1" defaultValue="Nhập Mã Môn học/Tên Môn học/Mô tả Môn học..." onblur="if(this.value=='') this.value='Nhập Mã Môn học/Tên Môn học/Mô tả Môn học...';" onfocus="if(this.value=='Nhập Mã Môn học/Tên Môn học/Mô tả Môn học...') this.value='';" name="frm_searchtext" id="keyword2" />
                        <input type="button" className="btnsearch" defaultValue onclick="getKeySearch()" id="btnKeySearch" />
                      </div>
                    </div>
                    <div className="option">
                      <label htmlFor="frm_title">
                        Theo Mã Môn học:
                      </label>
                      <input type="checkbox" defaultChecked="checked" defaultValue={1} name="frm_title" id="frm_title" />
                      &nbsp;
                      <label htmlFor="frm_tenmon">
                        Tên Môn học:
                      </label>
                      <input type="checkbox" defaultValue={3} name="frm_tenmon" id="frm_tenmon" />
                      &nbsp;
                      <label htmlFor="frm_description">
                        Mô tả Môn học:
                      </label>
                      <input type="checkbox" defaultValue={2} name="frm_description" id="frm_description" />
                    </div>
                    <div className="note">
                      <h3>
                        Hướng dẫn:</h3>
                      Bạn có thể nhập một Mã Môn học hoặc một từ khóa
                      hoặc một cụm từ khóa để tìm kiếm
                      thông tin về một môn học nào đó. Dấu "*" có thể
                      được sử dụng để tìm kiếm gần đúng
                      hay tương đối. Ví dụ: "CMU-IS*" hay "*Đại
                      cương".
                    </div>
                  </div>
    )
}



export default timkiemtheotukhoa


