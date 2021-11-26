import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { LangStateContext, UserStateContext } from '@/core/store/common/create'
// local icon
import PersonIcon from '@/public/static/icon/person.svg'
import MenuIcon from '@/public/static/icon/menu.svg'
import HeaderArrowIcon from '@/public/static/icon/arrow_r.svg'
import CloseIcon from '@/public/static/icon/menu_close.svg'
import LangIcon from '@/public/static/icon/lang.svg'
import MenuPlusIcon from '@/public/static/icon/menu_plus.svg'
import MenuMinusIcon from '@/public/static/icon/menu_minus.svg'
import { useTranslation } from 'react-i18next'
import { useUserContext } from '@/core/store/api/providers/UserApiProvider'
import { POST_USER_LOGOUT } from '@/core/store/api/create/userCreate'
import { removeUserCookie } from '@/core/config/cookie'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { userInitialState } from '@/core/store/common/initialState'
import { constants } from '@store/common/constants'
import { useAlertContext } from '@/core/store/common/providers/AlertProvider'
import { resource } from '@/lang/resource'

const { SET_INIT_USER: SET_INIT_USER_CONST } = constants

// 디바이스 초기화 상태
const initialDeviceState = {
	isMobile: false,
	isTablet: false,
	isDesktop: false,
	offsetWidth: 0,
}

