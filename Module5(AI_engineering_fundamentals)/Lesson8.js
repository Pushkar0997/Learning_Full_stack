// An API Call: The messages array

import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert.'
    },
    {
        role: 'user',
        content: 'Who invented the television?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages
})

console.log(response.choices[0].message.content)

/*
Explaination of the code:
1. We import the OpenAI library and create an instance of the OpenAI client, allowing it to run in a browser environment.
2. We define a messages array that contains a system message setting the context for the AI and a user message asking a question.
3. We make an API call to create a chat completion using the GPT-4 model, passing in the messages array.
4. Finally, we log the AI's response to the console.
*/