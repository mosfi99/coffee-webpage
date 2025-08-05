export function renderHome() {
	const textP1 =
		"Whether you're here to get some work done, meet a friend, or just enjoy a quiet moment, our space is designed to make you feel at ease..";
	const textP2 =
		'We keep things simple: quality brews, cozy surroundings. No rush, no noise — just a calm, welcoming place to enjoy a great cup of coffee.';

	const container = document.createElement('div');
	container.id = 'container__home';
	container.classList = 'home text-center max-w-lg space-y-5 p-5';

	const h1 = document.createElement('h1');
	h1.classList = 'text-4xl sm:text-5xl font-bold';
	h1.innerHTML = `Welcome to <span class="text-primary"> Mosfi's Coffee</span>`;

	const p1 = document.createElement('p');
	p1.textContent = textP1;

	const p2 = document.createElement('p');
	p2.textContent = textP2;

	// append elements
	container.append(h1, p1, p2);

	return container;
}
