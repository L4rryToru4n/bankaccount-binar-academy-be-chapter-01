/*

Reference :
-https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
-https://www.w3schools.com/js/js_numbers.asp
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE

*/

let saldo = 1.0;

function isNumerical(value) {
  /*
    Test whether the value is numerical
  */
  if (typeof value === 'number' &&
     !Number.isNaN(value)) {
    return true;
  }
}

function isMoreThanMinimumNumber(value) {
  /**
    * Test if the minimum number inputted
    * is not more than the datatype can hold.
  */
  if (value < Number.MIN_VALUE) {
    return true;
  }
}


function isMoreThanMaximumNumber(value) {
  /**
  * Test if the maximum number inputted
  * is not more than the datatype can hold.
  */
  if (value > Number.MAX_VALUE) {
    return true;
  }
}


function tampilSaldo() {
  document.getElementById("viewSaldo").innerHTML = "Saldo Anda : " + saldo.toFixed(1);
}

function tambahSaldo() {
  let jumlahTemp = prompt("Masukkan jumlah uang yang akan ditambahkan", 0.0);
  
  jumlah = parseFloat(jumlahTemp);

  if (isNumerical(jumlah)) {

    if (isMoreThanMaximumNumber(jumlah)) {
      alert("Angka maximum mencapai batasan, Menggunakan angka 1.7976931348623157e308");
      jumlah = Number.MAX_VALUE;
    }
    saldo += jumlah;
    tampilSaldo();
  }
  else {
    alert("Gagal menambahkan saldo. Harap memasukkan angka");
  }
}

function kurangiSaldo() {
  let jumlahTemp = prompt("Masukkan jumlah uang yang akan dikurangkan", 0.0);

  jumlah = parseFloat(jumlahTemp);

  if (isNumerical(jumlah)) {
    /* 
      Balance substraction mustn't more than
      the value of the current balance
    */
    if (jumlah < saldo) {
      if (isMoreThanMinimumNumber(jumlah)) {
        alert("Angka minimum kecil mencapai batasan, menggunakan angka 0");
        jumlah = Number.MIN_VALUE;
      }
      saldo -= jumlah;
    }
    else {
      alert("Gagal mengurangi saldo. Angka pengurangan lebih besar daripada jumlah saldo");
    }
    tampilSaldo();
  }
  else {
    alert("Gagal menambahkan saldo. Harap memasukkan angka");
  }
}

tampilSaldo();