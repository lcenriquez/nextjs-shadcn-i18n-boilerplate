import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['en', 'es'],
	defaultLocale: 'es',
	pathnames: {
		'/': '/',
		'/pathnames': {
			en: '/pathnames',
			es: '/nombres-de-ruta'
		}
	}
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
