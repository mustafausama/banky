## Installation

- Install Node.js
- Install PostgreSQL
  - If you already have Docker, you do not need to install postgres. Run the following command:  
    `docker run --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -d -p 5432:5432 postgres`
- Change PostgreSQL hostname, port, username, and password in **.env.example**

Then, run the following commands
Make sure to use npm version 6:
`npm install -g npm@6`
Then run the following

1. `npm install`
2. `npm --prefix views install`
3. `cp .env.example .env`
4. `cp views/.env.example views/.env`
5. `npm run prisma:migrate`
6. `npm run dev`

To view the database visualization run:  
`npm run prisma:studio`
