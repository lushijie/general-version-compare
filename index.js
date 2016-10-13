/*
* @Author: lushijie
* @Date:   2016-10-13 14:38:20
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-13 17:39:03
*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.compareVersion = factory();
    }
}(this, function () {
    return function compareVersion(a, b){
        var p1 = JSON.stringify(a).match(/[a-zA-Z]+|[0-9]+/g);
        var p2 = JSON.stringify(b).match(/[a-zA-Z]+|[0-9]+/g);
        var maxLength = Math.max(p1.length, p2.length);
        for(var i = 0; i < maxLength; i++ ) {
            p1[i] = /^\d*$/.test(p1[i]) ? parseInt(p1[i]) : p1[i];
            p2[i] = /^\d*$/.test(p2[i]) ? parseInt(p2[i]) : p2[i];
            if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return 1;
            if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return -1;
            if (p1[i] > p2[i]) return -1;
            if (p2[i] > p1[i]) return 1;
        }
        return 0;
    }
}));
