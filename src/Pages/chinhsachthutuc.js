import React from 'react'
import RightContainer from '../Components/Common/right_container'

export const Component = (props) => {
    return(
     <table id="tb_chuongtrinhdaotao" style={{width: '100%', border: 'none'}} border={0} cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td valign="top">
              {/* Left container */}
              <div id="left-column">
                <div id="all">
                  <div id="sitemap">
                    <span><a href="Home_ChuongTrinhDaoTao.aspx?p=home_academicprogram_index&timespan=38">Trang chủ</a></span><span className="ico-sitemap">Chính sách và Thủ tục</span>
                  </div>
                  <div id="ctl00_PlaceHolderContentArea_ctl00_LeftZone" className="column1">
                    <div className="title">
                      Chính sách &amp; Thủ tục</div>
                    <div className="title-child">
                      <a href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&infowebpartid=3">
                        Chính sách ưu tiên theo đối tượng &amp; khu vực</a></div>
                    <div className="content-detail">
                      A. CHÍNH SÁCH ƯU TIÊN THEO ĐỐI TƯỢNG 
                      Mức chênh lệch điểm ưu tiên theo đối tượng là 1 điểm. Hiện nay, nhóm ưu tiên cao nhất được 2 điểm (điểm trúng tuyển thấp hơn so với học sinh KV3 là 2 điểm), đó...</div>
                    <div className="chitiet">
                      <a href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&infowebpartid=3">
                        Chi tiết</a>
                      <div className="clearfix">
                      </div>
                    </div>
                    <div className="title-child">
                      <a href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&infowebpartid=2">
                        Điều kiện nhập học</a></div>
                    <div className="content-detail">
                      Để trở thành sinh viên của Trường Đại học Duy Tân, khi làm thủ tục nhập học, thí sinh cần có đủ các điều kiện (với minh chứng giấy tờ) sau: 
                      * Đối với hệ Cao đẳng và hệ Đại học: cho Đối tượng 1, 2,...</div>
                    <div className="chitiet">
                      <a href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&infowebpartid=2">
                        Chi tiết</a>
                      <div className="clearfix">
                      </div>
                    </div>
                    <div className="title-child">
                      <a href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&infowebpartid=4">
                        Quy trình Đăng ký Xét tuyển &amp; Sơ tuyển</a></div>
                    <div className="content-detail">
                      Trường không tổ chức thi tuyển sinh, thí sinh đăng ký nguyện vọng vào Đại học Duy Tân có thể thi 
                      nhờ tại bất kỳ trường ĐH-CĐ nào có tổ chức thi (có cùng khối thi thí sinh đăng ký nguyện vọng học),...</div>
                    <div className="chitiet">
                      <a href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&infowebpartid=4">
                        Chi tiết</a>
                      <div className="clearfix">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right container */}
                    <RightContainer/>
            </td>
          </tr>
        </tbody>
      </table>
    )
}

export default Component