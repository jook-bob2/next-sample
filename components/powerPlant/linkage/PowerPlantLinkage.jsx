import HeaderRoute from '@/components/ui/styled/components/HeaderRoute'
import { useConfirmContext } from '@/core/store/common/providers/ConfirmProvider'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function PowerPlantLinkage() {
	const { $confirm } = useConfirmContext()
	const { back } = useRouter()
	const [linkedState, setLinkedState] = useState({
		searchText: '',
		restAddress: '',
		powerPlantName: '',
	})

	function handleClickBack() {
		const { searchText, restAddress, powerPlantName } = linkedState
		if (searchText || restAddress || powerPlantName) {
			$confirm('입력하신 정보는 저장되지 않습니다.\n 페이지를 닫으시겠습니까?').then(() => {
				back()
			})
		} else {
			// 미입력 시 이전 페이지로 이동
			back()
		}
	}

	function handleChangeLinkedState(name, value) {
		setLinkedState({
			...linkedState,
			[name]: value,
		})
	}

	function handleClickLinked() {
		console.log('연동하기 클릭')
	}

	return (
		<>
			<HeaderRoute onClick={() => handleClickBack()} title="발전소 연동하기" />
			<article>
				<div>
					<strong>발전소 정보를 입력해주세요.</strong>
				</div>
				<div>
					<input
						name="searchText"
						value={linkedState.searchText}
						placeholder="읍면동/지번 주소를 입력하세요."
						onChange={(e) => handleChangeLinkedState(e.target.name, e.target.value)}
					/>
				</div>
				<div>
					<strong>도로명/지번 주소</strong>
				</div>
				<div>
					<input
						name="restAddress"
						value={linkedState.restAddress}
						placeholder="상세 주소를 입력하세요."
						onChange={(e) => handleChangeLinkedState(e.target.name, e.target.value)}
					/>
				</div>
				<div>
					<input
						name="powerPlantName"
						value={linkedState.powerPlantName}
						placeholder="발전소 명을 입력하세요."
						onChange={(e) => handleChangeLinkedState(e.target.name, e.target.value)}
					/>
				</div>
				<div>
					<button onClick={() => handleClickLinked()}>연동하기</button>
				</div>
			</article>
		</>
	)
}
