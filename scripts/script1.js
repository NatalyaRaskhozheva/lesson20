class Product {
	constructor(imgSrc, productTitle, productPrice) {
		this.imgSrc = imgSrc
		this.productTitle = productTitle
		this.productPrice = productPrice
	}
	auditButton() {
		const auditValue = parseInt(this.value.innerText)
		if (auditValue > 9) this.button2.setAttribute('disabled', 'true')
		else this.button2.removeAttribute('disabled')

		if (auditValue < 2) this.button1.setAttribute('disabled', 'true')
		else this.button1.removeAttribute('disabled')
	}
	minus() {
		const newValue = parseInt(this.value.innerText) - 1
		this.value.innerText = newValue

		const newText = parseInt(this.productPrice) * parseInt(this.value.innerText)
		this.price.innerText = 'До сплати:' + newText
		
		this.auditButton()
	}
	add() {
		const newValue = parseInt(this.value.innerText) + 1
		this.value.innerText = newValue

		const newText = parseInt(this.productPrice) * parseInt(this.value.innerText)
		this.price.innerText = 'До сплати:' + newText

		this.auditButton()
	}
	render(targetSelector) {
		const container = document.createElement('div')
		container.classList = 'container'
		this.img = document.createElement('img')
		this.img.src = this.imgSrc
		container.append(this.img)

		this.title = document.createElement('div')
		this.title.innerText = this.productTitle
		container.append(this.productTitle)

		const containerButton = document.createElement('div')
		containerButton.classList = 'containerButton'
		container.append(containerButton)

		this.button1 = document.createElement('button')
		this.button1.innerText = '-'
		containerButton.append(this.button1)

		this.value = document.createElement('div')
		this.value.innerText = '1'
		containerButton.append(this.value)
		this.button1.onclick = this.minus.bind(this)

		this.button2 = document.createElement('button')
		this.button2.innerText = '+'
		containerButton.append(this.button2)
		this.button2.onclick = this.add.bind(this)


		this.price = document.createElement('div')
		this.price.innerText = `До сплати: ${parseInt(this.productPrice) * parseInt(this.value.innerText)}`
		container.append(this.price)

		document.querySelector(targetSelector).append(container)

	}
}
window.onload = function () {
	const product = new Product('../img/290842123.jpg', 'Ноутбук ASUS', '36000')
	product.render('#pi')
}