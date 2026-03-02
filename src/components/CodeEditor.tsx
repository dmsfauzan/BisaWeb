import { motion } from "framer-motion";

const CodeEditor = () => {
  const lines = [
    { num: 1, content: <><span className="text-code-keyword">import</span> {"{ NextAuth }"} <span className="text-code-keyword">from</span> <span className="text-code-string">'next-auth'</span>;</> },
    { num: 2, content: <><span className="text-code-keyword">import</span> {"{ PrismaClient }"} <span className="text-code-keyword">from</span> <span className="text-code-string">'@prisma/client'</span>;</> },
    { num: 3, content: "" },
    { num: 4, content: <span className="text-code-comment">// Initialize high-performance core</span> },
    { num: 5, content: <><span className="text-code-keyword">export const</span> WebsiteConfig = {"{"}</> },
    { num: 6, content: <>  framework: <span className="text-code-string">'React'</span>,</> },
    { num: 7, content: <>  rendering: <span className="text-code-string">'Server Components'</span>,</> },
    { num: 8, content: <>  database: <span className="text-code-string">'PostgreSQL'</span>,</> },
    { num: 9, content: <>  styling: [<span className="text-code-string">'Tailwind'</span>, <span className="text-code-string">'Framer Motion'</span>],</> },
    { num: 10, content: <>  security: <span className="text-code-keyword">true</span>,</> },
    { num: 11, content: "};" },
    { num: 12, content: "" },
    { num: 13, content: <span className="text-code-comment">// Deploying production build...</span> },
    { num: 14, content: <><span className="text-code-keyword">await</span> deploy(WebsiteConfig);</> },
  ];

  return (
    <div className="relative">
      {/* Code editor window */}
      <motion.div
        className="rounded-xl overflow-hidden shadow-elevated border border-border/50"
        initial={{ rotateY: 8, rotateX: -4 }}
        animate={{ rotateY: 0, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.02, rotateY: -2 }}
        style={{ perspective: 1000 }}
      >
        {/* Title bar */}
        <div className="bg-code-bg flex items-center justify-between px-4 py-3 border-b border-border/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-[hsl(45_100%_50%)]" />
            <div className="w-3 h-3 rounded-full bg-code-string" />
          </div>
          <span className="text-xs text-code-comment font-mono">config.ts</span>
        </div>

        {/* Code content */}
        <div className="bg-code-bg p-4 font-mono text-sm leading-6 overflow-x-auto">
          {lines.map((line, i) => (
            <motion.div
              key={line.num}
              className="flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            >
              <span className="w-8 text-right mr-4 text-code-comment/50 select-none text-xs">
                {line.num}
              </span>
              <span className="text-code-foreground">{line.content}</span>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <div className="bg-code-bg border-t border-border/20 px-4 py-1.5 flex items-center justify-between">
          <span className="text-xs text-code-comment font-mono">main*</span>
          <span className="text-xs text-code-comment font-mono">Ln 14, Col 2</span>
        </div>
      </motion.div>

      {/* Floating cards with stagger animations */}
      <motion.div
        className="absolute -top-4 -right-4 bg-card rounded-lg shadow-elevated border border-border p-3 min-w-[160px]"
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ y: -4 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-code-string animate-pulse" />
          <span className="text-xs font-semibold text-foreground">Server Status</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">CPU Usage</span>
            <span className="text-primary font-mono">12%</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Memory</span>
            <span className="text-primary font-mono">45%</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-3 -right-6 bg-card rounded-lg shadow-elevated border border-border p-3"
        initial={{ opacity: 0, x: 20, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ y: -4 }}
      >
        <div className="text-xs text-muted-foreground mb-1">Database</div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-foreground">PostgreSQL</span>
          <span className="flex items-center gap-1 text-[10px] text-code-string font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-code-string animate-pulse" />
            CONNECTED
          </span>
        </div>
      </motion.div>

      {/* Web Vitals card */}
      <motion.div
        className="absolute bottom-16 left-0 -translate-x-8 bg-card rounded-lg shadow-elevated border border-border p-3"
        initial={{ opacity: 0, x: -30, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ y: -4 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-foreground">Web Vitals</span>
          <span className="text-[10px] bg-code-string/10 text-code-string px-1.5 py-0.5 rounded font-medium">PASSED</span>
        </div>
        <div className="flex gap-2">
          {[
            { label: "Perf", value: 99 },
            { label: "SEO", value: 100 },
            { label: "A11y", value: 100 },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0 + i * 0.15, type: "spring", stiffness: 300 }}
            >
              <div className="text-sm font-bold text-code-string">{m.value}</div>
              <div className="text-[10px] text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CodeEditor;
