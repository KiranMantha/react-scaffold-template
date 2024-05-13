/* eslint-disable no-undef */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'ci', 'build', 'revert', 'deps']
    ],
    'header-max-length': [0, 'always', 200],
    'jira-ticket-format': [2, 'always'],
    'subject-max-length': [2, 'always', 150],
    'subject-case': [2, 'always', ['sentence-case', 'upper-case']]
  },
  plugins: [
    {
      // Enforce JIRA number in commit message
      rules: {
        'jira-ticket-format': commitMessage => {
          //console.log(commitMessage);
          const jiraTicketPattern = /^[A-Z]+-\d+/;
          const [, commitSubject] = commitMessage.header.split(':');
          const jiraNumber = commitSubject?.split(',')[0].trim();

          if (!jiraTicketPattern.test(jiraNumber)) {
            return [
              false,
              'Subject of the commit message must begin with JIRA number in uppercase. \n → Sample format: <type>: <JIRA-number>, <subject>. \n → Example: feat(mi-ui-library): FSD-1234, Adding button. \n ⓘ Please refer to commit guidelines: https://git.marriott.com/phoenix/mi-phoenix-monorepo/blob/trunk/_docs/commit_guidelines.md'
            ];
          }
          return [true];
        }
      }
    }
  ]
};
