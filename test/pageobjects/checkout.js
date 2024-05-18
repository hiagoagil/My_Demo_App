class checkout {
    async checkout(email , senha, nomedestinatario, rua, cidade, estado, cep, pais, nomecartao, numerocartao, validadecartao, codseguranca ) {
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/cartBt"]`).click()
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/cartIV"]`).click()
        const procedcheckout = await $('//android.widget.Button[@content-desc="Confirms products for checkout"]')
        await procedcheckout.click()
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/nameET"]`).setValue(email)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]`).setValue(senha)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/loginBtn"]`).click()
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/fullNameET"]`).setValue(nomedestinatario)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/address1ET"]`).setValue(rua)   
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/cityET"]`).setValue(cidade)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/stateET"]`).setValue(estado)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/zipET"]`).setValue(cep)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/countryET"]`).setValue(pais)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/paymentCV"]`).click()
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/nameET"]`).setValue(nomecartao)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/cardNumberET"]`).setValue(numerocartao)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/expirationDateET"]`).setValue(validadecartao)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/securityCodeET"]`).setValue(codseguranca)
        await $(`[resource-id="com.saucelabs.mydemoapp.android:id/paymentBtn"]`).click()
        const btnpagamento = await $('//android.widget.Button[@content-desc="Completes the process of checkout"]')
        await btnpagamento.click()
    }
}

module.exports = new checkout