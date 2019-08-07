module.exports = {
    beforeEach: browser => {
        browser.url("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
    },
    after: browser => {
        browser.end()
    },
    
    'Q4S-38 Phone number field can successfully save': browser => {
        browser
        .useXpath()
        .click('//li[@name="employee6"]')
        .clearValue('//input[@name="phoneEntry"]')
        .setValue('//input[@name="phoneEntry"]', '8662926227')
        .click('//button[@name="save"]')
        //navigate to new employee and back to verify saved changes persist
        .click('//li[@name="employee1"]')
        .click('//li[@name="employee6"]')
        .verify.value('//input[@name="phoneEntry"]', '8662926227')
        .pause(4000)
    },
    'Q4S-57 Name field is editable': browser => {
        browser
        .click('//li[@name="employee4"]')
        .clearValue('//input[@name="nameEntry"]')
        .setValue('//input[@name="nameEntry"]', 'Mickey Mouse')
        .click('//button[@name="save"]')
        //navigate to new employee and back to verify saved changes persist
        .click('//li[@name="employee2"]')
        .click('//li[@name="employee4"]')
        .verify.value('//input[@name="nameEntry"]', 'Mickey Mouse')
        .pause(4000)
    },
    'Q4S-58 Title field is editable': browser => {
        browser
        .click('//li[@name="employee1"]')
        .clearValue('//input[@name="titleEntry"]')
        .setValue('//input[@name="titleEntry"]', 'Chief Executive Officer')
        .click('//button[@name="save"]')
        //navigate to new employee and back to verify saved changes persist
        .click('//li[@name="employee6"]')
        .click('//li[@name="employee1"]')
        .verify.value('//input[@name="titleEntry"]', 'Chief Executive Officer')
        .pause(4000)
    },
    'Q4S-59 Edit a record and cancel': browser => {
        browser
        .click('//li[@name="employee5"]')
        .clearValue('//input[@name="nameEntry"]')
        .setValue('//input[@name="nameEntry"]', 'Minnie Mouse')
        .pause(4000)
        .click('//button[@name="cancel"]')
        .pause(4000)
        .verify.value('//input[@name="nameEntry"]', 'Dollie Berry')
    },
    'Verify text- No Employee Selected': browser => {
        browser
        .verify.containsText('//div/p', 'No Employee Selected')
        .pause(4000)
    },
}