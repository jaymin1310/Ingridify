export async function generateRecipe(ingredients) {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a cooking assistant. If ingredients contain spelling mistakes, assume the closest valid food item. If ingredient is completely invalid or not food-related, politely say it is not a valid ingredient.",
            },
            {
              role: "user",
              content: `Create a recipe using these ingredients: ${ingredients}`,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    return data.choices[0].message.content;
  } catch (err) {
    console.error(err);
    return "Failed to generate recipe";
  }
}
