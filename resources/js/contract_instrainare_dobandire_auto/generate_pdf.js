const { PDFDocument } = PDFLib

const baseFontSize = 9;
var ubuntuFont;

async function generatePdf() {

    const fontUrl = '/static/fonts/Ubuntu-R.ttf';
    const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer());

    const url = '/static/pdfs/contract_instrainare_dobandire_auto.pdf';
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    pdfDoc.registerFontkit(fontkit)
    ubuntuFont = await pdfDoc.embedFont(fontBytes)

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    writeToPdf(firstPage, 343, height - 167, 92, "#seller-individual-name");
    writeToPdf(firstPage, 186, height - 178, 23, "#seller-individual-country");
    writeToPdf(firstPage, 279, height - 178, 92, "#seller-individual-county");
    writeToPdf(firstPage, 414, height - 178, 92, "#seller-individual-postal-code");
    writeToPdf(firstPage, 44,  height - 189, 92, "#seller-individual-city");
    writeToPdf(firstPage, 222, height - 189, 92, "#seller-individual-sub-city");
    writeToPdf(firstPage, 331, height - 189, 92, "#seller-individual-street");
    writeToPdf(firstPage, 556, height - 189, 92, "#seller-individual-street-nr");
    writeToPdf(firstPage, 66,  height - 200, 92, "#seller-individual-building-nr");
    writeToPdf(firstPage, 119, height - 200, 92, "#seller-individual-entrance");
    writeToPdf(firstPage, 173, height - 200, 92, "#seller-individual-floor");
    writeToPdf(firstPage, 225, height - 200, 92, "#seller-individual-apt-nr");
    writeToPdf(firstPage, 479, height - 200, 92, "#seller-individual-id-series");
    writeToPdf(firstPage, 530, height - 200, 92, "#seller-individual-id-nr");
    writeToPdf(firstPage, 101, height - 213, 92, "#seller-individual-cnp");
    writeToPdf(firstPage, 267, height - 213, 92, "#seller-individual-phone");
    writeToPdf(firstPage, 382, height - 213, 92, "#seller-individual-email");
                                             92, 
    writeToPdf(firstPage, 185, height - 224, 92, "#seller-fiscal-address-country");
    writeToPdf(firstPage, 308, height - 224, 92, "#seller-fiscal-address-county");
    writeToPdf(firstPage, 518, height - 224, 92, "#seller-fiscal-address-postal-code");
    writeToPdf(firstPage, 152, height - 235, 92, "#seller-fiscal-address-city");
    writeToPdf(firstPage, 350, height - 235, 92, "#seller-fiscal-address-sub-city");
    writeToPdf(firstPage, 493, height - 235, 92, "#seller-fiscal-address-street");
    writeToPdf(firstPage, 142, height - 247, 92, "#seller-fiscal-address-street-nr");
    writeToPdf(firstPage, 180, height - 247, 92, "#seller-fiscal-address-building-nr");
    writeToPdf(firstPage, 223, height - 247, 92, "#seller-fiscal-address-entrance");
    writeToPdf(firstPage, 261, height - 247, 92, "#seller-fiscal-address-floor");
    writeToPdf(firstPage, 295, height - 247, 92, "#seller-fiscal-address-apt-nr");

    const pdfBytes = await pdfDoc.save();

    download(pdfBytes, "contract_dobandire_instrainare_auto.pdf", "application/pdf");
}

const fieldSizesByFontSize = {
    9: 1,
    8: 0.83,
    7: 0.717,
    6: 0.6,
    5: 0.575,
    4: 0.475,
    3: 0.371
};

function getFontSize(fieldSize, value) {
    fontSize = baseFontSize;
    valueWitdh = getWidth(value);

    while (true) {
        valueSize = valueWitdh * fieldSizesByFontSize[fontSize];
        //console.log("Value size: " + valueSize + " while field size: " + fieldSize + ", font size: " + fontSize);
        if (valueSize <= fieldSize)
            return fontSize;

        if(!fieldSizesByFontSize[--fontSize]) {
            throw "Value too big for field";
        }
    }
}

function writeToPdf(page, x, y, fieldSize, fieldIdentifier) {
    value = $(fieldIdentifier).val();
    fontSize = baseFontSize;

    try {
        fontSize = getFontSize(fieldSize, value);
    } catch (err) {
        $(fieldIdentifier).css('color', 'red');
        throw err;
    }

    //console.log("Drawing text to PDF with size " + fontSize);
    page.drawText(value, { x: x, y: y, size: fontSize, font: ubuntuFont });
}

function getWidth(value) {
    totalWidth = 0;
    for (let i = 0; i < value.length; i++) {
        charWidth = charsWidth[value[i]];
        if (!charWidth)
            charWidth = 2;
        
        totalWidth += charWidth;
    }

    //console.log("Total width: " + totalWidth);
    return totalWidth;
}


const charsWidth = {
    ' ': 1,
    '!': 1,
    '"': 2,
    '#': 3,
    '$': 2,
    '%': 3,
    '&': 3,
    '\'': 1,
    '(': 1,
    ')': 1,
    '*': 2,
    '+': 2.5,
    ',': 1,
    '-': 2,
    '.': 1,
    '/': 2,
    '0': 2,
    '1': 2,
    '2': 2,
    '3': 2,
    '4': 2,
    '5': 2,
    '6': 2,
    '7': 2,
    '8': 2,
    '9': 2,
    ':': 1,
    ';': 1,
    '<': 2,
    '=': 2,
    '>': 2,
    '?': 1.5,
    '@': 3,
    'A': 3,
    'B': 2.5,
    'C': 3,
    'D': 3,
    'E': 2.5,
    'F': 2.5,
    'G': 3,
    'H': 3,
    'I': 1,
    'J': 2.5,
    'K': 3,
    'L': 2.5,
    'M': 3.5,
    'N': 3,
    'O': 3,
    'P': 2.5,
    'Q': 3,
    'R': 2.75,
    'S': 2.5,
    'T': 3,
    'U': 3,
    'V': 2.75,
    'W': 3.5,
    'X': 3,
    'Y': 3,
    'Z': 2.75,
    '[': 1.5,
    '\\': 2.15,
    ']': 1.5,
    '^': 2,
    '_': 2.5,
    '`': 1,
    'a': 2,
    'b': 2.35,
    'c': 2,
    'd': 2.35,
    'e': 2,
    'f': 1.75,
    'g': 2,
    'h': 2,
    'i': 1,
    'j': 1,
    'k': 2,
    'l': 1,
    'm': 3.25,
    'n': 2,
    'o': 2,
    'p': 2,
    'q': 2,
    'r': 1.75,
    's': 2,
    't': 2,
    'u': 2,
    'v': 2,
    'w': 3.25,
    'x': 2.75,
    'y': 2.75,
    'z': 2.5,
    '{': 1.75,
    '|': 1,
    '}': 1.75,
    '~': 2.5
}