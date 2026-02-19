# Event Booking Application

A full-stack event booking application built with Node.js and Express to simulate real-world frontend–backend integration and deployment workflows.

---

## About

This application enables users to browse upcoming events and book tickets through a simple, structured flow. It implements RESTful APIs, server-rendered views using EJS, and responsive UI design to demonstrate end-to-end request handling, routing, and form submission in a production-style environment. The project is deployed on Render.

---

## Features

* Browse and view upcoming events
* Book tickets through a user-friendly flow
* Responsive layout across devices
* Clean UI with structured navigation
* RESTful API integration
* Form handling and validation
* Frontend–backend connectivity

---

## Tech Stack

Frontend

* HTML
* CSS
* Tailwind CSS
* JavaScript
* EJS

Backend

* Node.js
* Express.js

Deployment

* Render

---

## Architecture

Client → Express Routes → Controllers → EJS Views → Response

---

## Project Structure

```
RendezShow/
│
├── Backend/
│   ├── Database/
│   │   ├── admin.json
│   │   ├── contact.json
│   │   ├── login.json
│   │   ├── movie.json
│   │   ├── signup.json
│   ├── uploads/
│   ├── views/
│   │   ├── 02_events.ejs
│   │   ├── 03_movie.ejs
│   │   ├── 07_booking.ejs
│   │   ├── 11_movieAdmin.ejs
│   │   ├── 12_eventAdmin.ejs
│   ├── 01_home.js
│
├── Frontend/
│   ├── images_f/
│   ├── index.html
│   ├── 04_contact.html
│   ├── 05_signup.html
│   ├── 06_login.html
│   ├── 08_about.html
│   ├── 09_style.css
│   ├── input.css
│
├── SRS/
├── package.json
└── README.md
```

EventBookingApp/
│
├── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── views/
│   ├── middleware/
│   └── server.js
│
├── Frontend/
│   ├── public/
│   ├── styles/
│   └── scripts/
│
├── package.json
└── README.md

```

---

## Environment Variables
Create a `.env` file in the backend root directory:

```

PORT=
CLIENT_URL=
NODE_ENV=

````

Add `.env` to `.gitignore` to prevent credential leaks.

---

## Installation & Setup

```bash
# Clone repository
git clone <REPO_URL>

# Install dependencies
npm install

# Run application
npm run dev
````

---

## Deployment

Application deployed on Render.

---

## Author

Muskan

---

## License

MIT License
