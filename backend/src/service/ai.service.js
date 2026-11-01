const { GoogleGenAI } = require("@google/genai");


const ai = new GoogleGenAI({process.env.GEMINI_API_KEY});

  // const interaction = await ai.interactions.create({
  //   model: "gemini-3.8-flash",
  //   input: "Explain how AI works in a few words",
  // });
  // console.log(interaction.output_text);



// const ai = new GoogleGenAI({});

async function generateResponse(chatHistory) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: chatHistory,
  });
  return response.text;
}

module.exports = generateResponse;
