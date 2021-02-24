import React from 'react'
import SubjectContent from '../Components/LichCuaToi/SubjectContent/SubjectContent'
import SubjectMenu from '../Components/LichCuaToi/SubjectMenu/SubjectMenu'
import ContextMenu from '../Components/ContextMenu/ContextMenu'
import ColorPicker from '../Components/ColorPicker/ColorPicker'

export const Component = (props) => {
    return(
          <div className="lichcuatoi_container">
            <SubjectMenu/>
            <SubjectContent/>
            <ContextMenu/>
            <ColorPicker/>

          </div>
    )
}

export default Component