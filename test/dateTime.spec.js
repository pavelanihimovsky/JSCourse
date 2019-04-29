const { describe, it } = require('mocha');
const { assert } = require('chai');
const dateTime = require('../utils/dateTime.util');

describe('DateTime util tests', () => {
    it('should return today date', () => {
        assert.equal(dateTime.today(), Date.today);
    });

    it('should set correct year', () => {
        const date = new Date();
        assert.equal(dateTime.setYear(date, '2010'), date.setYear('2010'));
    });

    it('should calculate correct days difference', () => {
        assert.equal(dateTime.daysDifference(new Date('October 13'), new Date('October 14')), 1);
    });
});