export interface IProduct {
  id: number;
  img: string;
  category?: string;
  title: string;
  price: number | string;
  description?: string;
  quantity: number;
}