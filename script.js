

function addNumbers(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 + num2;
    } else {
      return 'Error: Both parameters must be numbers';
    }
  }

  const result = addNumbers(15, 3);
  console.log(result); 
