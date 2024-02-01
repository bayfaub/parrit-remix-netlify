# Parrit

A historical recommendation engine for daily pair rotation management, with an interactive visual aide of each pairing team.
Visit the app: https://parrit.io/

## Tech Stack

- Supabase
- Netlify
- Remix.run
- ReactJS

## Local Development

### Initialize local database

[Docs Reference](https://supabase.com/docs/guides/cli/getting-started)

1. [Install supabase cli](https://supabase.com/docs/guides/cli/getting-started)
2. [Install Docker](https://docs.docker.com/get-docker/)
3. `supabase start` (this will take awhile on first launch, note down your supabase postgresql database url and supabase anon key)
4. you can stop supabase with `supabase stop`
5. Email [Anthony Dreessen](mailto:anthonydreessen@gmail.com) for access to the Parrit supabase org.

5. link your project with `supabase link` to the `parrit-remix` supabase project.
6. clone the remote project with `supabase db pull`

### Start localhost

1. `npm i netlify-cli -g`
2. create a .env file in the parrit-remix-netlify directory
3. set environment variables in your .env file: SUPABASE_URL="{postgresql db url }" , SUPABASE_KEY = "{supabase anon key}" (if you need to find your anon key or db url just run `supabase stop` and then `supabase start` and )
4. `netlify dev`

## Core Contributors

Big shoutout to the following people for helping to guide the direction that Parrit took. Core contributors also please feel free to add others to the core contributor list for those who significantly shape the direction of Parrit.

- [Anthony Dreessen](mailto:anthonydreessen@gmail.com) - Product Owner, Product Management + Full-stack Development
- [Darcie Fitzpatrick](mailto:darciefitzpatrick@gmail.com) - Product Design, Product Management + User Research
- [Cat Zhang](mailto:cielzee@gmail.com) - Product Management + Product Design
- [Joseph Greubel](mailto:joegreubel1@gmail.com) - Front-end Development, Back-end Development
- [Michael Oleske](mailto:moleske@pivotal.io) - Back-end Development

Take a look at the tech talk we presented about the making of Parrit: https://youtu.be/YVMuMK5Ru_A

## Want to contribute?

- See [Contributing](./docs/Contributing.md)
