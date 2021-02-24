import React, { useState,useEffect,Suspense } from 'react';
import { Redirect } from "react-router-dom";
import routes from './Routes.js';
import Trangchu from './Pages/trangchu'
import Menulink from './Components/menu.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
    Link,

} from "react-router-dom";

function App() {
  useEffect(() => {
    
  }, [])

return(
  <Router>  
  <div id="wrapper">
        <div id="wrapper-bottom">
          <div id="header">
            <div id="header-wrapper">
              <div id="header-top">
                <div id="header-top-left">
                  <ul>
                    <li className="gach"><a href="http://nhungdieucanbiet.edu.vn" target="_blank">Những điều
                        Cần biết về TS
                        2021</a></li>
                    <li><a href="http://tuyensinh.duytan.edu.vn" target="_blank">DTU - Tuyển sinh
                        2021</a></li>
                  </ul>
                </div>
                <div id="header-top-right">
                  <table>
                    <tbody>
                      <tr>
                        <td className="myduytan">
                          MyDuyTan
                        </td>
                        <td className="ico-middle">
                          <a href="http://mydtu.duytan.edu.vn" target="_blank">Sinh viên</a>
                        </td>
                        <td>
                          <a href="http://mydtu.duytan.edu.vn" target="_blank">Cán bộ - Giảng
                            viên</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="clearfix">
                </div>
              </div>
              <div id="subheader">
                <div className="clearfix">
                </div>
                <div id="menu">
                  <div id="menu-conner-right">
                    <span className="menu-logo-banner">
                      <a href="http://dtu.edu.vn" target="_blank">đại học
                        duy
                        tân
                      </a>
                    </span>
                  {/*   <span className="menu-item ">
                          <Link to='/' className="" >Trang chủ</Link>
                    </span>
                    <span className="menu-item actived">
                      <a className="actived" href="Home_ChuongTrinhDaoTao.aspx?p=home_coursesearch&timespan=71">
                        Tìm kiếm Môn học
                      </a>
                    </span>
                    <span className="menu-item ">
                      <a className=" last" href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&timespan=71">Chính
                        sách &amp; Thủ tục
                      </a>
                    </span>
                    <span className="menu-item ">
                      <a className=" last" href="Home_ChuongTrinhDaoTao.aspx?p=home_listpolproc&timespan=71">
                        Đăng ký tín chỉ
                      </a>
                    </span> */}
                    {<Menulink/>}

                  </div>
                  <button id="btn_login">Hello</button>
                </div>
              </div>
            </div>
          </div>
          {/*end header*/}
          <div id="wrapper-content">
            <div id="content">
              <div id="one-colume">
                <div id="one-col-bottom">
                <Redirection/>
                </div>
                <div id="footer">
                  Copyright© 2012 Đại học Duy Tân.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Router>
 
    );
  }
  function Redirection(){ 
    var result = null;
    result = routes.map((route,index)=>{
      return <Route path={route.path} component={route.page}  key={index} exact = {route.exact}/>
    });
    return  <Switch>{result}</Switch>;
    console.log(result);
  }



export default App;

