// Prompt Engineering and a challenge

// Prompt engineering is the process of designing and refining prompts to effectively communicate with AI models. The goal is to elicit the desired response from the model by providing clear, concise, and contextually relevant information.

// A well-engineered prompt can significantly improve the quality of the AI's output. This involves understanding the model's capabilities, limitations, and the specific task at hand. Techniques for prompt engineering include:

import OpenAI from 'openai'

/**
 * Challenge:
 * 1. Ask OpenAI to explain something complicated 
 *    to you. For example Quantum Computing.
 * 
 * Prompt Engineering Stretch Goals
 * - See if you can control the level of complexity of 
 *   the generated content, for example is this for 
 *   10-year-olds or college kids?
 * - See if you can control the length of the output.
 * **/ 

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: 'system',
        content: 'You are a helpful assistant that explains things in language a 10-year-old can understand. Your answers are always less than 100 words.'
    },
    {
        role: 'user',
        content: 'What is Quantum Computing?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages
})

console.log(response.choices[0].message.content)