import React from 'react'

export const Component = (props) => {
    return(
      <div id="content_border">
      <table id="tb_chuongtrinhdaotao" style={{width: '100%'}} border={0} cellPadding={0} cellSpacing={0}>
        <tbody><tr>
            <td colSpan={3} width="100%">
              <div id="ctl00_PlaceHolderContentArea_ctl00_TopZone" className="column" style={{width: '100%'}}>
                <div id="noidung" className="noidung-index">
                  <div id="index">
                    <div id="index-left">
                      <div id="title">
                        <img src="./images/title_ctdt_dhdt.png" alt="chương trình đào tạo đại học duy tân" /></div>
                      <span style={{color: 'rgb(34, 34, 34)', fontFamily: 'arial, sans-serif', fontSize: '13px'}}>Thông tin&nbsp;các môn học và lớp học được thông báo trên website này là thực tế cho từng năm học và học kỳ được chọn. Các thông tin này sẽ thường xuyên được cập nhật để phản ánh đúng tiến độ đào tạo đang được triển khai tại Đại học Duy Tân. Sinh viên được khuyến khích sử dụng website này cho mục đích đăng ký môn học hoặc tra cứu thông tin môn học&nbsp;hay lớp học.&nbsp;Trong quá trình đăng ký môn học, sinh viên có thể tham khảo thêm&nbsp;cụ thể Chương trình Học của bản thân qua tài khoản cá nhân&nbsp;tại&nbsp;</span><a style={{fontFamily: 'arial, sans-serif', fontSize: '13px', color: 'rgb(17, 85, 204)'}} target="_blank" href="http://mydtu.duytan.edu.vn/">mydtu.duytan.edu.vn</a><span style={{color: 'rgb(34, 34, 34)', fontFamily: 'arial, sans-serif', fontSize: '13px'}}>. Bên cạnh thông tin của website này, các thông báo, lịch học, chương trình,... được đăng tải trên website của các khoa phòng ban vẫn được duy trì độc lập.</span>
                      <div className="index-gach">
                        &nbsp;</div>
                      <div className="xemthem">
                        <a href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&infowebpartid=1">
                          Xem thêm</a></div>
                    </div>
                    <div className="clearfix">
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td valign="top" style={{backgroundColor: '#e5e5e5', width: '20% !important'}}>
              <div id="ctl00_PlaceHolderContentArea_ctl00_LeftZone" className="column1">
              </div>
            </td>
            <td valign="top">
              <div id="ctl00_PlaceHolderContentArea_ctl00_RightZone" className="column2" style={{width: '100%'}}>
                {/*710px*/}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={3} width="100%">
              <div id="ctl00_PlaceHolderContentArea_ctl00_BottomZone" className="column4" style={{width: '100%'}}>
              </div>
            </td>
          </tr>
        </tbody></table>
    </div>
    )
}

export default Component