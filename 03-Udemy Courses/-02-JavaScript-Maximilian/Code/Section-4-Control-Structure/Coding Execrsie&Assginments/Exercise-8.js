function breakMe() {
  let list;
  for (list = 2; list < 3; list++) {
    throw { message: 'Oh no' };
  }
}

function main() {
  try {
    breakMe();
  } catch (error) {
    return error;
  }
}
