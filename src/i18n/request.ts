import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale;

	// Ensure that the incoming `locale` is valid
	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale;
	}

	// Load all message files for the current locale
	const messages = {
		...(await import(`../locales/${locale}/auth.json`)).default,
		...(await import(`../locales/${locale}/common.json`)).default,
		...(await import(`../locales/${locale}/components.json`)).default,
		...(await import(`../locales/${locale}/home.json`)).default
	};

	return {
		locale,
		messages
	};
});
