export interface Review {
  name: string;
  photo: {
    asset: {
      url: string;
    };
  };
  age: number;
  text: string;
  order: number;
}
