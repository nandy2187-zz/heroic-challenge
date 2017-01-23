

• Display a summary section that will roll up some neat stats about the results. What are you calculating/displaying?

- In the file: leaderboard-controller.js, you will find scope variables where you can decide how many elements want for page, that means in other module I would add this configurable variables in order to have a project able to increase/change/personalize the displayed info.

- I'm displaying currentPage, waitTime to show another set of cards, and how many elements per grid.

- What I'm calculating? I take the full list of elements and call splitResults with the number of elements per grid, then I do the slices with like new array of arrays which would be displayed as independent grid/pages by an ng-repeat inside of another which is the one to iterate inside of the elements and not pages.

• How many results are you going to display at a time? (N) Obviously you won’t be able to view 300 athletes at once on a TV, so what number
did you cut that down to and why?

- Like I don't know what wants the client I left those variables generic so it can be changed (like in another module with an admin mode); but for now I left 15 elements per page.


• What animations are you using to replace those results with the next N in the list? We still want to view all of those 300 athletes, how quickly are you cycling through them?

- I left each page 6 seconds (it can be changed too) now I used 2 strategies

  - A Page number change constantly in the header of the page.
  - The elements are ordered by rank
  - I'm not using animations because as user of a gym I don't like 'fancy' effects because I want it fast an efficient to see the result and not be distracted.
  - The pages are being changed by a $interval simple, not plugings just angular and js

• What user experience considerations did you make with your solution / tradeoffs?
  - The design is responsive so it will be adapted to the device

  - Like  I said in the other answer, I took my experience as an athlete so that's why I did a clean design, white, simple clear, not distractions
  - I'm using the first letter of the name plus last name, and the nickname to be easy to recognize from down (taking in count this TV is in a height place)

• What third party / open source libs did you use and why?

  - I've injected $interval, $timeout, $ng-materials, in order to make match with the site http://gainz.trainheroic.com/
  - Not extra plugins

• Throw the code up on github and send us the repo information to check out
https://github.com/nandy2187/heroic-challenge/tree/master/public

• Bonus points : Deploy your app on the web and provide a link

https://nandy2187.github.io/heroic-challenge/
