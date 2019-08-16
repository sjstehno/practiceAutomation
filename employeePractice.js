/**
 * Clicks an element whose text equals the `text` parameter - element must have a unique text value.
 * @param {object} browser - `browser`/`client` in use
 * @param {string} text - the text of the element that should be clicked
 */
var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}
var checkId = (browser) => {
    browser
        .getText('#employeeID', function (result) {
            let idNumber = Number(result.value.slice(3))
            browser
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        })
}
var employeePage = {}
module.exports = {
    beforeEach: browser => {
        employeePage = browser.page.employeePracticePO()
        employeePage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Edits an employee and checks that the edit stuck': browser => {
        employeePage.editTest('Lou White', { name: 'Roger Johnson', phone: '1234567890', title: 'Cook' }, 'Ruby Estrada')
    },
    'Check ID': browser => {
        employeePage
            .click('@employee4')
        checkId(browser)
    },
    'Q4S-38 Phone number field can successfully save': browser => {
        employeePage
            .click('@employee6')
            .clearValue('@phoneField')
            .setValue('@phoneField', '4567891233')
            .click('@saveButton')
            //navigate to new employee and back to verify saved changes persist
            .click('@employee1')
            .click('@employee6')
            .verify.value('@phoneField', '4567891233')
            .pause(1000)
    },
    'Q4S-57 Name field is editable': browser => {
        employeePage
            .click('@employee4')
            .clearValue('@nameField')
            .setValue('@nameField', 'Mickey Mouse')
            .click('@saveButton')
            //navigate to new employee and back to verify saved changes persist
            .click('@employee2')
            .click('@employee4')
            .verify.value('@nameField', 'Mickey Mouse')
            .pause(1000)
    },
    'Q4S-58 Title field is editable': browser => {
        employeePage
            .click('@employee1')
            .clearValue('@titleField')
            .setValue('@titleField', 'Chief Executive Officer')
            .click('@saveButton')
            //navigate to new employee and back to verify saved changes persist
            .click('@employee6')
            .click('@employee1')
            .verify.value('@titleField', 'Chief Executive Officer')
            .pause(1000)
    },
    'Q4S-59 Edit a record and cancel': browser => {
        var employee5 = {
            selector: '//li[@name="employee5"]',
            name: 'Minnie Mouse'
        }
        employeePage
            .useXpath()
            .click(employee5.selector)
            .useCss()
            .clearValue('@nameField')
            .setValue('@nameField', employee5.name)
            .pause(1000)
            .click('@cancelButton')
            .pause(1000)
            .verify.value('@nameField', 'Dollie Berry')
    },
    'Verify text- No Employee Selected': browser => {
        var noEmployee = 'No Employee Selected'
        employeePage
            .useXpath()
            .verify.containsText('//div/p', noEmployee)
            .pause(1000)
    },
}