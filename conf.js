exports.config = {

    directConnect : true,
    baseUrl:'https://chercher.tech/protractor/handle-browser-windows-protractor',
    chromeDriver : './Drivers/chromedriver.exe',
    geckoDriver: './Drivers/geckodriver.exe',
    capabilities:{
        browserName :'chrome'
    },
    // multiCapabilities:[
    //     {
    //         browserName : 'chrome'
    //     },
    //     {
    //         browserName : 'firefox'
    //     }
    
    // ],
    specs:['./JSFilesLocation/Specs/WindowsHandling.js',
    './JSFilesLocation/Specs/sample.js'
    ], 
    exclude:['./JSFilesLocation/Specs/sample.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 200000,    
    },
    suites:{
        smoke:'./JSFilesLocation/Specs/WindowsHandling.js',
        full:'./JSFilesLocation/Specs/*.js'
    }, 
    suite: 'smoke',
    params:{
        login:{
            username: '9739644411',
            password: 'loka'
        }
        
    }


}