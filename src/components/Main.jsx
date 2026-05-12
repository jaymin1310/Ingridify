import React from "react";
export default function Main() {
  const [items, setItems] = React.useState(["Chicken", "Oregano", "Tomatoes"]);
  const ingri = items.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").trim();
    if (!newIngredient) return;
    setItems((prevItems) => {
      if (prevItems.includes(newIngredient)) {
        return prevItems;
      }
      return [...prevItems, newIngredient];
    });
    event.currentTarget.reset();
  }
  return (
    <div className="main-sec">
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        ></input>
        <button>+Add Ingredients</button>
      </form>
      <ul className="ingridients-list">{ingri}</ul>
    </div>
  );
}
