export const FetchShows=(url)=>{
    return fetch(url)
    .then((response)=>response.json())
}

// import React from "react";
// const DropDown = ({ value, items, onSelect }) => {
//   return (
//     <div class="dropdown">
//       <select
//         value={value.value}
//         onChange={(e) => {
//           const selectedValue = items.find(
//             (item) => item.value === e.target.value
//           );
//           onSelect(selectedValue);
//         }}
//       >
//         {items.map((item) => {
//           return (
//             <option value={item.value} className="dropdown-item">
//               {item.name}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// };
// export default DropDown;
   



// import "./App.css";
// import DropDown from "./components/atoms/DropDown";
// import { useState } from "react";
// import Input from "./components/atoms/Input";
// function App() {
//   const [vrednost, postaviVrednost] = useState({ name: "" });
//   const kadaSeKlikne = (pojedini) => {
//     postaviVrednost(pojedini);
//   };
//   const [list, setList] = useState("");
//   const addItemToList = (inputValue) => {
//     setList([...list, { name: inputValue, isActive: false}]);
//   };
//   const [inputValue, setInputValue] = useState("");
//   const onInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   return (
//     <div className="App">
//       <DropDown
//         onSelect={kadaSeKlikne}
//         items={[
//           { name: "Pera", value: "pera" },
//           { name: "Milojko", value: "milojko" },
//         ]}
//         value={vrednost}
//       />
//       <Input inputValue={inputValue} onChange={addItemToList} />
//     </div>
//   );
// }
// export default App;