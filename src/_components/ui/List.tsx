import React from "react";

export default function List({children}:{children : React.ReactNode}){
    return(
        <ul>
            {children}
        </ul>
    )
}
export function ListItem({
    id,
    children,
}:{
    id:string
    children:React.ReactNode
}){
    return(
        <li key={id}>
            {children}
        </li>
    )
}