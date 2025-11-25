export const searchResults = {
    query: "iphone",
    paging: {
        total: 1500,
        offset: 0,
        limit: 3,
    },
    results: [
        // decidi agregar este producto ya que es el que mas tine de detalles y sirve para respresentar mejor la vista de detalle del producto
        {
            id: "MLA998877665",
            title: "Apple iPhone 16 Pro (256gb) - Nuevo - Liberado - Caja Sellada",
            price: 2509380.59,
            currency_id: "ARS",
            condition: "new",
            // Imagen original esta rota
            // thumbnail:
            //     "https://http2.mlstatic.com/D_987654-MLA0000000000_092023-I.jpg",
            thumbnail:
                "https://http2.mlstatic.com/D_NQ_NP_2X_903458-MLA96076060663_102025-F.webp",
            shipping: {
                free_shipping: true,
            },
        },
        // Producto extra para pruebas de todos los componentes de la tarjeta de producto
        {
            id: "MLA112233445",
            title: "Apple iPhone 15 Plus (512 GB) - Azul",
            price: 1899999,
            discount: 17,
            currency_id: "ARS",
            condition: "new",
            thumbnail:
                "https://http2.mlstatic.com/D_NQ_NP_2X_918178-MLA71783088444_092023-F.webp",
            shipping: {
                free_shipping: true,
            },
            reviews: {
                rating_average: 4.5,
                total: 7,
                colors: 3,
            },
        },
        {
            id: "MLA123456789",
            title: "Apple iPhone 13 (128 GB) - Medianoche",
            price: 1367999,
            currency_id: "ARS",
            condition: "new",
            // Imagen original esta rota
            // thumbnail:
            //     "https://http2.mlstatic.com/D_123456-MLA0000000000_092023-I.jpg",
            thumbnail:
                "https://http2.mlstatic.com/D_NQ_NP_2X_675312-MLA95675194078_102025-F.webp",
            installments: {
                quantity: 12,
                amount: 113999.92,
            },
            shipping: {
                free_shipping: true,
            },
            reviews: {
                rating_average: 4.9,
                total: 35,
            },
        },
        {
            id: "MLA987654321",
            title: "Apple iPhone 16 Pro Max 256gb",
            thumbnail:
                "https://http2.mlstatic.com/D_NQ_NP_2X_770795-MLA96870839645_102025-F.webp",
            price: 2299000,
            condition: "new",
        },
        {
            id: "MLA555555555",
            title: "iPhone 8 64 GB Plata - Reacondicionado",
            price: 412500,
            condition: "used",
            reviews: {
                rating_average: 5.0,
                total: 2,
            },
        },
    ],
};

