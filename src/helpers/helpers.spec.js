import Helpers from './index';
import * as constants from "../constants";

describe('Helper functions', () => {
    it('Helpers.capitalize() should return capitalized string', () => {
        const text = 'lowercase';

        expect(Helpers.capitalize(text)).toEqual('Lowercase');
    });

    it('Helpers.getUsersByStatus() should return all users with selected status', () => {
        const selectedStatus = 'returned';
        const array = [
            {
                status: selectedStatus,
            },
            {
                status: selectedStatus,
            },
            {
                status: true,
            },
            {
                status: 'string',
            }
        ];

        const filteredByStatus = Helpers.getUsersByStatus(array, selectedStatus);

        expect(filteredByStatus.length).toEqual(2);
        expect(filteredByStatus[0].status).toEqual('returned');
    });

    it('Helpers.getNextStatus() should return correct next status for personnel, based on current one', () => {
        const newStatus = Helpers.getNextStatus(constants.APPLIED);

        expect(newStatus).toEqual(constants.INTERVIEWING);
    });

    it('Helpers.getNextStatus() should return current status if current status is the last possible', () => {
        const newStatus = Helpers.getNextStatus(constants.HIRED);

        expect(newStatus).toEqual(constants.HIRED);
    });

    it('Helpers.getPrevStatus() should return correct prev status for personnel, based on current one', () => {
        const newStatus = Helpers.getPrevStatus(constants.INTERVIEWING);

        expect(newStatus).toEqual(constants.APPLIED);
    });

    it('Helpers.getPrevStatus() should return current status if status is the first possible', () => {
        const newStatus = Helpers.getPrevStatus(constants.APPLIED);

        expect(newStatus).toEqual(constants.APPLIED);
    });

    it('Helpers.filterPersonnelList() should return correctly filtered array.', () => {
        const filter = {
            operation: constants.FILTER_TYPE_CITY,
            value: 'Kyiv',
        };
        const personnelArray = [
            {
                city: 'London',
            },
            {
                city: 'Kyiv',
            },
            {
                city: 'New York',
            }
        ];
        const filteredArray = Helpers.filterPersonnelList(personnelArray, filter);

        expect(filteredArray.length).toEqual(1);
        expect(filteredArray[0].city).toEqual('Kyiv');
    });
});
