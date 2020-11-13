import { getDateString } from './date';

describe('utils', () => {
    describe('date utils', () => {
        it('should format valid date', () => {
            expect(getDateString('2020-10-25')).toBe('Oct 25, 2020');
        });
        
        it('should return empty string for invalid date', () => {
            expect(getDateString('2020-20-45')).toBe('');
        });
        
        it('should return empty string when no date passed', () => {
            expect(getDateString()).toBe('');
        });
    });
});
