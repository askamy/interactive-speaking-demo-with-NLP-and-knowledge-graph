# interactive-speaking-with-Voice-to-text-NLP-and-knowledge-graph
A demo and continuous project using ASR to recognize speech and respond dynamically with knowledge graph and NLP. 

Welcome to watch, star or fork.


**About Us**

Please visit our [website](https://www.askamyai.com). 

We do pre-built NLP + knowledge graph for everyone to call with API.

## Project Goal

Inspiried by **Netflix interactive series, such as You vs Wild, Black Mirror: Bandersnatch and youtube** interactive videos, we have been thinking what else can be done other than interacting with buttons on the video. So we came up with the idea to use our voice to control the video reaction.

Rather than controlled options (e.g. buttons on the controllers), speaking allows users to have more freedom to speak whatever they want, it will sets difficulties for machine to code all scenarios. If we are only using exact matching, it will usually hit the "anything else", so users response might not be able to be decoded. For better user experience to really understand what users is saying, we are proposing to use **NLP and knowledge graph** to decode.

# Technical

## Preparation for the video
The video will be a combination of different clips distributes in different timestamp of the video. When combined, it might seems meaningless and ridiculous if you view it from start to end. However, since users will speak when they come to that decision point, they will speak according to their own will. We will send their voice to the backend, and then it will jump to different timestamp again for the respond, until the end of the conversation.

## Proposed Flow to make conversation seamlessly interact with the video
The proposed flow:

![Screenshot 2021-08-18 at 10 21 21 PM](https://user-images.githubusercontent.com/89144452/129915595-831ce91d-ba5b-4b20-b457-61d82133dda5.png)
The flow used NLP and knowledge graph NLU. The flow will be:
1. Users input their voice by triggerring the button,
2. The sound wave is translatted into text with voice-to-text/ ASR,
3. the text will pass to NLP to get the intent and entity,
4. If the confident score is high enough, it will follow its conversation flow, and jump to a specific timestamp.
5. If confident score is low, it will pass the text to knowledge graph to find the relevant information,
6. The process continue, until the video ends.

For step 4, there are more than one way to handle, you may use knowledge graph only if you have already tokenized your words from the paragraph, or you rely on you knowldege graph as the NLU to get what they mean, and pass it to conversation flow. 

# Data Source
It is using some simple data created in the knowledge graph about correlation about "growing up". it is aimed showing a simple relationship between entity and entity. 

# The knowledge Graph
In knowledge representation and reasoning, knowledge graph is a knowledge base that uses a graph-structured data model or topology to integrate data. The knowldege graph in our demo represent the relationship of "growing up", it break down some important concepts and entity, and describe the relationship. The advantages of using graph database is, it provides layers of interconnected data enriched with semantics, so you can reason with the underlying data and use it confidently for complex decision-making. (said by neo4j and we are using them in this demo too). 


# The NLP
The NLP part you might need to use your own hand-crafted NLP engine, or simple you may use chatbot engine, e.g. Google dialog flow, IBM Watson, Microsoft Bot Framework, and many others. This part is skipped in the demo. The key in NLP is:

1. The return response contain a JSON that implies the timestamp, instead of a sentence
2. You should draw a line between strong and weak confident score and set the threshold, so all weak intent should go to an anything_else node, a request to trigger the knowledge graph.

## The Demo

## Project Demo description
The project is the minimal project to demonstrate **what is possible to be done to mimic real life chatting with streaming video and chatting and trigger video to have revelant response.**

## installation

**Prerequisties:**
Jupyter notebook
Chrome driver

1. Download the package, unzip
2. Open with sublime code
3. Run POC.ipynb file with jupyter notebook
4. The website on your local drive will pop up automatically
5. Click play button and video will start playing
6. Talk while the character shows signals for you to speak, or you can interrupt them at anytime
7. Follow the script below

# Flow
To test out the demo, you can click onto the play button. And follow the following conversation:
>Video:
The next topic is childhood. I want to know. When do you think childhood ends? And when do you become an adult has a deep question.

>You:
I think it's at any point, you can leave the house of your parents and live on your own. Take care of yourself and you're not like dependent on somebody else. So if I need to pick like an exact age, probably say like 16 in an Ideal World. I think a 16 year old should be ready. <jump to f2()>

>Video:
Yes, at 16 are you ready?

>You: 
Yes I think by that time you will be able to make your own decisions, you are not a child, you are an adult. 

>Video:
When do you think childhood ends? When does adulthood start, it's going to be different for every culture to cuz this is a pretty cultural specific. Question may be different than your country, may be of a rite of passage in your

>You:
On me, I need to be responsible. I have to organize myself, somehow and burden of responsibility, of some kind of weather is a job or your house payments or whatever it is.


# Follow up to develop
Knowledge map and video

# Troubleshooting
Q: No browser is shown when I run the jupyter notebook
A: Check the chrome driver version, location and name against with what is mentioned in the jupyter notebook.

Q: No sound/ video/ image.
A: Check if the files are in the same folder and right path in the .ipynb