export const productDetail = {
    MLA998877665: {
        id: "MLA998877665",
        title: "Apple iPhone 16 Pro (256gb) - Nuevo - Liberado - Caja Sellada",
        price: 2509380.59,
        original_price: 3023244.99,
        currency_id: "ARS",
        available_quantity: 3,
        sold_quantity: 5,
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/p/MLA998877665",
        pictures: [
            {
                id: "1",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_777801-MLA96651066765_102025-F.webp",
            },
            {
                id: "2",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_762289-MLA80663863823_112024-F.webp",
            },
            {
                id: "3",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_854318-MLA80663863827_112024-F.webp",
            },
            {
                id: "4",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_615689-MLA80664076957_112024-F.webp",
            },
        ],
        installments: {
            quantity: 9,
            amount: 278820.07,
            rate: 0,
            currency_id: "ARS",
        },
        shipping: {
            free_shipping: true,
            mode: "me2",
            logistic_type: "fulfillment",
            store_pick_up: false,
        },
        seller_address: {
            city: {
                name: "CABA",
            },
            state: {
                name: "Buenos Aires",
            },
        },
        attributes: [
            {
                id: "BRAND",
                name: "Marca",
                value_name: "Apple",
            },
            {
                id: "MODEL",
                name: "Modelo",
                value_name: "iPhone 16 Pro",
            },
            {
                id: "STORAGE_CAPACITY",
                name: "Capacidad de almacenamiento",
                value_name: "256 GB",
            },
        ],
        warranty: "Garantía del vendedor: 3 meses",
        description: {
            plain_text:
                "El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone 14, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.",
        },
        reviews: {
            rating_average: 5.0,
            total: 1,
        },
    },
    MLA112233445: {
        id: "MLA112233445",
        title: "Apple iPhone 15 Plus (512 GB) - Azul",
        price: 1899999,
        original_price: 2099999,
        currency_id: "ARS",
        available_quantity: 7,
        sold_quantity: 12,
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/p/MLA112233445",
        pictures: [
            {
                id: "1",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_918178-MLA71783088444_092023-F.webp",
            },
            {
                id: "2",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_918178-MLA71783088445_092023-F.webp",
            },
        ],
        installments: {
            quantity: 12,
            amount: 158333.25,
            rate: 0,
            currency_id: "ARS",
        },
        shipping: {
            free_shipping: true,
            mode: "me2",
            logistic_type: "fulfillment",
            store_pick_up: true,
        },
        seller_address: {
            city: {
                name: "Rosario",
            },
            state: {
                name: "Santa Fe",
            },
        },
        attributes: [
            {
                id: "BRAND",
                name: "Marca",
                value_name: "Apple",
            },
            {
                id: "MODEL",
                name: "Modelo",
                value_name: "iPhone 15 Plus",
            },
            {
                id: "STORAGE_CAPACITY",
                name: "Capacidad de almacenamiento",
                value_name: "512 GB",
            },
            {
                id: "COLOR",
                name: "Color",
                value_name: "Azul",
            },
        ],
        warranty: "Garantía oficial: 12 meses",
        description: {
            plain_text:
                "El iPhone 15 Plus combina potencia y diseño con una batería de larga duración y cámara avanzada. Ideal para quienes buscan rendimiento y estilo.",
        },
        reviews: {
            rating_average: 4.5,
            total: 7,
        },
    },
    MLA123456789: {
        id: "MLA123456789",
        title: "Apple iPhone 13 (128 GB) - Medianoche",
        price: 1367999,
        original_price: 1499999,
        currency_id: "ARS",
        available_quantity: 5,
        sold_quantity: 20,
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/p/MLA123456789",
        pictures: [
            {
                id: "1",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_675312-MLA95675194078_102025-F.webp",
            },
            {
                id: "2",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_675312-MLA95675194079_102025-F.webp",
            },
        ],
        installments: {
            quantity: 12,
            amount: 113999.92,
            rate: 0,
            currency_id: "ARS",
        },
        shipping: {
            free_shipping: true,
            mode: "me2",
            logistic_type: "fulfillment",
            store_pick_up: false,
        },
        seller_address: {
            city: {
                name: "Córdoba",
            },
            state: {
                name: "Córdoba",
            },
        },
        attributes: [
            {
                id: "BRAND",
                name: "Marca",
                value_name: "Apple",
            },
            {
                id: "MODEL",
                name: "Modelo",
                value_name: "iPhone 13",
            },
            {
                id: "STORAGE_CAPACITY",
                name: "Capacidad de almacenamiento",
                value_name: "128 GB",
            },
            {
                id: "COLOR",
                name: "Color",
                value_name: "Medianoche",
            },
        ],
        warranty: "Garantía del vendedor: 6 meses",
        description: {
            plain_text:
                "El iPhone 13 ofrece un rendimiento excepcional y una cámara dual para fotos increíbles, con diseño elegante y gran autonomía.",
        },
        reviews: {
            rating_average: 4.9,
            total: 35,
        },
    },
    MLA987654321: {
        id: "MLA987654321",
        title: "Apple iPhone 16 Pro Max 256gb",
        price: 2299000,
        original_price: 2499999,
        currency_id: "ARS",
        available_quantity: 2,
        sold_quantity: 3,
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/p/MLA987654321",
        pictures: [
            {
                id: "1",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_770795-MLA96870839645_102025-F.webp",
            },
            {
                id: "2",
                url: "https://http2.mlstatic.com/D_NQ_NP_2X_770795-MLA96870839646_102025-F.webp",
            },
        ],
        installments: {
            quantity: 18,
            amount: 127722.22,
            rate: 0,
            currency_id: "ARS",
        },
        shipping: {
            free_shipping: true,
            mode: "me2",
            logistic_type: "fulfillment",
            store_pick_up: true,
        },
        seller_address: {
            city: {
                name: "Mendoza",
            },
            state: {
                name: "Mendoza",
            },
        },
        attributes: [
            {
                id: "BRAND",
                name: "Marca",
                value_name: "Apple",
            },
            {
                id: "MODEL",
                name: "Modelo",
                value_name: "iPhone 16 Pro Max",
            },
            {
                id: "STORAGE_CAPACITY",
                name: "Capacidad de almacenamiento",
                value_name: "256 GB",
            },
        ],
        warranty: "Garantía oficial: 24 meses",
        description: {
            plain_text:
                "El iPhone 16 Pro Max es el modelo más avanzado, con pantalla de gran tamaño, cámara triple y máxima potencia para usuarios exigentes.",
        },
        reviews: {
            rating_average: 4.8,
            total: 10,
        },
    },
};
