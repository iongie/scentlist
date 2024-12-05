interface RawMaterialDetail {
    category: string;
    info: string;
}

interface RawMaterial {
    category: string;
    ingredient: string;
    link: string;
    filiation: string; 
    height?: string;
    cas: string;
    details: RawMaterialDetail[]      
}

export type {
    RawMaterial
}

