const REF_NAME = process.env.GITHUB_REF_NAME;
//const IS_TAG = process.env.GITHUB_REF_TYPE == 'tag';
const MAIN_BRANCH = 'main';

let config = {
  plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', '@semantic-release/github'],
  branches: [
    {
      name: MAIN_BRANCH,
      prerelease: false,
    },
    {
      name: '+([0-9])?(.{+([0-9]),x}).x',
    },
    {
      name: 'dev',
      prerelease: 'dev',
      channel: 'development',
    },
  ],
};

if (config.branches.some(it => it.name === REF_NAME && !it.prerelease)) {
  config.plugins.push(
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
      },
    ]
  );
}

module.exports = config;
