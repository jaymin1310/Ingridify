import { generateRecipe } from "../ai";

export default function TempAi() {
  async function testAI() {
    const result = await generateRecipe(["eggs", "tomato", "onion", "cheese"]);
    console.log(result);
    alert(result);
  }

  return (
    <div>
      <button onClick={testAI}>Test AI</button>
    </div>
  );
}
