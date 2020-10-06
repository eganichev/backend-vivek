let {
  DB_HOST,
  DB_PORT = 3306,
  DB_USER = 'root',
  DB_PASSWORD = 'root',
  DB_NAME = 'vivek_db',
} = process.env;

module.exports = [
  {
    "type": "mysql",
    "host": DB_HOST,
    "port": DB_PORT,
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "autoSchemaSync": true,
    "entities": [`./**/*.entity{.ts,.js}`],
    "migration": [
      "src/migrations/*.ts",
    ],
    "cli": {
      "migrationsDir": "src/migration",
    }
  }
]