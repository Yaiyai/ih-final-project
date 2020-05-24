# CUÉNTAME-MÁS

## Idea

This is an app for people who find it hard to make an specific portfolio for each company they intend to apply for a job in.

## User Stories

- **Signup:** As an non-user I can sign up in the platform so that I can access to my profile and manage my portfolios.

- **Login:** As a user I can login to the platform so that I can create or share my portfolios.

- **Logout:** As a user I can logout from the platform so no one else can use it

- **Create Experience**: As a user I can create elements in the experience section. Each element will be draggable in the Portfolio Creator Section

- **Delete Experience**: As a user I can delete elements in my experience section.

- **Create Portfolios**: As a user I can create as many portfolios as needed just by drag'n'dropping every element created in the experience section. I can choose portfolio's templating and colors.

- **Share Portfolios**: As a user I can share a public URL with whoever I want. The URL will be accesible even if you're not registered in the app.

# Client / Frontend

#### React Router Routes (React App)

| **Path**             | **Component** | **Permisions** | **Behavior**                                                                                                                                                            |
| -------------------- | ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /                    | Home          | Every User     | Landing page where every user can see how the app works                                                                                                                 |
| /signup              | Signup        | Non-user only  | Signup form, navigate to dashboard after signup                                                                                                                         |
| /login               | Login         | User only      | Login form, link to signup, navigate to dashboard after login if user is logged in.                                                                                     |
| /dashboard           | HomeDash      | user only      | Shows all portfolios created by the user and a navbar with links to create experience, new portfolios and a log-out button. Every portfolio can be created and deleted. |
| /dashboard/profile   | Profile       | user only      | Edit user data. This is important because the URLs will be generated with the user's name                                                                               |
| /dashboard/cv/:id    | CV            | user only      | Create elements in the experience area, so it can be dragged in the portfolio Creator area. User has to Save Changes before leaving area.                               |
| /dashboard/portfolio | Portfolio     | user only      | User configures how the portfolio's look and feel will be and drags all element that user seems necessary to share with the company the're triying to get a job in..    |
| /sharing/t1          | T1            | Everyone       | URL that allows everyone, even non registered user, to see a resistered-user portfolio created with template 1.                                                         |
| /sharing/t2          | T2            | Everyone       | URL that allows everyone, even non registered user, to see a resistered-user portfolio created with template 2.                                                         |
| /sharing/t2          | T3            | Everyone       | URL that allows everyone, even non registered user, to see a resistered-user portfolio created with template 3.                                                         |

<br>

### UI Components (smaller)

**Navbar** - Present in all the public routes

**DashNAv** - To be displayed in all private routes

<br>

# Server / Backend

## Models

User model

```javascript
{
username: String,
email: String,
password: String,
avatar: String,
name: String,
lastName: String,
phone: String,
}
```

Experience/CV model

```javascript
{
title: String,
owner: { type: Schema.Types.ObjectId, ref: 'User' },
socialMedia: Array,
skills: Array,
whatIveDone: Array,
}
```

Portfolio model

```javascript
{
title: String,
companyName: String,
companyAvatar: String,
owner: { type: Schema.Types.ObjectId, ref: 'User' },
education: [{ type: Schema.Types.ObjectId, ref: 'ExtraInfo' }],
experience: [{ type: Schema.Types.ObjectId, ref: 'ExtraInfo' }],
skills: Array,
socialMedia: Array,
works: Array,
url: String,
avatar: String,
template: String,
theme: String,
}
```

ExtraInfo (job/education) model

```javascript
{
place: String,
duration: String,
experienceInfo: String,
typeOfInfo: {
	type: 'String',
	enum: ['Education', 'Job'],
},
cv: { type: Schema.Types.ObjectId, ref: 'myCV' },
},
```

## API Endpoints (backend routes)

| **Method** | **Route**                       | **Description**                                                                           |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------- |
| POST       | /api/signup                     | Sends sign up info to the server and creates user in the DB.                              |
| POST       | /api/login                      | Sends login form data to the server.                                                      |
| POST       | /api/logout                     | Sends user intent to logout request to the server.                                        |
| POST       | /api/lggedin                    | Aks the server is the user is logged in to allow them access to certain areas of the app. |
| POST       | /api/lggedin                    | Aks the server is the user is logged in to allow them access to certain areas of the app. |
| POST       | /api/user/updateUser/:id        | Edit specified fields in the user found by its ID                                         |
| POST       | /api/user/upload                | Cloudinary upload of users avatar.                                                        |
| GET        | /api/cv/findThisCv/:id          | Finds CV/experience of logged-in-user.                                                    |
| POST       | /api/cv/editCv/:id              | Edits CV/experience of logged-in-user.                                                    |
| POST       | /api/cv/upload                  | Cloudinary upload of user's works.                                                        |
| GET        | /api/portfolio/findMyPortfolios | Renders all created portfolios by the logged-in-user in the dashboard home.               |
| POST       | /api/portfolio/newPortfolio/:id | Creates a new portfolio owned by logged-in-user.                                          |
| POST       | /api/portfolio/delete/:id       | Deletes portfolio owned by logged-in-user.                                                |
| POST       | /api/extraInfo/addJob/:id       | Creates a Job experience owned by logged-in-user's cv                                     |
| POST       | /api/extraInfo/addEducation/:id | Creates an Education experience owned by logged-in-user's cv                              |
| POST       | /api/extraInfo/delete/:id       | Deletes experience owned by logged-in-user                                                |
| GET        | /sharing/:url                   | Creates a link which renders the created portfolio in the template chosen by the creator  |

#### [Miro](https://miro.com/app/board/o9J_kstNpB0=/)

[Client repository Link](https://github.com/Yaiyai/ih-final-project/tree/master/client)

[Server repository Link](https://github.com/Yaiyai/ih-final-project/tree/master/server)

[Deployed App Link](https://cuentame-mas.herokuapp.com/)
