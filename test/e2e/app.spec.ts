const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
     await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  });

  test('navigate from front page to Ivysaur page', async ({ page }) => {
      await page.goto('/');
      await page.click('text=ivysaur');
      await expect(page).toHaveURL(/.*ivysaur/);
      await expect(page.locator('body')).toContainText('chlorophyll');
  })

})
