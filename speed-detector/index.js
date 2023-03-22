// speedDetectorChallenge
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let demeritPoints = 0;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
      if (demeritPoints >= 12) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }

  checkSpeed();

  