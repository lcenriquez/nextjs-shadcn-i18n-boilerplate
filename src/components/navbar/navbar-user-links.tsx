'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { buttonVariants } from '@/registry/new-york-v4/ui/button';

interface NavbarUserLinksProps {
	className?: string;
	onItemClick?: () => void;
	onSelect?: () => void;
}

export const NavbarUserLinks: FC<NavbarUserLinksProps> = ({ className, onItemClick, onSelect }) => {
	const t = useTranslations('Auth');

	const handleClick = () => {
		onItemClick?.();
		onSelect?.();
	};

	return (
		<div className='flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row'>
			<Link onClick={handleClick} href='/signin' className={buttonVariants({ className })}>
				{t('signIn.title')} &rarr;
			</Link>
		</div>
	);
};
