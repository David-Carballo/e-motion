# E-motion

## [See the App!](e-motion-app.netlify.app)

![App Logo](/src/assets/logo-emotion.png)

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
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **events list** - As a user I want to see all the events available so that I can choose which ones I want to attend
- **events create** - As a user I want to create an event so that I can invite others to attend

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
