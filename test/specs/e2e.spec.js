const login = require('../pageobjects/login')
const produto = require('../pageobjects/produto')
const checkout = require('../pageobjects/checkout');

describe('Teste e2e - My Demo App', () => {

    it('Realizando login com credenciais válidas', async () => {
        await login.menu('bod@example.com', '10203040')
    });

    it('Selecionando produto: item, cor e quantidade e adicionando no carrinho', async () => {
        await produto.item('Sauce Labs Backpack', 'Blue color', 'Increase item quantity')
        await produto.AdicionarItemCarrinho()
        const totalItensCarrinho = await $('//android.widget.RelativeLayout[@content-desc="Displays number of items in your cart"]/android.widget.TextView').getText()
        expect(totalItensCarrinho).toContain('2')
        await driver.deleteSession();
    });

    it('Alterando as informações do produto adicionado ao carrinho: quantidade', async () => {
        await driver.reloadSession();
        await produto.item('Sauce Labs Backpack', 'Blue color', 'Increase item quantity')
        await produto.AdicionarItemCarrinho()
        await produto.ViewCarrinho()
        await produto.Prodquantidade()
        const totalItensCarrinho = await $('//android.widget.RelativeLayout[@content-desc="Displays number of items in your cart"]/android.widget.TextView').getText()
        expect(totalItensCarrinho).toContain('10')
        await driver.deleteSession();
    });

    it('Realizando checkout do item adicionado ao carrinho', async () => {
        await driver.reloadSession();
        await produto.item('Sauce Labs Backpack', 'Blue color', 'Increase item quantity')
        await produto.AdicionarItemCarrinho()
        await checkout.checkout('bod@example.com', '102030', 'Joao Batista', 'Avenida Brasil', 'Rio de Janeiro', 'Rio de Janeiro', '77777000', 'Brazil', 'Joao Baptista', '1111222233334444', '1225', '123')
        const checkoutcompleto = await $('//android.widget.ScrollView[@content-desc="Manages scrolling of views in given screen"]/android.view.ViewGroup/android.widget.TextView[1]');
        await expect(checkoutcompleto).toBeExisting();
    });

});

