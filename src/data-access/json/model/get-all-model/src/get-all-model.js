module.exports = function buildGetAllModel
()
    {


        const chainList = [
            // {
            //     id:1,
            //     title_fa:'کارب',
            //     title_en:'curb',
            //     thumbnail_file_name:'1_curb.jpg',
            //     weight:10
            // },
            // {
            //     id:2,
            //     title_fa:'مهره ای',
            //     title_en:'bead',
            //     thumbnail_file_name:'2_bead.jpg',
            //     weight:7
            // },
            {
                id:3,
                title_fa:'مربعی',
                title_en:'box',
                thumbnail_file_name:'3_box.jpg',
                weight:8
            },
            // {
            //     id:4,
            //     title_fa:'کابلی',
            //     title_en:'cable',
            //     thumbnail_file_name:'4_cable.jpg',
            //     weight:5
            // },
            // {
            //     id:5,
            //     title_fa:'حلقه ای',
            //     title_en:'ring',
            //     thumbnail_file_name:'5_ring.jpg',
            //     weight:3
            // },
            {
                id:6,
                title_fa:'دریانوردی',
                title_en:'mariner',
                thumbnail_file_name:'6_mariner.jpg',
                weight:9
            }
        ];

        const ringList = 
        [
            // {
            //     id: 1,
            //     title_fa:"طنابی",
            //     title_en:"rope",
            //     thumbnail_file_name:'1_rope.jpg',
            //     weight:3
            // },
            {
                id: 2,
                title_fa:"کلیپس",
                title_en:"clips",
                thumbnail_file_name:'2_clips.jpg',
                weight:8
            },
            {
                id: 3,
                title_fa:"ساده",
                title_en:"simple",
                thumbnail_file_name:'3_simple.jpg',
                weight:9
            }
        ];

        const brandMedalList = [
            {
                id:1,
                brand :
                    {
                        id:1,
                        title_fa:'بنز',
                        title_en:'benze',
                        logo_file_name: 'mercedes-benz-logo.png'
                    },
                medal :
                    {
                        id:1,
                        title_fa:'وان',
                        title_en:'one',
                        thumbnail_file_name:'1_benz_one.JPG',
                        weight:5
                    },
            },
            {
                id:2,
                brand :
                    {
                        id:2,
                        title_fa:'بی ام و',
                        title_en:'BMW',
                        logo_file_name: 'BMW-logo.png'
                    },
                medal :
                    {
                        id:1,
                        title_fa:'فیروزه ای',
                        title_en:'blue',
                        thumbnail_file_name:'2_bmw-colored.JPG',
                        weight:6
                    },
            },
            {
                id:3,
                brand :
                    {
                        id:1,
                        title_fa:'بنز',
                        title_en:'benze',
                        logo_file_name: 'mercedes-benz-logo.png'
                    },
                medal :
                    {
                        id:2,
                        title_fa:'برلیان',
                        title_en:'brelian',
                        thumbnail_file_name:'3.png',
                        weight:5
                    },
            },
            // {
            //     brand :
            //         {
            //             id:2,
            //             title_fa:'بی ام و',
            //             title_en:'BMW',
            //             logo_file_name: 'BMW-logo.png'
            //         },
            //     medal :
            //         {
            //             id:2,
            //             title_fa:'ساده',
            //             title_en:'simple',
            //             thumbnail_file_name:'3_bmw-simple.JPG',
            //             weight:5
            //         },
            // }

        ];

        let index = 1;

        var modelList2 = [];

        brandMedalList.forEach(
            async (
                currentBrandMedal
            )=>
                {
                    
                    chainList.forEach(
                       async (
                            currentChain
                        )=>
                            {
                                
                                ringList.forEach(
                                    async (
                                        currentRing,
                                    )=>
                                        {
                                            
                                            const newModelWeight = currentRing.weight + currentChain.weight + currentBrandMedal.medal.weight;

                                            let newModel = {
                                                brand: currentBrandMedal.brand,
                                                medal: currentBrandMedal.medal,
                                                chain:currentChain,
                                                ring: currentRing,
                                                id: index,
                                                weight: newModelWeight,
                                                title : `جاسوئیچی طلا ${currentBrandMedal.brand.title_fa} با مدال ${currentBrandMedal.medal.title_fa} و زنجیر ${currentChain.title_fa} و حلقه ی ${currentRing.title_fa}`,
                                                price : parseInt(newModelWeight) * 27097000
                                            };

                                            console.log(newModel);

                                            // currentBrandMedal.chain = currentChain;
                                            // currentBrandMedal.ring = currentRing;
                                            // currentBrandMedal.id = index;
                                            // currentBrandMedal.weight = currentBrandMedal.ring.weight + currentBrandMedal.chain.weight + currentBrandMedal.medal.weight;
                                            // currentBrandMedal.title = `جاسوئیچی طلا ${currentBrandMedal.brand.title_fa} با مدال ${currentBrandMedal.medal.title_fa} و زنجیر ${currentBrandMedal.chain.title_fa} و حلقه ی ${currentBrandMedal.ring.title_fa}`;
                                            // currentBrandMedal.price = parseInt(currentBrandMedal.weight) * 117540000;
                                            index++;
                                            modelList2.push(newModel);
                                            //return currentBrandMedal
                                        }
                                )
                            }
                    )
                    
                }
        );

        console.log(`modelList length : ${modelList2.length}`)

        return function getAllModel
        ()
            {
                const modelList = [
                    {
                        id:1,
                        title:'جاسوئیچی طلا بنز با مدال وان و زنجیر کارب و حلقه ی طنابی',
                        price: 150000000,
                        weight:15,
                        brand :
                            {
                                id:1,
                                title_fa:'بنز',
                                title_en:'benze',
                                logo_file_name: 'mercedes-benz-logo.png'
                            },
                        medal :
                            {
                                id:1,
                                title_fa:'وان',
                                title_en:'one',
                                thumbnail_file_name:'1_benz_one.pjg',
                                weight:5
                            },
                        chain:
                            {
                                id:1,
                                title_fa:'کارب',
                                title_en:'curb',
                                thumbnail_file_name:'1_curb.jpg',
                                weight:5
                            },
                        ring:
                            {
                                id: 1,
                                title_fa:"طنابی",
                                title_en:"rope",
                                thumbnail_file_name:'1_rope.jpg',
                                weight:5
                            }
                    },
                    {
                        id:2,
                        title:'جاسوئیچی طلا ماشین بنز با زنجیر ساده و حلقه ی ساده',
                        price: 150000000,
                        weight:15,
                        brand :
                            {
                                id:1,
                                title_fa:'بنز',
                                title_en:'benze',
                                logo_file_name: 'mercedes-benz-logo.png'
                            },
                        medal :
                            {
                                id:1,
                                title_fa:'وان',
                                title_en:'one',
                                thumbnail_file_name:'benz_one.pjg',
                                weight:5
                            },
                        chain:
                            {
                                id:2,
                                title_fa:'طنابی',
                                title_en:'cable',
                                thumbnail_file_name:'cable.jpg',
                                weight:5
                            },
                        ring:
                            {
                                id: 1,
                                title_fa:"کلیپس",
                                title_en:"clips",
                                thumbnail_file_name:'clips.jpg',
                                weight:5
                            }
                    },
                    {
                        id:3,
                        title:'جاسوئیچی طلا ماشین بی ام و با زنجیر ورساچه و حلقه ی ساده',
                        price: 150000000,
                        weight:15,
                        brand :
                            {
                                id:2,
                                title_fa:'بی ام و',
                                title_en:'BMW',
                                logo_file_name: 'BMW-logo.png'
                            },
                        medal :
                            {
                                id:3,
                                title_fa:'e',
                                title_en:'e',
                                weight:5
                            },
                        chain:
                            {
                                id:1,
                                title_fa:'مارینیر',
                                title_en:'mariner',
                                thumbnail_file_name:'mariner.jpg',
                                weight:5
                            },
                        ring:
                            {
                                id: 1,
                                title_fa:"طنابی",
                                title_en:"rope",
                                thumbnail_file_name:'rope.jpg',
                                weight:5
                            }
                    },
                    {
                        id:4,
                        title:'جاسوئیچی طلا ماشین بی ام و با زنجیر ساده و حلقه ی ساده',
                        price: 150000000,
                        weight:15,
                        brand :
                            {
                                id:2,
                                title_fa:'بی ام و',
                                title_en:'BMW',
                                logo_file_name: 'BMW-logo.png'
                            },
                        medal :
                            {
                                id:4,
                                title_fa:'l',
                                title_en:'l',
                                weight:5
                            },
                        chain:
                            {
                                id:2,
                                title_fa:'بید',
                                title_en:'bead',
                                thumbnail_file_name:'bead.jpg',
                                weight:5
                            },
                        ring:
                            {
                                id: 1,
                                title_fa:"طنابی",
                                title_en:"rope",
                                thumbnail_file_name:'rope.jpg',
                                weight:5
                            }
                    },
                    {
                        id:5,
                        title:'جاسوئیچی طلا ماشین بی ام و با زنجیر ساده و حلقه ی ساده',
                        price: 150000000,
                        weight:15,
                        brand :
                            {
                                id:3,
                                title_fa:'لکسوز',
                                title_en:'Lexus',
                                logo_file_name: 'lexus-logo.png'
                            },
                        medal :
                            {
                                id:5,
                                title_fa:'x1',
                                title_en:'x1',
                                weight:5
                            },
                        chain:
                            {
                                id:2,
                                title_fa:'باکس',
                                title_en:'box',
                                thumbnail_file_name:'box.jpg',
                                weight:5
                            },
                        ring:
                            {
                                id: 1,
                                title_fa:"کلیپس",
                                title_en:"clips",
                                thumbnail_file_name:'clips.jpg',
                                weight:5
                            }
                    }
                ];

                
                //return modelList;

                
                console.log('getAllModel');
                return modelList2;
            }
    }