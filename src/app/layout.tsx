import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Providers } from './providers'
import { Sidebar } from './sidebar/sidebar'
import clsx from 'clsx'
import '../styles/globals.css'

const openSans = Open_Sans({
    weight: ['300', '400', '500', '700', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Kzen',
    description: 'Kzen life system',
    icons: [{ rel: 'icon', url: './heartbeat.svg' }],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={clsx(openSans.className, 'flex w-full h-full')}>
                <Providers>
                    <nav className="kzen-side-bar">
                        <Sidebar />
                    </nav>
                    <main className="kzen-main">{children}</main>
                </Providers>
            </body>
        </html>
    )
}
