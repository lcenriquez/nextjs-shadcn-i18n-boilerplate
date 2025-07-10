import { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<div className='animate-in fade-in flex min-h-screen flex-col'>
			<NavBar />
			<div className='flex h-full grow flex-col'>{children}</div>
			<Footer />
		</div>
	);
}
