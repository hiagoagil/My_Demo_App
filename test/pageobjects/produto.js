class produto {
    async item(produto, cor, quantidade) {
        await $(`~${produto}`).click()
        await $(`~${cor}`).click()
        await $(`~${quantidade}`).click()

    }
    async AdicionarItemCarrinho() {
        
        await $('~Tap to add product to cart').click()
    }


}
module.exports = new produto();

