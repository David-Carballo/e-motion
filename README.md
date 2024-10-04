# E-motion

## [See the App!](e-motion-app.netlify.app)

<img src="/src/assets/logo-emotion.png" width="500"></img>

## Description

This project is an interactive web application created with React, designed to offer personalised recommendations of films, music and books based on the user's mood.

#### [Client Repo](https://github.com/David-Carballo/e-motion)
#### [Server Repo](https://github.com/plperezp/E-Motion_API)

## Technologies, Libraries & APIs used

**NOTE -** List here all technologies used in the project like HTML, CSS, Javascript, React, axios, Bootstrap, etc.
- HTML
- CSS
- Javascript
- React
- Bootstrap
- axios
- React spinners
- Ant Design
- MUI Library

## Backlog Functionalities

- Login users
- Share to RRSS
- Add external API

# Client Structure

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user, I want to be able to access the homepage to see what I can select my mood
- **add item** - As a user, I want to be able to add a new item to the page with a specific mood
- **edit and delete** - As a user, I want to be able to edit all items or delete one
- **mood list** - As a user I want to see all available items according to my mood and to be able to filter it according to my preferences
- **favorites list** - As a user I want to see all the items I have marked as favourites
- **clip message** - As a user I want to have a clip that shows me a random phrase on one of the items

## Client Routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Behavior                                                        |
| ------------------------- | ----------------| ----------------  |  ------------------------------------------------------------   |
| `/`                       | Home            |                            | Home page, shows recommendations, latest additions and best rated |
| `/about`                  | About           |                            | Project description, links to developer's pages    |
| `/favorites`              | Favorites       | Card, SearchBar, FilterBar | Show items marked as favorites  |
| `/add-item`               | Add Item        |                            | Form to add new item  |
| `/edit-item/:itemId`      | Edit Item       |                            | Form to edit Item details |
| `/items/:itemId`          | Item Detail     |                            | Details of item, navigate to Edit, delete and back Button |
| `/moods/:moodId`          | Mood            | Card, SearchBar, FilterBar | Shows all items that represent that mood   |
| `/error`                  | Error           |                            | Error page, return Home button   |
| `*`                       | NotFound        |                            | Not Found page, returns Home automatically  |

## Other Components

- Navbar
- Footer
  
## Links

### Collaborators

[Pedro Perez](https://github.com/plperezp)

[David Carballo](https://github.com/David-Carballo)

### Project

[Repository Link Client](https://github.com/David-Carballo/e-motion)

[Repository Link Server](https://github.com/plperezp/E-Motion_API)

[Deploy Link](https://e-motion-app.netlify.app/)

### Slides

[Slides Link](www.your-slides-url-here.com)
