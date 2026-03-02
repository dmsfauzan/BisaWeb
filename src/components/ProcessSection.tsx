import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    phase: "Perencanaan",
    title: "Discovery & Strategy",
    description: "Tahap awal dimana kami menggali potensi bisnis Anda, memahami target audiens, dan merumuskan strategi digital yang efektif.",
    items: ["Analisis Kompetitor", "User Persona", "Technical Requirements"],
    icon: Search,
  },
  {
    num: "02",
    phase: "Desain",
    title: "UI/UX Design",
    description: "Merancang antarmuka visual yang memukau dengan fokus pada pengalaman pengguna (UX) yang intuitif dan kohesif.",
    items: ["Wireframing", "High-Fidelity Mockups", "Interactive Prototype"],
    icon: Palette,
  },
  {
    num: "03",
    phase: "Implementasi",
    title: "Development",
    description: "Proses transformasi desain menjadi kode yang bersih, aman, dan berperforma tinggi menggunakan teknologi terkini.",
    items: ["Clean Code Strategy", "Responsive Implementation", "API Integration"],
    icon: Code2,
  },
  {
    num: "04",
    phase: "Peluncuran",
    title: "Launch & Support",
    description: "Memastikan website siap rilis dengan standar QA ketat, serta dukungan teknis berkelanjutan pasca-peluncuran.",
    items: ["SEO Basic Setup", "Performance Optimization", "Analytics Integration"],
    icon: Rocket,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Proses Kerja
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Dibangun dengan <span className="text-gradient">Proses Terstruktur</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Proses transparan dari konsep hingga peluncuran. Kami memastikan setiap langkah memberikan nilai nyata.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-background rounded-2xl border border-border p-8 hover:shadow-elevated transition-shadow duration-300 group relative overflow-hidden"
            >
              {/* Subtle animated bg accent */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              />

              <div className="flex items-start gap-4 relative">
                <motion.span
                  className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors font-mono"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  {s.num}
                </motion.span>
                <div className="flex-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{s.phase}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
                  <ul className="space-y-1.5">
                    {s.items.map((item, ii) => (
                      <motion.li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + ii * 0.08 + 0.3 }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: ii * 0.3 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
