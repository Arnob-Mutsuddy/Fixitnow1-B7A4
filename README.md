# FixItNow — Home Services Marketplace API

Backend API for a home services marketplace where customers book technicians for services like plumbing, electrical, cleaning, and painting.

## Tech Stack

- Node.js + Express
- TypeScript
- PostgreSQL + Prisma ORM
- JWT Authentication
- Stripe (Payments)

## Getting Started

\`\`\`bash
npm install
cp .env.example .env   # fill in your own values
npx prisma migrate dev
npm run seed
npm run dev
\`\`\`

## Admin Credentials

- Email: [EMAIL_ADDRESS]
- Password: [PASSWORD]

## API Documentation

Postman Docs: [POSTMAN](https://documenter.getpostman.com/view/54724313/2sBY4SNzMs)

## Live API
[Link](https://fixitnow-lake.vercel.app)

## Roles

- **CUSTOMER** — browse, book, pay, review
- **TECHNICIAN** — create profile, manage bookings
- **ADMIN** — manage users, view all bookings/categories