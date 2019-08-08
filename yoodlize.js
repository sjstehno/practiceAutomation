var yoodlizePageObject = {}
module.exports = {
    beforeEach: browser => {
        yoodlizePageObject = browser.page.yoodlizePageObject()
        yoodlizePageObject.navigate()
    },
    after: browser => {
        yoodlizePageObject.end()
    },

    //Tests for QAE-52
    "Open 'See All' link for Recreational Vehicles": browser => {
        yoodlizePageObject
            .click('@recVehicles')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Recreational Vehicles")
    },
    "Open 'See All' link for Outdoor Gear": browser => {
        yoodlizePageObject
            .click('@outdoorGear')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Outdoor Gear")
    },
    "Open 'See All' link for Electronics": browser => {
        yoodlizePageObject
            .click('@electronics')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Electronics")
    },
    "Open 'See All' link for Party & Wedding Equipment": browser => {
        yoodlizePageObject
            .click('@partyAndWedding')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Party & Wedding Equipment")
    },
    "Open 'See All' link for Tools": browser => {
        yoodlizePageObject
            .click('@tools')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Tools")
    },
    "Open 'See All' link for Clothing": browser => {
        yoodlizePageObject
            .click('@clothing')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Clothing")
    },
    "Open 'See All' link for Home & Kitchen": browser => {
        yoodlizePageObject
            .click('@homeAndKitchen')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Home and Kitchen")
    },
    "Open 'See All' link for Toys & Games": browser => {
        yoodlizePageObject
            .click('@toysAndGames')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Toys and Games")
    },
    "Open 'See All' link for Lawn & Garden": browser => {
        yoodlizePageObject
            .click('@lawnAndGarden')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Lawn and Garden")
    },
    "Open 'See All' link for Sporting Goods": browser => {
        yoodlizePageObject
            .click('@sportingGoods')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Sporting Goods")
    },
    "Open 'See All' link for DVDs & Video Games": browser => {
        yoodlizePageObject
            .click('@dvdsAndVideoGames')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: DVDs & Video Games")
    },
    "Open 'See All' link for Venues": browser => {
        yoodlizePageObject
            .click('@venues')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Venues")
    },
    "Open 'See All' link for Local Experts": browser => {
        yoodlizePageObject
            .click('@localExperts')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Local Experts")
    },
    "Open 'See All' link for Guided Experiences": browser => {
        yoodlizePageObject
            .click('@guidedExperiences')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Experiences")
    },
    "Open 'See All' link for Music": browser => {
        yoodlizePageObject
            .click('@music')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Music")
    },
    "Open 'See All' link for Business Equipment": browser => {
        yoodlizePageObject
            .click('@businessEquipment')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Business Equipment")
    },
    "Open 'See All' link for MISC": browser => {
        yoodlizePageObject
            .click('@misc')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Misc")
    },
    //Browse Categories tiles

    "Open 'Tools' tile": browser => {
        yoodlizePageObject
            .click('@tools')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Tools")
    },
    "Open 'Outdoor Gear' tile": browser => {
        yoodlizePageObject
            .click('@outdoorGear')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Outdoor Gear")
    },
    "Open 'Electronics' tile": browser => {
        yoodlizePageObject
            .click('@electronics')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Electronics")
    },
    "Open 'Party & Wedding' tile": browser => {
        yoodlizePageObject
            .click('@partyAndWedding')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Party & Wedding")
    },
    "Open 'Recreational Vehicles' tile": browser => {
        yoodlizePageObject
            .click('@recVehicles')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Recreational Vehicles")
    },
    "Open 'Clothing' tile": browser => {
        yoodlizePageObject
            .click('@clothing')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Clothing")
    },
    "Open 'Home & Kitchen'tile": browser => {
        yoodlizePageObject
            .click('@homeAndKitchen')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Home and Kitchen")
    },
    "Open 'Toys & Games'tile": browser => {
        yoodlizePageObject
            .click('@toysAndGames')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Toys and Games")
    },
    "Open 'Lawn & Garden tile": browser => {
        yoodlizePageObject
            .click('@lawnAndGarden')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Lawn and Garden")
    },
    "Open 'Sporting Goods' tile": browser => {
        yoodlizePageObject
            .click('@sportingGoods')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Sporting Goods")
    },
    "Open 'DVDs & Video Games'tile": browser => {
        yoodlizePageObject
            .click('@dvdsAndVideoGames')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: DVDs & Video Games")
    },
    "Open 'Venues'tile": browser => {
        yoodlizePageObject
            .click('@venues')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Venues")
    },
    "Open 'Local Experts & Services' tile": browser => {
        yoodlizePageObject
            .click('@localExperts')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Local Experts")
    },
    "Open 'Guided Experiences' tile": browser => {
        yoodlizePageObject
            .click('@guidedExperiences')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Experiences")
    },
    "Open 'Music' tile": browser => {
        yoodlizePageObject
            .click('@music')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Music")
    },
    "Open 'MISC' tile": browser => {
        yoodlizePageObject
            .click('@misc')
            .waitForElementPresent('@resultElement')
            .verify.containsText('@resultElement', "category: Misc")
    },

    // //Tests for QAE-53
    "Search for Rubix Cube": browser => {
        yoodlizePageObject
            .setValue('@searchItem', ["rubix cube", browser.Keys.ENTER])
        yoodlizePageObject
            .waitForElementPresent('@resultElement')
            //search term shows as keyword filter:
            .verify.containsText('@resultElement', "keyword: rubix cube")
            //search box shows search value:
            .verify.valueContains('@resultElementKeyword', "rubix cube")
            //search should have appropriate results:
            .verify.containsText('@resultTitle', "Rubix Cube")
            //pagination arrows present:
            .verify.elementPresent('@paginationArrows')
            //correct Title and Price are showing
            .waitForElementPresent('@itemTitle', "Rubix Cube")
            .waitForElementPresent('@price')
    },

}