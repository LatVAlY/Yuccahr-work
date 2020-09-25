var fingerprint = document.querySelector('.fingerprint');

if(fingerprint) {
     for(var path of fingerprint.children) {
         path.style.strokeDasharray =  path.getTotalLength() + 'px';
         path.style.strokeDashoffset = path.getTotalLength() + 'px';
         path.style.strokeWidth = '0px';
    }
}



function createNumberMatrix(element, replacespeed) {
    var glyphheight = 28;
    var fontsize = 18;
    var letterspacing = 4;

    var fontsize_factor = 0.6;
    var glyphwidth = fontsize * fontsize_factor + letterspacing;
    var glyphcount = Math.floor((element.offsetHeight / glyphwidth + 1) * (element.offsetWidth / glyphheight + 1));

    element.textContent = generateString(glyphcount);

    setInterval(function() {

        element.textContent = generateString(element.textContent, 0.25);

    }, replacespeed);
}

function replaceAt(string, position, newChar) {
    return string.substr(0,position) + newChar + string.substr(position + newChar.length);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function generateString(lengthOrSource, percentToRewrite = 1) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;

    if(typeof lengthOrSource === 'string') {

        for ( var i = 0; i < lengthOrSource.length * percentToRewrite; i++ ) {

            lengthOrSource = replaceAt(
                lengthOrSource,
                getRandomArbitrary(0, lengthOrSource.length),
                characters.charAt(Math.floor(Math.random() * charactersLength)));
        }

        result = lengthOrSource;

    } else if(typeof lengthOrSource === 'number') {
        for ( var i = 0; i < lengthOrSource; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    return result;
}



var viewport = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add('is-visible');

            if(entry.target.classList.contains('matrix-visual')){

                for(let child of entry.target.children){
                    if(child.classList.contains('number-matrix')) {
                        createNumberMatrix(child, 100);
                    }
                }
            }

            var isFingerPrint = false;
            for(var child of entry.target.children) {
                if(child == fingerprint) isFingerPrint = true;
            }

            if(isFingerPrint) {
                for(var path of fingerprint.children) {
                    path.style.strokeDashoffset = '0px';
                    path.style.removeProperty('stroke-width');
                }
            }
        }
    });
}, {
    root: null,
    rootMargin: '-10% 0px',
})

document.querySelectorAll('[data-fadein]').forEach(function(element){
    viewport.observe(element);
});

