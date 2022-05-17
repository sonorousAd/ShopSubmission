# ShopSubmission
This React Application fetches API data based on user input and displays it in order.

Webpage (https://sonorousad.github.io/ShopSubmission/) is built using React.
All the styling is done inside the .css files
## APP.js
This file contains the core of the application, most of the functionality is implemented here.
There are two arrays on state:

`` outs`` *‘outs’* stores the output that will be returned by the API.

``prmts`` *‘prmts’* stores the input that is typed by the user.


Function **fun1()** is the core of the application, here we make the API requests. The JSON format response given by the API is dissected in order to only retrieve the text that we want to display (ans.choices[0].text).This response is appended to the outs array using the UpdateOutput. The users’ input entered in the text area is appended to prmts using UpdatePrompts.
This is an asynchronous function that enables asynchronous, promise-based behavior that ensures that we have time to receive the API’s response (await resp.json) so we can use it accordingly.

Function >**render()** will render all the components together, here we can find HTML code and the <Box> Component which will map all the contents on both arrays, creating unique boxes for each output/prompt pair.


## BOX.js
This component handles each of the output/prompt pair elements that are sent through the map function in App.js. it renders a box that contains specific information that is passed as props.
Index.js
This file is where App.js component is being used, this is the entry point for the app.

### To run the code locally:
    1. import or download code
    2. Run npm start on root folder.
    *Node JS and npm is required

**IMPORTANT: Since I’m using React, the API key is always exposed (even though I have implemented environment variables), hence OpenAI will always rotate the key to ensure security. Therefore, for proper testing of the webpage please change the key to a valid one and run the code locally. If this would have been a real-life production scenario, I would have used a backend server in which the key would be stored safely and can be retrieved by the front end.**