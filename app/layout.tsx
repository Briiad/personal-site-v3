import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import StoreProvider from "./StoreProvider";
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk"
});
const geistSans = Geist({ 
  subsets: ["latin"], 
  variable: "--font-geist-sans"   
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"], 
  variable: "--font-geist-mono"   
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Add fonts to the html tag so variables are available everywhere
    <html lang="en" className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground selection:bg-primary/30">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}