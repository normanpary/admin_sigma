module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'sigmacorp_website'),
        user: env('DATABASE_USERNAME', 'sigmacorp_website'),
        password: env('DATABASE_PASSWORD', 'jrDYdnGLymLD7asp'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      debug: false,
    },
  });