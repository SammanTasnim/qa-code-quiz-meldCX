
describe("Test Login Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8080/");
    });
  
    it("Check render the fields", () => {
        //Header text check
        cy.get('.sc-bdVaJa > div').should("contain.text", "qa.code-quiz.dev");

        //Username input field check
        cy.get('[placeholder="Enter Username"]').should("exist");

        //Pasword input field check
        cy.get('[placeholder="password"]').should("exist");

        //Login button check
        cy.get('.sc-bZQynM').should("exist");

        //Login button text check
        cy.get('.sc-bZQynM').should("contain.text", "LOGIN");   

        //Forget password text check
        cy.get('.sc-ifAKCX > div').should("contain.text", "If you do not have an account, contact an admin");

    });

    it("Login button click pressing enter button from the keyboard", () => {
      cy.contains('button', 'LOGIN').focus().type('{enter}');
    });

    it("Check validations", () => {
      //Click on login button without entering data
      cy.contains('button', 'LOGIN').click();
      
      //Username empty
      cy.contains('Username is required.').should('be.visible');
      cy.contains('Password is required.').should('be.visible');
    }); 

    it("Responsiveness 1280*800", () => {
      cy.viewport(1280, 800);
      cy.get('.sc-bdVaJa > div').should("contain.text", "qa.code-quiz.dev");
        //Username input field check
        cy.get('[placeholder="Enter Username"]').should("exist");

        //Pasword input field check
        cy.get('[placeholder="password"]').should("exist");

        //Login button check
        cy.get('.sc-bZQynM').should("exist");

        //Login button text check
        cy.get('.sc-bZQynM').should("contain.text", "LOGIN");   

        //Forget password text check
        cy.get('.sc-ifAKCX > div').should("exist");

        cy.get('.sc-ifAKCX > div').should("contain.text", "If you do not have an account, contact an admin");


    });
    it("Responsiveness 412*995", () => {
      cy.viewport(412, 995);
      cy.get('.sc-bdVaJa > div').should("contain.text", "qa.code-quiz.dev");
        //Username input field check
        cy.get('[placeholder="Enter Username"]').should("exist");

        //Pasword input field check
        cy.get('[placeholder="password"]').should("exist");

        //Login button check
        cy.get('.sc-bZQynM').should("exist");

        //Login button text check
        cy.get('.sc-bZQynM').should("contain.text", "LOGIN");   

        //Forget password text check
        cy.get('.sc-ifAKCX > div').should("exist");

        cy.get('.sc-ifAKCX > div').should("contain.text", "If you do not have an account, contact an admin");


    });
    it("Responsiveness 1024*600", () => {
      cy.viewport(1024, 600);
      cy.get('.sc-bdVaJa > div').should("contain.text", "qa.code-quiz.dev");
        //Username input field check
        cy.get('[placeholder="Enter Username"]').should("exist");

        //Pasword input field check
        cy.get('[placeholder="password"]').should("exist");

        //Login button check
        cy.get('.sc-bZQynM').should("exist");

        //Login button text check
        cy.get('.sc-bZQynM').should("contain.text", "LOGIN");   

        //Forget password text check
        cy.get('.sc-ifAKCX > div').should("exist");

        cy.get('.sc-ifAKCX > div').should("contain.text", "If you do not have an account, contact an admin");


    });
    
  });