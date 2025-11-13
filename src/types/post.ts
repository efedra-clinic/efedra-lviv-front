export interface Post {
  title: string;
  slug: string;
  image: string;
  direction: "dentistry" | "aesthetic";
  description: string;
  content: Array<{
    _key: string;
    _type: "block";
    children: Array<{
      _key: string;
      _type: "span";
      text: string;
      marks: string[];
    }>;
    markDefs: Array<{
      _key: string;
      _type: string;
    }>;
    style: "normal" | string;
  }>;
  createdAt: string;
}
