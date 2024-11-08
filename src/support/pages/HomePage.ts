// src/support/pages/HomePage.ts
import { Page } from '@playwright/test';
import HomeElements from '../elements/HomeElements';

export default class HomePage {
  private page: Page;

  private elements: HomeElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new HomeElements();
  }

  async navigate() {
    await this.page.goto('https://www.youtube.com');
  }

  async search(term: string) {
    await this.page.fill(this.elements.searchInput, term);
    await this.page.click(this.elements.searchInput);
    await this.page.locator('input#search').press('Enter');
  }

  async goToTrending() {
    await this.page.click(this.elements.trendingLink);
  }
}
