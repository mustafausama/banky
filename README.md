## Installation

- Install Node.js
- Install PostgreSQL
- Change PostgreSQL hostname, port, username, and password in **.env.example**

Then, tun the following commands

1. `npm install`
2. `npm --prefix views install`
3. `cp .env.example .env`
4. `npm run prisma:migrate`
5. `npm run dev`
