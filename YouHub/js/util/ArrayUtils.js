export default class ArrayUtils {

    /**
     * remove item from array if item exist, else push item into array
     */
    static updateArray(array, item) {
        for (let i = 0; i < array.length; i++) {
            let temp = array[i];
            if (temp === item) {
                array.splice(i, 1);
                return;
            }
        }
        array.push(item);
    }

    /**
     * clone an array
     * @param array
     * @returns {Array}
     */
    static clone(array) {
        if (!array) {
            return [];
        }
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[i] = array[i];
        }
        return newArray;
    }

    static isEqual(arr1, arr2) {
        if (!(arr1 && arr2)) {
            return false;
        }
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}