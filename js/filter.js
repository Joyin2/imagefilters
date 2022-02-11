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

//filterfunctions
function flterColors(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

let filters = new Array();
filters.push(new flterColors(0xFF, 0xFF, 0xFF));
filters.push(new flterColors(0xEB, 0xB1, 0x13));
filters.push(new flterColors(0x00, 0xB5, 0xFF));

//grayscale 
function grayscale() {
    let data = imgdata.data;
    for(let i = 0; i < data.length; i += 4){
        
        let luma = 0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2];
        
        let rIntensity = (filters[0].r * 50 + 255 * (100 - 50)) / 25500;
        let gIntensity = (filters[0].g * 50 + 255 * (100 - 50)) / 25500;
        let bIntensity = (filters[0].b * 50 + 255 * (100 - 50)) / 25500;

        data[i] = Math.round(rIntensity * luma);
        data[i+1] = Math.round(gIntensity * luma);
        data[i+2] = Math.round(bIntensity * luma);
    }
    cxt.putImageData(imgdata, 0, 0);
}

function warm() {
    let data = imgdata.data;
    for(let i = 0; i < data.length; i += 4){
        
        let luma = 0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2];
        
        let rIntensity = (filters[1].r * 50 + 255 * (100 - 50)) / 25500;
        let gIntensity = (filters[1].g * 50 + 255 * (100 - 50)) / 25500;
        let bIntensity = (filters[1].b * 50 + 255 * (100 - 50)) / 25500;

        data[i] = Math.round(rIntensity * luma);
        data[i+1] = Math.round(gIntensity * luma);
        data[i+2] = Math.round(bIntensity * luma);
    }
    
    cxt.putImageData(imgdata, 0, 0);
}

function cool(){
    let data = imgdata.data;
    for(let i = 0; i < data.length; i += 4){
        
        let luma = 0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2];
        
        let rIntensity = (filters[2].r * 50 + 255 * (100 - 50)) / 25500;
        let gIntensity = (filters[2].g * 50 + 255 * (100 - 50)) / 25500;
        let bIntensity = (filters[2].b * 50 + 255 * (100 - 50)) / 25500;

        data[i] = Math.round(rIntensity * luma);
        data[i+1] = Math.round(gIntensity * luma);
        data[i+2] = Math.round(bIntensity * luma);
    }
    
    cxt.putImageData(imgdata, 0, 0);
}