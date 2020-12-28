const chai = require('chai');
const jsdom = require('jsdom');
const fs = require('fs');

describe('index.html', () => {
  it('should have h1 (Services) that says УСЛУГИ И ЦЕНЫ', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const serviceHeader = window.document.getElementsByTagName('h1')[0];

      chai.expect(serviceHeader.innerHTML).to.equal('УСЛУГИ И ЦЕНЫ');
      done();
      window.close();
    });
  });

  it('should have h1 (Portfolio) that says Делаю красивые и стильные фотографии с любовью', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const portfolioHeader = window.document.getElementsByTagName('h1')[1];

      chai
        .expect(portfolioHeader.innerHTML)
        .to.equal('Делаю красивые и стильные фотографии с любовью');
      done();
      window.close();
    });
  });
  it('should have h1 (About Us) that says ваша красота и уникальность - самое главное!', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const aboutHeader = window.document.getElementsByTagName('h1')[2];

      chai
        .expect(aboutHeader.innerHTML)
        .to.equal('ваша красота и уникальность - самое главное!');
      done();
      window.close();
    });
  });

  it('should have h1 (Contact Us) that says Хороший снимок не даст моменту сбежать.', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const contactHeader = window.document.getElementsByTagName('h1')[3];

      chai
        .expect(contactHeader.innerHTML)
        .to.equal('Хороший снимок не даст моменту сбежать.');
      done();
      window.close();
    });
  });

  it('should have h3 (Client Name) that says Татьяна Платова', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const clientName = window.document.getElementsByClassName('contact-p')[0];

      chai.expect(clientName.innerHTML).to.equal('Татьяна Платова');
      done();
      window.close();
    });
  });

  it('should have h3 (Client Email) that says tanyushaplatova@yandex.ru', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const clientEmail = window.document.getElementsByClassName(
        'contact-p',
      )[1];

      chai
        .expect(clientEmail.innerHTML)
        .to.equal('tanyushaplatova@yandex.ru<br>');
      done();
      window.close();
    });
  });

  it('should have h3 (Client Phone) that says +7 925 263 45 90', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const clientPhone = window.document.getElementsByClassName(
        'contact-p',
      )[2];

      chai.expect(clientPhone.innerHTML).to.equal('+7 925 263 45 90');
      done();
      window.close();
    });
  });
});
