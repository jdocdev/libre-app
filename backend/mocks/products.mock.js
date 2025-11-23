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
            url: "https://http2.mlstatic.com/D_987654-MLA0000000000_092023-I.jpg",
        },
        {
            id: "2",
            url: "https://http2.mlstatic.com/D_987655-MLA0000000001_092023-I.jpg",
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
};
