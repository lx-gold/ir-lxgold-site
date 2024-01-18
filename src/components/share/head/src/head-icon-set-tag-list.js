module.exports = function buildHeadIconSetTagList
()
    {
        return async function headIconSetTagList
        ()
            {
                const result = `
                    <link rel="icon" href="https://assets.lxgold.ir/images/logo/favicon.ico"">
                    <meta name="msapplication-TileImage" content="https://assets.lxgold.ir/images/logo/logo.png">
                    <link rel="shortcut icon" sizes="192x192" href="https://assets.lxgold.ir/images/logo/icons/icon-192x192.png">
                    <link rel="apple-touch-icon" href="https://assets.lxgold.ir/images/logo/icon-72x72.png" />
                    <link rel="apple-touch-icon" href="https://assets.lxgold.ir/images/logo/icons/icon-96x96.png" />
                    <link rel="apple-touch-icon" href="https://assets.lxgold.ir/images/logo/icons/icon-128x128.png" />
                    <link rel="apple-touch-icon" href="https://assets.lxgold.ir/images/logo/icons/icon-144x144.png" />
                    <link rel="apple-touch-icon" href="https://assets.lxgold.ir/images/logo/icons/icon-152x152.png" />
                    <link rel="apple-touch-icon" href="https://assets.lxgold.ir/images/logo/icons/icon-192x192.png" />
                    <link rel="apple-touch-icon" href="https://assets.lxgold.ir/images/logo/icons/icon-384x384.png" />
                    <link rel="apple-touch-icon" href="https://assets.lxgold.ir/images/logo/icons/icon-512x512.png" />
                    <meta name="apple-mobile-web-app-status-bar" content="#db4938" />
                    <meta name="theme-color" content="#db4938" />
                `;
                return result;
            }
    }