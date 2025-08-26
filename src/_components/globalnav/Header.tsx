import React from "react";
import Image from "next/image";
import ImgSyahuneko from "public/syahuneko-ver1-r225g234b205.png"
export default function Header({children,}:{children:React.ReactNode}){
    return (
        <div>
            <div>
            <Image src={ImgSyahuneko} alt="syahuneko" width={128} height={128} />                
            </div>
            <div>
                <h1>はんかくくんのページ</h1>
            </div>
            {children}
        </div>       
    );
}