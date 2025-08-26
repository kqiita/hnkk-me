import Footer from "@/_components/globalnav/Footer";
import Header from "@/_components/globalnav/Header";

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}