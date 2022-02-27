export interface ProductsInterface {
  ProductId: number,
  CategoryID:string,
  BrandID:number,
  sales: boolean,
  quantity: number,
  New: boolean,
  Rate:number,
  price:{
    new: number,
    old: number,
  },
  mainimg:string,
  YoutubeLink: string,
  name: string,
}
