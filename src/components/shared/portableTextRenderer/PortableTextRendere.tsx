"use client";

import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: (props) => (
      <motion.p
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({
          y: 20,
        })}
        className="not-last:mb-10 lg:not-last:mb-15"
      >
        {props.children}
      </motion.p>
    ),
  },
  marks: {
    strong: (props) => (
      <strong className="font-semibold">{props.children}</strong>
    ),
  },
  list: {
    bullet: (props) => (
      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({
          y: 20,
        })}
        className="list-disc pl-6 not-last:mb-6 space-y-2"
      >
        {props.children}
      </motion.ul>
    ),
    number: (props) => (
      <motion.ol
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({
          y: 20,
        })}
        className="list-decimal pl-6 not-last:mb-6 space-y-2"
      >
        {props.children}
      </motion.ol>
    ),
  },
  listItem: {
    bullet: (props) => <li className="">{props.children}</li>,
    number: (props) => <li className="">{props.children}</li>,
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}
