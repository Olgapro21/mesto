const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const itemTemplate = document.querySelector(".item_template").content;
const list = document.querySelector(".list");
const formButton = document.querySelector(".form__submit");
const formInput = document.querySelector(".form__input");

let editing = null;

items.forEach(renderItem)

function renderItem (item) {
	const htmlElement = itemTemplate.cloneNode(true);
	htmlElement.querySelector('.item__text').textContent = item;
	setEventListeners(htmlElement);
	
	list.append(htmlElement);
};

const handleSubmit = () => {
	const value = formInput.value;
	renderItem(value);
}

function handleDelete (event) {
	const card = event.target.closest('.list__item');
	card.remove();
}

function handleDuplicate (event) {
	const item = event.target.closest('.list__item');
	const text = item.querySelector('.item__text').textContent;

	renderItem(text);
}

function handleEdit (event) {
	editing = event.target.closest('.list__item');

	// Скопировать содержимое в value инпута
	formInput.value = editing.querySelector('.item__text').textContent;

	// Изменить название кнопки
	formButton.value = 'Изменить'

	formButton.removeEventListener('click', handleSubmit);
	formButton.addEventListener('click', handleEditSubmit);
}

function handleEditSubmit () {
	editing.querySelector('.item__text').textContent = formInput.value;
	resetEditMode();
}


function resetEditMode () {
	editing = null;
	formInput.value = '';
	formButton.value = 'Добавить';

	formButton.removeEventListener('click', handleEditSubmit);
	formButton.addEventListener('click', handleSubmit);
}




function setEventListeners (htmlElement) {
	htmlElement.querySelector('.delete').addEventListener('click', handleDelete);

	htmlElement.querySelector('.duplicate').addEventListener('click', handleDuplicate);

	htmlElement.querySelector('.edit').addEventListener('click', handleEdit);
}

formButton.addEventListener('click', handleSubmit);
