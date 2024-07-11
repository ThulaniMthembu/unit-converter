document.addEventListener('DOMContentLoaded', () => {
  const unitInput = document.getElementById('unit-input');
  const convertBtn = document.getElementById('convert-btn');
  const lengthResult = document.getElementById('length-el');
  const volumeResults = document.getElementById('volume-el');
  const massResults = document.getElementById('mass-el');

  function displayResults() {
    // Check if input contains invalid characters (alphabets or symbols excluding full stop & comma)
    if (!isValidInput(unitInput.value)) {
      unitInput.value = 'Invalid input';
      clearResults();
      setTimeout(() => {
        unitInput.value = '';
      }, 2500);
      
      return;
    }

    // Displaying results
    lengthResult.textContent = `${unitInput.value} meters = ${convertUnits(unitInput.value, 'meters', 'feet')} feet | ${unitInput.value} feet = ${convertUnits(unitInput.value, 'feet', 'meters')} meters`;

    volumeResults.textContent = `${unitInput.value} liters = ${convertUnits(unitInput.value, 'liters', 'gallons')} gallons | ${unitInput.value} gallons = ${convertUnits(unitInput.value, 'gallons', 'liters')} liters`;

    massResults.textContent = `${unitInput.value} kilograms = ${convertUnits(unitInput.value, 'kilogram', 'pounds')} pounds | ${unitInput.value} pounds = ${convertUnits(unitInput.value, 'pounds', 'kilogram')} kilograms`;


    unitInput.value = '';
  }

  function convertUnits(value, fromUnit, toUnit) {
    if (!isValidInput(value)) {
      return 'Invalid input';
    }

    value = parseFloat(value);

    let result;
    switch (`${fromUnit}-${toUnit}`) {
      case 'meters-feet':
        result = value * 3.28084;
        break;
      case 'feet-meters':
        result = value * 0.3048;
        break;
      case 'liters-gallons':
        result = value * 0.264172;
        break;
      case 'gallons-liters':
        result = value * 3.78541;
        break;
      case 'kilogram-pounds':
        result = value * 2.20462;
        break;
      case 'pounds-kilogram':
        result = value * 0.453592;
        break;
      default:
        return 'Invalid conversion';
    }

    return result.toFixed(3);
  }

  function isValidInput(value) {
    // Regular expression to check for alphabets or symbols excluding comma & full stop
    const regex = /^[a-zA-Z!"#$%&'()*+-/:;<=>?@[\\\]^_`{|}~\s]*$/;
    return !regex.test(value);
  }

  function clearResults() {
    lengthResult.textContent = '';
    volumeResults.textContent = '';
    massResults.textContent = '';
  }

  convertBtn.addEventListener('click', () => {
    displayResults();
  });
});
