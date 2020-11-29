describe("Main Page Test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("challenge list should exist", () => {
    cy.get(`[data-cy=challenge]`).should("exist");
  });

  it("video list should exist", () => {
    cy.get(`[data-cy=video]`).should("exist");
  });

  it("meal list should exist", () => {
    cy.get(`[data-cy=meal]`).should("exist");
  });

  it("equipment list should exist", () => {
    cy.get(`[data-cy=equipment]`).should("exist");
  });
});

describe("Login Page Test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/signin");
  });
  it("login test", () => {
    cy.get(`[data-cy=name]`).type("6666");
    cy.get(`[data-cy=password]`).type("6666");
    cy.get(`[data-cy=button]`).click();
  });
});

describe("Challenge Test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/challenge");
  });
  it("challenge test", () => {
    cy.visit("localhost:3000/challenge");
    cy.get(`[data-cy=challenge-list]`).should("exist");
  });
});
