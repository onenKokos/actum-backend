# Actum Backend

This is the backend portion of an interview for the position of fullstack developer at ACTUM Digital.

This repo concerns itself with task number 8:

> API implementation: Try to implement your own API using serverless functions
> or any other database tool. We prefer using GraphQL databases (for example
> https://fauna.com/).

## Prerequisites

- Node (developed on version 18.1.0)
- Package manager (npm or yarn)
- Docker (optional)

## What I didn't do, but would have if I had more time:

- Fix Dockerfile
  - Describe process on how to run Dockerfile locally
- Github stuff
  - Lock master (main) branch
  - Set up github actions (for pullrequest to master, run tests or something)
- Code quality tools
  - husky
  - lint-stage
  - commitizen

## Local development

You, as a reviewer, will probably not run this node app on your local machine, because it requires a **running mongoDB cluster** on [mongodb](https://cloud.mongodb.com/v2/).

You can either create a free cluster tier, or you can request my personal **connection string**.

Install all dependencies with the package manager of your choice. I used `yarn` but it should work with `npm` as well. Simply run `yarn` or `npm install` in your project root.

Then you will have to generate your types using `yarn codegen` or `npm run codegen` respectively (this might change - might push types to repo, might add a postinstall script, haven't decided as of writing this).

Then you need to create a `.env` file. You can inspect the `.env.sample` file for the necessary values.

If you are using your own cluster and connection string, your can populate it with example data by using the cli - just run `yarn populate` or `npm run populate` to populate the database with the data provided in the task. This task is optional if you have obtained my personal connection string.

Finally, you can start the application in development mode by running `yarn dev` or `npm run dev`.

The Production build can be obtained by running `yarn build` or `npm run build` and the resulting built can be run by `yarn start` or `npm run start`.

**IMPORTANT!**

Running the built app via the `start` might not work on Windows machines, because of the way the `NODE_ENV` parameter is passed to node. There are numerous ways to fix this, but the easiest way is to modify the `start` to be `cross-env NODE_ENV=production node dist/index.js` (you should also move `cross-env` from devDependencies to dependencies, if you want to be pedantic about it). There are probably some easier ways, but I don't have a Windows machine to test it. Alternatively, I have provided a Dockerfile - you can build it by
