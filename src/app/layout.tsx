import List,{ListItem} from "@/_components/ui/List";
import '~/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div id="header">

        </div>
        <div id="sidebar">
          <List>
            <ListItem id="about">about</ListItem>
            <ListItem id="blog">blog</ListItem>
          </List>
        </div>        
        <main>{children}</main>
        <div id="footer">
          <p>&copy; 2025 kqiita</p>
        </div>
      </body>
    </html>
  )
}