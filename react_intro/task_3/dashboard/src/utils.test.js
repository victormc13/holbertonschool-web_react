import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('getFullYear returns the current year', () => {
  const expectedYear = new Date().getFullYear();
  const actualYear = getFullYear();

  expect(actualYear).toBe(expectedYear);
})

test('getFooterCopy returns the correct string based on isIndex', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
})

test('getLatestNotification returns the expected string', () => {
  const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(expectedString);
})