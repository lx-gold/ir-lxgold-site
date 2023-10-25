module.exports = function buildGetAllModel
()
    {

        return async function getAllModel
        ()
            {
                const modelList = [
                    {
                        id:1,
                        title:'جاسوئیچی طلا ماشین بنز با زنجیر ورساچه و حلقه ی ساده',
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
                                title_fa:'s',
                                title_en:'s',
                                weight:5
                            },
                        chain:
                            {
                                id:1,
                                title_fa:'کارب',
                                title_en:'carb',
                                thumbnail_file_name:'curb.jpg',
                                weight:5
                            },
                        ring:
                            {
                                id: 1,
                                title_fa:"طنابی",
                                title_en:"rope",
                                thumbnail_file_name:'rope.jpg',
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
                                id:2,
                                title_fa:'d',
                                title_en:'d',
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
                return modelList;
            }
    }