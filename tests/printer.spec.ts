import { printMe } from '../src/printer';

describe('printer', () => {
    it('should print input', () => {
        spyOn(window.console, 'log');

        printMe('test');

        expect(console.log).toHaveBeenCalledWith('test');
    });        
});