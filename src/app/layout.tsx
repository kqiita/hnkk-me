import Footer from "@/_components/globalnav/Footer";
import Header from "@/_components/globalnav/Header";
import Sidebar from "@/_components/globalnav/Sidebar";
import List,{ListItem} from "@/_components/ui/List";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header>
          <div></div>
        </Header>
        <Sidebar>
          <List>
            <ListItem id="about">about</ListItem>
            <ListItem id="blog">blog</ListItem>
          </List>
        </Sidebar>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}