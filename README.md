# Feedback-task

The project "Feedback-task" is a full working feedback form with sending customer's feedbacks to the database.

The backend service is deployed on the free Render resource, so it is
automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request.

This can cause a response delay of up to 30 seconds for the first request that comes in after a period of inactivity.

## Links

- [Frontend](https://feedbacks-frontend.onrender.com)
- [Github](https://github.com/marisereda/feedback-task)
- [Backend swagger docs](https://app.swaggerhub.com/apis-docs/marisereda/feedback-task/1.0)

## Technologies stack

### Frontend

- React
- Redux toolkit
- Styled-component
- Vite.JS

### Backend

- Node.JS
- Nest.JS
- Prisma
- PostgreSQL

## User access to Database reading

- Host: `dpg-cfojfbp4rebfdap3s9h0-a.frankfurt-postgres.render.com`
- Port: `5432`
- Database: `feedbacks`
- Username: `guest`
- Password: `guest`
