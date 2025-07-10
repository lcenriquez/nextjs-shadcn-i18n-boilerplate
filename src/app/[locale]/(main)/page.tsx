import { useTranslations } from 'next-intl';

// Add page caching - revalidate every hour
export const revalidate = 3600;

export default function Page() {
	const t = useTranslations('Home.hero');

	return (
		<main className='flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center'>
			<h1 className='text-4xl font-bold'>{t('title')}</h1>
			<p className='text-muted-foreground text-lg'>{t('subtitle')}</p>
			<button className='bg-primary mt-6 rounded px-6 py-2 font-semibold text-white'>{t('cta')}</button>
		</main>
	);
}
