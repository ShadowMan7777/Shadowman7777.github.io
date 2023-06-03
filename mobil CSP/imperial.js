function convert() {
    function convertMiles() {
        var miles = parseFloat(document.getElementById("miles").value);
        var kilometers = miles * 1.60934;
        document.getElementById("kilometers").value = kilometers.toFixed(2);
      }
      
      function convertPounds() {
        var pounds = parseFloat(document.getElementById("pounds").value);
        var kilograms = pounds * 0.453592;
        document.getElementById("kilograms").value = kilograms.toFixed(2);
      }
      
      function convertFahrenheit() {
        var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = celsius.toFixed(2);
      }
      
    document.getElementById("result").innerHTML = "Conversion result";
  }

