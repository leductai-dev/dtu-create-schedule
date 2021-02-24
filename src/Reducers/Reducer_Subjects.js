const initialState =[
    {
      '_id':'01524',
      'day':'Thứ 3',
      'time':'07:00',
      'class_id':'PPL P1',
      'subject_name':'Phương Pháp Luận',
      'room':'P401',
      'location':'254 Nguyễn Văn Linh',
      'sibling':'1115',
      'stage':'1',
      'color':{
              r: '241',
              g: '112',
              b: '19',
              a: '1',
      }
    },
    {
      '_id':'01524',
      'day':'Thứ 6',
      'time':'07:00',
      'auth_time':'07:00-09:00',
      'class_id':'PPL P1',
      'subject_name':'Phương Pháp Luận',
      'room':'P401',
      'location':'254 Nguyễn Văn Linh',
      'sibling':'1115',
      'stage':'1',
      'color':{
              r: '241',
              g: '112',
              b: '19',
              a: '1',
      }
    },
    {
      '_id':'01524',
      'day':'Thứ 2',
      'time':'13:00',
      'class_id':'MTH 214A',
      'subject_name':'Toán cao cấpA1',
      'room':'P401',
      'location':'254 Nguyễn Văn Linh',
      'sibling':'1116',
      'stage':'1',
      'color':{
              r: '241',
              g: '112',
              b: '19',
              a: '1',
      }
    },
    {
      '_id':'01524',
      'day':'Thứ 4',
      'time':'13:00',
      'class_id':'MTH 214A',
      'subject_name':'Toán cao cấpA1',
      'room':'P401',
      'location':'254 Nguyễn Văn Linh',
      'sibling':'1116',
      'stage':'1',
      'color':{
              r: '241',
              g: '112',
              b: '19',
              a: '1',
      }
    },
  ]

const Subject = (state = initialState, action) => {
    switch (action.type) {
        case "Action_ChangeSubjectColor":
           {
            const {sibling} = action.payload
            const {color} = action.payload
            console.log(color)
            const newState = [...state]
            const _state = newState.map(function(subject,index){
                if(subject.sibling == sibling){
                  const _subject= {...subject}
                  _subject.color = color
                  return _subject
                }
                else{
                  return subject
                }
            })
            console.log(_state);
            return _state
          }
        case "Action_HideContedxtMenu":
            {
            state ={...state,
               
            }
            return state
            }
       
        default:
            return state
    }
}
export default Subject;


