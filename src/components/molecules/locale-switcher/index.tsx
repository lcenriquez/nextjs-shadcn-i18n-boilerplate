import { Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { routing } from '@/i18n/routing';
import { SelectItem } from '@/registry/new-york-v4/ui/select';

import LocaleSwitcherSelect from './select';

export const LocaleSwitcher = () => {
	const t = useTranslations('LocaleSwitcher');
	const locale = useLocale();

	return (
		<div className='flex items-center'>
			<Globe className='text-muted-foreground size-4' />
			<LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
				{routing.locales.map(cur => (
					<SelectItem key={cur} value={cur}>
						{t('locale', { locale: cur })}
					</SelectItem>
				))}
			</LocaleSwitcherSelect>
		</div>
	);
};
