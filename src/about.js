export function renderAbout() {
	// data
	const textItalic = 'Proudly brewed since 2015';
	const textP1 =
		'Mosfi’s Coffee was born in 2015 out of a shared love for good coffee and classic American diners. Founded by Allie and Sonic — a couple with a soft spot for warm spaces, honest flavors, and timeless design — Mosfi’s blends old-school charm with a modern, relaxed	vibe.';
	const textP2 =
		"From the retro-inspired décor to the soft background tunes, every detail is meant to feel familiar — like a place you’ve always known.	Whether you're a regular or just passing through, there's always a seat for you at Mosfi's.";

	// dom
	const container = document.createElement('div');
	container.id = 'container__home';
	container.classList = 'home max-w-lg space-y-5 p-5';

	const h1 = document.createElement('h1');
	h1.classList = 'text-4xl sm:text-5xl font-bold';
	h1.innerHTML = `About <span class="text-primary"> Mosfi's Coffee`;

	const pItalic = document.createElement('p');
	pItalic.classList = 'italic';
	pItalic.textContent = textItalic;

	const p1 = document.createElement('p');
	p1.textContent = textP1;

	const p2 = document.createElement('p');
	p2.textContent = textP2;

	// append elements
	container.append(h1, pItalic, p1, p2);

	return container;
}