export default function Header() {
	const { t } = useTranslation()
	const { pathname } = useRouter()
	const { userState, userDispatch } = useContext(UserStateContext)
	const { langState, useLanguage } = useContext(LangStateContext)
	const { dispatch } = useUserContext()
	const [, , removeCookie] = useCookies(['LOGIN_INFO'])
	const { push, asPath, reload } = useRouter()
	const { $alert } = useAlertContext()

	const [menuOpen, setMenuOpen] = useState(false) // 데스크톱 메뉴 토글 상태
	const [menuOpenMobile, setMenuOpenMobile] = useState(false) // 모바일 메뉴 토글 상태
	const [infoOpen, setInfoOpen] = useState(false) // 사용자 정보 상태에 대한 토글
	const [spreadMobMnuList, setSpreadMobMnuList] = useState([]) // 모바일 서브메뉴 펼침 상태
	const [ScrollY, setScrollY] = useState(0) // 스크롤 위치 저장
	const [BgStatus, setBgStatus] = useState(false) // 배경색 상태

	const [device, setDevice] = useState(initialDeviceState) // 디바이스 상태
	const { isMobile, isTablet, isDesktop } = device

	const handleFollow = () => {
		setScrollY(window.pageYOffset)
		if (ScrollY > 28) {
			// 28 이상이면 배경색 보이게
			setBgStatus(true)
		} else {
			setBgStatus(false)
		}
	}
	useEffect(() => {
		const watch = () => {
			window.addEventListener('scroll', handleFollow)
		}
		watch()
		return () => {
			window.removeEventListener('scroll', handleFollow)
		}
	})

	// 모바일 메뉴를 닫았을 때 펼쳤던 메뉴를 초기화 시켜준다.
	useEffect(() => {
		if (!menuOpenMobile) setSpreadMobMnuList([])
	}, [menuOpenMobile])

	// 메뉴를 이동할 때마다 메뉴를 닫아준다.
	useEffect(() => {
		if (menuOpenMobile) setMenuOpenMobile(!menuOpenMobile)
		if (menuOpen) setMenuOpen(!menuOpen)
	}, [asPath])

	// 초기 디바이스를 셋팅하고, 디바이스 설정 이벤트를 생성한다.
	useEffect(() => {
		deviceCallback()
		window.addEventListener('resize', deviceCallback, true)
	}, [])

	// device가 변경 되면 메뉴를 닫는다.
	useEffect(() => {
		if (menuOpenMobile && isDesktop) {
			setMenuOpenMobile(false)
		} else if (menuOpen && (isMobile || isTablet)) {
			setMenuOpen(false)
		}
	}, [device])

	/*
	 * 디바이스 셋팅 콜백 함수
	 */
	const deviceCallback = useCallback(() => {
		const offsetWidth = document.body.offsetWidth

		if (offsetWidth <= 480) {
			setDevice({ ...initialDeviceState, isMobile: true, offsetWidth })
		} else if (offsetWidth <= 767 && offsetWidth > 480) {
			setDevice({ ...initialDeviceState, isTablet: true, offsetWidth })
		} else {
			setDevice({ ...initialDeviceState, isDesktop: true, offsetWidth })
		}
	}, [])

	// 메뉴 토글
	function handleMousePos(type) {
		if (type === 'mouseover') {
			setMenuOpen(true)
		} else {
			setMenuOpen(false)
		}
	}
	/*
	 * 데스크톱 메뉴 토글 상태 변경
	 */
	function handleClickToggleMenu() {
		setMenuOpen(!menuOpen)
	}

	/*
	 * 모바일 메뉴 토글 상태 변경
	 */
	function handleTouchToggleMenuMMobile(e, value) {
		e.stopPropagation()
		if (value === true) {
			setMenuOpenMobile(true)
			setTimeout(() => {
				const element = document.querySelectorAll('.m-menu')[0]
				if (element) {
					element.classList.add('m-menu__active')
				}
			}, 0)
		} else {
			setMenuOpenMobile(false)
		}
	}

	/*
	 * 사용자 정보 토글 상태 변경
	 */
	function handleClickToggleInfo() {
		setInfoOpen(!infoOpen)
	}

	/*
	 * 메뉴 외 영역 클릭 시 모바일 메뉴 닫음
	 */
	function handleTouchMobMenuClose(e) {
		if (menuOpenMobile && e.target.id === 'm-menu-bg') setMenuOpenMobile(false)
	}

	/*
	 * Plus메뉴 버튼을 클릭할 경우 나타나게 하는 함수
	 */
	function handleClickSpreadMobMnu(menuIndex) {
		if (spreadMobMnuList.indexOf(menuIndex) === -1) setSpreadMobMnuList([...spreadMobMnuList, menuIndex])
		else setSpreadMobMnuList(spreadMobMnuList.filter((m) => m !== menuIndex))
	}

	/*
	 * 언어 변경
	 */
	function handleClickLang() {
		let langValue, langText
		const resourceKeys = Object.keys(resource)
		const resourceValues = Object.values(resource)
		const lIndex = resourceKeys.findIndex((l) => l === langState.lang)

		if (lIndex >= resourceKeys.length - 1) {
			langValue = resourceValues[0].value
			langText = resourceValues[0].text
		} else {
			langValue = resourceValues[lIndex + 1].value
			langText = resourceValues[lIndex + 1].text
		}

		useLanguage({
			lang: langValue,
			langText: langText,
		})

		reload()
	}

	/*
	 * 로그아웃 처리
	 */
	async function handleClickSignOut() {
		try {
			const response = await POST_USER_LOGOUT(dispatch)
			if (response.data.success) {
				// 회원정보 초기화
				userDispatch({
					type: SET_INIT_USER_CONST,
					payload: userInitialState,
				})

				// 유저 쿠키 지움
				removeUserCookie(removeCookie)

				$alert(t('user.logoutAlert')).then(() => {
					push('/')
				})
			} else {
				if (response.data) {
					const { code, msg } = response.data
					console.log(`${code} : ${msg}`)
				} else {
					console.error(response)
				}
			}
		} catch (error) {
			if (error.data) {
				const { code, msg } = error.data
				console.log(`${code} : ${msg}`)
				if (code === 'ESVC005') {
					// user state 초기화
					userDispatch({
						type: SET_INIT_USER_CONST,
						payload: userInitialState,
					})

					// 쿠키를 지움
					removeUserCookie(removeCookie)

					$alert(t('user.logoutAlert')).then(() => {
						push('/')
					})
				}
			} else {
				console.error(error)
			}
		}
	}

	return (
		<header
			className={`header ${menuOpen ? 'active__main' : ''} ${
				pathname.includes('/my-silkroad') ? 'header__my_silkroad' : ''
			} ${BgStatus ? 'active__main' : ''} ${BgStatus ? 'active__silkroad' : ''}`}>
			<div className={'gnb ' + (menuOpen ? 'active' : '')}>
				<div className="container gnb-container">
					<Link href={{ pathname: '/' }}>
						<a className="logo-frame">
							<img className="logo" src="/static/images/logo.svg" alt="silkroad main header logo" />
							<img
								className="logo__main"
								src="/static/images/logo_w.svg"
								alt="silkroad main header logo"
							/>
						</a>
					</Link>

					<nav className={'gnb-nav-container ' + (menuOpen ? 'active' : '')}>
						<ul
							className="gnb"
							onMouseOver={(e) => handleMousePos(e.type)}
							onMouseLeave={(e) => handleMousePos(e.type)}>
							<li>
								<Link href={{ pathname: '/test' }}>
									<a>{'Test'}</a>
								</Link>
								<ul className={`lnb ${menuOpen ? 'active' : ''}`}>
									<li>
										<Link href={{ pathname: '/test' }}>
											<a>{'Test'}</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href={{ pathname: '/auth' }}>
									<a>{'Auth'}</a>
								</Link>
								<ul className={`lnb ${menuOpen ? 'active' : ''}`}>
									<li>
										<Link href={{ pathname: '/auth' }}>
											<a>{'Auth'}</a>
										</Link>
									</li>
								</ul>
							</li>
							{userState.id ? (
								<li className="m-n">
									{/*
									 	Link에 my실크로드 링크 넣어주세요
									*/}
									<Link href={{ pathname: '/my-silkroad/basic/service-usage-status' }}>
										<a>{t('header.menu4')}</a>
									</Link>
								</li>
							) : null}
						</ul>
					</nav>
					<div className="gnb-setting">
						<div className="setting-info">
							{userState.id ? (
								<div className="login-y info-toggle" onClick={handleClickToggleInfo}>
									<PersonIcon className="p-n" />
									<span className="m-n t-n">{userState.name}</span>
									<ul className={'info-list m-n ' + (infoOpen ? 'active__info-list' : '')}>
										<li>
											<Link href={{ pathname: '/user/user-info' }}>
												<a>{t('header.setInfo')}</a>
											</Link>
										</li>
										<li>
											<a onClick={() => handleClickSignOut()}>{t('header.signOut')}</a>
										</li>
									</ul>
								</div>
							) : (
								<div className="m-n login-n">
									<PersonIcon width="13" height="13" />
									<Link href={{ pathname: '/user/user-login' }}>
										<a className="login">{t('header.signIn')}</a>
									</Link>
								</div>
							)}
						</div>
						<div className="setting-lang">
							<button
								className="lang-select"
								onClick={() => handleClickLang()}
								aria-label="language change">
								<LangIcon className="lang-icon" width="11" height="11" />
								<span className="m-n t-n">{langState.langText}</span>
							</button>
						</div>

						{isDesktop && (
							<MenuIcon
								onClick={handleClickToggleMenu}
								className="setting-menu m-n"
								width="22"
								height="18"
								aria-label="navigation menu"
							/>
						)}
						{(isMobile || isTablet) && (
							<MenuIcon
								onTouchEnd={(e) => handleTouchToggleMenuMMobile(e, true)}
								className="setting-menu-m m-y"
								width="22"
								height="18"
								aria-label="navigation menu"
							/>
						)}
					</div>
				</div>
			</div>
			<div className={`fake-bg m-n ${menuOpen ? 'active' : ''}`}></div>
			{/*************** mobile menu *******************/}
			{(isMobile || isTablet) && menuOpenMobile && (
				<aside className="m-menu-bg" id="m-menu-bg" onTouchStart={handleTouchMobMenuClose}>
					<nav className="m-menu">
						<div className="m-menu-header">
							{userState.id ? (
								<Link href={{ pathname: '/user/user-info' }}>
									<a className="underline">
										{userState.name} {t('header.sir')}
									</a>
								</Link>
							) : (
								<Link href={{ pathname: '/user/user-login' }}>
									<a>
										{t('header.signInMobile')} <HeaderArrowIcon />
									</a>
								</Link>
							)}
							<CloseIcon
								onTouchStart={(e) => handleTouchToggleMenuMMobile(e, false)}
								className="close-btn"
							/>
						</div>
						<ul className="m-gnb">
							{/*
								li를 클릭 했을 때  아래 ul.m-lnb
								"m-lnb__active" 클래스 토글.
								<MenuPlusIcon/> <-> <MenuMinusIcon/> 아이콘 토글
								(슬라이드다운 효과)
							*/}
							<li>
								<a onTouchStart={() => handleClickSpreadMobMnu(0)}>
									{'Test'}
									{spreadMobMnuList.includes(0) ? <MenuMinusIcon /> : <MenuPlusIcon />}
								</a>
								<ul className={`m-lnb ${spreadMobMnuList.includes(0) ? 'm-lnb__active' : ''}`}>
									<li>
										<Link href={{ pathname: '/test' }}>
											<a>{'Test'}</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<a onTouchStart={() => handleClickSpreadMobMnu(1)}>
									{'Auth'} {spreadMobMnuList.includes(1) ? <MenuMinusIcon /> : <MenuPlusIcon />}
								</a>
								<ul className={`m-lnb ${spreadMobMnuList.includes(1) ? 'm-lnb__active' : ''}`}>
									<li>
										<Link href={{ pathname: '/auth' }}>
											<a>{'Auth'}</a>
										</Link>
									</li>
								</ul>
							</li>
							{userState.id ? (
								<li>
									<Link href={{ pathname: '/my-silkroad/basic/service-usage-status' }}>
										<a>
											{t('header.menu4')}
											<HeaderArrowIcon className="arrow-icon" />
										</a>
									</Link>
								</li>
							) : null}
						</ul>
						{userState.id ? (
							<ul className="m-menu-footer">
								<li>
									<Link href={{ pathname: '/user/user-info' }}>
										<a>
											{t('header.setInfo')}
											<HeaderArrowIcon className="arrow-icon" />
										</a>
									</Link>
								</li>
								<li>
									<a onTouchStart={() => handleClickSignOut()}>{t('header.signOut')}</a>
								</li>
							</ul>
						) : null}
					</nav>
				</aside>
			)}
		</header>
	)
}
