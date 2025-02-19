import './globals.css'

import localFont from 'next/font/local'
import Script from 'next/script'

import QueryProvider from '@/shared/query/provider'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-sans">
        <QueryProvider>
          <div className="bg-background relative mx-auto h-dvh w-full max-w-[400px] px-4 sm:w-[400px]">
            {children}
          </div>
        </QueryProvider>
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8773e5bd8b2289d110206a4c37365a40&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
