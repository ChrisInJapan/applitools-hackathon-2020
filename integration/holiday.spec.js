/// <reference types="cypress" />


describe('part 1', function() {

    beforeEach(() => {
       //cy.visit('https://demo.applitools.com/tlcHackathonMasterV1.html')
       //cy.visit('http://demo.applitools.com/tlcHackathonDev.html')
       cy.visit('https://demo.applitools.com/tlcHackathonMasterV2.html')
    })

    it('should check the main page', () => {

        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 1',
            batchName: 'Holiday Shopping',
            browser: [

                { width: 1200, height: 88, name: 'firefox' },
                { width: 1200, height: 88, name: 'edgechromium' },
                { width: 1200, height: 88, name: 'safari' },
               { deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' },
                { width: 1200, height: 800, name: 'chrome' }
            ]
        })
        
        cy.eyesCheckWindow('main page');
 
        cy.eyesClose();

    })    

    it('should filter the product grid', () => {

        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 2',
            batchName: 'Holiday Shopping',
            browser: [

                { width: 1200, height: 88, name: 'firefox' },
                { width: 1200, height: 88, name: 'edgechromium' },
                { width: 1200, height: 88, name: 'safari' },
                { deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' },
                { width: 1200, height: 800, name: 'chrome' }
            ]
        })

        cy.get('#SPAN__checkmark__107').click()
        //cy.get('#LABEL__containerc__104').click()
        cy.get('#filterBtn').click()
 
        cy.eyesCheckWindow({ 
            tag: 'filter by color', 
            target: 'region',
            selector: '#product_grid'
        })
      
        cy.eyesClose();
        
    })   


    it('should view product details', () => {

        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 3',
            batchName: 'Holiday Shopping',
            browser: [

                { width: 1200, height: 88, name: 'firefox' },
                { width: 1200, height: 88, name: 'edgechromium' },
               { width: 1200, height: 88, name: 'safari' },
                { deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' },
                { width: 1200, height: 800, name: 'chrome' }
            ]
        })
        cy.contains('Appli Air x Night').click()
 
        cy.eyesCheckWindow('product details');
      
        cy.eyesClose();
    })  
})