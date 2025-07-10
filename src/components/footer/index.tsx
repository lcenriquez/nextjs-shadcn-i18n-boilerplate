import { Facebook, Github, Globe, Instagram, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { LocaleSwitcher } from '@/components/molecules/locale-switcher';
import { cn } from '@/lib/utils/class-utils';
import { buttonVariants } from '@/registry/new-york-v4/ui/button';

type FooterProps = {
	type?: 'complex' | 'simple';
};

export const Footer = ({ type = 'complex' }: FooterProps) => {
	const t = useTranslations('Footer');

	return (
		<>
			{type === 'complex' && (
				<div className='bg-muted/40 w-full border-t'>
					<div className='container mx-auto grid gap-8 py-10 lg:grid-cols-4'>
						{/* Logo and description */}
						<div className='flex flex-col gap-4'>
							<div className='flex items-center gap-2'>
								<Globe className='h-6 w-6' />
								<span className='text-lg font-bold'>Website</span>
							</div>
							<p className='text-muted-foreground text-sm'>{t('description')}</p>
						</div>

						{/* Links */}
						<div className='flex flex-col gap-2'>
							<h3 className='font-medium'>{t('links')}</h3>
							<Link href='/item1' className={cn(buttonVariants({ variant: 'link' }), 'h-auto justify-start p-0')}>
								{t('item1')}
							</Link>
							{/* <Link href='/motives' className={cn(buttonVariants({ variant: 'link' }), 'h-auto justify-start p-0')}>
								{t('motives')}
							</Link> */}
						</div>

						{/* Legal links */}
						<div className='flex flex-col gap-2'>
							<h3 className='font-medium'>{t('legal')}</h3>
							<Link href='/privacy-policy' className={cn(buttonVariants({ variant: 'link' }), 'h-auto justify-start p-0')}>
								{t('privacy')}
							</Link>
							<Link href='/terms-and-conditions' className={cn(buttonVariants({ variant: 'link' }), 'h-auto justify-start p-0')}>
								{t('terms')}
							</Link>
						</div>

						{/* Social and Language */}
						<div className='flex flex-col gap-4'>
							<div>
								<h3 className='mb-2 font-medium'>{t('language')}</h3>
								<LocaleSwitcher />
							</div>
							<div>
								<h3 className='mb-2 font-medium'>{t('social')}</h3>
								<div className='flex gap-4'>
									<a href='https://facebook.com' target='_blank' rel='noreferrer' aria-label='Facebook'>
										<Facebook className='text-muted-foreground hover:text-foreground h-5 w-5' />
									</a>
									<a href='https://instagram.com' target='_blank' rel='noreferrer' aria-label='Instagram'>
										<Instagram className='text-muted-foreground hover:text-foreground h-5 w-5' />
									</a>
									<a href='https://linkedin.com' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
										<Linkedin className='text-muted-foreground hover:text-foreground h-5 w-5' />
									</a>
									<a href='https://github.com' target='_blank' rel='noreferrer' aria-label='GitHub'>
										<Github className='text-muted-foreground hover:text-foreground h-5 w-5' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<footer className='mt-0 w-full border-t'>
				<div className='container mx-auto flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0'>
					<p className='text-center text-sm leading-loose md:text-left'>© {new Date().getFullYear()} Website. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
};
