export interface Doctor {
  id: string;
  name: string;
  photo: {
    asset: {
      url: string;
    };
  };
  position: string;
}
