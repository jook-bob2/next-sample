import CryptoJS from 'crypto-js'

export default class HashTable {
	// 기본 buckets size
	constructor(size) {
		this.buckets = new Array(size)
		this.size = size
	}

	// 해시 함수
	hash(key) {
		return String(key).length % this.size
	}

	// 해시 테이블에 새로운 데이터를 추가한다.
	set(key, value) {
		const index = this.hash(key)

		if (!this.buckets[index]) {
			this.buckets[index] = []
		}

		const secureValue = CryptoJS.AES.encrypt(JSON.stringify(value), key).toString()

		this.buckets[index].push([key, secureValue])
	}

	// key를 이용하여 데이터를 가져 온다.
	get(key) {
		const index = this.hash(key)

		if (!this.buckets[index]) return null
		// for of loop로 key와 일치하는 값 찾아내기
		for (let bucket of this.buckets[index]) {
			if (bucket[0] === key) return bucket[1]
		}
	}
}
