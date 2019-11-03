export class Product {
    id: number;
    categorieId: number;
    categorie: Categorie;
    name: string;
    description: string;
    qualification: number;
    price: number;
    productSize: ProductSize[];
}

export class Categorie {
    name: string;
    description: string;
    products: Product[];
    id: number;
}

export class ProductSize {
    productId: number;
    product: Product;
    sizeId: number;
    size: Size;
    stock: number;
}

export class Size {
    name: string;
    description: string;
    // productsSizes: ProductSize[]; 
}
