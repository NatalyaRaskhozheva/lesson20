class Search {
	constructor(dataList) {
		this.dataList = dataList
	}
	searchName() {
		this.containerName.innerText = ''
		let searchList = this.dataList.filter(name => name.includes(this.input.value))
		for (const elem of searchList) {
			let el = document.createElement('div')
			el.innerText = elem
			this.containerName.append(el)
		}
	}
	renderTable(targetContainer) {
		const container = document.createElement('div')

		const titleContainer = document.createElement('div')
		titleContainer.classList = 'titleContainer'
		const title = document.createElement('div')
		title.innerText = 'Ім я'
		titleContainer.append(title)

		this.input = document.createElement('input')
		this.input.placeholder = "Я шукаю..."
		this.input.oninput = this.searchName.bind(this)
		titleContainer.append(this.input)
		container.append(titleContainer)

		this.containerName = document.createElement('div')
		for (const element of this.dataList) {
			this.element = document.createElement('div')
			this.element.innerText = element
			this.containerName.append(this.element)
		}
		container.append(this.containerName)
		document.querySelector(targetContainer).append(container)
	}
}

const userList = ['Іванов І.І.', 'Петров П. П.', 'Скрипка С. П.', 'Гончаренко Г. О', 'Івась І.І.']

window.onload = function () {
	let p = new Search(userList)
	p.renderTable('#search')
}