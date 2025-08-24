import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h2>Not Found</h2>
            <p>ページが見つかりません</p>
            <Link href="/">HOMEへ戻る</Link>
        </div>
    )

}