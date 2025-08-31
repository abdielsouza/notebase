import { defineConfig } from '@adonisjs/lucid'

const dbUrl = `${process.env.TURSO_DB_URL!}?authToken=${process.env.TURSO_AUTH_TOKEN!}`;

const dbConfig = defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'libsql',
      connection: {
        filename: dbUrl
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
});

export default dbConfig;