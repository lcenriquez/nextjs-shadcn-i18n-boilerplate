'use client';

import { useTransition } from 'react';
import { Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

import { usePathname, useRouter } from '@/i18n/navigation';
import { Locale, routing } from '@/i18n/routing';
import { Button } from '@/registry/new-york-v4/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/registry/new-york-v4/ui/dropdown-menu';

export const LocaleSwitcher = () => {
	const t = useTranslations('LocaleSwitcher');

	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();
	// const locale = useLocale();

	function onValueChange(nextLocale: string) {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale as Locale }
			);
		});
	}

	// Get the first two letters of the current locale in uppercase
	// const localeCode = locale.substring(0, 2).toUpperCase();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<Globe className='size-4 transition-all dark:scale-100 dark:rotate-0' />
					<span className='sr-only'>Switch language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{routing.locales.map(cur => (
					<DropdownMenuItem key={cur} onClick={() => onValueChange(cur)}>
						{/* <LocaleSwitcherSelect defaultValue={cur} label={t('locale', { locale: cur })}>
							{t('locale', { locale: cur })}
						</LocaleSwitcherSelect> */}
						{t('locale', { locale: cur })}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};