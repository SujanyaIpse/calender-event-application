---

# Calendar Event Application

A web-based calendar application built with React that allows users to view events, navigate between months, and create events by selecting dates on the calendar. This project uses `react-big-calendar` and `react-modal` for the calendar view and pop-up modal forms.

## Features

- **Monthly and Weekly Views**: Toggle between month, week, and agenda views for events.
- **Event Creation**: Click on any date to add a new event with a title and description.
- **Date Navigation**: Easily navigate between months using "Back" and "Next" buttons.
- **Customizable Event List**: Displays created events on the calendar.

## Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calendar-app.git
   cd calendar-app/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

### Additional Setup for Modal

If you haven’t already installed `react-modal`, run:

```bash
npm install react-modal
```

## Usage

- **View Calendar**: The main calendar will show the current month by default.
- **Create Event**: Click on any date in the calendar to open a form modal where you can enter event details.
- **Navigate Months**: Use the "Back" and "Next" buttons below the calendar to switch between months.
- **Event Display**: Created events will be displayed on the calendar.

## Components Overview

- **CalendarComponent.js**: Main calendar view, which displays events and handles event creation using a modal.
- **EventForm.js**: Form component that captures event details (title and description) and submits them.

## Customization

- You can style the calendar further by editing `CalendarComponent.css`.
- Modify the event data structure in `CalendarComponent.js` or `EventForm.js` if you want to capture additional details.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **react-big-calendar**: Library for customizable calendar views.
- **react-modal**: Accessible modal dialog for event creation.

## License

This project is open-source and available under the MIT License.

--- 

