/* 
* This is a JavaScript implementation of the sleep sort algorithm.
* In general, sleep sort works by starting a separate task for 
* each item to be sorted, where each task sleeps for an interval 
* corresponding to the item's sort key, then emits the item. 
* Items are then collected sequentially in time. 
* 
*  Rosetta Code: https://rosettacode.org/wiki/Sorting_algorithms/Sleep_sort
*/

export function sleepSort (items) {
    const result = [];
    for (let n of items) {
        setTimeout(
            () => {
                result.push(n);
                if (this.length === result.length) {
                    console.log(result);
                }
            },
            n + 1
        );
    }
    return result;
}
