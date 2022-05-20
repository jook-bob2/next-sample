export const languages = ['en', 'ko'] as const
export type Languages = typeof languages[number] // 'en' | 'ko'
export const langText = ['EN', 'KR'] as const
export type LangText = typeof langText[number] // 'EN', 'KR'
