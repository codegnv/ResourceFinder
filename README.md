This is a [Next.js](https://nextjs.org/) project using [TypeScript](https://www.typescriptlang.org/).

[Volta](https://volta.sh/) is used to manage versions of JS tools.

The component library is [ChakraUI](https://chakra-ui.com/).

The database is using [MongoDB](https://www.mongodb.com/) and is accessed via [Mongoose](https://mongoosejs.com/).

Translation strings are handled by [next-translate](https://www.npmjs.com/package/next-translate) and are currently only kept in the `common` context.

## Getting Started

- Use Volta to install correct versions of JS tools.
- Copy the `.env.sample` to `.env` and update the secrets in the file.
- Install packages with `yarn install`
- Then run the development server:

  ```bash
  yarn dev
  ```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

A set of Github actions are used to deploy to [Heroku](https://heroku.com). Three secrets should be added to the repository to facilitate release.

- HEROKU_API_KEY
- HEROKU_APP_NAME
- HEROKU_EMAIL

The secrets that were updated in the `.env` file should be added to [Heroku](https://heroku.com).
