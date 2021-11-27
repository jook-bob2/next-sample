import PowerPlantLinkageComponent from '@/components/powerPlant/PowerPlantLinkageComponent'
import Meta from '@/components/ui/common/Meta'
import AuthContainer from '@/containers/AuthContainer'
import React from 'react'

export default function PowerPlantLinkage() {
	return (
		<AuthContainer>
			<Meta />
			<PowerPlantLinkageComponent />
		</AuthContainer>
	)
}
