import { ThemeProvider } from "@/components/theme-provider"
import {Inter} from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <>
     <ClerkProvider 
      appearance={{
        baseTheme:shadesOfPurple
      }}
     >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.className} dotted-background`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-gray-900  py-12">
              <div className="container mx-auto px-4 text-center text-gray-200"> 
                <p>Footer content goes here</p> 
                </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
    </>
  )
}