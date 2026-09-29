import { test, expect } from '../../../framework/fixtures';
import { takeScreenshot } from '../../../framework/utils/screenshot';
import { waitForDomReady } from '../../../framework/utils/waits';

test('test', async ({ page, testData }, testInfo) => {
  test.setTimeout(900000); // full 10-phase policy lifecycle, including ~4.3min of built-in hardcoded waits
  const clientName = testData.clientProfile().clientName;
  let screenshotNumber = 0;
  const capture = async (name: string) => {
    screenshotNumber += 1;
    await takeScreenshot(page, testInfo, `${String(screenshotNumber).padStart(2, '0')}-${name}`);
  };
  const waitAfterAction = async () => {
    await waitForDomReady(page);
    await page.waitForTimeout(1000);
  };
  const formatDate = (d: Date) =>
    `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = formatDate(tomorrow);

  await page.goto('https://jmiqaweb01.nexsure.com/nexui/#/');
  await waitAfterAction();
  await page.locator('input[type="text"]').click();
  await waitAfterAction();
  await page.locator('input[type="text"]').fill('dyad.automation.7772&0724');
  await waitAfterAction();
  await page.locator('input[type="password"]').click();
  await waitAfterAction();
  await page.locator('input[type="password"]').click();
  await waitAfterAction();
  await page.locator('input[type="password"]').fill('!Dyad0001');
  await waitAfterAction();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await waitAfterAction();
  await expect(page).toHaveURL(/#\//, { timeout: 30000 });
  await capture('logged-in');

  // enterSearchKeywordsInput  [TextInput]
  const enterSearchKeywordsInput = page.locator(`xpath=//input[@placeholder="Enter search keywords"]`);
  await expect(enterSearchKeywordsInput).toBeVisible();
  await enterSearchKeywordsInput.fill(`Automation Client 48fd405b`);
  
  // searchButton  [Button]
  const searchButton = page.locator(`xpath=//*[@id="PendoSearchGuide"]`);
  await expect(searchButton).toBeVisible();
  await expect(searchButton).toHaveText(`Search`);
  await searchButton.click();
  
  // ────────────────────────────────────────────────────────────────────────────────────
  
  // automationClient48fd405b  [Clickable]
  const automationClient48fd405b = page.locator(`xpath=//span[contains(@class,'highlighted')]`);
  await expect(automationClient48fd405b).toBeVisible();
  
  // automationClient48fd405bpersonal  [Clickable]
  const automationClient = page.locator(`xpath=//div[contains(@class,'grid_row')]/div[1]`);
  await expect(automationClient).toBeVisible();
  await automationClient.click();




  });