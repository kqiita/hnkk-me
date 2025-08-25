import React from "react";

export default function Footer({
        children,
}:{
        children:React.ReactNode
}) {
    return(
        <div>
            {children}
            <div>
                <p>&copy;2025 ~2025 kqiita</p>
            </div>
        </div>
    )
}