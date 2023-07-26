import NavBar from "@/components/NavBar";

export default function About() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            <NavBar className="fixed left-0 top-0 flex w-screen"></NavBar>
            <h1 className='pl-2'>ABOUT US</h1>
        </main>
    )
}