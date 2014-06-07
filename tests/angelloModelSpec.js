/**
 * Created by markbrown on 6/3/14.
 */
describe('Service: angelloModel', function () {
    // load the service's model
    beforeEach(module('Angello'));

    var modelService;

    // Initialize the service
    beforeEach(inject(function (angelloModel) {
        modelService = angelloModel;
    }));

    describe('#getStatuses', function() {
        // write tests for angelloModel.getStatuses here

        it('should return seven different statuses', function() {
            expect(modelService.getStatuses().length).toBe(7);
        });
    })
});