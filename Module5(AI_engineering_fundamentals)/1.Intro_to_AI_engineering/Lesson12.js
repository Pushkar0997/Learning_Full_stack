// Tokens

// Tokens In AI Language Models

/**
 * Tokens are the building blocks of text that AI language models use to process and 
    generate language. A token can be as short as one character or as long as one word. 
    For example, the word "chatting" might be broken down into the tokens "chat" and "ting".
 * Models like GPT-4 use tokens to understand and generate human-like text. When you input
    text into a model, it converts that text into tokens, processes them, and then generates 
    a response based on those tokens.
* The number of tokens in a piece of text can affect the model's performance and the cost
    of using the model, as many AI services charge based on the number of tokens processed.
 * Understanding tokens is important for effectively using AI language models, as it helps 
    users optimize their prompts and manage costs.
 */

import OpenAI from 'openai'

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
    messages: messages,
    max_tokens: 16 // default: inf
})

console.log(response)

//{id: "chatcmpl-8HqFaX41jZKaoQoATAUyoQ5X2kK8R", object: "chat.completion", created: 1699263118, model: "gpt-4-0613", choices: [{index: 0, message: {role: "assistant", content: "Quantum computing is a special kind of computing. Imagine if you could open all your gifts at Christmas at the same time, instead of one after the other. Quantum computers work like that, problem-solving all at once instead of step-by-step. They're really powerful and fast."}, finish_reason: "stop"}], usage: {prompt_tokens: 44, completion_tokens: 56, total_tokens: 100}}

//{id: "chatcmpl-8KltZnq2aoTr3SVdBE3BroZKtOCVs", object: "chat.completion", created: 1699961361, model: "gpt-4-0613", choices: [{index: 0, message: {role: "assistant", content: "Quantum computing is like a super-powered version of your computer. While your computer"}, finish_reason: "length"}], usage: {prompt_tokens: 44, completion_tokens: 16, total_tokens: 60}}

/*
Why Tokens Matter?
1. Cost Management: Many AI services charge based on the number of tokens processed. By
   understanding tokens, users can optimize their prompts to reduce costs.
2. Performance Optimization: The number of tokens can affect the model's performance. Longer
   inputs may lead to slower responses or reduced quality.
3. Prompt Engineering: Knowing how tokens work helps users craft better prompts, leading to
   more accurate and relevant responses from the model.
4. Context Length: Models have a maximum context length measured in tokens. Understanding
   tokens helps users stay within these limits to ensure their inputs are fully processed.
5. Effective Communication: Understanding tokens aids in better communication with AI models,
    leading to improved interactions and outcomes.

The more you understand about tokens, the better you can leverage AI language models for your
needs.

The max_tokens parameter in the API call limits the number of tokens in the model's response.
- It only affects the output tokens, not the input tokens.
- Setting a lower max_tokens value can help control costs and response length.
- But be cautious: setting it too low might cut off important parts of the response.
- The model will stop generating tokens when it reaches the max_tokens limit or encounters a 
stop sequence.

You can see the finish reason in the response object to know if the output was cut off due
 to the max_tokens limit.
 And you won't want to set it too low, or the model might not be able to provide a complete
  answer!
*/