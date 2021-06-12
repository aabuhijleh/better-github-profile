# 🚀 GitHub Personal Website Generator

> Use your GitHub profile to create a personal website

[Demo page](https://www.aabuhijleh.com/)

<p align="center">
    <img src="https://user-images.githubusercontent.com/42934634/118388920-df3d8080-b62f-11eb-9d01-63e2b411b2c6.png" alt="example" />
</p>

## How it works? 🙋‍♀️

The [GitHub GraphQL API](https://docs.github.com/en/graphql) is used to download your [profile README](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme) and other profile data. This information is used to generate the website's content.

## Try it out 🧪

By default, it uses the profile of the username set in `src/constants/defaults.ts`

To use a different profile

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

## Todos 📝

- ~~Use GitHub GraphQL API instead of REST to get user status~~
- ~~Use styled components~~
- Add more customization options
