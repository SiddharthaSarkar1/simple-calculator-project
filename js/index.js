const onCalcLoad = () => {
  $("#display").val(0);
};

function insertNumber(number) {
  var existingNumber = $("#display").val(); // It will find the number which is in the textfield

  if (existingNumber == 0 && number == 0) {
    return;
  } else if (
    existingNumber == 0 &&
    (number == 1 ||
      number == 2 ||
      number == 3 ||
      number == 4 ||
      number == 5 ||
      number == 6 ||
      number == 7 ||
      number == 8 ||
      number == 9)
  ) {
    var presentValue = $("#display").val();
    //console.log(presentValue)
    var lastVal = presentValue.slice(-1);
    //console.log(lastVal)
    if (lastVal != ".") {
      $("#display").val(number);
    } else {
      $("#display").val(existingNumber + number);
    }
  } else {
    var presentValue = $("#display").val();
    console.log(number)
    console.log(presentValue.includes("."))
    // if(number == "." && presentValue.includes(".")){
    //   return;
    // }
    $("#display").val(existingNumber + number);
  }
}

function clearResult() {
  $("#display").val(0);
}

function calculate() {
  var result = eval($("#display").val());

  $("#display").val(result);
}

function deleteNumber() {
  var presentValue = $("#display").val();

  if (presentValue != "") {
    $("#display").val(presentValue.slice(0, -1));
  }
}
