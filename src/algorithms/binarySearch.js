export const binarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1;
    let steps = [];
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      steps.push(mid); // Track which indices are checked
  
      if (arr[mid] === Number(target)) {
        return { foundIndex: mid, searchSteps: steps };
      } else if (arr[mid] < Number(target)) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return { foundIndex: -1, searchSteps: steps }; // Target not found
  };
  