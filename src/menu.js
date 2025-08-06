import espresso from './img/espresso.png';
import americano from './img/americano.png';
import latte from './img/latte.png';
import icedCoffee from './img/iced_coffee.png';
import icedLatte from './img/iced_latte.png';
import icedMatcha from './img/iced_matcha.png';
import croissant from './img/croissant.png';
import cinnamonRoll from './img/cinnamon_roll.png';
import tortitas from './img/tortitas.png';

const menuData = [
	{
		category: 'Hot Drinks',
		items: [
			{
				title: 'Espresso',
				description: 'Rich, bold shot of our signature espresso.',
				price: '€2.20',
				img: espresso,
				alt: 'Espresso cup',
			},
			{
				title: 'Americano',
				description: 'Espresso with hot water – smooth, strong, and simple.',
				price: '€2.50',
				img: americano,
				alt: 'Americano cup',
			},
			{
				title: 'Latte',
				description: 'Creamy and mellow, with just the right espresso kick.',
				price: '€3.50',
				img: latte,
				alt: 'Latte cup',
			},
		],
	},
	{
		category: 'Cold Drinks',
		items: [
			{
				title: 'Iced Coffee',
				description: 'Chilled house blend served over ice.',
				price: '€2.80',
				img: icedCoffee,
				alt: 'Iced coffee cup',
			},
			{
				title: 'Iced Latte',
				description: 'Espresso, cold milk, and ice – light and refreshing.',
				price: '€3.50',
				img: icedLatte,
				alt: 'Iced latte cup',
			},
			{
				title: 'Iced Matcha',
				description: 'Lightly sweetened matcha over ice and milk.',
				price: '€3.80',
				img: icedMatcha,
				alt: 'Iced matcha cup',
			},
		],
	},
	{
		category: 'Snacks & Sweets',
		items: [
			{
				title: 'Butter Croissant',
				description: 'Flaky, buttery, and baked fresh daily.',
				price: '€2.20',
				img: croissant,
				alt: 'Butter Croissant',
			},
			{
				title: 'Cinnamon Roll',
				description: 'Soft and sweet with a hint of spice.',
				price: '€2.80',
				img: cinnamonRoll,
				alt: 'Cinnamon Roll',
			},
			{
				title: 'Tortitas Raspadas',
				description: 'Flatbreads with a lightly crisp top and soft center.',
				price: '€2.30',
				img: tortitas,
				alt: 'Tortitas Raspadas',
			},
		],
	},
];

export function renderMenu() {
	const container = document.createElement('div');
	container.classList = 'flex flex-col items-center';

	menuData.forEach((section) => {
		// section titles
		const heading = document.createElement('h1');
		heading.classList = 'text-4xl my-5';
		heading.textContent = section.category;
		container.append(heading);

		// items group
		const group = document.createElement('div');
		group.classList = 'items__group flex flex-wrap gap-5 justify-center';

		// card
		section.items.forEach((item) => {
			const card = document.createElement('div');
			card.classList = 'card bg-base-200 border-2 w-50 shadow-sm';

			const figure = document.createElement('figure');
			const image = document.createElement('img');
			image.classList = 'w-full object-cover';
			image.src = item.img;
			image.alt = item.alt;
			figure.append(image);

			const body = document.createElement('div');
			body.classList = 'card-body';

			const title = document.createElement('h2');
			title.classList = 'card-title';
			title.textContent = item.title;

			const desc = document.createElement('p');
			desc.textContent = item.description;

			const actions = document.createElement('div');
			actions.classList = 'card-actions justify-end';

			const button = document.createElement('button');
			button.classList = 'btn btn-primary';
			button.textContent = item.price;

			actions.append(button);
			body.append(title, desc, actions);

			card.append(figure, body);

			group.append(card);
		});

		container.append(group);
	});

	return container;
}
