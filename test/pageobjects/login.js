 class login {
    async menu (email, senha) {
        await $(`~View menu`).click()
        const btnLogin = await $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Recycler view for menu"]/android.view.ViewGroup[13]/android.widget.TextView');
        await btnLogin.click();
        const inputemail = await $(`[resource-id="com.saucelabs.mydemoapp.android:id/nameET"]`)
        inputemail.setValue(email)
        const inputsenha = await $(`[resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]`)
        await inputsenha.setValue(senha)
        await $('~Tap to login with given credentials').click()
    }   
    
 }
module.exports = new login();


