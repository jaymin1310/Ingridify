import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
export default function RecipeSec({ recipe, isLoading, onReset }) {
  return (
    <section className="recipe-section suggested-recipe-container">
      <div className="recipe-section-header">
        <div>
          <p className="recipe-eyebrow">AI recipe</p>
          <h2>{isLoading ? "Cooking up an idea" : "Your recipe is ready"}</h2>
        </div>
        {!isLoading && (
          <button type="button" className="reset-recipe-btn" onClick={onReset}>
            Start over
          </button>
        )}
      </div>

      <div className="recipe-content">
        {isLoading ? (
          <p className="loading-recipe-text">Generating your recipe...</p>
        ) : (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{recipe}</ReactMarkdown>
        )}
      </div>
      {!isLoading && (
        <div className="recipe-section-footer">
          <button type="button" className="reset-recipe-btn mobile-reset" onClick={onReset}>
            Start over
          </button>
        </div>
      )}
    </section>
  );
}
