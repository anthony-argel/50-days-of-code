# Project 1: Expanding Cards

## Intial Thoughts
This problem is fairly simple. We have 5 different containers. Each container will hold an image and a text. When we click on one of the containers it will expand (if it isn't already) and the previously clicked container will shrink.

## Thoughts After First Attempt
I noticed that my attempt was considerably laggy. Brad's version of the project didn't lag at all. Initially I though it might have been my very old laptop being unable to handle transitions, but I ran my code on my gaming PC and it was still lagging. After messing around with the code, I found that: background-size: cover was actually the cause of lag. It's very peculiar. So... What I did was use lower resolution pictures. Doing that fixed the lag issues. Apparently using very high resolution images is not a good idea. 

## Takeaways
1. Don't use excessively large images that have to get scaled down to use. 
2. transitions are fun