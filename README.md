The content below is an example project proposal / requirements document. Replace the text below the lines marked "**TODO**" with details specific to your project. Remove the "TODO" lines.

(**TODO**: final project)

# Shoppy Shoperson

## Overview

(**TODO**: a brief one or two paragraph, high-level description of your project)

Remembering what to buy at the grocery store is waaaaay too difficult. Also, shopping for groceries when you're hungry leads to regrettable purchases. Sooo... that's where Shoppy Shoperson comes in!

Shoppy Shoperson is a web app that will allow users to keep track of multiple grocery lists. Users can register and login. Once they're logged in, they can create or view their grocery list. For every list that they have, they can add items to the list or cross off items.

## Data Model

(**TODO**: a description of your application's data and their relationships to each other)

The application will store Users, Quotes, and Reflections

- users can have multiple quotes (by embedding) and reflections (via references)
- reflections can have multiple quotes (via references)

(**TODO**: sample documents)

An Example User with quotes embeded:

```javascript
{
  username: "user",
  hash: // a password hash,
  reflections: // an array of references to Reflections documents
  quotes: [
    { surah: " ", verseNo: " ", ayat: "", catagories: []},
    { surah: " ", verseNo: " ", ayat: "", catagories: []},
  ], //embeded

}
```

An Example Reflections with reference to Quotes:

```javascript
{
  user: // a reference to a User object
  quotes: // an array of references to Quotes documents
  createdAt: // timestamp
}
```

An Example Quotes:

```javascript
{
  surah: " ",
  verseNo: " ",
  catagories: []
}
```

## [Link to Commented First Draft Schema](db.mjs)

(**TODO**: created)

## Wireframes

(**TODO**: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/home - page for creating a new shopping list

![list create](documentation/list-create.png)

/categories - page for showing all shopping lists

![list](documentation/list.png)

/categories/quotes - page for showing specific shopping list

![list](documentation/list-slug.png)

/reflections - page for showing specific shopping list

![list](documentation/list-slug.png)

## Site map

(**TODO**: draw out a site map that shows how pages are related to each other)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(**TODO**: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as non-registered user, I can register a new account with the site
2. as non-registered user, I can register view quotes
3. as a user, I can log in to the site
4. as a user, I can add new quotes
5. as a user, I can view all the quotes
6. as a user, I can add reflections to quotes
7. as a user, I can delete reflections

## Research Topics

(**TODO**: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

- (5 points) Integrate user authentication
  - I'm going to be using passport for user authentication
  - And account has been made for testing; I'll email you the password
  - see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
  - see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
- (4 points) Perform client side form validation using a JavaScript library
  - see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
  - if you put in a number that's greater than 5, an error message will appear in the dom
- (5 points) vue.js
  - used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (**\_TODO**: addtional points will **not** count for extra credit)

## [Link to Initial Main Project File](app.mjs)

(**TODO**: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(**TODO**: list any tutorials/references/etc. that you've based your code off of)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)
