it('this will be run only for qa config', { tags: '@qa' }, () => {
    expect(Cypress.env('whereAmI')).to.eq('You are in qa environment')
})