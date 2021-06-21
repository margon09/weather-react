describe('City data is fetched', ()=>{
    it('Displays correct info for non-existent cities', ()=>{
        cy.visit("/");
        cy.get(".input").type('Dopenhagen');
        cy.get(".myBtn").click();
        cy.get("li.city p b").should('have.text', 'N/A');
        cy.get("li.temper p b").should('have.text', 'N/A');
        cy.get("li.humid p b").should('have.text', 'N/A');
        cy.get("li.windy p b").should('have.text', 'N/A');
        cy.get("li.noBorder p").should('have.text', 'City not found');
    });
    it('Displays correct info for existent cities', ()=>{
        cy.visit("/");
        cy.get(".input").type('Frederiksberg');
        cy.get(".myBtn").click();
        cy.get("li.city p b").should('have.text', 'Frederiksberg');
        cy.get("li.noBorder p").should('have.text', '');
    });
    it('Displays correct info for existent cities', ()=>{
        cy.visit("/");
        cy.get(".input").type('Valby');
        cy.get(".myBtn").click();
        cy.get("li.city p b").should('have.text', 'Valby');
        cy.get("li.noBorder p").should('have.text', '');
    });
})