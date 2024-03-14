The content below is an example project proposal / requirements document. Replace the text below the lines marked "**TODO**" with details specific to your project. Remove the "TODO" lines.

(**TODO**: final project)

# Qur'anic Reflections

## Overview

(**TODO**: a brief one or two paragraph, high-level description of your project)

When reading the Qur'an, it is important to ponder the verses and reflect on their meaning, interpretations, and how they make the reader feel/think. Also, sometimes we just want to be reminded of the themes and read and reflect on verses related to those themes.

Qur'anic Reflections is a web app that will allow users to read verses from the Qur'an, add verses that are important to them, and write their reflections on chosen verses.

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
    { surah: " ", verseNo: " ", ayat: "", themes: []},
    { surah: " ", verseNo: " ", ayat: "", themes: []},
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
  themes: []
}
```

## [Link to Commented First Draft Schema](db.mjs)

(**TODO**: create a first draft of your Schemas in db.mjs and link to it)

## Wireframes

(**TODO**: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/home - start page introducting the website

![home](documentation/home.png)

/themes - page for showing all themes

![themes](documentation/themes.png)

/themes/quotes - page for showing quotes within each category

![themes quotes](documentation/quotes.png)

/reflections-add - page for showing all the reflections

![reflections add](documentation/reflections-add.png)

/reflections - page for showing all the reflections

![reflections](documentation/reflections.png)

## Site map

(**TODO**: draw out a site map that shows how pages are related to each other)

[site map](documentation/siteflow.png)

## User Stories or Use Cases

(**TODO**: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as a user, I can view all the quotes
2. as a user, I can add new quotes
3. as a user, I can add reflections to quotes

## Research Topics

(**TODO**: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

- (6 points) Use a front-end framework
  - I will be using Next.js
- (2 points) Use a CSS framework or UI toolkit
  - I will be using Semantic UI
- (3 points) Use built tools
  - I will be using Grunt
  - (2 points) Integrate ESLint into your workflow

10 points total out of 8 required points (**\_TODO**: addtional points will **not** count for extra credit)

## [Link to Initial Main Project File](app.mjs)

(**TODO**: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(**TODO**: list any tutorials/references/etc. that you've based your code off of)

1. [semantic ui](https://semantic-ui.com/introduction/getting-started.html) - (add link to source code that was based on this)
2. [tutorial on next.js](https://nextjs.org/docs/pages/api-reference/create-next-app) - (add link to source code that was based on this)
3. [next.js with mongoose](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose) - (add link to source code that was based on this)
4. [grunt](https://gruntjs.com/getting-started) - (add link to source code that was based on this)
