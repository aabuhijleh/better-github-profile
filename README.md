# 🚀 Better GitHub Profile

> Use your GitHub profile to create a personal website

[Demo page](https://www.aabuhijleh.com/)

<p align="center">
    <img src="https://user-images.githubusercontent.com/42934634/122873598-a1bcc900-d33a-11eb-91ce-794b213363ab.png" alt="example" />
</p>

## How it works? 🙋‍♀️

The content of this website is generated dynamically using the [GitHub GraphQL API](https://docs.github.com/en/graphql) which is used to download your [profile README.md](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme) and your [user data](https://docs.github.com/en/graphql/reference/objects#user)

An extra file `extend.json` is required to be in your profile readme repository

[See this example](https://github.com/aabuhijleh/aabuhijleh/blob/main/extend.json)

```ts
// Your "extend.json" file should have this schema

interface ExtendedData {
  resume: string;
  about: {
    paragraphs: string[];
    skills: string[];
    imageUrl: string;
  };
  jobs: Job[];
  featuredProjects: FeaturedProject[];
  otherProjects: Project[];
  contactMessage: string;
}

interface Job {
  title: string;
  company: string;
  companyUrl: string;
  date: {
    from: string;
    to: string;
  };
  accomplishments: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  date: {
    from: string;
    to: string;
  };
  repoUrl?: string;
  externalUrl?: string;
}

type FeaturedProject = Project & { imageUrl: string };
```

## Try it out 🧪

By default, the app uses the profile of the username set in `src/constants/defaults.ts`

To use a different profile, you can use this URL parameter

```
/?username={username}
```

## Development 💻

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

```sh
# install dependencies
$ npm install

# run the app in development
$ npm start

# build the app for production
$ npm run build
```

You need to generate a [GitHub key](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) to use the GraphQL API. Add this key as an environment variable `REACT_APP_GITHUB_KEY` in a `.env` file that needs to be created at the project's root directory
