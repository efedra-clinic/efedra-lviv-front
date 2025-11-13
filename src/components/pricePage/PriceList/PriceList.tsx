'use client';
import * as motion from 'motion/react-client';
import Container from '@/components/shared/container/Container';
import Accordion from './Accordion';
import { listItemVariants, listVariants } from '@/utils/animationVariants';
import { PriceCategory } from '@/types/price';
import ServicePriceList from './ServicePriceList';
import SectionTitle from '@/components/shared/titles/SectionTitle';

interface PriceListProps {
  categories: PriceCategory[];
}

export default function PriceList({ categories }: PriceListProps) {
  return (
    <section className="py-15 pt-[60px] lg:pt-[115px] lg:pb-[130px] ">
      <Container>
        <motion.div
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants({ staggerChildren: 0.2, delayChildren: 0.2 })}
          className="flex flex-col gap-[44px]"
        >
          {categories
            .filter(category => category?.subcategories?.length)
            .map((category, idx) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={listItemVariants}
                key={idx}
              >
                <SectionTitle variant={category.colorScheme ?? 'black'}>
                  {category.title}
                </SectionTitle>

                <div className="flex flex-col gap-4">
                  {category.subcategories
                    .filter(subcategory => subcategory?.services?.length)
                    .map((subcategory, idx) => (
                      <Accordion
                        key={idx}
                        title={subcategory.title}
                        colorScheme={category.colorScheme}
                      >
                        {({ isOpen }) => (
                          <ServicePriceList
                            key={idx}
                            services={subcategory.services || []}
                            colorScheme={category.colorScheme}
                            isOpen={isOpen}
                          />
                        )}
                      </Accordion>
                    ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </Container>
    </section>
  );
}
