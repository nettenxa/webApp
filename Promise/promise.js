function printStringP(string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        if (Math.random() > 0.5)
          resolve(string);
        else reject("Failed : "+ string);
      }, Math.floor(Math.random() * 100) + 1);
    });
  }
  
  function printStringCB(string, success, failure) {
    setTimeout( () => { 
      if (Math.random() > 0.5)
        success(string);
      else failure("Failed : "+ string);
    }, Math.floor(Math.random() * 100) + 1);
  }
  
  const successCallback = result => console.log("It succeeded with " + result);
  const failureCallback = error =>  console.log("It failed with " + error);
  
  printString("A", successCallback, failureCallback);
  printString("B", successCallback, failureCallback);
  
