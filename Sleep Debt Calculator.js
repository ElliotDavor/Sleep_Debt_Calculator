
// The program will determine the actual and ideal hours of sleep for each night of the last week.

const getSleepHours=day=>{
  if (day==='monday'){
    return 8;
  } else if (day==='tuesday'){
    return 7
  } else if (day==='wednesday'){
    return 6
  } else if (day==='Thurday'){
    return 5
  }else if (day==='friday'){
    return 4
  }else if (day==='saturday'){
    return 3
  }else if (day==='sunday'){
    return 2
  }
};

const getActualSleepHours = () => {
};
const getIdealSleepHours=()=>{
  const idealHours=7.5;
  return idealHours*8;
};

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());
const calculateSleepDebt=()=>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('User got the perfect amount of sleep');
} else if (actualSleepHours > idealSleepHours) {
  console.log('User got more sleep than needed');
} else {
  console.log('User should get some rest');
}

if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}
};
calculateSleepDebt();


