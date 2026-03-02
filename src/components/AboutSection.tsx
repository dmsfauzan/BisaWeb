import { motion } from "framer-motion";
import { Rocket, Users, Shield, Award } from "lucide-react";

const stats = [
  { label: "Proyek Selesai", value: "150+", icon: Rocket },
  { label: "Klien Puas", value: "120+", icon: Users },
  { label: "Tahun Pengalaman", value: "5+", icon: Award },
  { label: "Uptime Terjamin", value: "99.9%", icon: Shield },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      type: "spring" as const,
      stiffness: 100,
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Tentang Kami
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Kenapa Memilih <span className="text-gradient">BisaWeb</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">BisaWeb</strong> adalah tim developer profesional yang berdedikasi membantu bisnis dan UMKM Indonesia memiliki kehadiran digital yang kuat dan berkesan.
              </p>
              <p>
                Kami tidak hanya membangun website — kami merancang{" "}
                <span className="text-primary font-medium">solusi digital menyeluruh</span>{" "}
                yang mengutamakan performa, keamanan, dan pengalaman pengguna terbaik.
              </p>
              <p>
                Dengan pendekatan{" "}
                <code className="px-1.5 py-0.5 rounded bg-secondary text-sm font-mono text-primary">
                  clean architecture
                </code>{" "}
                dan teknologi terkini, setiap proyek kami dibangun untuk tumbuh bersama bisnis Anda.
              </p>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-background rounded-xl border border-border p-6 hover:shadow-elevated hover:border-primary/20 transition-shadow duration-300 text-center"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <motion.p
                  className="text-3xl font-bold text-gradient mb-1"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 150 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
