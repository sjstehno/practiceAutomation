var awanaPage = {}
let awanaSearchData = require('../testAssests/awanaTestData')
var testEmail = (+new Date).toString(36) + "@mailinator.com"
module.exports = {
    beforeEach: browser => {
        awanaPage = browser.page.awanaPage()
    },
    after: browser => {
        awanaPage.end()
    },
        'Register new church': browser => {
            awanaPage
            .navigate()
            .maximizeWindow()
            // Hover over "Shop"
            .moveToElement('@shop', 5, 5)
            // Click "Become a Member"
            .click('@becomeMember')
            // Click "Start Your Church Membership Today"
            .click('@startMembership')
            // Click "Start Membership Process (checkout button)"
            .click('@memCheckout')
            // Pre-DocuSign pop-up
            .waitForElementVisible('@popUpChurchName')
            .setValue('@popUpChurchName', "Automated Test")
            .setValue('@popUpUserName', "Test User")
            .setValue('@popUpEmail', testEmail)
            .click('@popUpSubmit')
            //Docusign
            .click('@accept')
            .click('@continue')
            .moveToElement('@finish', 10, 10)
            .click('@finish')
            .waitForElementVisible('@tabBtn')
            .click('@tabBtn')
            .waitForElementVisible('@adopt', 8000)
            .click('@adopt')
            // Can't click the top "Finish" button
            // .useCss()
            // .click('#otherActionsButton')
            // Can't click the bottom "Finish button either
            // .click('(//button[@data-action="exit"])[2]')
            // .click('(//button[@class="btn btn-main btn-lg btn-done-signing"])[1]')
            // Forcing test to re-direct to checkout URL
            .navigate('https://sarahs-test-awananetwork.pantheonsite.io/checkout/')
            // Create a login
            .waitForElementVisible('@signUp')
            .click('@signUp')
            .createLoginNewMem(testEmail)
            // Checkout page
            .waitForElementVisible('@selectChurch', 10000)
            .click('@selectChurch')
            .waitForElementVisible('@churchName')
            .setValue('@churchName', "Test Church")
            .setValue('@firstName', "Auto")
            .setValue('@lastName', "Test")
            .setValue('@email', testEmail)
            .setValue('@phone', "8662926227")
            .setValue('@physicalStreet', "1 E Bode Rd")
            .setValue('@physicalCity', "Streamwood")
            .setValue('@physicalZip', "60107")
            .click('@stateIL')
            // I don't think I need the following step
            // .click('option[value="United States (US)"]')
            .click('@pastor')
            .setValue('@billFirst', "Auto")
            .setValue('@billLast', "Test")
            .setValue('@billAddress', "1 E Bode Rd")
            .setValue('@billCity', "Streamwood")
            .setValue('@billZip', '60107')
            // Unable to set the billing state
            .click('.select2')
            .useXpath()
            .waitForElementVisible('//input[@class="select2-search__field"]')
            .setValue('//input[@class="select2-search__field"]', ["Illinois", browser.Keys.ENTER])
            .pause()
            // .click('//li[@id="select2-billing_state-result-99eg-IL"]')
            // Submit order
            .waitForElementVisible('@placeOrder', 10000)
            .click('@placeOrder')
            .waitForElementVisible('@orderConf', 10000)
            .pause()
    },
    'Download a curriculum sample': browser => {
        awanaPage
            .navigate()
            .maximizeWindow()
            // Hover over "US Ministry"
            .waitForElementVisible('@USMinistry')
            .moveToElement('@USMinistry', 5, 5)
            // Click "Awana Curriculum"
            .click('@curriculum')
            // Click "Get a Sample"
            .click('@getSample')
            // first name field
            .setValue('@sampFirstName', 'Auto')
            // last name field
            .setValue('@sampLastName', 'Test')
            // email field
            .setValue('@sampEmail', (+new Date).toString(36) + '@mailinator.com')
            // phone field
            .setValue('@sampPhone', '8662926227')
            // zip field
            .setValue('@sampZip', '60107')
            // church name field
            .setValue('@sampChurchName', 'Test Church')
            // role menu
            .click('@sampRole')
            // program interests
            .click('@sampProgram')
            // Looking to Start
            .click('@toStart')
            // Within the next year
            .click('@nextYear')
            .click('@sampSubmit')
            .waitForElementVisible('@sampConf')
    },
    'Awana Finder': browser => {
        awanaSearchData.forEach(test => {
            awanaPage
                .awanaFinder(test, browser)
        })
    },
    'Find a US Missionary- random state selection': browser => {
        var dropdowns = ['@stateAL', '@stateAK', '@stateAZ', '@stateAR', '@stateCA', '@stateCO', '@stateCT', '@stateDE', '@stateDC', '@stateFL', '@stateGA', '@stateHI', '@stateID', '@stateIL', '@stateIN', '@stateIA', '@stateKS', '@stateKY', '@stateLA', '@stateME', '@stateMD', '@stateMA', '@stateMI', '@stateMN', '@stateMS', '@stateMO', '@stateMT', '@stateNE', '@stateNV', '@stateNH', '@stateNJ', '@stateNM', '@stateNY', '@stateNC', '@stateND', '@stateOH', '@stateOK', '@stateOR', '@statePA', '@stateRI', '@stateSC', '@stateSD', '@stateTN', '@stateTX', '@stateUT', '@stateVT', '@stateVA', '@stateWV', '@stateWI', '@stateWY']
        awanaPage
            .prodUrl()
            .maximizeWindow()
            // Hover over "More"
            .moveToElement('@more', 5, 5)
            // Click "Find a US Missionary"
            .click('@findUSM')
            // Select state and county
            .waitForElementVisible('@stateInput', 8000)
            .click(dropdowns[Math.floor(Math.random()*dropdowns.length)])
            .waitForElementVisible('@boxEmpty', 8000)
            .click('@county')
            .moveToElement('@boxName', 200, 50)
            .verify.visible('@boxName')
            .saveScreenshot('../testScreenshots/findAMissionary' + (+new Date).toString() + '.png')
    },
    'Search by keyword': browser => {
        awanaPage
            .navigate()
            .maximizeWindow()
            .click('@searchGlass')
            .setValue('@searchBar', ["sparks", browser.Keys.ENTER])
        awanaPage.expect.element('@resultText').text.to.contain("Sparks")
    },
    'Search leader resources': browser => {
        awanaPage
        .navigate()
        .maximizeWindow()
        // Hover over "More"
        .moveToElement('@more', 5, 5)
        .click('@leaderResources')
        .click('@cubbiesRadio')
        .verify.visible('@appleseed', 8000)
    },
    'Create a user login': browser => {
        awanaPage
            .createLogin((+new Date).toString(36) + "@mailinator.com")
    }
}