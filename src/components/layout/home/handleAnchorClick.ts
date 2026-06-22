//ブラウザに残ったアンカーリンクを削除する。
export const handleAnchorClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  behavior: ScrollBehavior = 'smooth',
) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: behavior })
}
