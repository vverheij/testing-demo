
const lib = require('../lib');

describe('absolute', () => {
    it('should return a pos number if input is pos',() => {
        const result = lib.absolute(1)
        expect(result).toBe(1);
    });


    it('should return a pos number if input is neg',() => {
        const result = lib.absolute(1)
        expect(result).toBe(1);
    });


    it('should return 0 if input is 0',() => {
        const result = lib.absolute(0)
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Mosh');
        expect(result).toMatch(/Mosh/);
    })
});

describe('get currencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();
        expect(result).toContain('USD');
        expect(result).toEqual(expect.arrayContaining(['USD','EUR','AUD']))
    })
});

describe('Get product', () => {
    it('should return product with the given id', () => {
        const result = lib.getProduct(1);
    
    })
});
