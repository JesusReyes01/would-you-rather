import React from 'react'
import { components } from "react-select";
import defaultImage from '../Images/default-image.png'


const UserOptions = (props) => {
    const { Option } = components;

    const addDefaultImage = (e) => {
        e.target.src = defaultImage
    }
    return(
        <Option {...props}>
            <img
                src={props.data.icon}
                onError={addDefaultImage}
                style={{ width: 24, borderRadius: 50, alignItems: 'center', display: 'flex'}}
                alt={props.data.label}
            />
            {props.data.label}
        </Option>
    )
}

export default UserOptions


