async function getProductFromDatabase() {
    return {
        id: 'svelte-book',
        name: 'Svelte Book',
        price: 3500,
        images: [
            'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-1.png',
            'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-2.png',
            'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-3.png',
        ],
    };
}

async function getRelatedProductsFromDatabase() {
    return [
        {
            id: 'react-book',
            name: 'React Book',
            price: 4500,
            images: [
                'https://github.com/svelte-book/sample-app/raw/main/static/react-book-1.png',
            ],
        },
    ]
}

export async function load() {
    const product = await getProductFromDatabase();
    const relatedProducts = await getRelatedProductsFromDatabase();
    return { product, relatedProducts };
}
