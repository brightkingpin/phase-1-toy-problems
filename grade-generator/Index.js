// JavaScrit function studentGradeGenerator
function generateGrade() {
    const marks = prompt("Enter student marks (between 0 and 100): ");
    let grade;
  
    if (marks >= 80) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    alert(`Grade: ${grade}`);
  }
  
  generateGrade()
  