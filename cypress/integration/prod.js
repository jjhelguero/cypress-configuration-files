/// <reference types="cypress" />

it('this will be run only for prod config', { tags: '@prod' }, () => {
    expect(Cypress.env('whereAmI')).to.eq('You are in prod environment')
})