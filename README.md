# Welcome 👋

Hi there! Thanks for taking a look at my project — this is the frontend component of an experimental project I'm currently working on called Rival News. Powered by React, LLMs, and analytics, Rival News is a new take on written news media. With a set of core facts written by our authors, we generate news articles using various LLM models and processes. We continuously re-write and test the wording of our articles to maximize shareability.

## Front-end Architecture

Our frontend uses:

- React
- Vite
- Tailwinds
- NextUI

## Back-end

- Firebase Authentication
- Firebase Data Connect (PostgreSQL DB and SDK management)

We are using Firebase Data Connect to manage our PostgreSQL database and automatically generate schemas and the web SDK which allows us to bypass having a typical REST API layer, streamlining our data handling processes and improving efficiency.

With Firebase Data Connect, instead of writing typical SQL queries, we define our DB schema using GraphQL. It then handles the management of tables and auto-generates a Web (or app) SDK, which simplifies the integration of our database with the frontend.

Only queries and mutations that have been defined in the `/dataconnect` directory and generated in the SDK are accessible to users — there are no actual GraphQL endpoints exposed, meaning security is simplified and limited to the SDK.

It is recommended that you download the Firebase Data Connect extension for testing and building.

To run the generation, you need to run the Firebase Data Connect extensions, or you can run it manually with "pnpm generate" or "pnpm generate:continuously" to generate it as you make changes to the schemas, queries, or mutations.
