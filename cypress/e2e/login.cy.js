
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

    it("Check login with valid credentials", () => {
      //Enter valid username
      cy.get('[placeholder="Enter Username"]').type("SomeName");
      //Enter valid password
      cy.get('[placeholder="password"]').type("TopSecret1234!");
      //Click on login button
      cy.get(".sc-bZQynM.cGmBje").click();

      cy.wait(1000); // Wait loading the page
      cy.contains('Hello SomeName').should('exist');
      cy.contains('Favourite Fruit').should('exist');
      cy.contains('Favourite Movie').should('exist');
      cy.contains('Favourite Number').should('exist');
      cy.contains('button', 'LOGOUT').click();
    });

    it("Check validation with invalid credentials", () => {
      //Enter valid username
      cy.get('[placeholder="Enter Username"]').type("InvalidUser");
      //Enter valid password
      cy.get('[placeholder="password"]').type("InvalidPassword123");
      //Click on login button
      cy.get(".sc-bZQynM.cGmBje").click();

      cy.wait(1000); // Wait loading the page
      cy.contains('Invalid credentials').should('exist');
    });

    it("Check validations for empty fields", () => {
      //Click on login button without entering data
      cy.contains('button', 'LOGIN').click();
      
      //Username empty
      cy.contains('Username is required.').should('be.visible');
      //Password empty
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