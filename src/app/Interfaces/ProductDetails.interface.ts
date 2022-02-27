export interface ProductDetailsInterface {
  ProductId: number,
  CategoryID:string,
  sales: boolean,
  New: boolean,
  Rate: number,
  price: {
    old: number,
    new: number
  },
  mainimg: string,
  YoutubeLink: string,
  name: string,
  discription: string,
  imgGallary: [
    { ImgUrl: string }
  ],
  tags: [
    { TageName: string}
  ]
}
