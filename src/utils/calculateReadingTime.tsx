import { Post } from "@/types/post";

export const calculateReadingTime = (
  article: Post,
  wordsPerMinute: number = 200
): number => {
  const countWords = (text: string) => text.split(/\s+/).filter(Boolean).length;

  let totalWords = 0;

  // Підрахунок слів у title та description
  totalWords += countWords(article.title);
  totalWords += countWords(article.description);

  // Підрахунок слів у content
  article.content.forEach((block) => {
    if (block._type === "block" && block.children) {
      block.children.forEach((child) => {
        totalWords += countWords(child.text);
      });
    }
  });

  return Math.ceil(totalWords / wordsPerMinute);
};
