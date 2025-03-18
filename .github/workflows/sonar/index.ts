import * as core from '@actions/core';
import { exec } from '@actions/exec';
import fs from 'fs'; // Importe o módulo fs para verificar a existência do arquivo

async function run() {
  try {
    // Obtém os inputs da action
    const sonarToken = core.getInput('sonar-token');
    const sonarOrganization = core.getInput('sonar-organization');
    const sonarProjectKey = core.getInput('sonar-project-key');

    core.info('Executando ESLint');
    await exec('npx eslint . --config .github/workflows/sonar/eslint.config.js --max-warnings=0');

    core.info('Rodando testes e gerando cobertura');
    await exec('npm run test:coverage');

    if (!fs.existsSync('coverage/lcov.info')) {
      core.setFailed('Arquivo de cobertura não encontrado: coverage/lcov.info');
      return;
    }

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