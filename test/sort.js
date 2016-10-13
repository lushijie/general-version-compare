/*
* @Author: lushijie
* @Date:   2016-10-13 17:14:47
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-13 17:35:34
*/

var assert = require('assert');
var compare = require('..');

describe('sort versions', function () {
    it('should sort versions', function () {
        var versions = [
            '1.2.3',
            '4.11.6',
            '4.2.0',
            '1.5.19',
            '1.5.5',
            '4.1.3',
            '2.3.1',
            '10.5.5',
            '11.3.0'
        ];

        assert.deepEqual(versions.sort(compare), [
            '11.3.0',
            '10.5.5',
            '4.11.6',
            '4.2.0',
            '4.1.3',
            '2.3.1',
            '1.5.19',
            '1.5.5',
            '1.2.3'
        ]);
    });

    it('should sort different digits', function () {
        var versions = [
            '1.0',
            '1.0.0',
            '1.0.1'
        ];

        assert.deepEqual(versions.sort(compare), [

            '1.0.1',
            '1.0.0',
            '1.0'
        ]);
    });

    it('should sort pre-release', function () {
        var versions = [
            '1.0.0',
            '1.0.1',
            '1.0.1-gamma',
            '1.0.1-alpha'
        ];

        assert.deepEqual(versions.sort(compare), [
            '1.0.1-gamma',
            '1.0.1-alpha',
            '1.0.1',
            '1.0.0'
        ]);
    });
});
