import 'dotenv/config'
import { prisma } from '@/lib/prisma'

async function main() {
  const staff = [
    {
      displayName: '佐藤 美咲',
      imageUrl: '/image/staff/sato.png',
    },
    {
      displayName: '鈴木 健太',
      imageUrl: '/image/staff/suzuki.png',
    },
    {
      displayName: '川口 達郎',
      imageUrl: '/image/staff/kawaguchi.png',
    },
  ]

  console.log(`{🔄 ${staff.length}件の情報を更新中...}`)
  //Promise.allをつける必要があるawaitも忘れずに。todoアプリで確認
  await Promise.all(
    staff.map((item) =>
      prisma.staff.updateMany({
        where: { displayName: item.displayName },
        data: {
          imageUrl: item.imageUrl,
        },
      }),
    ),
  )
  console.log('データの更新をしました。')
  const staffInfo = await prisma.staff.findMany()
  console.log(JSON.stringify(staffInfo, null, staffInfo.length))
}

main()
  .catch((e) => {
    console.error('エラーが発生しました。接続設定を確認してください:')
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

// async function main() {
//   const updateMenus = [
//     {
//       name: 'トリートメント',
//       imageUrl: null,
//     },
//     {
//       name: 'カラー',
//       imageUrl: null,
//     },
//     {
//       name: 'カット',
//       imageUrl: null,
//     },
//     {
//       name: 'パーマ',
//       imageUrl: null,
//     },
//     {
//       name: 'ヘッドスパ',
//       imageUrl: null,
//     },
//   ]

//   console.log(
//     `{🔄 ${updateMenus.length}件のメニューをそれぞれ別々の英語名で更新中...}`,
//   )
//   // 2. 🔥 Promise.all を使って、5件の別々の更新処理を同時に並行して実行します
//   await Promise.all(
//     updateMenus.map((item) =>
//       prisma.menu.updateMany({
//         where: { name: item.name }, // 各データのIDを指定
//         data: { imageUrl: item.imageUrl }, // それぞれ違う英語名を指定
//       }),
//     ),
//   )
//   console.log('データが追加されました:')
// }

// main()
//   .catch((e) => {
//     console.error('エラーが発生しました。接続設定を確認してください:')
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

// 2. 🔥 Promise.all を使って、別々の更新処理を同時に並行して実行します
// await Promise.all(
//   updateMenus.map((item) =>
//     prisma.menu.updateMany({
//       where: { name: item.name }, // 各データのIDを指定
//       data: {
//         name: item.name,
//         englishName: item.englishName,
//         imageUrl: item.imageUrl,
//         description: item.description,
//         price: item.price,
//         durationMin: item.durationMin,
//       },
//     }),
//   ),
// )
