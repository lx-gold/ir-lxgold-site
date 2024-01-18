module.exports = function buildGetAllBrand
()
    {
        
        return function getAllBrand
        ()
            {

                const uniquebrandList = [
                    {
                        id:1,
                        title_fa:'بنز',
                        title_en:'benze',
                        logo_file_name: 'mercedes-benz-logo.png'
                    },
                    {
                        id:2,
                        title_fa:'بی ام و',
                        title_en:'BMW',
                        logo_file_name: 'BMW-logo.png'
                    },
                    // {
                    //     id:3,
                    //     title_fa:'لکسوز',
                    //     title_en:'Lexus',
                    //     logo_file_name: 'lexus-logo.png'
                    // },
                ]
               
                return uniquebrandList;
            }
    }