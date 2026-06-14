import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"

export default async function StaffPage() {
    const staffList = await prisma.staff.findMany({
        orderBy: {
            createdAt: "desc",
        },
    })

    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="mb-6 text-2xl font-bold">スタッフ一覧</h1>

            <div className="grid gap-4 md:grid-cols-3">
                {staffList.map((staff) => (
                    <Card key={staff.id}>
                        <CardHeader>
                            <CardTitle>{staff.displayName}</CardTitle>
                            {staff.position && (
                                <CardDescription>{staff.position}</CardDescription>
                            )}
                        </CardHeader>
                        {staff.bio && (
                            <CardContent>
                                <p className="test-sm leading-6">{staff.bio}</p>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </div>
        </main>
    )
}