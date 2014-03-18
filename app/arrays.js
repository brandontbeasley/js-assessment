if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var index = arr.indexOf(item);
        return index;
    },

    sum : function(arr) {
        var sum = arr.reduce(function(a, b) { return a + b });
        return sum;
    },

    remove : function(arr, item) {
        var index = arr.indexOf(item);
        var remove = arr.splice(index, 1);
        return arr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        var index = arr.length - 1;
        arr.splice(index, 1);
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = arr1.concat(arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {
        for ( i = 0; i < arr.length; i++)
            arr[i] = arr[i]*arr[i];
        return arr;
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
