import langEn from '@lang/messages/messages.en.json'
import langKo from '@lang/messages/messages.ko.json'
import { languages, langText } from '../types'

export const resource = {
	en: {
		translation: langEn,
		value: languages[0],
		text: langText[0],
	},
	ko: {
		translation: langKo,
		value: languages[1],
		text: langText[1],
	},
}
