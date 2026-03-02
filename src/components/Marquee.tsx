const items = [
  "Web Development",
  "Web Maintenance",
  "Web Design",
  "Digital Marketing",
  "SEO Optimization",
  "UI/UX Design",
];

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-card border-y border-border py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-4">
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              {item}
            </span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
