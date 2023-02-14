const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'tmokmss',
  authorAddress: 'tomookam@live.jp',
  cdkVersion: '2.1.0', // For using @aws-cdk/integ-runner
  defaultReleaseBranch: 'main',
  name: 'cdk-time-seep',
  repositoryUrl: 'https://github.com/tmokmss/cdk-time-sleep.git',
  eslintOptions: {
    ignorePatterns: ['example/**/*', 'lambda/**/*', 'test/assets/**/*', 'test/*.snapshot/**/*', '*.d.ts'],
  },
  gitignore: ['*.js', '*.d.ts', '!test/integ.*.snapshot/**/*'],
  keywords: ['aws', 'cdk', 'lambda', 'aws-cdk'],
  tsconfigDev: {
    exclude: ['example', 'test/*.snapshot'],
  },
  devDeps: [
    'aws-cdk@^2.38.0',
    'aws-cdk-lib@^2.38.0',
    'constructs@^10.0.5',
    '@aws-cdk/integ-runner@^2.38.0',
    '@aws-cdk/integ-tests-alpha@^2.38.0-alpha.0',
  ],
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
  description: 'Sleep during deployment (equivalent with Terraform time_sleep)',
});
// Bundle custom resource handler Lambda code
project.projectBuild.compileTask.prependExec('yarn install  --frozen-lockfile && yarn build', {
  cwd: 'lambda',
});
// Run integ-test
project.projectBuild.testTask.exec('yarn tsc -p tsconfig.dev.json && yarn integ-runner');
project.synth();
