import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b bg-background">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Post App
                </Link>
            </div>
        </header>
    )
}