// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   const totalSum = products.reduce((sum, product) => {
//     const discountedPrice = product.price * (1 - product.discount / 100);
//     return sum + discountedPrice * product.quantity;
//   }, 0);
  
//   console.log(totalSum); // 455600

//   const obj = { "it": 20, "mushuk": 10, "sigir": 200, "tovuq": 2 };
// const result = Object.entries(obj).flat();
// console.log(result); 

// const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
//   ];
  
//   const totalCredits = grades.reduce((sum, item) => sum + item.kredit, 0);
//   const weightedGrades = grades.reduce((sum, item) => sum + item.grade * item.kredit, 0);
//   const gpa = weightedGrades / totalCredits;
  
//   console.log(gpa.toFixed(2)); // 4.33

//   const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: "D", 9: "A", 10: "B" };
// const myAnswers = { 1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C" };

// let correct = 0, incorrect = 0;

// for (const key in rightAnswers) {
//   if (rightAnswers[key] === myAnswers[key]) {
//     correct++;
//   } else {
//     incorrect++;
//   }
// }

// console.log(`To'g'ri: ${correct}, Noto'g'ri: ${incorrect}`); 

// function getMultipleValues(obj, n) {
//     const result = {};
//     for (const key in obj) {
//       result[key] = obj[key] * n;
//     }
//     return result;
//   }
  
//   const obj1 = { a: 2, b: 3, c: 4, d: 6 };
//   console.log(getMultipleValues(obj1, 3)); 

//   const product = {
//     name: "Iphone 14",
//     company: {
//       name: "Apple",
//       price: "200 mlrd",
//       founder: {
//         firstName: "Steve",
//         lastName: "Jobs",
//         birthDate: 1950,
//       },
//     },
//   };
  
//   const {
//     name: productName,
//     company: {
//       name: companyName,
//       price: companyPrice,
//       founder: { firstName, lastName, birthDate },
//     },
//   } = product;
  
//   console.log(productName, companyName, companyPrice, firstName, lastName, birthDate);
//   const pupils = [
//     { name: "Elbek", protcent: 95 },
//     { name: "Zafar", protcent: 78 },
//     { name: "Aziz", protcent: 83 },
//     { name: "Jasur", protcent: 88 },
//     { name: "Bobur", protcent: 66 },
//     { name: "Kamron", protcent: 75 },
//   ];
  
//   let totalPercent = 0;
//   let passedCount = 0;
//   let failedCount = 0;
  
//   const updatedPupils = pupils.map((pupil) => {
//     const grade =
//       pupil.protcent >= 90
//         ? 5
//         : pupil.protcent >= 80
//         ? 4
//         : pupil.protcent >= 70
//         ? 3
//         : 2;
//     const isPassed = pupil.protcent >= 70;
  
//     totalPercent += pupil.protcent;
//     if (isPassed) passedCount++;
//     else failedCount++;
  
//     return { ...pupil, grade, isPassed };
//   });
  
//   const averagePercent = totalPercent / pupils.length;
  
//   console.log(updatedPupils);
//   console.log(`O‘rtacha foiz: ${averagePercent.toFixed(2)}`);
//   console.log(`O‘tganlar: ${passedCount}, O‘tmaganlar: ${failedCount}`);

//   [
//     { name: 'Elbek', protcent: 95, grade: 5, isPassed: true },
//     { name: 'Zafar', protcent: 78, grade: 3, isPassed: true },
//     { name: 'Aziz', protcent: 83, grade: 4, isPassed: true },
//     { name: 'Jasur', protcent: 88, grade: 4, isPassed: true },
//     { name: 'Bobur', protcent: 66, grade: 2, isPassed: false },
//     { name: 'Kamron', protcent: 75, grade: 3, isPassed: true }
//   ]
//   O‘rtacha foiz: 80.83
//   O‘tganlar: 5, O‘tmaganlar: 1
  