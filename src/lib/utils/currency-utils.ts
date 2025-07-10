export const formatPrice = (price: number, currency?: string) => {
	return (
		new Intl.NumberFormat(undefined, {
			style: 'decimal'
		}).format(price) +
		' ' +
		currency
	);
};
