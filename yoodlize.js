module.exports = {
    beforeEach: browser => {
        browser.url("https://alpha.yoodlize.com/")
    },
    after: browser => {
        browser.end()
    },

//Tests for QAE-52
    "Open 'See All' link for Recreational Vehicles": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Recreational Vehicles")
    },
    "Open 'See All' link for Outdoor Gear": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Outdoor Gear")
    },
    "Open 'See All' link for Electronics": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Electronics")
    },
    "Open 'See All' link for Party & Wedding Equipment": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Party & Wedding Equipment")
    },
    "Open 'See All' link for Tools": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Tools")
    },
    "Open 'See All' link for Clothing": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Clothing")
    },
    "Open 'See All' link for Home & Kitchen": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Home and Kitchen")
    },
    "Open 'See All' link for Toys & Games": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Toys and Games")
    },
    "Open 'See All' link for Lawn & Garden": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Lawn and Garden")
    },
    "Open 'See All' link for Sporting Goods": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Sporting Goods")
    },
    "Open 'See All' link for DVDs & Video Games": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: DVDs & Video Games")
    },
    "Open 'See All' link for Venues": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Venues")
    },
    "Open 'See All' link for Local Experts": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Local Experts")
    },
    "Open 'See All' link for Guided Experiences": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Experiences")
    },
    "Open 'See All' link for Music": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Music")
    },
    "Open 'See All' link for Business Equipment": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[16]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Business Equipment")
    },
    "Open 'See All' link for MISC": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[17]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Misc")
    },
    //Browse Categories tiles

    "Open 'Tools' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[1]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Tools")
    },
    "Open 'Outdoor Gear' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[2]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Outdoor Gear")
    },
    "Open 'Electronics' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[3]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Electronics")
    },
    "Open 'Party & Wedding' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[4]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Party & Wedding")
    },
    "Open 'Recreational Vehicles' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[5]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Recreational Vehicles")
    },
    "Open 'Clothing' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[6]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Clothing")
    },
    "Open 'Home & Kitchen'tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[7]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Home and Kitchen")
    },
    "Open 'Toys & Games'tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[8]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Toys and Games")
    },
    "Open 'Lawn & Garden tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[9]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Lawn and Garden")
    },
    "Open 'Sporting Goods' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[10]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Sporting Goods")
    },
    "Open 'DVDs & Video Games'tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[11]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: DVDs & Video Games")
    },
    "Open 'Venues'tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[12]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Venues")
    },
    "Open 'Local Experts & Services' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[13]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Local Experts")
    },
    "Open 'Guided Experiences' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[14]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Experiences")
    },
    "Open 'Music' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[15]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Music")
    },
    "Open 'MISC' tile": browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[16]')
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "category: Misc")
    },

    // //Tests for QAE-53
    "Search for Rubix Cube": browser => {
        browser
        .useXpath()
        .setValue('//input[@type="text"]', ["rubix cube", browser.Keys.ENTER])
        browser
        .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]')
        //search term shows as keyword filter:
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "keyword: rubix cube")
        //search box shows search value:
        .verify.valueContains('//input[@name="keyword"]', "rubix cube")
        //search should have appropriate results:
        .verify.containsText('//div[@class="_2J6OR _11IQO _3hOq8 col-md-12 col-sm-12 col-xs-12"]', "Rubix Cube")
        //pagination arrows present:
        .verify.elementPresent('//a[@class="rc-pagination-item-link"]')
        //correct Title, City, Owner, and Price per day, description, and rental rules are showing (Can't figure this out)
        //.verify.containsText('//div[@class="sc-jqCOkK hxTVNb sc-gqjmRU fptSCa"]', "Rubix Cube")
        //.verify.containsText('//span[text()="$22"]')
    },

}