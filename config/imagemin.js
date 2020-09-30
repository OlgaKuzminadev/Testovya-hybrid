const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const filesPNG = await imagemin(['src/img/**/*.png'], {
        destination: 'dist/img/',
        plugins: [
            imageminPngquant({
                quality: [0, 1]
            })
        ]
    });
    console.log(filesPNG.length + ' png image minified')
    console.log(filesPNG.map((el)=> el.destinationPath ));
    const filesJPG = await imagemin(['src/img/**/*.{jpg,jpeg}'], {
        destination: 'dist/img/',
        plugins: [
            imageminMozjpeg()
        ]
    });
    console.log(filesJPG.length + ' jpg image minified')
    console.log(filesJPG.map((el)=> el.destinationPath ));
})();