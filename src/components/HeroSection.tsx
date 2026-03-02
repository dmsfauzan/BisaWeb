import { motion } from "framer-motion";
import { Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CodeEditor from "./CodeEditor";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated bg gradient orbs */}
      <motion.div
        className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsl(25_95%_53%/0.08),transparent_70%)]"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,hsl(15_90%_55%/0.06),transparent_70%)]"
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground mb-6"
            >
              <motion.span
                className="text-primary"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ⚡
              </motion.span>
              YOUR TRUSTED DIGITAL PARTNER
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Jasa Pembuatan Website Untuk{" "}
              <motion.span
                className="text-gradient inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Bisnis & UMKM
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Bukan sekadar website, kami membangun{" "}
              <strong className="text-foreground">ekosistem digital</strong>.
              Arsitektur{" "}
              <code className="px-1.5 py-0.5 rounded bg-secondary text-sm font-mono text-primary">
                scalable
              </code>
              , keamanan tingkat lanjut, performa tanpa kompromi, serta struktur{" "}
              <code className="px-1.5 py-0.5 rounded bg-secondary text-sm font-mono text-primary">
                SEO Native
              </code>{" "}
              untuk visibilitas maksimal.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-glow transition-all"
                >
                  Konsultasi →
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary"
                  onClick={() => navigate("/portfolio")}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  Portfolio
                </Button>
              </motion.div>
            </motion.div>

            {/* Tech Tags */}
            <motion.div
              className="flex items-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="font-mono uppercase tracking-wider text-xs">
                  Clean Architecture
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                <span className="font-mono uppercase tracking-wider text-xs">
                  Full Stack
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right - Code Editor with 3D float */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
            style={{ perspective: 1200 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <CodeEditor />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;