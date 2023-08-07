// @ts-ignore
import { readFile, writeFile } from 'fs/promises';

// @ts-ignore
const dataPath = 'data/cart.json';

// @ts-ignore
export async function addToCart(productId) {
    const cart = await loadCart();
    // @ts-ignore
    if (!cart.includes(productId)) {
        // @ts-ignore
        cart.push(productId);
    }
    await writeFile(dataPath, JSON.stringify(cart), { encoding: 'utf-8' });
}

export async function loadCart() {
    try {
        const context = await readFile(dataPath);
    } catch (err) {
        // @ts-ignore
        if (err.code === 'ENOENT') {
            return [];
        } else {
            throw err;
        }
    }
}