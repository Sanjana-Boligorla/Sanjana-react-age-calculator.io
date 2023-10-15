import React, { useState } from 'react';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthdateArray = birthdate.split('-');
    const birthYear = parseInt(birthdateArray[0], 10);
    const birthMonth = parseInt(birthdateArray[1], 10);
    const birthDay = parseInt(birthdateArray[2], 10);

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let calculatedAge = currentYear - birthYear;

    // Check if birthday for this year has already occurred
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label><b>Enter your date of birth</b> </label><br />
      <input class="c1" type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      <br />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p><b>Your age is {age} years.</b></p>}
    </div>
  );
}

export default AgeCalculator;
