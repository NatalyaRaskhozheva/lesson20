const words = [
	{ id: 0, en: 'table', ua: 'стіл' },
	{ id: 1, en: 'car', ua: 'автомобіль' },
	{ id: 2, en: 'bus', ua: 'автобус' },
	{ id: 3, en: 'man', ua: 'людина' },
	{ id: 4, en: 'boy', ua: 'хлопець' },
]

class Translate {
	constructor(wordsList) {
		this.wordsList = wordsList
		this.history = []
		this.rowHistory = []
	}
	optionClick(thisRow, testResId) {
		this.rowHistory.push(thisRow)
		this.history.push(testResId)
		this.rowHistory[0].classList = 'active'
		this.rowHistory[1].classList = 'active'


		const result = (this.history[0] === this.history[1])
		if ((result) && (this.history.length === 2)) {
			this.rowHistory[0].innerText = ''
			this.rowHistory[1].innerText = ''
			this.history = []
			this.rowHistory = []
		}
		else if ((!result) && (this.history.length === 2)) {

			this.rowHistory[0].classList = 'activeRed'
			this.rowHistory[1].classList = 'activeRed'


			setTimeout(() => {
				this.rowHistory[0].classList = ''
				this.rowHistory[1].classList = ''
				this.history = []
				this.rowHistory = []
			}, 1000)
		}
	}

	createRow(dataArray, elTag = 'td') {
		const tr = document.createElement('tr')
		for (const element of dataArray) {
			const td = document.createElement(elTag)
			td.innerText = element
			tr.append(td)
		}
		return tr
	}
	render(containerId) {
		const containerTable = document.createElement('div')
		containerTable.classList = 'containerTable'

		const table1 = document.createElement('table')

		for (const testRes of this.wordsList) {
			const row = this.createRow([testRes.en])
			row.onclick = this.optionClick.bind(this, row, testRes.id)
			table1.append(row)
		}
		containerTable.append(table1)

		const table2 = document.createElement('table')
		for (const testRes of this.wordsList) {
			const row = this.createRow([testRes.ua])
			row.onclick = this.optionClick.bind(this, row, testRes.id)
			table2.append(row)
		}
		containerTable.append(table2)
		document.getElementById(containerId).append(containerTable)
	}


}
window.onload = function () {
	const t1 = new Translate(words)
	t1.render('container')
}


