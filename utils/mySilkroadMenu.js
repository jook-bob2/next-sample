import { PAY_EXTEND_CD, PAY_QUOTA_CD, PAY_TRAFFIC_CD, PAY_TRAFFIC_RESET_CD } from '@/constants/payCd'

// 상위 메뉴
export const upperMnuList = [
	{
		id: 1,
		name: {
			ko: '기본 관리',
			en: 'Basic Managment',
		},
		url: '/my-silkroad/basic/service-usage-status',
	},
	{
		id: 2,
		name: {
			ko: '통계 관리',
			en: 'Statistics Management',
		},
		url: '/my-silkroad/statistics/database-stat',
	},
	{
		id: 3,
		name: {
			ko: '계정 관리',
			en: 'Account Management',
		},
		url: '/my-silkroad/account/back-up',
	},
	{
		id: 4,
		name: {
			ko: '서비스 접속 관리',
			en: 'Service access management',
		},
		url: '/my-silkroad/access/service-access',
	},
	{
		id: 5,
		name: {
			ko: '도메인 연결관리',
			en: 'Domain connection management',
		},
		url: '/my-silkroad/domain/connect-mngt',
	},
	{
		id: 6,
		name: {
			ko: '정산 관리',
			en: 'Settlement management',
		},
		url: '/my-silkroad/settlement/payment-detail',
	},
]

// 하위 메뉴
export const lowerMnuList = [
	{
		upperId: 1,
		id: 1,
		name: {
			ko: '서비스 사용현황',
			en: 'Service usage status',
		},
		url: '/my-silkroad/basic/service-usage-status',
	},
	{
		upperId: 1,
		id: 2,
		name: {
			ko: '사용량 모니터링',
			en: 'Usage monitoring',
		},
		url: '/my-silkroad/basic/usage-monitoring',
	},
	{
		upperId: 2,
		id: 3,
		name: {
			ko: '데이터베이스 사용량 통계',
			en: 'Database usage statistics',
		},
		url: '/my-silkroad/statistics/database-stat',
	},
	{
		upperId: 2,
		id: 4,
		name: {
			ko: '실시간 트래픽 통계',
			en: 'Real-time traffic statistics',
		},
		url: '/my-silkroad/statistics/traffic-stat',
	},
	{
		upperId: 3,
		id: 5,
		name: {
			ko: '백업받기/올리기',
			en: 'Get/Upload Backup',
		},
		url: '/my-silkroad/account/back-up',
	},
	{
		upperId: 3,
		id: 6,
		name: {
			ko: '계정 초기화',
			en: 'Account Reset',
		},
		url: '/my-silkroad/account/account-init',
	},
	{
		upperId: 4,
		id: 7,
		name: {
			ko: '서비스 접속정보',
			en: 'Service access information',
		},
		url: '/my-silkroad/access/service-access',
	},
	{
		upperId: 6,
		id: 8,
		name: {
			ko: '결제 내역',
			en: 'Payment history',
		},
		url: '/my-silkroad/settlement/payment-detail',
	},
]

export const subMnuList = [
	{
		upperId: 1,
		lowerId: 1,
		id: 1,
		name: {
			ko: '서비스 연장 신청',
			en: 'Application for service extension',
		},
		url: '/my-silkroad/my-pay/pay-selection',
		queryValue: PAY_EXTEND_CD,
	},
	{
		upperId: 1,
		lowerId: 2,
		id: 2,
		name: {
			ko: '트래픽 초기화',
			en: 'Traffic initialization',
		},
		url: '/my-silkroad/my-pay/pay-selection',
		queryValue: PAY_TRAFFIC_RESET_CD,
	},
	{
		upperId: 1,
		lowerId: 2,
		id: 3,
		name: {
			ko: '트래픽 용량 추가',
			en: 'Add traffic capacity',
		},
		url: '/my-silkroad/my-pay/pay-selection',
		queryValue: PAY_TRAFFIC_CD,
	},
	{
		upperId: 1,
		lowerId: 2,
		id: 4,
		name: {
			ko: '쿼터 용량 추가',
			en: 'Add quota capacity',
		},
		url: '/my-silkroad/my-pay/pay-selection',
		queryValue: PAY_QUOTA_CD,
	},
	{
		upperId: 2,
		lowerId: 4,
		id: 5,
		name: {
			ko: '실시간 트래픽 통계 상세',
			en: 'Detailed real-time traffic statistics',
		},
		url: '/my-silkroad/statistics/traffic-stat-detail',
		queryValue: null,
	},
	{
		upperId: 6,
		lowerId: 8,
		id: 6,
		name: {
			ko: '결제 취소',
			en: 'Cancel payment',
		},
		url: '/my-silkroad/settlement/payment-cancel',
		queryValue: null,
	},
	{
		upperId: 6,
		lowerId: 8,
		id: 7,
		name: {
			ko: '결제 취소 완료',
			en: 'Payment cancellation completed',
		},
		url: '/my-silkroad/settlement/payment-cancel-complete',
		queryValue: null,
	},
]
