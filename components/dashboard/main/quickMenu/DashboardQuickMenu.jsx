import React from 'react'
import Link from 'next/link'

const menuList = [
	{
		index: 1,
		title: '내 발전소',
		pathname: '/power-plant/power-plant-info',
	},
	{
		index: 2,
		title: '자산 현황',
		pathname: '/my-asset/asset-status',
	},
	{
		index: 3,
		title: '내 정보',
		pathname: '/user/user-info',
	},
	{
		index: 4,
		title: '공지사항',
		pathname: '/notice/notice-list',
	},
]

export default function DashboardQuickMenu() {
	return (
		<div style={{ border: 'solid 1px red' }}>
			<header>
				<h1>퀵메뉴</h1>
			</header>
			<article
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}>
				{menuList.map((menu) => (
					<div key={menu.index} style={{ padding: 10 }}>
						<Link href={{ pathname: `${menu.pathname}` }}>
							<a>{menu.title}</a>
						</Link>
					</div>
				))}
			</article>
		</div>
	)
}
