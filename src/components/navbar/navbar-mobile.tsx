'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { LocaleSwitcher } from '@/components/molecules/locale-switcher';
import { ModeToggle } from '@/components/molecules/mode-toggle';
import { NavbarUserLinks } from '@/components/navbar/navbar-user-links';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/registry/new-york-v4/ui/sheet';

export function NavbarMobile() {
	const t = useTranslations('Navigation');
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon' className='md:hidden' aria-label={t('menu')}>
					<Menu className='h-5 w-5' />
				</Button>
			</SheetTrigger>
			<SheetContent side='right' className='w-full p-0 sm:w-[300px]'>
				<div className='flex h-full flex-col'>
					<SheetHeader className='border-b p-4'>
						<SheetTitle className='text-left'>{t('menu')}</SheetTitle>
					</SheetHeader>
					<nav className='flex-1 overflow-y-auto'>
						<div className='flex flex-col space-y-2 p-4'>
							<Link
								href='/item1'
								onClick={() => setIsOpen(false)}
								className='hover:bg-accent flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-medium transition-colors'>
								{t('item1')}
							</Link>
							<Link
								href='/item2'
								onClick={() => setIsOpen(false)}
								className='hover:bg-accent flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-medium transition-colors'>
								{t('item2')}
							</Link>
							<div className='border-t pt-4'>
								<NavbarUserLinks onItemClick={() => setIsOpen(false)} className='w-full' />
							</div>
						</div>
					</nav>
					<div className='border-t p-4'>
						<div className='flex w-full items-center justify-between gap-2'>
							<LocaleSwitcher />
							<ModeToggle />
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
