declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGO_URI: string,
        JWT_SECRET_KEY: string,
        SESSION_SECRET: string
      }
    }
  }
}