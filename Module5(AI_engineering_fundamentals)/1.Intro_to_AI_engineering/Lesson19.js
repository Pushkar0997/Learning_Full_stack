// Fine Tuning

/*
What is Fine Tuning?
Giving a standard, pre-trained model additional training on a specific dataset to improve its performance on a particular task.

The weights of the model are adjusted based on the new data, allowing it to learn patterns and nuances relevant to that task.
This process helps the model generate more accurate and contextually appropriate responses for specialized applications.

What are some use cases for Fine Tuning?
1. Tone and Style Adaptation:
- Teach the model to write in a specific tone (e.g., formal, casual) or style (e.g., technical, conversational) by training it on examples that reflect the desired output.

2. Domain-Specific Knowledge:
- Fine-tune the model on industry-specific data (e.g., legal documents, medical literature) to enhance its understanding and generation of content relevant to that field.

3. Formatting and Structure:
- Train the model to produce outputs that follow specific formatting guidelines or structures, such as generating reports, summaries, or code snippets.
- Json Output:
- Train the model to consistently output data in JSON format for easier parsing and integration with other systems.

4. Function Calling:
- Fine-tune the model to better understand and execute function calls, improving its ability to interact with APIs or perform specific tasks programmatically.

5. Reducing Undesired Behaviors:
- Use fine-tuning to minimize biases or inappropriate content by training the model on curated datasets that promote desired behaviors and language use.

6. Financial Motivation:
- Companies can create specialized models that cater to niche markets, allowing them to offer premium services and solutions that command higher prices.
- Reducing the need for extensive prompt engineering can lead to cost savings in API usage, as fine-tuned models may require fewer tokens to achieve the desired output.
- Reduce the need to use Few-Shot or Zero-Shot prompting techniques, which can be less efficient and more expensive.
- Downgrading the model used (e.g., from GPT-4 to GPT-3.5) after fine-tuning can significantly cut costs while maintaining acceptable performance for specific tasks.

But Remember Fine Tuning is the Last Resort!
- 1st try to get the desired output using Prompt Engineering techniques like:
  - Zero-Shot Prompting
  - Few-Shot Prompting
  - Chain-of-Thought
- Then try using other techniques like:
  - Retrieval-Augmented Generation (RAG)
  - Temperature and Top-p sampling adjustments
- Try to make smarter prompt and better prompt designs
If these techniques do not yield satisfactory results, then consider fine-tuning as a more resource-intensive option.

Fine Tuning Process Overview:
1. Data Collection:
- Gather a high-quality dataset that is relevant to the specific task or domain you want the model to excel in.
2. Data Preparation:
- Format the data into a structure suitable for training, typically as input-output pairs.
3. Model Selection:
- Choose a pre-trained model that serves as the base for fine-tuning.
4. Training:
- Use the prepared dataset to train the model, adjusting its weights based on the new data.
5. Evaluation:
- Assess the performance of the fine-tuned model using validation datasets to ensure it meets the desired criteria.

Fine Tuning Considerations:
- Computational Resources:
  - Fine-tuning can be resource-intensive, requiring significant computational power and time.
- Overfitting:
  - There is a risk of overfitting the model to the fine-tuning dataset, which can reduce its generalization capabilities.
- Data Quality:
  - The quality and relevance of the fine-tuning dataset are crucial for achieving good results.
- Cost:
  - Fine-tuning can incur additional costs, especially when using large models or extensive datasets.

Fine Tuning needs plenty of data:
- Atleast 50 items for very basic tasks(more is better- within reason)
- It should be Human Checked and Cleaned
- It must be in JSONL format (JSON Lines)
- openai provides tools to help with this conversion

We can also add biases during fine tuning:
- Positive examples to encourage desired behavior
- Negative examples to discourage undesired behavior

*/

import OpenAI from "openai";

const openai = new OpenAI(
    {dangerouslyAllowBrowserAccess: true}
)

// Upload a file for fine tuning
const upload= await openai.files.create({
    file : await fetch('/motivationalBotdata.jsonl'),
    purpose: 'fine-tune'
}
)

// The above will return a file ID that we can use to create a fine-tune job

// Use FileID to create a fine-tune job

const fineTune = await openai.finTuning.jobs.create({
    training_file: upload.id,
    model: 'gpt-3.5-turbo' // base model to fine tune
}
)

// The above will give a fine-tune job ID that we can use to monitor the status of the fine-tuning process 

// Check status of fine-tune job

const fineTuneStatus = await openai.finTuning.jobs.retrieve(fineTune.id)

// Once the fine-tuning is complete, we can use the fine-tuned model for generating text

async function getResponse(){
const response = await openai.chat.completions.create({
    model: fineTuneStatus.fine_tuned_model, // use the fine-tuned model
    messages: messages }

)
return response.choices[0].message.content}

// In this way we can create custom models tailored to specific tasks or domains using fine-tuning!

/*
Check and Test:
If your model is not performing as expected, consider the following steps:
- Review and Clean Data: Ensure that your training data is of high quality and relevant to the task.
- Increase Data Size: More data can help the model learn better patterns.
- Adjust Hyperparameters: Experiment with different learning rates, batch sizes, and number of epochs.
- Use Validation Sets: Regularly evaluate the model on a separate validation set to monitor performance and avoid overfitting.
- Iterate: Fine-tuning is often an iterative process. Make adjustments based on performance metrics and continue refining the model.
- Seek Feedback: If possible, get feedback from domain experts to ensure the model's outputs are accurate and useful.
- you can also consider changing the base model to a more capable one if needed.

Finally Assessing your output is Subjective:
- Depending on the application, you may need to evaluate the model's performance based on specific criteria relevant to your use case.
- Consider both quantitative metrics (like accuracy, F1 score) and qualitative assessments (like human reviews) to get a comprehensive understanding of the model's effectiveness.
- You need an affective testing Strategy to ensure your fine-tuned model meets the desired standards and performs well in real-world scenarios.
- Remember, fine-tuning is an iterative process that may require multiple rounds of adjustments and evaluations to achieve optimal results.
- Keep experimenting and refining your approach based on the feedback and performance metrics you gather.
- And always keep user needs and expectations in mind when assessing the effectiveness of your fine-tuned model.
- And this is about detail, not huge changes: The model will not become evolutionaryly better after fine-tuning; it will just be better at the specific task you trained it for by some margin.
*/
