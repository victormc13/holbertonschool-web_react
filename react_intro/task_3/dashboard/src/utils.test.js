import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('getFullYear returns the current year', () => {
  const expectedYear = new Date().getFullYear();
  const actualYear = getFullYear();

  expect(actualYear).toBe(expectedYear);
})