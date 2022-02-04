//removing all filters
function nofilter() {
    cxt.drawImage(image, 0, 0)
    imgdata = cxt.getImageData(0, 0, image.width, image.height)
    data = imgdata.data;
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i];
        data[i + 1] = data[i + 1];
        data[i + 2] = data[i + 2];
    }
    cxt.putImageData(imgdata, 0, 0)
}

//grayscale 
function grayscale() {
    data = imgdata.data
    for (let i = 0; i < data.length; i += 4) {
        let avg = (data[i] * 1 / 3 + data[i + 1] * 1 / 3 + data[i + 2] * 1 / 3)

        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
    }

    cxt.putImageData(imgdata, 0, 0)
}


//black and white
function blackWhite() {
    data = imgdata.data
    
    for (let i = 0; i < data.length/4; i++){
        let gray = data[i * 4] * 0.3 + data[i * 4 + 1] * 0.59 + data[i * 4 + 2] * 0.11;
        let black = gray > 128 ? 255 : 0;

        data[i * 4] = black
        data[i * 4 + 1] = black
        data[i * 4 + 2] = black
    }

    cxt.putImageData(imgdata, 0, 0)
}

function warm () {
    data = imgdata.data;
    for(let i = 0; i < data.length; i+=4){

    }
    cxt.putImageData(imgData, 0, 0);
}