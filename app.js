const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
 
(async () => {
    await imagemin(['docs/*.{jpg,jpeg,png}'], 'build/images', {
        use: [
            imageminWebp({quality: 50})
        ]
    });
 
    console.log('Images optimized');
})();