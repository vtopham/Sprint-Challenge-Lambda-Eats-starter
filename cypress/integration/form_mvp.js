describe("this block of tests will meet MVP", function() {
    beforeEach(function() {
        cy.visit("localhost:3000/Pizza")
    })

    it("tests", function() {

        //test that you can add text to the box
        cy.get("[data-cy = name")
        .type("Victoria")
        .should("have.value", "Victoria");
        //test that you can select multiple toppings
        cy.get("[data-cy = extraCheese]")
        .check()
        .should("be.checked");

        cy.get("[data-cy = gummyWorms]")
        .check()
        .should("be.checked");

        //test that you can submit the form

        cy.get("[data-cy = submit]")
        .click();

        cy.get("[data-cy = success]")
        .its('length')
        .should("be.gt", 0);





    })
})