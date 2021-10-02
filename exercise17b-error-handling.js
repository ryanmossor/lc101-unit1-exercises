function gradeLabs(labs) {
    for (let i=0; i < labs.length; i++) {
      let lab = labs[i];
      let result;
      try {
          result = lab.runLab(3);
          console.log(`${lab.student} code worked: ${result === 27}`);
      } catch(error) {        // the catch code block defines what the error is
         result = 'Error thrown.';
         console.log(`${lab.student}: ${result} \n\t${error}`);
         // console.log(error); -- this prints full error, but line 10 doesn't?
      }
   }
} 

let studentLabs = [
{
  student: 'Carly',
  runLab: function (num) {
     return Math.pow(num, num);
   }
},
{
  student: 'Erica',
  runLab: function (num) {
      return num * num;
  }
}
];

let studentLabs2 = [
  {
     student: 'Blake',
     myCode: function (num) {
        return Math.pow(num, num);
     }
  },
  {
     student: 'Jessica',
     runLab: function (num) {
        return Math.pow(num, num);
     }
  },
  {
     student: 'Mya',
     runLab: function (num) {
        return num * num;
     }
  }
];

gradeLabs(studentLabs);
gradeLabs(studentLabs2);