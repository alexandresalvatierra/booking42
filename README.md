<h1 align="center">Welcome to Shopping Booking42 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple Booking properties to go on vacation, using React with Typescript, Redux and Docker. I hope you have as much fun as I was doing in this journey.

## Manual Installation - Local Depelopment

Clone the repo:

```sh
git clone --depth 1 https://github.com/alexandresalvatierra/booking42.git
cd booking42
```

## How to Run

```sh
docker compose up
```

After all process completed, place on web browser: http://localhost:4242

## Screenshots

<img src="./public/Screenshot-1.png">
<img src="./public/Screenshot-2.png">
<img src="./public/Screenshot-3.png">

## Features

- Listing properties (Setting initial state with Redux)
- Modal (Composition pattern)
  - Close modal if Overlay clicked, Esc pressed or X button clicked
  - Modal Header with title and close button
  - Modal Content with any children content
  - Modal Footer with button actions and any children content
- Create Booking
  - Dates are saved on UTC format
  - If Check In and Property is previously already booked in range, it's not allowed the booking
  - All fields are required
  - Enter key submit the form
  - Once booking completed, it will be show on the grid
- Listing Booking
  - It's possible delete and edit

### What could come next

There are few important activities to improve this project like:

- [ ] Calculate booking price by days
- [ ] Improve the booking components
- [ ] Create an common for input and button
- [ ] Improve form validation

## Author

👤 **Alexandre**

- Github: [@alexandresalvatierra](https://github.com/alexandresalvatierra)
- LinkedIn: [@https:\/\/br.linkedin.com\/in\/alexandre-salvatierra](https://linkedin.com/in/https://br.linkedin.com/in/alexandre-salvatierra)

## Show your support

Give a ⭐️ if this project helped you!
