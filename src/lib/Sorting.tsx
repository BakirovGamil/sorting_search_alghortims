import { AnimatedItemState, IAnimatedArrayItem, ISortResult } from "../types/types";

export function selectionSort(array: number[]): ISortResult {
    const copyArr = [...array];
    let n = 0;
  
    const time1 = Date.now();
    for(let i = 0; i < copyArr.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < copyArr.length; j++) {
            n++;
            if(copyArr[j] < copyArr[minIndex]) {
                minIndex = j;
            }
        }

        [copyArr[i], copyArr[minIndex]] = [copyArr[minIndex], copyArr[i]];
    }
    const time2 = Date.now();

    return {n, time: time2 - time1, array: copyArr};
}

export function bubbleSort(array: number[]): ISortResult {
    const copyArr = [...array];
    let swapped = false;
    let counter = 0;
    let n = 0;

    const time1 = Date.now();
    do {
        swapped = false;
        counter++;

        for(let i = 0; i < copyArr.length - counter; i++) {
            n++;
            if(copyArr[i] > copyArr[i + 1]) {
                swapped = true;
                [copyArr[i], copyArr[i + 1]] = [copyArr[i + 1], copyArr[i]];
            }
        }
    } while (swapped)
    const time2 = Date.now();

    return {n, time: time2 - time1, array: copyArr};
}

export function shakerSort(array: number[]): ISortResult {
    const copyArr = [...array];
    let begin = 0;
    let end = copyArr.length;
    let swapped = false;
    let n = 0;
  
    const time1 = Date.now();
    do {
      swapped = false;
  
      end--;
      for (let i = begin; i < end; i++) {
        n++;
        if (copyArr[i] > copyArr[i + 1]) {
          swapped = true;
          [copyArr[i], copyArr[i + 1]] = [copyArr[i + 1], copyArr[i]];
        }
      }
      
      if(!swapped) break; 
      begin++;
      for (let i = end; i >= begin ; i--) {
        n++;
        if (copyArr[i] < copyArr[i - 1]) {
          swapped = true;
          [copyArr[i], copyArr[i - 1]] = [copyArr[i - 1], copyArr[i]];
        }
      }
    } while (swapped)
    const time2 = Date.now();

     return {n, time: time2 - time1, array: copyArr};
}

export function quikSort(array: number[]): ISortResult {
   let n = 0; 
   function quikSortAlghoritm(array: number[]): number[] {
        n++;
        if(array.length <= 1) return array;

        let pivotIndex = Math.floor(array.length / 2);
        let pivot = array[pivotIndex];
        const less = [];
        const greater = [];
        for(let i = 0; i < array.length; i++) {
            if(i === pivotIndex) continue;
            if(array[i] < pivot) {
                less.push(array[i]);
            } else {
                greater.push(array[i]);
            }
        }

        return [...quikSortAlghoritm(less), pivot, ...quikSortAlghoritm(greater)];
   }

   const time1 = Date.now();
   const copyArr = quikSortAlghoritm(array);
   const time2 = Date.now();
   return {n, time: time2 - time1, array: copyArr};
}

export function mergeSort(array: number[]): ISortResult {
    let n = 0;
    function merge(firstArr: number[], secondArr: number[]): number[] {
        const arr: number[] = [];

        do {
            n++;
        
            if (firstArr[0] < secondArr[0]) {
                arr.push(firstArr.shift() as number);
            } else {
                arr.push(secondArr.shift() as number);
            } 
        } while(firstArr.length && secondArr.length);
      
        return [...arr, ...firstArr, ...secondArr];
    }

    function mergeAlghoritm(arr: number[]): number[] {
        if(arr.length <= 1) return arr; 
        const middle = Math.floor(arr.length / 2);
        const firstArr = arr.slice(0, middle);
        const secondArr = arr.slice(middle, arr.length);

        return merge(mergeAlghoritm(firstArr), mergeAlghoritm(secondArr));
    }

    const time1 = Date.now();
    const sortedArr = mergeAlghoritm(array);
    const time2 = Date.now();
    return {n, time: time2-time1, array: sortedArr};
}


export function* bubbleSortAnimated(array: IAnimatedArrayItem[]) {
    const copyArr = [...array];
    let swapped = false;
    let counter = 0;
    do {
        swapped = false;
        counter++;

        for(let i = 0; i < copyArr.length - counter; i++) {
            copyArr[i].state = AnimatedItemState.checked;
            copyArr[i + 1].state = AnimatedItemState.checked;
            yield copyArr;
            
            if(copyArr[i].value > copyArr[i + 1].value) {
                swapped = true;
                copyArr[i].state = AnimatedItemState.first;
                copyArr[i + 1].state = AnimatedItemState.second;
                [copyArr[i], copyArr[i + 1]] = [copyArr[i + 1], copyArr[i]];
            }

            yield copyArr;
            copyArr[i].state = AnimatedItemState.off;
            copyArr[i + 1].state = AnimatedItemState.off;
        }
    } while (swapped)
}
