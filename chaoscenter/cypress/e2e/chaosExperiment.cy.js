/*
Describe('tesing ChaosExperiment', () => {
    it('testing through UI', () => {
        //adding chaosinfra
        cy.get('.TableV2--row').eq(0).click();
        cy.contains('Enable Chaos').click();
        cy.get('.bp3-form-content').type('exp');
        cy.contains('Next').click();
        cy.contains('Next').click();
        cy.contains('Download').click();
        cy.on('window alert', () => {
            expect(message).to.equal('Chaos infrastructure successfully created');
        });
        cy.contains('Done').click();

        cy.contains('Chaos Experiments').click();
        cy.get('button[aria-label="New Experiment"]').click();
        cy.get('input[name="name"]').type('exp');
        cy.get('.bp3-form-group .bp3-button').click();
        
    })
})*/