module.exports = function buildGetAllBrand
(
    {
        getAllModel
    }
)
    {
        if
        (
            !getAllModel
        )
            {
                throw new Error('buildGetAllBrand must have getAllModel');
            }

        return async function getAllBrand
        ()
            {
                // const modelList = await getAllModel();

                // let brandList = modelList.map(
                //     (
                //         currentModel
                //     )=>
                //         {
                //             return currentModel.brand
                //         }
                // )

                

                // const uniquebrandList = [...new Set(brandList)];

                // console.log(uniquebrandList);

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
                    {
                        id:3,
                        title_fa:'لکسوز',
                        title_en:'Lexus',
                        logo_file_name: 'lexus-logo.png'
                    },
                ]
               
                return uniquebrandList;
            }
    }