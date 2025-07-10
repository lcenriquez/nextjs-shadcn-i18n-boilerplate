'use client';

import { ReactNode, useTransition } from 'react';
import { useParams } from 'next/navigation';

import { usePathname, useRouter } from '@/i18n/navigation';
import { Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils/class-utils';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';

type Props = {
	children: ReactNode;
	defaultValue: string;
	label: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

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

	return (
		<div className={cn('relative', isPending && 'pointer-events-none opacity-70')}>
			<Select defaultValue={defaultValue} onValueChange={onValueChange} disabled={isPending}>
				<SelectTrigger className='w-[95px] border-none bg-transparent focus:ring-0 focus:ring-offset-0'>
					<SelectValue placeholder={label} />
				</SelectTrigger>
				<SelectContent className='rounded-lg'>
					<SelectGroup>{children}</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
