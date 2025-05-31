import React from "react";

const FilterFruits = () => {
  const [filterText, setFilterText] = React.useState("");
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Papaya",
    "Kiwi",
    "Peach",
    "Blueberry",
  ];
  const [filterFruits, setFilterFruits] = React.useState(fruits);
  return (
    <div>
      <h1>Filter Fruits</h1>
      <input
        type="text"
        placeholder="Search fruits..."
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
          const filtered = fruits.filter((fruit) =>
            fruit.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setFilterFruits(filtered);
        }}
      />
      {filterFruits.map((fruit, index) => {
        return <li key={index}>{fruit}</li>;
      })}
    </div>
  );
};

export default FilterFruits;
