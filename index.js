// const sushiOrders = [
//   { name: "California Roll", price: 8 },
//   { name: "Spicy Tuna Roll", price: 10 },
//   { name: "Salmon Nigiri", price: 6 },
//   { name: "California Roll", price: 8 },
//   { name: "Dragon Roll", price: 12 },
//   { name: "Spicy Tuna Roll", price: 10 },
//   { name: "Miso Soup", price: 4 },
//   { name: "Edamame", price: 5 },
//   { name: "Salmon Nigiri", price: 6 },
//   { name: "California Roll", price: 8 },
// ];

// const receipt = {};
// sushiOrders.forEach((sushi) => {
//     if (!receipt[sushi.name]) {
//         receipt[sushi.name] = {
//          price: sushi.price,
//          qty:1,
//         };
//     } else {
//       receipt[sushi.name].qty++;
//     }
// });
// console.log(receipt);
//   let receipT = "";
//   let total = 0;
//   for (const [name, { qty, price }] of Object.entries(receipt)) 
   
//     {
//     console.log(name, qty, price);

//   }
// totalPrice = total+= price * qty;
// receipt+=`${name} ${price} ${qty}`
// }
// generateReceipt(sushiOrders);




const staff= {};
Object.entries(departments).forEach(([dept, doctors])=> {
  console.log(dept, doctors);
});
doctors.forEach((doctor) => {
  
        if(staff [doctor]) {
          staff[doctor].push(dept);
        
       } else {
        staff[doctor] = [dept];
      }});
        console.log(staff);
// key is dept
//  value is docto