![image 16](https://user-images.githubusercontent.com/66570560/195385210-3ddad5d2-a7ae-488a-bae8-6a688b2f4537.png)

# Aeras - B2C - Mobile

Aeras is a B2C mobile (IOS & Android) application that allows you to **manage your Air Conditioners (AC)**.

## Tech Stack

**Client:** React Native, Expo, Typescript

## Techs

- React Native
- TypeScript
- Expo
- React Native Async Storage
- React Navigation
- React Query

## Environment Variables


## Run Locally

Clone the project

```bash
  git clone git@github.com:aerasproject/mobile.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## EAS Build (Android)

```bash
  eas build --profile preview --platform android
```

## Commit rules

- Commit using git commit only;
- Never commit directly to master;
- When finishing a task, make a last commit changing the system version and run the script of the available version;
- If you are using Vim: at the end of a commit, run the command :wq to save and close the file;

## Pattern branches

Types: feat | bug | hotfix | doc | enhancement | chore

```bash
[type]/[task]
```
