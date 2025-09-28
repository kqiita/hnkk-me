import Image from "next/image";
import Link from "next/link";
import List,{ListItem} from "@/_components/ui/List";
import '~/global.css'
import LogoImg from "public/syahuneko-ver1-r225g234b205.png"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div id="header">
          <div id="logo">
            <div id="logo-img">
              <Image id="logo-img-img" src={LogoImg} alt="syahuneko-ver1-r225g234b205"></Image>
            </div>
            <div id="logo-txt">
              <p>hnkk.me</p>
            </div>
          </div>
          <div id="header-links">
            <List>
              <ListItem id="about">
                <Link href="./about" target="_blank">about</Link>
              </ListItem>
              <ListItem id="blogs">
                <Link href="./blogs" target="_blank">blogs</Link>
              </ListItem>
            </List>
          </div>
        </div>        
        <div id="sidebar">
          <List>
            <ListItem id="about">
              <Link href="./about" target="_blank">about</Link>
            </ListItem>
            <ListItem id="blogs">
              <Link href="./blogs" target="_blank">blogs</Link>
            </ListItem>
          </List>
        </div>
        <div id="content">{children}</div>
        <div id="footer">
          <p id="copyright">&copy; 2025 kqiita</p>
        </div>
      </body>
    </html>
  )
}