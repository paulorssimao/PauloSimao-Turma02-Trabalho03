// src/scenarios/YouTubeSearch.spec.ts
import { test, expect } from '@playwright/test';
import HomePage from '../support/pages/HomePage';

test.describe('YouTube Tests', () => {
  test('Deve buscar por um termo no YouTube', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.search('Playwright tutorial');

    // Verifique se os resultados da busca contêm o termo
    await expect(page).toHaveURL(/results/);
    await expect(page.locator('text=Playwright')).toBeVisible();
  });

  test('Deve navegar para a página "Em alta"', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.goToTrending();

    // Verifique se a URL é a da página "Em alta"
    await expect(page).toHaveURL(/feed\/trending/);
  });

  // Novo teste: Verifica se o logotipo do YouTube está presente na página inicial
  test('Deve verificar se o logotipo do YouTube está presente na página inicial', async ({
    page
  }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    // Verifica se o logotipo está visível
    const logo = page.locator('a#logo');
    await expect(logo).toBeVisible();
  });

  // Novo teste: Verifica se o botão "Inscrever-se" aparece nos resultados de busca
  test('Deve buscar um canal e verificar o botão de "Inscrever-se"', async ({
    page
  }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.search('Canal de Tecnologia');

    // Verifica se o botão "Inscrever-se" aparece no primeiro canal dos resultados
    const subscribeButton = page
      .locator('button:has-text("Inscrever-se")')
      .first();
    await expect(subscribeButton).toBeVisible();
  });
});
