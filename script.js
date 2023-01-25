

// инициализируем анимацию AOS  
AOS.init({
	once: true, // whether animation should happen only once - while scrolling down
});

const recipes = document.querySelectorAll('.recipe');
const covers = document.querySelectorAll('.cover');
const backs = document.querySelectorAll('.back');

// РАЗДЕЛ_1 - переключение обложки на список ингредиентов и обратно (на передний план)


// 1-й способ. Минус: захватывается свободное пространство между карточками
// верхний левый угол и правый нижний угол реагируют на нажатие
recipes.forEach(item => {
	item.addEventListener('click', () => {

		item.classList.toggle('selected');

		// центрирование выбранного элемента по вертикали в портретной мобильной адаптации
		// if (window.innerHeight > window.innerWidth && window.innerWidth <= '500') {
		//     item.scrollIntoView({ block: 'center'});
		// }


	})

})

//2-й способ. Минус: задняя карточка не реагирует на нажатие, пока не нажмешь 
// на переднюю карточку, то есть пока она не станет активной

// recipes.forEach ((recipe, index) => {
//     recipe.querySelector('.cover').addEventListener('click', () => {
//         recipe.classList.toggle('selected');
//     });
//     recipe.querySelector('.back').addEventListener('click', () => {
//         recipe.classList.toggle('selected');
//     })
// })
// РАЗДЕЛ_2 - поиск по содержимому
const inputForm = document.querySelector('#inputForm');
const cards = document.querySelectorAll('.card');
let i = 0;
let y = 0;


inputForm.addEventListener('keyup', event => {
	//Шаг_1 считываем введенную информацию (обрезаем пробелы, понижаем регистр)
	const word = event.target.value.trim().toLowerCase();
	if (word.length === 0) {
		return false;
	}

	//Шаг_2 сравниваем введенную информацию с содержимым HTML
	cards.forEach(card => {

		//сначала проверяем по заголовку. Если есть совпадение - отображаем
		if (card.querySelector('.h2--vertical').innerText.toLowerCase().includes(word)) {
			card.style.display = 'block';
		}

		//Если нет совпадений по заголовку, то для каждой карточки создаем матрицу из ингредиентов и сверяемся с ними
		else {
			// 2-й способ. Если есть хотя бы одно совпадение
			const tags = card.querySelectorAll('.searchTag');
			tags.forEach(tag => {
				if (tag.innerText.toLowerCase().includes(word) === true) {
					i++;
					console.log(tag.innerText);
				}
			})
			if (i !== 0) {
				card.style.display = 'block';
			}
			else {
				card.style.display = 'none';
			}
			i = 0;
		}
	});
});


// 1-й способ. Если количество результатов false равно длину массива (т.е. ни одного
// совпадения)
// cards.forEach(card => {
//     const tags = card.querySelectorAll('.searchTag');
//             tags.forEach(tag => {
//                 if (tag.innerText.toLowerCase().includes(word) !== true) {
//                     i++;
//                 }
//             })
//             if (i !== tags.length) {
//                 card.style.display = 'block';
//             }
//             else {
//                 card.style.display = 'none';
//             }
//             i=0;   
//             });
// });

gsap.to("h1", {
    text: "ДЕСЕРТЫ, и ничего кроме",
    duration: 3,
    ease: "power1.in",
})