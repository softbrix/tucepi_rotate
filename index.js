const Jimp = require('jimp')

exports.default = function (buffer, orientation, mime) {
    if (buffer === undefined || buffer.length === 0 || orientation === 1) {
        return Promise.resolve(buffer)
    }
    mime = mime || Jimp.AUTO;

    let horz = vert = rotate = false;
    switch (orientation) {
        // case 1: // No action
        case 8: rotate = -90; break;
        case 3: horz = vert = true; break;
        case 6: rotate = 90; break;

        case 2: horz = true; break;
        case 7: horz = true; rotate = -90; break;
        case 4: vert = true; break;
        case 5: horz = true; rotate = 90; break;
    }

    return Jimp.read(buffer)
        .then(image => {
            if (horz | vert === true) {
                image = image.flip(horz, vert);
            }
            if (rotate) {
                image = image.rotate(rotate);
            }
            return image.getBufferAsync(mime);
        });
}
module.exports = exports.default