This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions
Open project directory and run `npm start`. This should open the client in localhost:3000.

## How long did you spend on the challenge?
I initially spent ~3 hours to brush up on HTTP requests and React to implement the basic funtionality of this app. Then I spent another ~3 hours trying to implement additional features and debugging, but I didn't get them to function the way I wanted to. That part of the code is commented out and it's something I will continue to work on.

## What did you learn in this project?
I learn to connect to the YouTube API to get video data and render the data onto a client using React. The YouTube API is more complicated than I initially thought, and I definitely had some trouble deciphering what part of the API response that I needed to extract.

## What do you like about your implementation?
To be honest, I hadn't coded for a few months prior to this challenge, and a lot of what I completed was brushing up on the fundamentals of React and HTTP requests. Unfortunately I spent a lot of time debugging minor issues. I do like that I was able to implement the core search functionality, along with two different methods to get search data and popular videos data.

## What would you change if you were going to do it again?
The initial plan I had was to create a SPA with a video player in the middle with related video list entries to the side of the screen. You would be able to search videos and click through the related videos to play a video. However, I faced some errors getting the main video player data to render correctly and I wasn't able to overcome them in time. I feel very motivated now to go back and finish this challenge by coding up the initial app that I had planned. 

## How did you make your design decisions?
In the beginning, I had a plan for which features I would implement. However, I encountered some bugs that I couldn't figure out in time. I decided I should stick with a 'minimum viable product' that can showcase the fetching of data from YouTube API and getting the key data rendered on the client. A search functionality would allow user to query data from YouTube API. And before a user enters a search query, the top popular video data would be fetched to render. To make the page visually pop, I decied to include thumbnail images.

To make the code as easy to follow as possible, I broke up the code into small reusuable components, which is what React is great for. SearchMain component brekas up into 2 components: Search and VideoResults. Then VideoResults is made up of the VideoEntry component.
