import React, { useState } from 'react'

const menuList = [
	{
		index: 1,
		title: '내 발전소',
	},
	{
		index: 2,
		title: '자산 현황',
	},
	{
		index: 3,
		title: '내 정보',
	},
	{
		index: 4,
		title: '공지사항',
	},
]

export default function DashboardTabs() {
	const [quickMenu, setQuickMenu] = useState({
		menuIndex: 0,
		open: false,
		title: '',
	})

	function handleClickOpenModal(menuIndex) {
		setQuickMenu({ menuIndex, open: true })
	}

	function handleClickCloseModal() {
		setQuickMenu({ menuIndex: 0, open: false })
	}

	return (
		<>
			<section>
				{menuList.map((menu) => (
					<button key={menu.index} onClick={() => handleClickOpenModal(menu.index)}>
						<article>
							<h4>내 발전소</h4>
						</article>
					</button>
				))}
			</section>
			{quickMenu.open && (
				<section>
					<article>{menuList[quickMenu.menuIndex].title}</article>
					<button onClick={() => handleClickCloseModal()}></button>
				</section>
			)}
		</>
	)
}
