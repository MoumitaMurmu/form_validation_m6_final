// alert("okay")
const validate = () => {
    // console.log("validate")
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("number").value;
  
    function containsNumbers(str) {
      return /[0-9]/.test(str);
    }
  
    if (firstName.length >= 3 && containsNumbers(firstName) == false) {
      document.getElementById("valid-first-name").style.display = "block";
      document.getElementById("invalid-first-name").style.display = "none";
    } else {
      document.getElementById("invalid-first-name").style.display = "block";
      document.getElementById("valid-first-name").style.display = "none";
    }
  
    //last-name validation
    //   let lnameNums = false;
  
    if (lastName.length > 3 && containsNumbers(lastName) == false) {
      document.getElementById("valid-last-name").style.display = "block";
      document.getElementById("invalid-last-name").style.display = "none";
    } else {
      document.getElementById("invalid-last-name").style.display = "block";
      document.getElementById("valid-last-name").style.display = "none";
    }
  
    //E-mail validation
    // /email="" -- negative
    // email.includes("@") & email.includes(".")
    // email.length - email.lastIndexOf(".") > 2 && email.length - email.lastIndexOf(".") <= 3
    // email.charAt(i)!=@
  
    //email validation
    if (
      email != "" &&
      email.includes("@") == true &&
      email.includes(".") == true &&
      email.length - email.lastIndexOf(".") >= 3
    ) {
      document.getElementById("valid-email").style.display = "block";
      document.getElementById("invalid-email").style.display = "none";
    } else {
      document.getElementById("invalid-email").style.display = "block";
      document.getElementById("valid-email").style.display = "none";
    }
  
    //number validation
    if (mobile.length == 10) {
      document.getElementById("valid-number").style.display = "block";
      document.getElementById("invalid-number").style.display = "none";
    } else {
      document.getElementById("invalid-number").style.display = "block";
      document.getElementById("valid-number").style.display = "none";
  
    }
  
  //   if (country = "none") {
  //     document.getElementById("invalid-country").style.display="block"
  //     document.getElementById("valid-country").style.display="none"
  //   } else{
  //     document.getElementById("invalid-country").style.display="none"
  //     document.getElementById("valid-country").style.display="block"
  // console.log("not none")
  //   }
  
    
  
    //resetting
    if (
      firstName.length >= 3 &&
      containsNumbers(firstName) == false &&
      lastName.length > 3 &&
      containsNumbers(lastName) == false &&
      email != "" &&
      email.includes("@") == true &&
      email.includes(".") == true &&
      email.length - email.lastIndexOf(".") >= 3 &&
      (JSON.stringify(mobile).length = 10)
    ) {
      alert("Your details have been saved successfully");
      document.getElementById("form").reset();
      document.getElementById("invalid-first-name").style.display = "none";
      document.getElementById("valid-first-name").style.display = "none";
      document.getElementById("invalid-last-name").style.display = "none";
      document.getElementById("valid-last-name").style.display = "none";
      document.getElementById("invalid-email").style.display = "none";
      document.getElementById("valid-email").style.display = "none";
      document.getElementById("valid-number").style.display = "none";
      document.getElementById("invalid-number").style.display = "none";
    }
  }
  //console.log(typeof(number))
  
  //gender validation
  // let gender = document.querySelector('input[type="radio"]:checked').value
  
  //country validation