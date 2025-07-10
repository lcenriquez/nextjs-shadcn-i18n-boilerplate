'use client';

import { FC } from 'react';
import { Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { LocaleSwitcher } from '@/components/molecules/locale-switcher';
import { ModeToggle } from '@/components/molecules/mode-toggle';
import { NavbarMobile } from '@/components/navbar/navbar-mobile';
import { NavbarUserLinks } from '@/components/navbar/navbar-user-links';
import { buttonVariants } from '@/registry/new-york-v4/ui/button';

export const NavBar: FC = () => {
	const t = useTranslations('Navigation');

	return (
		<div className='animate-in fade-in w-full'>
			<nav className='mx-auto w-[90%] py-4'>
				<div className='flex items-center justify-between'>
					<Link href='/' className='transition-opacity hover:opacity-80'>
						<div className='flex items-center'>
							<Globe className='mr-2 inline h-8 w-8' />
							<span className='text-foreground text-xl font-semibold tracking-tighter'>Website</span>
						</div>
					</Link>
					<div className='hidden grow md:flex md:items-center md:justify-between'>
						<div className='ml-8 flex space-x-2'>
							<Link href='/item1' className={buttonVariants({ variant: 'link' })}>
								{t('item1')}
							</Link>
							<Link href='/item2' className={buttonVariants({ variant: 'link' })}>
								{t('item2')}
							</Link>
						</div>
						<div className='flex items-center space-x-4'>
							<LocaleSwitcher />
							<ModeToggle />
							<NavbarUserLinks />
						</div>
					</div>
					<div className='flex md:hidden'>
						<NavbarMobile />
					</div>
				</div>
			</nav>
		</div>
	);
};
