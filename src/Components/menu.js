import React, { Component } from 'react'
import {
    Route,
    Link,
  } from "react-router-dom";

 var Menulink =({lable, to, activeOnlyWhenExact} )=>{
    return ( // Customize menu router <Link to>
        <Route 
            path = {to}
            exact = {activeOnlyWhenExact}
            children= {({match})=>{
                var active = (match)? "actived":" ";
                return (
                    <span className={`${active} menu-item`}>
                            <Link to={to}className={`${active} last`}>{`${lable}`}</Link>
                    </span>
                )
            }}
        />
    )}
    const  showMenuLink = (menuLink)=>{
        var result = null;
        if(menuLink.length >0){
            result = menuLink.map((link,index)=>{
                return(
                <Menulink 
                key = {index}
                lable={link.namePage}
                to ={link.to}
                activeOnlyWhenExact = {link.exact}
                ></Menulink>
                )
            })
        }
        return result;
    }

export const Menu = () => {
    const menuLink = [
    {
        "namePage": "Trang Chủ",
        "to":"/trang-chu",
        "exact":true
    },
    {
        "namePage": "Tìm kiếm môn học",
        "to":'/tim-kiem-mon-hoc',
        "exact":false
    },
     {
        "namePage": "Chính sách & Thủ tục",
        "to":"/chinh-sach-thu-tuc",
        "exact":false
    },
     {
        "namePage": "Lịch học của tôi",
        "to":"/lich-cua-toi",
        "exact":false
    },
]
        return (
        <>
            {showMenuLink(menuLink)}
        </>
        )
   
}
   

export default Menu



