import Footer from "./components/(globalnav)/footer/Footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        
        <main>{children}</main>
        <Footer><></></Footer>
      </body>
    </html>
  )
}