import React from "react";
import RecipeSec from "../components/RecipeSec";
import ItemList from "../components/ItemList";
import GetRecipe from "../components/GetRecipe";
import { generateRecipe } from "../ai";
export default function Main() {
  const [items, setItems] = React.useState([]);
  const [isShown, changeShown] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const generationId = React.useRef(0);
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim();
    if (!newIngredient) return;
    setItems((prevItems) => {
      if (prevItems.includes(newIngredient)) {
        return prevItems;
      }
      generationId.current += 1;
      changeShown(false);
      setRecipe("");
      setIsLoading(false);
      return [...prevItems, newIngredient];
    });
  }
  function removeIngredient(ingredientToRemove) {
    generationId.current += 1;
    changeShown(false);
    setRecipe("");
    setIsLoading(false);
    setItems((prevItems) =>
      prevItems.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  }
  function resetAll() {
    generationId.current += 1;
    setItems([]);
    changeShown(false);
    setRecipe("");
    setIsLoading(false);
  }
  async function getRecipe() {
    const currentGeneration = generationId.current + 1;
    generationId.current = currentGeneration;
    changeShown(true);
    setIsLoading(true);
    setRecipe("");

    const generatedRecipe = await generateRecipe(items);

    if (currentGeneration !== generationId.current) return;

    setRecipe(generatedRecipe);
    setIsLoading(false);
  }
  return (
    <div className="main-sec">
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        ></input>
        <button>+Add Ingredients</button>
      </form>
      {items.length > 0 && (
        <section>
          <ItemList ingredients={items} onRemoveIngredient={removeIngredient} />
          {items.length >= 4 && !isShown && (
            <GetRecipe funToggle={getRecipe} isLoading={isLoading} />
          )}
          {isShown && (
            <RecipeSec
              recipe={recipe}
              isLoading={isLoading}
              onReset={resetAll}
            />
          )}
        </section>
      )}
    </div>
  );
}
