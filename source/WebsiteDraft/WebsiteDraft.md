HOME PAGE:
* A menu where users can browse the latest articles
  - Clicking the link redirects to the specific ARTICLE PAGE
  - Articles may have short blurbs to briefly describe the content
* A sidebar that offers links to popular articles
  - Based on an article rating system
  - Clicking the link redirects to the specific ARTICLE PAGE
* A seach icon that redirects to the SEARCH PAGE

SEARCH PAGE:
* Search Bar
  - Lists all articles that contain the word entered into the search bar
* Drop Down Menu
  - One to allow a USER to filter the results of the search bar via the game selected
  - One to allow a User to filter the results of the search bar via favorited articles
  - One to sort the results based on a predetermined metric, such as views or rating
* List all article links that fit the paramaters of the search
  - Clicking a link redirects to the specific ARTICLE PAGE
* A home icon to redirects back to the HOME PAGE

ARTICLE PAGE:
* Each Article page must have:
  - Title
  - Author
  - Date Published
  - Associated Game
    - To allow for filtered searches on the SEARCH PAGE
    - To provide links to articles about the same game
  - A toggle to favorite the article
  - Total views
  - Text
  - Images
  - Rating
    - USERS can rate articles on a scale from 0 - 5
    - The average rating of an article is used to determine popilarity
  - A button for an AUTHOR to edit their article
  - Author Bio at the bottom

PUBLISHING PAGE:
* May allow VERIFIED USERS to publish their own articles
* Text Fields
  - One to allow the AUTHOR to type in the title of an article
  - One to allow the AUTHOR to create a brief blurb about thier article
* File Upload
  - Allows AUTHOR to upload their article
* Preview of the final ARTICLE PAGE
* Submission Button
  - Submitting an article with all requirements will create a timestamp to act as the article's publishing date

USER:
* Firstname & Lastname (strings)
* Email (string)
* Password (string)
* Verified Status (boolean)
* Favorite articles listed
* A way to change account from USER to AUTHOR

AUTHOR (child of USER):
* A small bio (string)
* Has access to the PUBLISHING PAGE
* Links to all articles published under their name.

