describe('App page opens', ()=>{
    it('Renders correctly', ()=>{
        cy.visit("/");
        cy.get(".widget").should("be.visible");
        cy.get(".info").should("be.visible");
        cy.get("li.city p b").should('have.text', 'Copenhagen');
    })
})