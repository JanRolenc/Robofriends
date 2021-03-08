//tento soubor zajisti automatozovane nacteni vsech karet, abychom v index.js nepsali kazdou kartu zvlast
import React from "react";
import Card from "./Card";
// const CardList = ({ robots }) => {
//   const cardsArray = robots.map((user, index) => {
//     return (
//       <Card
//         key={robots[index].id}
//         id={robots[index].id}
//         name={robots[index].name}
//         username={robots[index].username}
//         email={robots[index].email}
//       />
//     );
//   });
//   return <div>{cardsArray}</div>;
// };
//zjednodusene nasledovne:
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, index) => {
        return (
          <Card
            key={robots[index].id} 
            id={robots[index].id}
            name={robots[index].name}
            username={robots[index].username}
            email={robots[index].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
//key={robots[index].id} - index by se mohl menit, tak lepe id, protoze key ma byt nemenne a jedinecne

