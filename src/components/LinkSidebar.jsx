import React from 'react'
import { Link } from 'react-router-dom'

const LinkSidebar = ({to,text}) => {
    return (
        <Link to={to} style={{textDecoration:"none"}} >{text}</Link>
    )
}

export default LinkSidebar