export interface BlogPost {
  slug: string;
  title: string;
  category: "News" | "Insight";
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  "paradigm-shift-hybrid-recruitment": {
    slug: "paradigm-shift-hybrid-recruitment",
    title: "Charting New Terrain: The Paradigm Shift in Hybrid Recruitment",
    category: "News",
    date: "July 6, 2026",
    excerpt: "How hybrid and remote recruiting are disrupting traditional HR models and what it means for enterprise talent acquisition.",
    content: "In the ever-evolving landscape of talent acquisition, enterprise companies find themselves facing a formidable challenge. The hunt for high-quality candidates is proving to be more demanding than ever. \n\nAs organizations shift to hybrid models, the geographical barriers to entry have collapsed. This means your talent pool is now global, but so is your competition. \n\nAt Wirra, we have observed that companies utilizing AI-driven screening reduce time-to-hire by 40% while simultaneously increasing candidate retention. The key is not just finding talent everywhere, but standardizing how that talent is evaluated regardless of their timezone.",
    imageUrl: "https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a61f3a39b7be36f17eeb58_photo-blog-04-p-1080.jpg",
  },
  "navigating-hiring-complexities": {
    slug: "navigating-hiring-complexities",
    title: "Navigating hiring complexities in the era of hybrid work.",
    category: "News",
    date: "June 28, 2026",
    excerpt: "Strategies for managing compliance, onboarding, and culture in a decentralized workforce.",
    content: "Building a company culture when your team rarely shares a physical room requires intentionality. The complexities of hiring have shifted from 'finding the right skills' to 'finding the right operational fit'. \n\nOur data shows that candidates who undergo standardized, sandboxed technical evaluations are 3x more likely to succeed in remote environments.",
    imageUrl: "https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a616916cb644441b7cc87e_photo-blog-01-p-500.jpg",
  },
  "resilience-and-innovation": {
    slug: "resilience-and-innovation",
    title: "Resilience and Innovation: Driving growth in uncertain times.",
    category: "Insight",
    date: "June 15, 2026",
    excerpt: "How top-tier startups maintain aggressive hiring pipelines during economic downturns.",
    content: "When markets contract, the natural instinct for many companies is to freeze hiring. However, historical data indicates that organizations that maintain strategic hiring during downturns capture significant market share when the economy rebounds. \n\nThe secret is precision. By utilizing automated pipelines, you can maintain a lean HR team while processing thousands of inbound applications.",
    imageUrl: "https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a6142cd65c2f2ec18a378b_photo-blog-02-p-500.jpg",
  },
  "ai-bias-in-recruitment": {
    slug: "ai-bias-in-recruitment",
    title: "Overcoming Algorithm Bias in Modern Recruitment",
    category: "Insight",
    date: "May 22, 2026",
    excerpt: "Ensuring your AI screening tools promote diversity rather than hindering it.",
    content: "Artificial intelligence is only as unbiased as the data it is trained on. At Wirra, we recognized early on that relying solely on historical resume data often perpetuates existing industry biases. \n\nThis is why our system relies on native sandboxed environments and standardized cognitive tests. We evaluate the output, not the origin. By hiding identifying markers during the initial technical screening phase, we ensure that the only metric that matters is capability.",
    imageUrl: "https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a61f040b18f841dba3ceab_photo-blog-03-p-800.jpg",
  }
};