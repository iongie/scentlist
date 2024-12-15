interface RawMaterialDetail {
    category: string;
    info: string;
}

interface RawMaterial {
    category?: string;
    ingredient?: string;
    link?: string;
    filiation?: string;
    height?: string;
    cas?: string;
    cas_number?: string;
    molecular_formula?: string;
    molecular_weight?: string;
    boiling_point?: string;
    vapor_pressure?: string;
    logP?: string;
    odor_strength?: string;
    details?: RawMaterialDetail[]
}

export type {
    RawMaterial
}

