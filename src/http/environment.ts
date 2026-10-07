export interface CodeRustcApiEnvironmentUrls {
  api: string;
  auth: string;
}

export const CodeRustcApiEnvironment = {
  Production: {
    api: 'https://api.bloomberg.com',
    auth: 'https://bsso.blpprofessional.com',
  },
  Alpha: {
    api: 'https://api.alpha.bloomberg.com',
    auth: 'https://bssobeta.blpprofessional.com',
  },
  Beta: {
    api: 'https://api.beta.bloomberg.com',
    auth: 'https://bssouat.blpprofessional.com',
  },
  Development: {
    api: 'https://api.dev.bloomberg.com',
    auth: 'https://bssodev.bloomberg.com',
  },
} as const;

export type CodeRustcApiEnvironment =
  | typeof CodeRustcApiEnvironment.Production
  | typeof CodeRustcApiEnvironment.Alpha
  | typeof CodeRustcApiEnvironment.Beta
  | typeof CodeRustcApiEnvironment.Development;
