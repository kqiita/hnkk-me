import React from "react";

export default function List({children}:{children : React.ReactNode}){
    return(
        <div>
            {children}
        </div>
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
        <div key={id}>
            {children}
        </div>
    )
}