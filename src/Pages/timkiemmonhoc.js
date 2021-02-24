import React, { useFetching,useEffect,useMemo,useCallback,useState,useRef  } from 'react';
import TimKiemMonHoc from '../Components/TimKiemMonHoc/Timkiemmonhoc'
import TimKiemTheoTuKhoa from '../Components/TimKiemMonHoc/timkiemtheotukhoa'
import RightContainer from '../Components/Common/right_container'
import Result from '../Components/TimKiemMonHoc/result'
import { useSelector, useDispatch, } from 'react-redux';

export const Component = (props) => {
useEffect(() => {
  console.log("hello");
  return
}, [])

    return(
      <>
   <table id="tb_chuongtrinhdaotao" style={{width: '100%', border: 'none'}} border={0} cellPadding={0} cellSpacing={0}>
  <tbody>
    <tr>
      <td valign="top">
        {/* Left container */}
        <div id="left-column">
          <div id="all">
            <div id="sitemap">
              <span><a href="Home_ChuongTrinhDaoTao.aspx?p=home_academicprogram_index&timespan=38">Trang
                  chủ</a></span><span className="ico-sitemap">Tìm kiếm Môn
                học</span>
            </div>
            <div id="ctl00_PlaceHolderContentArea_ctl00_LeftZone" className="column1">
              <div id="tag-search">
                <div className="tag-list">
                  {/* Ul phân loại tìm kiếm */}
                  <ul className="tag-conner-top-right">
                    <li><a className="actived" style={{textTransform: 'none'}} href="#first"><span>Tìm kiếm Môn
                          học</span></a></li>
                    <li><a style={{textTransform: 'none'}} href="#second" className><span>Tìm kiếm theo Từ
                          khóa</span></a></li>
                    </ul>
                  {/* Loại 1 */}
                 <TimKiemMonHoc/>
                  {/* Loại 2 */}
                 <TimKiemTheoTuKhoa/>
                  {/* Kêt quả tìm kiếm */}
                   <Result/>
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
</>
    )
}

export default Component