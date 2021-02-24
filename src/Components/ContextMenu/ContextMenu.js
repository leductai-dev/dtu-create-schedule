import React, {useState, useRef,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {Action_ShowContextMenu,Action_HideContextMenu} from '../../Actions/Actions_ContextMenu'
import {Action_ShowColorPicker,Action_HideColorPicker} from '../../Actions/Actions_ColorPicker'
import ColorPicker from '../ColorPicker/ColorPicker';
function ContextMenu(props)  {
    const [colorPicker,setColorPicker] = useState(false)
    const Context = useSelector((state) => state.contextMenu)
    const root = useRef(null);
    const dispatch = useDispatch()
    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => { // có return là component willunmount
            document.removeEventListener('click',handleClick);
          }
    },[Context]) // nếu có tham số thì kiêm luôn didmout và did update

    const handleClick =(e)=>{
        if(Context.show){
            dispatch(Action_HideContextMenu(false))
        }
    }
    
    var child = {}
    if(Context.show){
        const clickX = Context.clientX;
        const clickY = Context.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        /* const rootW = root;
        const rootH = root; */
        const rootW = 160;
        const rootH = 172;
        const right = (screenW - clickX) > rootW;
        const left = !right;
        const top = (screenH - clickY) > rootH;
        const bottom = !top;
        let _left = null; let _top = null
        right? _left = `${clickX + 5}px` : _left = `${clickX - rootW - 5}px`
        top   ? _top = `${clickY + 5}px` :  _top =`${clickY - rootH - 5}px`
        child = {
            left: _left,
            top: _top,
        };
    }
    const handle_ChangColor =()=>{
        const data ={
            show:true,
            subject:Context.subject
        }
        dispatch(Action_ShowColorPicker(data))
    }
        const {subject_id,id,color} = Context
        return(Context.show ||null) &&
            <> 
            <div style={child} ref={root} className="contextMenu">
                <div className="contextMenu--option">
                    <button className="btn_option">Thông tin môn học</button>
                </div>
                <div className="contextMenu--option">
                    <button className="btn_option">Thông tin lớp học</button>
                </div>
                <div className="contextMenu--option">
                    <button className="btn_option">Tìm kiếm lớp khác</button>
                </div>
                <div className="contextMenu--option">
                    <button onClick={()=>{handle_ChangColor()}} className="btn_option">Thay đổi màu</button>
                </div>
                <div className="contextMenu--option ">
                     <button className="btn_option btn_option_disabled">Chức năng mới</button>
                </div>
                <div className="contextMenu--separator" />
                <div className="contextMenu--option">
                     <button className="btn_option">Bỏ chọn môn này</button>
                </div>
            </div>
            </>
    };
export default ContextMenu