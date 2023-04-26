import '../styles/globals.modules.css'
 
export default function RootLayout({ children }) {
 return (
    <html lang="en" translate='no'>
      <head>
        <title>Our wedding 💍💕</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
