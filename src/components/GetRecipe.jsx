export default function GetRecipe({ funToggle, isLoading }) {
  return (
    <div className="get-recipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button id="get-recipe-btn" onClick={funToggle} disabled={isLoading}>
        {isLoading ? "Generating..." : "Get a recipe"}
      </button>
    </div>
  );
}
