const assert = require('assert');
const chai = require('chai');
const jsdom = require('jsdom');
const fs = require('fs');
// fs - file system

// chai assertion library
// mocha test framework
// jsdom --- background DOM 
describe('test.html', () => {  
    //test
    it('should have h1 that says Hello World!', (done) => {  
        //Arrange - выставление  начальных условий
        const index = fs.readFileSync('./src/test.html', 'utf-8');

        jsdom.env(index, function (err, window) {
            //Act - отработка тестируемого функционала.
            const h1 = window.document.getElementsByTagName('h1')[0];

            //Assert - сверка ожидаемых значений с полученными.
            assert.strictEqual(h1.innerHTML, "Hello World!" );
            //chai.expect(h1.innerHTML).to.equal("Hello World!");

            done();
            window.close();
        });
    });
});
