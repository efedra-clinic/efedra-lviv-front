import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/utils/animationVariants';
import Container from '@/components/shared/container/Container';
import SectionTitle from '@/components/shared/titles/SectionTitle';
import { Post } from '@/types/post';
import RecommendedPostsSlider from './RecommendedPostsSlider';

interface RecommendedPostsProps {
  posts: Post[];
}

export default function RecommendedPosts({ posts }: RecommendedPostsProps) {
  if (!posts || !posts?.length) return null;

  return (
    <section className="pt-16 pb-14 lg:pt-30 lg:pb-25">
      <Container>
        <SectionTitle className="mb-6 lg:mb-7 border-green-light-3 text-white">
          Читайте також
        </SectionTitle>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 30 })}
          className="w-full"
        >
          <RecommendedPostsSlider posts={posts} />
        </motion.div>
      </Container>
    </section>
  );
}
