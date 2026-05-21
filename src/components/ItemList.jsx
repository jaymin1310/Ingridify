export default function ItemList({ ingredients, onRemoveIngredient }) {
  return (
    <div>
      <h2>Ingredients on hand:</h2>
      <ul className="ingridients-list">
        {ingredients.map((ingredient) => (
          <li key={ingredient}>
            <span>{ingredient}</span>
            <button
              type="button"
              className="remove-ingredient-btn"
              onClick={() => onRemoveIngredient(ingredient)}
              aria-label={`Remove ${ingredient}`}
              title={`Remove ${ingredient}`}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
