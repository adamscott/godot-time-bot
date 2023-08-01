import { runBot } from "./index.mts";

const DEBUG = process.env.BOT_DEBUG;
const ROCKET_HOST_URL = process.env.ROCKET_HOST_URL;
const ROCKET_USERNAME = process.env.ROCKET_USERNAME;
const ROCKET_PASSWORD = process.env.ROCKET_PASSWORD;
const GITHUB_PROJECT = process.env.GITHUB_PROJECT;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const DEFAULT_AVATAR_URL = process.env.DEFAULT_AVATAR_URL;
const DEFAULT_REPOSITORY = process.env.DEFAULT_REPOSITORY;
const REPOSITORY_SHORTNAME_MAP = process.env.REPOSITORY_SHORTNAME_MAP;

runBot({
  debug: DEBUG,
  hostUrl: ROCKET_HOST_URL,
  username: ROCKET_USERNAME,
  password: ROCKET_PASSWORD,
  githubProject: GITHUB_PROJECT,
  githubUsername: GITHUB_USERNAME,
  githubToken: GITHUB_TOKEN,
  defaultAvatarUrl: DEFAULT_AVATAR_URL,
  defaultRepository: DEFAULT_REPOSITORY,
  repositoryShortnameMap: REPOSITORY_SHORTNAME_MAP,
}).catch((err) => {
  console.error(err);
});
