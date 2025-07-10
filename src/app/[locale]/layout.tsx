import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

import '@/app/globals.css';

const geistSans = localFont({
	src: '../fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
});
const geistMono = localFont({
	src: '../fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
});

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
	const { locale } = await props.params;
	const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

	return {
		title: {
			template: '%s - ProjectName',
			default: `ProjectName - ${t('description')}` // Used when no title is provided
		},
		description: t('description')
	};
}

type Props = {
	children: ReactNode;
	params: Promise<{ locale: string }>;
};

const LocaleLayout = async ({ children, params }: Props) => {
	const { locale } = await params;

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	// Enable static rendering
	setRequestLocale(locale);

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		// ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
		// ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
		<html suppressHydrationWarning lang={locale}>
			<body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
						{children}
						<Toaster />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
