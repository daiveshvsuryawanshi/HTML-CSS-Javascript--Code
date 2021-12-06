function claculate() {

  var a, b, c, d, e;
  var total, percentage;


  a = Number(document.getElementById("s1").value);
  b = Number(document.getElementById("s2").value);
  c = Number(document.getElementById("s3").value);
  d = Number(document.getElementById("s4").value);
  e = Number(document.getElementById("s5").value);

  total = a + b + c + d + e;
  percentage = total / 5;


  document.getElementById("sum").innerHTML = "Total Mark : " + total;
  document.getElementById("percentage").innerHTML = "percentages : " + percentage;


  // add graade 

  if (percentage >= 90) {
    document.getElementById("grade").innerHTML = "You'r Passed In A+ Grade";
  }
  else if (percentage >= 80) {
    document.getElementById("grade").innerHTML = "You'r Passed In A Grade";
  }
  else if (percentage >= 70) {
    document.getElementById("grade").innerHTML = "You'r Passed In B+ Grade";
  }
  else if (percentage >= 60) {
    document.getElementById("grade").innerHTML = "You'r Passed In B Grade";
  }
  else if (percentage >= 50) {
    document.getElementById("grade").innerHTML = "You'r Passed In C+ Grade";
  }
  else if (percentage >= 40) {
    document.getElementById("grade").innerHTML = "You'r Passed In C Grade";
  }

  else {
    document.getElementById("grade").innerHTML = "You'r Failed";

  }

  document.getElementById("message").innerHTML = "Created By Daivesh Suryawanshi";
}

