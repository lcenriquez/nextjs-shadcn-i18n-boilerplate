import { CalendarIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Button } from '@/registry/new-york-v4/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/registry/new-york-v4/ui/hover-card';

export function HoverCardDemo() {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant='link'>@username</Button>
			</HoverCardTrigger>
			<HoverCardContent className='w-80' side='right'>
				<div className='flex justify-between gap-4'>
					<Avatar>
						<AvatarImage src='https://github.com/octocat.png' />
						<AvatarFallback>UN</AvatarFallback>
					</Avatar>
					<div className='flex flex-col gap-1'>
						<h4 className='text-sm font-semibold'>@username</h4>
						<p className='text-sm'>Generic user profile for demonstration purposes.</p>
						<div className='mt-1 flex items-center gap-2'>
							<CalendarIcon className='text-muted-foreground size-4' /> <span className='text-muted-foreground text-xs'>Joined January 2024</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
