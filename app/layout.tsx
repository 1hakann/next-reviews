import type { ReactNode } from "react"
import Link from "next/link"

interface LayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/reviews">Reviews</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}