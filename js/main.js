const dataCreator = () => {
    const urlData = [
        {
            url: "alim",
            constant: 3,
            parse: [0, 11, 7],
            label: "alim",
            embedCode: `<html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <title>İkinci El Ürünlerde Alıcı Deneyimi</title> <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe { position: absolute; left:0; right:0; bottom:0; top:0; border: 0; } </style> </head> <body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/ukWFLMQU?typeform-medium=embed-snippet"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> </body> </html>`
        },
        {
            url: "satim",
            constant: 3,
            parse: [12, 5, 13],
            label: "satim",
            embedCode: `<html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <title>İkinci El Ürünlerde Satıcı Deneyimi</title> <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe { position: absolute; left:0; right:0; bottom:0; top:0; border: 0; } </style> </head> <body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/dQ1MEDmb?typeform-medium=embed-snippet"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> </body> </html>`
        },
        {
            url: "spot",
            constant: 6,
            parse: [1, 2, 3, 6, 8, 10],
            label: "spot",
            embedCode: `<html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <title>2. El Spot Eşya Anketi</title> <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe { position: absolute; left:0; right:0; bottom:0; top:0; border: 0; } </style> </head> <body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/KSHfkMeC?typeform-medium=embed-snippet"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> </body> </html>`
        },
        {
            url: "ceptelefonu",
            constant: 2,
            parse: [4, 9],
            label: "ceptelefonu",
            embedCode: `<html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <title>2. El Cep Telefonu Alış/Satış Mini Anketi</title> <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe { position: absolute; left:0; right:0; bottom:0; top:0; border: 0; } </style> </head> <body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/s6HSYjkl?typeform-medium=embed-snippet"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> </body> </html>`

        },
    ]

    let sum = 14;

    const random = Math.floor(Math.random() * sum);

    const realized = urlData.filter((data, index) => {
        return data.parse.includes(random);
    })[0];

    return realized;
}

const test = () => {
    const sums = {
        alim: 0,
        satim: 0,
        spot: 0,
        ceptelefonu: 0
    }
    for (var i = 0; i < 1000; i++) {
        const data = dataCreator();
        sums[data.label] += 1;
    }
    document.write(JSON.stringify(sums));
}
//test()

const realizedData = dataCreator();

document.write(realizedData?.embedCode)
//window.location.href = realizedData?.url;
