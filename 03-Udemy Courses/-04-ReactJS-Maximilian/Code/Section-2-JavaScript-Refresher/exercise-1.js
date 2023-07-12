function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects

  return numberArray.map((number) => {
    return { val: number };
  });
}
const arr = [1, 2, 3, 4, 5, 7];

transformToObjects(arr);
