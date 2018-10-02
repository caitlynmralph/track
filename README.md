# track

## interactive viz description

Through each iteration of this project, I altered the design of my visualization based on feedback and the evolution of my own throughts toward the piece. I started with something simple: a word wall of all the songs I listened to for two weeks. For the static visualization, I explored a different dimension of the data in an entirely new format. 

The final visualization was yet another version. I pulled aspects of the word wall by listing the songs, but I broke the list up by each time point I measured throughout the day. Instead of being ordered by days, the visualization is now in order of time blocks, so I could get a sense of what I was listening to at different parts of the day (morning, day, and night). 

Two points of feedback I kept hearing were to 1) make the visualization feel more "musical" and 2) to include the ability to listen to songs in the interactive version. I merged these suggestions by visualizing soundwaves of songs as they played. The user can click on the song and hear it while soundwaves move on the screen. Each song has its own graph of soundwaves. When the individual graphs are grouped together by time blocks, I can start to see not only what songs I'm listening to most throughout the day, but I can also see when I'm listening to the most music. For example, at 1:00 p.m., I documented the same song twice at one point. I'm most frequently listening to music at 5:30 p.m., since it's the time block with the most documented songs. The ordering within each block is by day. Lastly, I used color to differentiate different parts of the day: morning soundwaves are a yellow, afternoon soundwaves are a green-ish blue, and night soundwaves are a dark blue.

A weakness of this visualization is the inability to compare all time blocks at once. Instead, it's a long scroll where you get each time block on the screen at once. If I were to iterate on this design again, I would re-work the code, so you can see all the time blocks on the screen at once.

Code help came from <a href="https://www.bignerdranch.com/blog/music-visualization-with-d3-js/">this</a> blog post by Garry Smith. Song previews are pulled from the <a href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/">Spotify API</a>.