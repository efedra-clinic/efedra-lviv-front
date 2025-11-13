import Container from "@/components/shared/container/Container";
import PortableTextRenderer from "@/components/shared/portableTextRenderer/PortableTextRendere";
import { Post } from "@/types/post";

interface ContentProps {
  post: Post;
}

export default function Content({ post }: ContentProps) {
  return (
    <section className="pt-11 lg:pt-21">
      <Container>
        <PortableTextRenderer value={post.content} />
      </Container>
    </section>
  );
}
