const devide9 = (lowNumber, highNumber) => {
  let goodNumberSum = 0;

  for (i = lowNumber; i < highNumber + 1; i++) {
    if (i % 9 == 0) {
      goodNumberSum += i;
    }
  }
  console.log(`The sum: ${goodNumberSum}`);
  for (i = lowNumber; i < highNumber + 1; i++) {
    if (i % 9 == 0) {
      console.log(i);
    }
  }
};
devide9(100, 200);
