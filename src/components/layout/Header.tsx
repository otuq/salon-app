import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import styles from "@/app/style.module.css"

export default function Header() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#f7f3ed]">
            <Image
                src="/hero.png"
                alt="ヘアスタイルモデル"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-white/40" />
            <header className={`fixed top-0 z-50 w-full`}>
                <div className={`${styles.transparentBottom} absolute inset-0`} />
                <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
                    <Link href="/">
                        <div className="flex flex-col items-center">
                            <p className="text-4xl font-cormorant tracking-widest">Lueur</p>
                            <p className="text-lg text-muted-foreground font-cormorant">hair salon</p>
                        </div>
                    </Link>
                    <nav>
                        <ul className="flex text-[20px] font-cormorant font-light tracking-wide">
                            <li className="px-6 border-x border-black"><Link href="#concept" className="hover:opacity-50">Concept</Link></li>
                            <li className="px-6"><Link href="/menu" className="hover:opacity-50">Menu</Link></li>
                            <li className="px-6 border-x border-black"><Link href="/stylist" className="hover:opacity-50">Stylist</Link></li>
                            <li className="px-6"><Link href="/reservations" className="hover:opacity-50">Reservation</Link></li>
                            <li className="px-6 border-x border-black"><Link href="#access" className="hover:opacity-50">Access</Link></li>
                            <li className="px-6 border-r border-black"><Link href="/blog" className="hover:opacity-50">Blog</Link></li>
                        </ul>
                    </nav>

                    <Button className="p-5 bg-[#000000a1]" >
                        <Link href="/reservation">🗓️ ご予約はこちら</Link>
                    </Button>
                </div>
            </header>
            <div className="relative z-10 mx-auto flex min-h-screen items-center max-w-6xl px-6">
                <div className="max-w-xl">
                    <h1 className={`${styles.textOutline} text-4xl leading-relaxed font-medium tracking-widest md:text-6xl`}>
                        毎日が少し楽しくなる
                        <br />
                        ヘアスタイルを
                    </h1>

                    <p className={`${styles.textOutline} mt-8 leading-8 text-muted-foreground`}>
                        お客様一人ひとりの髪質やライフスタイルに寄り添い、
                        <br />
                        再現性の高いヘアデザインをご提案します。
                    </p>

                    <Button asChild className="mt-10 bg-[#000000aa] p-5">
                        <Link href="/reservation">ご予約はこちら　→</Link>
                    </Button>
                </div>
            </div>
        </section >

    )
}