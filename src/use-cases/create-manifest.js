module.exports = function buildCreateManifest
(
    {
			saveFile
    }
)
    {
		if
		(
			!saveFile
		)
			{
				throw new Error('buildCreateManifest must have saveFile')
			}

		
        return async function createManifest
        ()
            {

                const content = `
                {
                    "name": "لوکس گلد",
                    "short_name": "لوکس گلد",
                    "start_url": "https://lxgold.ir/",
                    "display": "standalone",
                    "background_color": "#fdfdfd",
                    "theme_color": "#ffbe00",
                    "orientation": "portrait-primary",
                    "icons": [
                      {
                        "src": "https://assets.lxgold.ir/images/logo/icon-72x72.png",
                        "type": "image/png", "sizes": "72x72"
                      },
                      {
                        "src": "https://assets.lxgold.ir/images/logo/icon-96x96.png",
                        "type": "image/png", "sizes": "96x96"
                      },
                      {
                        "src": "https://assets.lxgold.ir/images/logo/icon-128x128.png",
                        "type": "image/png","sizes": "128x128"
                      },
                      {
                        "src": "https://assets.lxgold.ir/images/logo/icon-144x144.png",
                        "type": "image/png", "sizes": "144x144"
                      },
                      {
                        "src": "https://assets.lxgold.ir/images/logo/icon-152x152.png",
                        "type": "image/png", "sizes": "152x152"
                      },
                      {
                        "src": "https://assets.lxgold.ir/images/logo/icon-192x192.png",
                        "type": "image/png", "sizes": "192x192"
                      },
                      {
                        "src": "https://assets.lxgold.ir/images/logo/icon-384x384.png",
                        "type": "image/png", "sizes": "384x384"
                      },
                      {
                        "src": "https://assets.lxgold.ir/images/logo/icon-512x512.png",
                        "type": "image/png", "sizes": "512x512"
                      }
                    ]
                  }
                `;


                await saveFile(
                    {
                        directoryList : [],
                        content: content,
                        fileName:'manifest.json'
                    }
                )

            }
    }