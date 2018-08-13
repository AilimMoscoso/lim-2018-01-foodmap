var restaurants = [
    {
        'name': 'El Pez On',
        'type': 'marina',
        'location': {
            'latitude': -12.20,
            'longitude': -76.94
        },
        'adress': 'Av. Primavera 2088, Santiago de Surco, Lima',
        'phone':'(01) 3568541',
        'web':'http://elpez-on.com/',
        'image':'http://www.cronicaviva.com.pe/wp-content/uploads/2015/08/ceviche.jpg'
    },
    {  
        'name': 'La Isla del Encanto',
        'type': 'marina',
        'location': {
            'latitude': -12.2010,
            'longitude': -76.9410
        },
        'phone':'(01)6183365',
        'web':'https://es-la.facebook.com/LaIslaDelEncantoOficial/',
        'adress':'Av. Rosa Toro 1145, San Borja, Lima',
        'image':'http://www.viveusa.mx/sites/default/files/styles/large/public/comida_marina_estados_unidos_01.jpg?itok=dNRx1hM6'
    },
    {
        'name': 'Segundo Muelle',
        'type': 'marina',
        'location': {
            'latitude': -12.1990,
            'longitude': -76.9320
        },
        'phone':'(511) 635-5555',
        'web':'http://www.segundomuelle.com/',
        'adress':'Av. Costa Verde S/N Playa Las Cascadas, Barranco, Lima',
        'image':'https://mesa247.s3.amazonaws.com/production/locales/fotos/Pescados_Capitales_%28Miraflores%29_home_plato_2017_09_11_20_15_51.jpg'
    },
    {
        'name': 'Señor Limón',
        'type': 'marina',
        'location': {
            'latitude': -12.2110,
            'longitude': -76.9315
        },
        'phone':'715 6340',
        'web':'http://senorlimon.com/',
        'adress':'Av Conquistadores 299, San Isidro',
        'image':'http://www.ciudaris.com/blog/wp-content/uploads/actividades-debes-hacer-durante-verano-Ciudaris3.jpeg'
    },
    {
        'name': 'La Mariscala',
        'type': 'criolla',
        'location': {
            'latitude': -12.2080,
            'longitude': -76.9450
        },
        'phone':'2595814',
        'web':'https://www.facebook.com/pages/La-Mariscala/318784824841446',
        'adress':'Av. Pachacutec 5233, Villa María del Triunfo, Lima',
        'image':'https://blog.mesa247.pe/wp-content/uploads/2017/12/25286143_10155775153371438_418126503_o-1-960x768.jpg'
    },
    {
        'name': 'Brujas de Cachiche',
        'type': 'criolla',
        'location': {
            'latitude': -12.2210,
            'longitude': -76.9290
        },
        'adress':'Av. Bolognesi 472, Miraflores, Lima',
        'phone':'(01) 4471883',
        'web':'https://www.brujasdecachiche.com.pe/',
        'image':'http://www.cocinaconblanquita.com/images/page-1_img03.jpg'    
    },    
    {
        'name': 'Rustica Costa Verde',
        'type': 'criolla',
        'location': {
            'latitude': -12.2080,
            'longitude': -76.9250
        },
        'adress':'CORREDOR COSTA VERDE, Barranco 15063',
        'phone':'(01) 7178365',
        'web':'http://www.rustica.com.pe/',
        'image':'https://e.an.amtv.pe/actualidad-comida-peruana-postulada-como-patrimonio-humanidad-n239655-624x352-291614.jpg'    
    },
    {
        'name': 'El Rosedal',
        'type': 'criolla',
        'location': {
            'latitude': -12.2475,
            'longitude': -76.9198
        },
        'adress':'Jirón Ayacucho 290, Santiago de Surco, Lima',
        'phone':'(01) 4771560',
        'web':'https://www.facebook.com/elrosedalrestaurant/',
        'image':'http://ocoainformativa.com/wp-content/uploads/2016/07/comida-criolla.jpg'
    },
    {
        'name': 'Furai Sushi',
        'type': 'japonesa',
        'location': {
            'latitude': -12.2180,
            'longitude': -76.9080
        },
        'adress':' Av.Tomas Marsano 4610, Santiago de Surco, Lima ',
        'phone':'946 895 636',
        'web':'https://www.facebook.com/furaisushibar/',
        'image':'https://www.hotelaleman.com.pe/wp-content/uploads/2016/03/comida-japonesa.jpg'
    },
    {
        'name': 'Señor Cheff',
        'type': 'japonesa',
        'location': {
            'latitude': -12.2190,
            'longitude': -76.9610
        },
        'adress':'Av Alejandro Iglesias 560, Lima',
        'phone':'(01) 2517980',
        'web':'https://www.facebook.com/Sr-Cheff-875421092537419/?rf=1421071531441782',
        'image':'https://www.lavanguardia.com/r/GODO/LV/p3/WebSite/2016/03/30/Recortada/img_msanoja_20160330-124415_imagenes_lv_getty_gettyimages-152831173-kudB-U407505932295WD-992x558@LaVanguardia-Web.jpg'
    },
    {
        'name': 'Isushi',
        'type': 'japonesa',
        'location': {
            'latitude': -12.2085,
            'longitude': -76.9565
        },
        'adress':'Av. Caminos del Inca 1517, Santiago de Surco ',
        'phone':'(01) 4189009',
        'web':'http://isushirestaurant.com/',
        'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSre_GT5E7QfY63MFWWlB9VMoWQL5qjbj_HQGDITc-yryjehJLDA'
    },
    {
        'name': 'Sakae Sushi Bar',
        'type': 'japonesa',
        'location': {
            'latitude': -12.1890,
            'longitude': -76.9195
        },
        'adress':'Av. Cerro de Camacho 500, Distrito de Lima ',
        'phone':'968 344 722',
        'web':'http://www.sakaesushiperu.com/',
        'image':'https://www.viajejet.com/wp-content/viajes/Tofu-1440x810.jpg'
    },
    {
        'name': 'La Piccolina',
        'type': 'italiana',
        'location': {
            'latitude': -12.2010,
            'longitude': -76.9180
        },
        'adress':'Av La Encalada 895, Santiago de Surco ',
        'phone':'(01) 4343450',
        'web':'https://trattorialapiccolina.pizza/',
        'image':'http://omammamia.com/traditional/wp-content/uploads/2016/06/248ca95a9c0ba8d502dc21107bac7652.jpg'
    },
    {
        'name': 'Mamma Sara',
        'type': 'italiana',
        'location': {
            'latitude': -12.2070,
            'longitude': -76.9222
        },
        'adress':'Av. Los Vicus 302, Lima ',
        'phone':'(01) 4753987',
        'web':'https://es-la.facebook.com/MammaSaraRest/',
        'image':'http://assets.kraftfoods.com/recipe_images/opendeploy/169162_640x428.jpg'       
    },
    {
        'name': 'La Linterna',
        'type': 'italiana',
        'location': {
            'latitude': -12.2060,
            'longitude': -76.9340
        },
        'adress':'Av. Caminos del Inca 459, Santiago de Surco',
        'phone':'(01) 3721376',
        'web':'http://www.pizzerialalinterna.com/',
        'image':'https://img.gestion.pe/files/article_content_ec_fotos/uploads/2017/11/15/5a0ca6b0ce3c3.jpeg'
    },
    {
        'name': 'Bistro Toretto',
        'type': 'italiana',
        'location': {
            'latitude': -12.2070,
            'longitude': -76.9095
        },
        'adress':'Av San Luis 2899, San Borja',
        'phone':'(01) 3633751',
        'web':'https://bistrotoretto.com/',
        'image':'https://media-cdn.tripadvisor.com/media/photo-s/05/b8/2f/da/comida-italiana.jpg'
    }
];