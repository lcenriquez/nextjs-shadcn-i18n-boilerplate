import { notFound } from 'next/navigation'; // Note that `app/[locale]/[...rest]/page.tsx`

export default function NotFoundPage() {
	notFound(); // Replace with own component
}
