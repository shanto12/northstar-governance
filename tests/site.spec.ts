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

test('page is accessible at a baseline and logs no errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()))
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
  await expect(page.locator('main')).toHaveAttribute('id', 'main')
  expect(errors).toEqual([])
})

test('unknown paths return the branded 404', async ({ page }) => {
  const response = await page.goto('/not-a-real-page')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: /drifted off course/i })).toBeVisible()
})
