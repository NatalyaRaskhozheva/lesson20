class AutoSearch {
	constructor(dataList) {
		this.dataList = dataList
	}
	autoFilter() {
		this.ol.innerHTML = ''
		for (const element of this.dataList) {
			if ((element.mark === this.select1.value) && (element.year == this.select2.value)) {
				this.element = document.createElement('li')
				this.element.innerText = element.mark + ' - ' + element.price + ' - ' + element.year
				this.ol.append(this.element)
			}
		}
	}
	render(targetSelector) {
		const container = document.createElement('div')
		const selectContainer = document.createElement('div')
		selectContainer.classList = 'selectContainer'
		container.append(selectContainer)
		this.select1 = document.createElement('select')
		let sortList = []
		for (const element of this.dataList) {
			if (!sortList.includes(element.mark))
			sortList.push(element.mark)
		}
		for (const element of sortList) {
			const option = document.createElement('option')
			option.innerText = element
			this.select1.append(option)
		}
		this.select1.onchange = this.autoFilter.bind(this)

		selectContainer.append(this.select1)
		
		let sortList2 = []
		for (const element of this.dataList) {
			if (!sortList2.includes(element.year))
			sortList2.push(element.year)
		}
		this.select2 = document.createElement('select')
		for (const element of sortList2) {
			const option = document.createElement('option')
			option.innerText = element
			this.select2.append(option)
		}
		this.select2.onchange = this.autoFilter.bind(this)
		selectContainer.append(this.select2)
		this.ol = document.createElement('ol')
		for (const element of this.dataList) {
			this.element = document.createElement('li')
			this.element.innerText = element.mark + ' - ' + element.price + ' - ' + element.year
			this.ol.append(this.element)
		}
		container.append(this.ol)
		document.querySelector(targetSelector).append(container)
	}
}

const autoList = [
	{
		mark: 'Mersedes',
		price: '3000$',
		year: 2008,
	},
	{
		mark: 'Opel',
		price: '2500$',
		year: 2003,
	},
	{
		mark: 'Audi',
		price: '6500$',
		year: 2012,
	},
	{
		mark: 'Mersedes',
		price: '4300$',
		year: 2011,
	},
	{
		mark: 'BMW',
		price: '3400$',
		year: 2012,
	}
]
window.onload = function () {
	const a = new AutoSearch(autoList)
	a.render('#auto')
}

