function makeImageHolder(width, height){
    var  doc = document;

    var svgns = "http://www.w3.org/2000/svg";
    var svg = doc.createElementNS(svgns, "svg");
    var g1 = doc.createElementNS(svgns, "g");
    var rect = doc.createElementNS(svgns, "rect");
    rect.setAttributeNS(null, "width", width);
    rect.setAttributeNS(null, "height", height);
    rect.setAttributeNS(null, "fill", "#25885c");
    g1.appendChild(rect);
    var g2 = doc.createElementNS(svgns, "g");
    g1.appendChild(g2);
    var txt = doc.createElementNS(svgns, "text");
    txt.textContent = width + "x" + height;
    txt.setAttributeNS(null,"style", "text-anchor: middle;");
    txt.setAttributeNS(null,"transform", "translate(0, 9)");
    txt.setAttributeNS(null,"x", "50%");
    txt.setAttributeNS(null,"y", "50%");
    g2.appendChild(txt);
    svg.appendChild(g1);
    return svg.outerHTML;
}

function imgOnError(event){
    var img = event.target;
    img.src = "data:images/svg+xml;charset=UTF-8," + encodeURIComponent(makeImageHolder(img.width, img.height));

}

/*
 *  cloned from ajaxblender
 */
function gray(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');

    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;

    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);

    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg;
            imgPixels.data[i + 1] = avg;
            imgPixels.data[i + 2] = avg;
        }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}

var c = window.location;

function getLocale() {
    var startInd = c.pathname.indexOf('/');
    return c.pathname.substring(startInd + 1, c.pathname.indexOf('/', startInd + 1));
}

function getLocalizedPage(unlocal, locale) {
    return c.origin + '/' + ((locale !== undefined) ? locale : getLocale()) + unlocal;
}

function onmenuLinkClick(a) {
    a.setAttribute("href", getLocalizedPage(a.getAttribute("href")));
    return true;
}

function onLocaleChange(sel) {
    var page = c.pathname.substring(c.pathname.indexOf('/', 2));
    window.location = getLocalizedPage(page, sel.value);
}

var imgs = $("img.card-img-top");
imgs.addClass("img-fluid");
imgs.attr("height", "100%");
imgs.on("error", imgOnError);

$("div.disabled").children("img").each(function(){
    $(this).src = gray($(this));
});