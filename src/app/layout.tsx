import type { Metadata } from 'next'
import {  Poppins } from 'next/font/google'
import SHAS from 'shas-app-controller'
import './globals.css'


const inter = Poppins({ subsets: ['latin'], weight: "500" })

export const metadata: Metadata = {
  applicationName: "Birthday wish",
  authors: [
    {
      name: "Shawkat Hossain Maruf",
      url: "https://sh-portfolio-maker.vercel.app/p/shawkath646"
    }
  ],
  title: {
    default: "Happy Birthday",
    template: "%s | SH Authentication System"
  },
  description: "Designed with love, this website allows you to send heartfelt wishes to your favorite people seamlessly and from anywhere. Packed with a plethora of animations, the site is not just visually stunning but also well-organized and responsive across all devices. Celebrate special moments with us, bringing joy to loved ones no matter where they are.",
  category: "website",
  icons: ["/favicon.ico"],
  publisher: "CloudBurst Lab",
  creator: "Shawkat Hossain Maruf",
  keywords: ["Next.js 14", "birthday wishes", "animated greetings", "well-organized", "remotely wish", "timer wish", "special occasions", "celebration", "heartfelt messages", "joyous moments", "virtual celebrations", "digital greetings", "responsive design", "animated birthday wishes", "seamless wishes", "remote celebrations", "best wishes", "personalized messages", "cloudburst lab"],
  metadataBase: new URL('https://birthday-wish-eight.vercel.app/'),
  openGraph: {
    images: '/opengraph-image.png',
  },
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  const { ContentWrapper } = await SHAS({
    imageOptimization: true
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  )
}
