import { expect, test } from '@playwright/test'

test('core experience and briefing interaction work', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Northstar Governance/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Build AI')
  await page.getByRole('button', { name: 'Request a briefing' }).first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.getByRole('button', { name: 'Close dialog' }).click()
  await expect(page.getByRole('dialog')).toBeHidden()
})

test('platform section is reachable', async ({ page }) => {
  await page.goto('/#platform')
  await expect(page.getByRole('heading', { name: /One system/ })).toBeVisible()
  await expect(page.getByText('System inventory')).toBeVisible()
})
