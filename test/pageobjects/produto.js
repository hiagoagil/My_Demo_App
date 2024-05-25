class produto {
    async item(produto, cor, quantidade) {
        await $(`~${produto}`).click()
        await $(`~${cor}`).click()
        await $(`~${quantidade}`).click()
    }
    async AdicionarItemCarrinho() {
        await $('~Tap to add product to cart').click()
    }
    async ViewCarrinho() {
        await $('[resource-id="com.saucelabs.mydemoapp.android:id/cartIV"]').click()
    }
    async Prodquantidade() {
        const prodquant = await $('[resource-id="com.saucelabs.mydemoapp.android:id/plusIV"]')
        for (let i = 0; i < 8; i++) {
           await prodquant.click()
        }
    }
    
}
module.exports = new produto();

