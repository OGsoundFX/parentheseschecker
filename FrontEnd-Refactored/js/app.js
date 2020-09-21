// MODULE
angular.module('app', []);

// CONTROLLERS

// const parenthesesChecker = (string) => {
//   const openArray = ["(", "[", "{", "<"];
//   const closeArray = [")", "]", "}", ">"];
//   let i = 0, parOpen = 0, openingPar= "", closingPar = [], erroneos = "";
//   for(i; i < string.length; i++) {
//     if (openArray.includes(string[i])) {
//       openingPar += string[i];
//       parOpen++;
//       closingPar.push(closeArray[openArray.indexOf(string[i])]);
//     }
//     if (closeArray.includes(string[i])) {
//       let erroneos = string[i];
//       parOpen--;
//       if (string[i] === closingPar[closingPar.length - 1]) {
//         closingPar.pop();
//       } else {
//         return { result: false, preceeding: openingPar, erroneos: erroneos };
//       };
//     };
//     if (parOpen < 0) return { result: false, preceeding: openingPar, erroneos: erroneos };
//   }
//   return { result: (parOpen === 0 ? true : false), preceeding: openingPar, erroneos: erroneos };
// };

// angularApp.controller('mainController', ['$scope', function ($scope) {

//   const form = document.getElementById('form');

//   form.addEventListener('submit', (event) => {
//     const input = document.getElementById('input');
//     event.preventDefault();

//     let resultColor = document.querySelector(".color");

//     if (parenthesesChecker(`${input.value}`).result === false) {
//       // resultColor.classList.remove('color');
//       resultColor.classList.add('color-red');
//     } else {
//       resultColor.classList.remove('color-red');
//     };

//     $scope.result = (parenthesesChecker(`${input.value}`).result ? "Balanced" : "Not balanced");
//     $scope.preceeding = (parenthesesChecker(`${input.value}`).result ? "" : parenthesesChecker(`${input.value}`).preceeding);
//     $scope.erroneos = (parenthesesChecker(`${input.value}`).erroneos || parenthesesChecker(`${input.value}`).result ? parenthesesChecker(`${input.value}`).erroneos : "Missing closing");
//   });

// }]);

// check('---(++++)----');              => true
// check('');                           => true
// check('before ( middle []) after '); => true
// check(') (');                        => false
// check('<(   >)');                    => false
// check('(  [  <>  ()  ]  <>  )');     => true
// check('   (      [)');               => false
