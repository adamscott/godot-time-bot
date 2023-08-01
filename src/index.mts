import { driver } from "@rocket.chat/sdk";

export interface BotOptions {
  debug: boolean;
  hostUrl: string;
  username: string;
  password: string;
  githubProject: string;
  githubUsername: string;
  githubToken: string;
  defaultAvatarUrl: string;
  defaultRepository: string;
  repositoryShortnameMap: string;
}

export class Bot {
  _debug: boolean;
  _hostUrl: string;
  _username: string;
  _githubProject: string;
  _githubUsername: string;
  _githubToken: string;
  _defaultAvatarUrl: string;
  _defaultRepository: string;
  _repositoryShortnameMap: string;

  _connection!: Awaited<ReturnType<(typeof driver)["connect"]>>;
  _userId!: string;

  get userId(): string {
    return this._userId;
  }

  constructor(options: BotOptions) {
    const {
      debug,
      hostUrl,
      username,
      password,
      githubProject,
      githubUsername,
      githubToken,
      defaultAvatarUrl,
      defaultRepository,
      repositoryShortnameMap,
    } = options;

    this._debug = debug;
    this._hostUrl = hostUrl;
    this._username = username;
    this._githubProject = githubProject;
    this._githubUsername = githubUsername;
    this._githubToken = githubToken;
    this._defaultAvatarUrl = defaultAvatarUrl;
    this._defaultRepository = defaultRepository;
    this._repositoryShortnameMap = repositoryShortnameMap;

    this._init(password).catch((err) => {
      console.error("Failed to init Bot:", err);
    });
  }

  async _init(password: string): Promise<void> {
    this._connection = await driver.connect({
      host: this._hostUrl,
      useSsl: true,
    });

    this._userId = await driver.login({
      username: this._username,
      password,
    });
  }
}

export interface RunBotOptions extends BotOptions {}

export async function runBot(options: RunBotOptions): Promise<Bot> {
  const bot = new Bot(options);
  return bot;
}
