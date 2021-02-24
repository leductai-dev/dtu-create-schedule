const initialState ={
    show:false,
    subject:null
}


const ColorPicker = (state = initialState, action) => {
    switch (action.type) {
        case "Action_ShowColorPicker":
           {
            state = {...state,
                    show:action.payload.show,
                    subject:action.payload.subject
                }
            return state
            }
        case "Action_HideColorPicker":
            {
            state = {...state,show:action.show}
            return state
            }
       
        default:
            return state
    }
}
export default ColorPicker;


