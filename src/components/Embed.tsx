import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import human from "../assets/Human.jpg"

interface BlogItem {
  date: string;
  subheading: string;
  heading: string;
  title: string;
  desc: string;
  imgUrl: string;
  paragraphs: string[];
}

export default function Embed() {
  const blogs: BlogItem[] = [
    {
      date: '2025-10-22',
      subheading: 'WORKFLOW DESIGN',
      heading: "Transformation is Human",
      title: "Digital Transformation Isn't Technical—It's Human",
      desc: "Why mapping enterprise workflows to user behaviors is 10x more important than raw code speed.",
      imgUrl: human,
      paragraphs: [
        "Many organizations mistake digital transformation for a simple upgrade of their tech stack. They rewrite legacy code, migrate to the cloud, and build microservices, yet fail to see any improvement in productivity or customer satisfaction.",
        "Real transformation occurs when technology adapts to human behavior, not the other way around. By mapping operational workflows directly to user habits, we reduce friction and unlock real efficiency."
      ]
    },
    {
      date: '2025-09-10',
      subheading: 'USER EXPERIENCE',
      heading: "From Code to Experience",
      title: "Why Understanding Users Is Critical in IT Projects",
      desc: "Exploring how empathy-based design sprints directly optimize digital conversion metrics.",
      imgUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
      paragraphs: [
        "An application can be technically flawless, but if it doesn't align with the user's mental model, it is a failure. We bridge the gap between engineering complexity and intuitive simplicity.",
        "Through structured design sprints and continuous user testing, we ensure that every interface element serves a concrete purpose, reducing bounce rates and raising task completion speed."
      ]
    },
    {
      date: '2025-07-10',
      subheading: 'DESIGN THINKING',
      heading: "The Empathy Divide",
      title: "Empathy Needed in Design Research",
      desc: "Bridging the gap between software engineers and product consumers in modern SaaS projects.",
      imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
      paragraphs: [
        "Engineers build products based on logical constraints and system states. Consumers use products based on emotions, constraints, and immediate goals. This disconnect is the Empathy Divide.",
        "Overcoming this gap requires immersive research. Developers must watch users struggle, witness their frustration, and celebrate their triumphs to build truly great software."
      ]
    },
    {
      date: '2026-02-18',
      subheading: 'MACHINE LEARNING',
      heading: "AI in Education",
      title: "How AI Is Transforming School Management",
      desc: "A case study on using custom machine learning algorithms to distribute workloads dynamically.",
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
      paragraphs: [
        "Scheduling classes, assigning educators, and managing facility limits is a complex multi-dimensional constraint problem. Traditional software uses rigid rules that break under real-world changes.",
        "Our custom algorithms learn from historical trends, teacher preferences, and student needs to generate optimal assignments in seconds, keeping schools running smoothly."
      ]
    }
  ];

  return (
    <section id="embed" data-idx="Blogs" className="bg-slate-50/50 py-20">
      <div className="wrap">
        <div className="secHead mb-16 text-center lg:text-left">
          <div>
            {/* <div className="eyebrow reveal">Blogs &amp; Articles</div> */}
            <h2 className="reveal mt-4 mb-5 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#102B72] leading-[1.05]">
              Latest Insights from <span className="bg-gradient-to-r from-[#102B72] via-[#0f75bc] to-[#35b0a2] bg-clip-text text-transparent">Data Apps.</span>
            </h2>
          </div>
          {/* <p className="lead2 reveal mt-4 max-w-2xl text-slate-500" style={{ fontSize: '15px' }}>
            We share our thoughts, failures, and breakthroughs in engineering custom software and building scalable digital architectures.
          </p> */}
        </div>
      </div>

      <div className="space-y-4">
        {blogs.map((blog, idx) => (
          <TextParallaxContent
            key={idx}
            imgUrl={blog.imgUrl}
            subheading={`${blog.date} • ${blog.subheading}`}
            heading={blog.heading}
          >
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 pb-24 pt-12 md:grid-cols-12">
              <h3 className="col-span-1 text-2xl md:text-3xl font-bold md:col-span-4 text-[#102B72] tracking-tight">
                {blog.title}
              </h3>
              <div className="col-span-1 md:col-span-8">
                <h4 className="text-lg font-semibold text-slate-700 mb-4 leading-relaxed">
                  {blog.desc}
                </h4>
                {blog.paragraphs.map((p, pidx) => (
                  <p key={pidx} className="mb-4 text-base text-slate-500 leading-relaxed">
                    {p}
                  </p>
                ))}
                <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#102B72] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#102B72]/90 hover:scale-105 active:scale-95">
                  Read Article <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </TextParallaxContent>
        ))}
      </div>
    </section>
  );
}

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[120vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white p-4"
    >
      <p className="mb-2 text-center text-lg md:mb-4 md:text-2xl font-mono uppercase tracking-wider text-[#35b0a2]">
        {subheading}
      </p>
      <p className="text-center text-3xl font-extrabold md:text-6xl tracking-tight max-w-4xl leading-tight">
        {heading}
      </p>
    </motion.div>
  );
};
