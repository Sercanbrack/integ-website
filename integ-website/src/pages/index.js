import { Inter } from 'next/font/google'
import Link from 'next/link'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <NavBar className="fixed left-0 top-0 flex w-screen"></NavBar>
    </main>
  )
}
