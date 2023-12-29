## Installation

- Install Node.js
- Install PostgreSQL
  - If you already have Docker, you do not need to install postgres. Run the following command:  
    `docker run --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -d -p 5432:5432 postgres`
- Change PostgreSQL hostname, port, username, and password in **.env.example**

Then, run the following commands

1. `npm install`
2. `npm --prefix views install`
3. `cp .env.example .env`
4. `npm run prisma:migrate`
5. `npm run dev`
