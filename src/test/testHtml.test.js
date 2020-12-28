
const chai = require('chai');
const jsdom = require('jsdom');
const fs = require('fs');
// fs - file system

// chai assertion library
// mocha test framework
// jsdom --- background DOM 
describe('index.html', () => {
    it('should have h1 that says Hello World!', (done) => {
        const index = fs.readFileSync('./src/test.html', 'utf-8');
        jsdom.env(index, function (err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];

            chai.expect(h1.innerHTML).to.equal("Hello World!");
            done();
            window.close();
        });
    });
});
