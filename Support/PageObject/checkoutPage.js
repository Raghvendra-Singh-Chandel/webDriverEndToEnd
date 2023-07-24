import navComponent from "../Component/navComponent"
import {faker} from '@faker-js/faker'

class checkoutItems {

    get navComponents () {
        return navComponent
    }

    get firstName() {
        return $(`#billing_first_name`)
    }

    get lastName() {
        return $(`#billing_last_name`)
    }

    get companyName() {
        return $(`#billing_company`)
    }

    get CountryOrRegeion() {
        return $(`#select2-billing_country-container`)
    }

    get searchCountry() {
        return $(`.select2-search input`)
    }

    get selectCountry() {
        return $$(`#select2-billing_country-results li`)
    }

    get streetAddress1() {
        return $(`#billing_address_1`)
    }

    get streetAddress2() {
        return $(`#billing_address_2`)
    }

    get townOrCity() {
        return $(`#billing_city`)
    }

    get province() {
        return $(`#select2-billing_state-container`)
    }

    get searchProvince() {
        return $(`.select2-search input`)
    }

    get selectProvince() {
        return $(`.select2-results ul li`)
    }

    get postalCode() {
        return $(`#billing_postcode`)
    }

    get phoneNumber() {
        return $(`#billing_phone`)
    }

    get emailAddress() {
        return $(`#billing_email`)
    }

    get accountUsername() {
        return $(`#account_username`)
    }

    get createAccPass() {
        return $(`#account_password`)
    }

    get placeOrder() {
        return $(`#place_order`)
    }

    get orderComment() {
        return $(`#order_comments`)
    }

    async checkoutProduct() {
        // faker.setLocale("en");
        await browser.url('/checkout')
        
        // await expect(browser).toHaveUrlContaining('/checkout/',{timeout:40000})
        await this.firstName.waitForDisplayed({timeout: 60000})
        await expect(this.firstName).toBeDisplayed()
        
        const firstName = faker.person.firstName('female'| 'male')
        const lastName = faker.person.lastName('female'| 'male')
        await this.firstName.setValue(firstName,{locale: "en"})
        await expect(this.firstName).toHaveValue(firstName,{locale: "en"})
        await this.lastName.setValue(lastName)
        await expect(this.lastName).toHaveValue(lastName)
        await this.companyName.setValue(faker.company.name(),{locale: "en"})
        await this.CountryOrRegeion.click()
        const totalCountry = await this.selectCountry.length
        const random_country = await this.navComponents.getRandomNumber(totalCountry)
        console.log("random value here", random_country)
        await this.selectCountry[random_country].click()
        const country = await this.CountryOrRegeion.getText()
        await this.streetAddress1.setValue(faker.location.streetAddress({useFullAddress: true, country: country}))
        const city = faker.location.city({country: country})
        await this.townOrCity.setValue(city)
        const totalState = await this.selectCountry.length
        const random_state = await this.navComponents.getRandomNumber(totalState)
        await browser.pause(3000)
        if (await this.province.isDisplayed()) {
            await this.province[random_state].click()
            await this.selectProvince.click()
        }
        await this.postalCode.setValue(faker.location.zipCode())
        await this.phoneNumber.setValue(faker.phone.number('##########'))
        await this.emailAddress.setValue(faker.internet.email({firstName:firstName, lastName:lastName}))
        await this.accountUsername.setValue(firstName+"_"+lastName+"_")
        await this.createAccPass.setValue("Test@123#!")
        await this.orderComment.setValue(faker.lorem.sentences(2),{locale: "en"})
        await this.placeOrder.click()
        
       



    }




}
export default new checkoutItems