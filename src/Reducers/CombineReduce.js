import {combineReducers} from 'redux'

import contextMenu from './Reducer_ContextMenu';
import subjects from './Reducer_Subjects';
import colorPicker from './Reducer_ColorPicker';



const appReducers = combineReducers({
    contextMenu,subjects,colorPicker
})
export default appReducers;
