'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');
const schedule = require('node-schedule');
const Iconv = require('iconv').Iconv;
const euckr2Utf8 = new Iconv('EUC-KR', 'UTF-8');

const LOTTO_URL = 'http://www.nlotto.co.kr/gameResult.do?method=allWin';
const cronStyle = '00 00 05 * * 0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
    encoding: 'binary', 
    method: 'GET', 
    uri: LOTTO_URL
};

request(options, (err, res, html) => {
    const _html = new Buffer(html, 'binary');
    const _result = euckr2Utf8.convert(_html).toString('UTF-8');
    const $ = cheerio.load(_result);

    let winnigIndex, winnigNumber, winnigAmount;
    $('table > tbody > tr').eq(1).find('td').each((index, elem) => {
        if (index === 0) {
            winnigIndex = $(elem).text();
        }

        if (index === 1) {
            winnigNumber = $(elem).text();
        }

        if (index === 3) {
            winnigAmount = $(elem).text();
        } 
    });
    console.log(`당첨 순차:${winnigIndex} 번호:${winnigNumber} 금액:${winnigAmount}`);
});

schedule.scheduleJob(cronStyle, () => {

});;

app.listen(3000, () => {
    console.log('Listening to 3000 port');
});
