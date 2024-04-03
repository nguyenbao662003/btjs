function findMinMax(arr) {
    if (!arr || arr.length === 0) {
        return [null, null];
    }

    let minNumber = Infinity;
    let maxNumber = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return [maxNumber, minNumber];
}
const inputArray = [2, 3, 4, 5];
const [maxNumber, minNumber] = findMinMax(inputArray);
console.log(`Output: ${maxNumber}, ${minNumber}`);
