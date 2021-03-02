import React from 'react'
import { components } from "react-select";

const UserOptions = (props) => {
    const { Option } = components;

    return(
        <Option {...props}>
            <img
                src={props.data.icon}
                style={{ width: 24, borderRadius: 50, alignItems: 'center', display: 'flex'}}
                alt={props.data.label}
            />
            {props.data.label}
        </Option>

    )
}

export default UserOptions


