/**
 * Latin American countries and their currencies
 */

export interface Country {
	name: string;
	code: string;
}

export interface Currency {
	name: string;
	code: string;
	symbol: string;
}

/**
 * List of Latin American countries
 */
export const latinAmericanCountries: Country[] = [
	{ name: 'Argentina', code: 'AR' },
	{ name: 'Bolivia', code: 'BO' },
	{ name: 'Brazil', code: 'BR' },
	{ name: 'Chile', code: 'CL' },
	{ name: 'Colombia', code: 'CO' },
	{ name: 'Costa Rica', code: 'CR' },
	{ name: 'Cuba', code: 'CU' },
	{ name: 'Dominican Republic', code: 'DO' },
	{ name: 'Ecuador', code: 'EC' },
	{ name: 'El Salvador', code: 'SV' },
	{ name: 'Guatemala', code: 'GT' },
	{ name: 'Haiti', code: 'HT' },
	{ name: 'Honduras', code: 'HN' },
	{ name: 'Mexico', code: 'MX' },
	{ name: 'Nicaragua', code: 'NI' },
	{ name: 'Panama', code: 'PA' },
	{ name: 'Paraguay', code: 'PY' },
	{ name: 'Peru', code: 'PE' },
	{ name: 'Puerto Rico', code: 'PR' },
	{ name: 'Uruguay', code: 'UY' },
	{ name: 'Venezuela', code: 'VE' }
];

/**
 * List of Latin American currencies
 */
export const latinAmericanCurrencies: Currency[] = [
	{ name: 'Argentine Peso', code: 'ARS', symbol: '$' },
	{ name: 'Bolivian Boliviano', code: 'BOB', symbol: 'Bs.' },
	{ name: 'Brazilian Real', code: 'BRL', symbol: 'R$' },
	{ name: 'Chilean Peso', code: 'CLP', symbol: '$' },
	{ name: 'Colombian Peso', code: 'COP', symbol: '$' },
	{ name: 'Costa Rican Colón', code: 'CRC', symbol: '₡' },
	{ name: 'Cuban Peso', code: 'CUP', symbol: '$' },
	{ name: 'Dominican Peso', code: 'DOP', symbol: 'RD$' },
	{ name: 'Guatemalan Quetzal', code: 'GTQ', symbol: 'Q' },
	{ name: 'Haitian Gourde', code: 'HTG', symbol: 'G' },
	{ name: 'Honduran Lempira', code: 'HNL', symbol: 'L' },
	{ name: 'Mexican Peso', code: 'MXN', symbol: '$' },
	{ name: 'Nicaraguan Córdoba', code: 'NIO', symbol: 'C$' },
	{ name: 'Paraguayan Guaraní', code: 'PYG', symbol: '₲' },
	{ name: 'Peruvian Sol', code: 'PEN', symbol: 'S/' },
	{ name: 'Uruguayan Peso', code: 'UYU', symbol: '$U' },
	{ name: 'Venezuelan Bolívar', code: 'VES', symbol: 'Bs.S' }
];
