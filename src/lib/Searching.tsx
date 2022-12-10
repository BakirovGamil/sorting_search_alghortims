export function linearSearch(arr: number[], num: number): number {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i;
        }
    }

    return -1;
}

export function binarySearch(arr: number[], num: number): number {
    let left = 0;
    let middle = Math.floor(arr.length / 2);
    let right = arr.length - 1; 

    do {
        if(num === arr[middle]) return middle;

        if(num < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }

        middle = Math.floor((right + left) / 2);
        console.log(middle);
    } while(left <= right)

    return -1;
}