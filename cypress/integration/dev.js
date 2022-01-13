it('this will be run only for dev config', { tags: '@dev' }, () => {
    expect(Cypress.env('whereAmI')).to.eq('You are in dev environment')
})