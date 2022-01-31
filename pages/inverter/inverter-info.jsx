import InverterInfoComponent from '@/components/inverter/InverterInfoComponent'
import Meta from '@/components/ui/common/Meta'
import AuthContainer from '@/containers/AuthContainer'
import { getExpireTime } from '@/core/api/user/userApi'
import { setSsrHeader } from '@/core/config/cookie'
import React, { useEffect } from 'react'
import Error from '@comp/ui/common/Error'

export default function InverterInfo({ data }) {
	console.log(data)

	useEffect(() => {
		getExpireTime()
			.then((response) => {
				console.log(response)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	if (!data?.success) return <Error error={data} />
	return (
		<AuthContainer>
			<Meta />
			<InverterInfoComponent />
		</AuthContainer>
	)
}

export const getServerSideProps = async ({ req }) => {
	const result = { props: {} }
	setSsrHeader(req.headers)

	try {
		const data = await getExpireTime()
		result.props.data = data
	} catch (error) {
		result.props.data = error
	}

	return result
}
