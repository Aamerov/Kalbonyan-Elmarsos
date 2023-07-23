function transformToObjects(numberArray) {
  const object = numberArray.map((number) => {
    let valNum = { val: number };
    return valNum;
  });
  return object;
}
