import authMessages from './src/locales/en/auth.json';
import commonMessages from './src/locales/en/common.json';
import componentMessages from './src/locales/en/components.json';
import homeMessages from './src/locales/en/home.json';

const messages = {
	...authMessages,
	...commonMessages,
	...componentMessages,
	...homeMessages
};

type Messages = typeof messages;

declare global {
	// Use type safe message keys with `next-intl`
	interface IntlMessages extends Messages {}
}
