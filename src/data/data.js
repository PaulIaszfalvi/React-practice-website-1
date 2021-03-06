import React from "react";
import RenderData from "../components/RenderData";

var faker = require("faker");
var arr = [];

// let person = [
//   {
//     name: faker.name.findName(),
//     phone: faker.phone.phoneNumber(),
//     date: faker.time.recent(),
//   },
// ];

const generate = () => {
  for (var i = 0; i < 100; i++) {
    arr[i] = {
      key: faker.unique.toString(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      //   date: faker.date.past(55),
      routingNumer: faker.finance.routingNumber(),
      money: faker.finance.amount(),
      address: faker.address.streetAddress(),
      //avatar: faker.image.fashion(),
    };
  }
};

const data = () => {
  generate();

  return (
    <div>
      {arr.map((prop) => (
        <RenderData
          key={prop.name}
          name={prop.name}
          address={prop.address}
          phone={prop.phone}
          //avatar={prop.avatar}
        />
      ))}
    </div>
  );
};

// export function populateArray() {
//   arr = generate();
//   return arr;
// }

// const data = () => {
//   generate();

//   return arr;
//   //   return (
//   //     <div className="col">
//   //       {arr.map((result) => (
//   //         <div>
//   //           {result.name}
//   //           <br />
//   //           {result.phone}
//   //           <br />
//   //           {result.date}
//   //           <br />
//   //           <br />
//   //         </div>
//   //       ))}
//   //     </div>
//   //   );
//   // };

//   // const data = () => {
//   //   generate();

//   //   return arr;
//   //   //     <div className="col">
//   //   //       {arr.map((result) => (
//   //   //         <div>
//   //   //           {result.name}
//   //   //           <br />
//   //   //           {result.phone}
//   //   //           {/* <br />
//   //   //           {Date(result.date * 1000)} */}
//   //   //           <br />
//   //   //           {result.address}
//   //   //           <br />
//   //   //           {result.money}
//   //   //           <br />
//   //   //           {result.routingNumer}
//   //   //           <br />
//   //   //           <br />
//   //   //         </div>
//   //   //       ))}
//   //   //     </div>
//   //   //   );
// };

export default data;
