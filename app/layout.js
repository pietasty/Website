export const metadata = {
  title: "Yubo's Website",
  description: "I don't know what I am doing.",
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
