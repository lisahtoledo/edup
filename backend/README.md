# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

 variasveis env
 
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false

APP_KEY=FSJXid5KmvBD7MF1si65um4yxa9HCQB9

DB_CONNECTION=pg
DB_HOST=0.0.0.0
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=123456
DB_DATABASE=edup
HASH_DRIVER=bcrypt


SESSION_DRIVER=cookie

SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
MAIL_USERNAME=e3e4332bfa39ae
MAIL_PASSWORD=0cf01c09e532dc