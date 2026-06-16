import 'dotenv/config'
import { prisma } from '@/lib/prisma'

async function main() {
  const updateMenus = [
    {
      name: 'カット',
      englishName: 'Cut',
      imageUrl: '/image/menu/cut.png',
      description: '骨格や髪質に合わせた似合わせカットです。',
      price: 4000,
      durationMin: 60,
    },
    {
      name: 'カラー',
      englishName: 'Color',
      imageUrl: '/image/menu/color.png',
      description: '透明感のあるカラーから白髪染めまで対応します。',
      price: 7000,
      durationMin: 90,
    },
    {
      name: 'ヘッドスパ',
      englishName: 'Head Spa',
      imageUrl: '/image/menu/head-spa.png',
      description:
        '心地よいクレンジングで頭皮の汚れを取り除くケアメニューです。',
      price: 3000,
      durationMin: 30,
    },
    {
      name: 'トリートメント',
      englishName: 'Treatment',
      imageUrl: '/image/menu/treatment.png',
      description: '髪質改善を目的とした集中ケアメニューです。',
      price: 5000,
      durationMin: 60,
    },
    {
      name: 'パーマ',
      englishName: 'Perm',
      imageUrl: '/image/menu/perm.png',
      description: '自然な動きやボリュームを出すパーマメニューです。',
      price: 8000,
      durationMin: 120,
    },
  ]

  console.log(
    `{🔄 ${updateMenus.length}件のメニューをそれぞれ別々の英語名で更新中...}`,
  )
  // 2. 🔥 Promise.all を使って、別々の更新処理を同時に並行して実行します
  await Promise.all(
    updateMenus.map((item) =>
      prisma.menu.updateMany({
        where: { name: item.name }, // 各データのIDを指定
        data: {
          name: item.name,
          englishName: item.englishName,
          imageUrl: item.imageUrl,
          description: item.description,
          price: item.price,
          durationMin: item.durationMin,
        },
      }),
    ),
  )
  console.log('データの更新をしました。')
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
