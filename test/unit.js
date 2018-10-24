const assert = require('assert');
const fs = require('fs');
const mediaRotate = require('../index.js');

describe('Vega Media Info', function () {
  var jpgFile = './test/img1.jpg';

  xit('should rotate according to exif with output', function () {
    let buffer = fs.readFileSync(jpgFile);
    let t = [];
    for (let i = 1; i <= 8; ++i) {
        let j = i;
        t.push(mediaRotate(buffer, i).then((buff) => {
            fs.writeFileSync('./test/rot' + j + '.jpg', buff)
        }));
    }
    return Promise.all(t);
  })

  it('should rotate according to exif 1', function () {
    let buffer = fs.readFileSync(jpgFile);
    return mediaRotate(buffer, 1).then((buff) => {
        assert.equal(buffer, buff)
    })
  })

  it('should rotate according to exif 2', function () {
    let buffer = fs.readFileSync(jpgFile);
    return mediaRotate(buffer, 2).then((buff) => {
        assert.equal(117523, buff.length)
        assert.equal(buff.toString('base64').substr(-20, 20), '/X+ld2J6/wBfygf/2Q==')
    })
  })

  it('should rotate according to exif 3', function () {
    let buffer = fs.readFileSync(jpgFile);
    return mediaRotate(buffer, 3).then((buff) => {
        assert.equal(191424, buff.length)
        assert.equal(buff.toString('base64').substr(-20, 20), '5SlJ3cpSbbbbbbd3qf/Z')
    })
  })

  it('should rotate according to exif 4', function () {
    let buffer = fs.readFileSync(jpgFile);
    return mediaRotate(buffer, 4).then((buff) => {
        assert.equal(117569, buff.length)
        assert.equal(buff.toString('base64').substr(-20, 20), 'MQ2kr376LXV/3dLH/9k=')
    })
  })

  it('should rotate according to exif 5', function () {
    let buffer = fs.readFileSync(jpgFile);
    return mediaRotate(buffer, 5).then((buff) => {
        assert.equal(156621, buff.length)
        assert.equal(buff.toString('base64').substr(-20, 20), 'zz/ml/4E/wDM8ZrYk//Z')
    })
  })

  it('should rotate according to exif 6', function () {
    let buffer = fs.readFileSync(jpgFile);
    return mediaRotate(buffer, 6).then((buff) => {
        assert.equal(156724, buff.length)
        assert.equal(buff.toString('base64').substr(-20, 20), '8J6X/wAgeQV2HUf/2Q==')
    })
  })

  it('should rotate according to exif 7', function () {
    let buffer = fs.readFileSync(jpgFile);
    return mediaRotate(buffer, 7).then((buff) => {
        assert.equal(155653, buff.length)
        assert.equal(buff.toString('base64').substr(-20, 20), 'FABQAUAFABQAUAf/2Q==')
    })
  })

  it('should rotate according to exif 8', function () {
    let buffer = fs.readFileSync(jpgFile);
    return mediaRotate(buffer, 8).then((buff) => {
        assert.equal(155581, buff.length)
        assert.equal(buff.toString('base64').substr(-20, 20), 'CgAoAKACgAoA/wD/2Q==')
    })
  })
});