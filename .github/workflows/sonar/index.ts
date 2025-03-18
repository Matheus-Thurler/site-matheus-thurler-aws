import * as core from '@actions/core';
import { exec } from '@actions/exec';

async function run() {
  try {
    // Obtém os inputs da action
    const sonarToken = core.getInput('sonar-token');
    const sonarOrganization = core.getInput('sonar-organization');
    const sonarProjectKey = core.getInput('sonar-project-key');

    core.info('Executando ESLint');
    await exec('npx eslint . --config .github/workflows/sonar/eslint.config.js || true');

    core.info('Instalando SonarScanner');
    await exec('npm install -g sonarqube-scanner');

    core.info('Rodando SonarScanner');
    await exec(`sonar-scanner \
      -Dsonar.organization=${sonarOrganization} \
      -Dsonar.projectKey=${sonarProjectKey} \
      -Dsonar.host.url=https://sonarcloud.io \
      -Dsonar.login=${sonarToken} \
      -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
      -Dsonar.qualitygate.wait=true`);

    core.info('aprovado!');
  } catch (error) {
    core.setFailed(`Falha no processo: ${(error as Error).message}`);
  }
}

run();