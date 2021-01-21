interface ICategory {
  id: number;
  name: string;
}

interface ISize {
  id: number;
  symbol: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  salePercent: number;
  createdAt: Date;
  sizes: ISize[];
  category: ICategory;
}
