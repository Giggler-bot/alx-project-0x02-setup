import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="flex space-x-4">
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}