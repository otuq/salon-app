import { prisma } from "@/lib/prisma"

export default async function MenusPage() {
    const menus = await prisma.menu.findMany({
        orderBy: {
            createdAt: "desc",
        },
    })

    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="mb-6 text-2xl font-bold">メニュー一覧</h1>

            <div className="grid gap-4 md:grid-cols-2">
                {menus.map((menu) => (
                    <div key={menu.id} className="rounded-xl border p-5 shadow-sm">
                        <h2 className="text-lg font-semibold">{menu.name}</h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            {menu.description}
                        </p>

                        <div className="mt-4 flex justify-between text-sm">
                            <span>{menu.durationMin}分</span>
                            <span className="font-semibold">¥{menu.price.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}