export const bubbleSort = (arr) => {
    let animations = [];
    let n = arr.length;
    let tempArr = [...arr];
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (tempArr[j] > tempArr[j + 1]) {
          [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
          animations.push([...tempArr]);
        }
      }
    }
    return animations;
  };
  