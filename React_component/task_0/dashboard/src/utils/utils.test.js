import { getFullYear, getFooterCopy, getLatestNotification } from './utils'


describe('Test the functions from utils.js file', () => {
  it('getFullYear returns the current year', () => {
    const expectedYear = new Date().getFullYear();
    const actualYear = getFullYear();
  
    expect(actualYear).toBe(expectedYear);
  })
  
  it('getFooterCopy returns the correct string based on isIndex being "true"', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  })

  it('getFooterCopy returns the correct string based on isIndex being "false"', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  })
  
  it('getLatestNotification returns the expected string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  })
  
})