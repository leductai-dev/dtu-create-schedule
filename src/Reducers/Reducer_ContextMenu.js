const initialState = {
    show:false,
    subject_id:'',
    clientX:0,
    clientY:0,
}

const ContextMenu = (state = initialState, action) => {
    switch (action.type) {
        case "Action_ShowContextMenu":
           {
            // state = action.payload
           /*  state ={...state,
                show:action.payload.show,
                subject_id:action.payload.subject_id,
                clientX:action.payload.clientX,
                clientY:action.payload.clientY,
            } */
            state = action.payload
            return state
            }
        case "Action_HideContextMenu":
            {
            state ={...state,
                show:action.payload.show,
                subject_id:action.payload.subject_id,
                clientX:action.payload.clientX,
                clientY:action.payload.clientY,
            }
            return state
            }
       
        default:
            return state
    }
}
export default ContextMenu;


