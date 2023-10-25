module.exports = function buildCopyStaticFolder
(
    {
        fs
    }

)
    {
        return async function copyStaticFolder
        ()
            {
                fs.cpSync(
                    `./statics`,
                    `./www/statics/`,
                    {recursive :true}
                )

                fs.copyFile(
                    `./statics/images/logo/favicon.ico`,
                    `./www/favicon.ico`,()=>{}
                )
            }
    }