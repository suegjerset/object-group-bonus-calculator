const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let i = 0; i < employees.length; i++) {
    console.log(employeeBonus(employees[i]));
}

function employeeBonus( employees ) {
  let bonus = {
    name: employees.name,
  };

  if (employees.reviewRating <= 2) {
    bonus.bonusPercentage = 0;
  } else if (employees.reviewRating === 3) {
    bonus.bonusPercentage = 0.04;
  } else if (employees.reviewRating === 4) {
    bonus.bonusPercentage = 0.06;
  } else if (employees.reviewRating === 5) {
    bonus.bonusPercentage = 0.1;
  }

  if (employees.employeeNumber.length === 4) {
    //console.log(employees.employeeNumber.length);
    let element = bonus.bonusPercentage;
    let totalBonus1 = element + 0.05;
    bonus.bonusPercentage = totalBonus1;
  }

  if (employees.annualSalary > 65000) {
    let element2 = bonus.bonusPercentage;
    let totalBonus2 = element2 - 0.01;
    bonus.bonusPercentage = totalBonus2;
  }

  if (bonus.bonusPercentage > 0.13) {
    bonus.bonusPercentage = 0.13;
  }

  if (bonus.bonusPercentage <= 0) {
    bonus.bonusPercentage = 0;
  }

  let addedBonus = Number( employees.annualSalary ) * bonus.bonusPercentage ;
  bonus.totalCompensation = Number( employees.annualSalary ) + addedBonus;

  bonus.totalBonus = Math.round(addedBonus);
  
  return bonus;   
}

//console.log(employeeBonus(employees[2]));

//console.log( employees );
