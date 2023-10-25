const servicesSource = require('./src');


async function  init()
    {
        const services = await servicesSource(); 
        console.log(services);
        await services.copyStaticFolder();
        await services.createIndexPage();
        await services.createBrandPageList();
        await services.createBrandMedalPageList();
        await services.createBrandMedalChainPageList();
        await services.createBrandMedalChainRingPageList();
        await services.createModelPageList();
        await services.createSitemapPageList();
        await services.createManifest();
        
        // await services.createSupportPage();
        // await services.createServiceWorker();

        // services.saveFile(
        //     [],
        //     '<h1>Alive</h1>',
        //     'isAlive.html'
        // )
    }

init();