import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Awalnya ragu dengan budget segini, tapi hasilnya di luar dugaan. Desainnya pas banget sama konsep cafe kita yang industrial.",
    name: "Di*** An*****",
    role: "Owner Coffee Shop",
    initial: "D",
  },
  {
    text: "Code quality-nya bagus, structure-nya rapi. Load speed di mobile juga kenceng banget. Jarang nemu agency lokal yang peduli soal best practice.",
    name: "Mi***** Ha*****",
    role: "Tech Lead, Startup",
    initial: "M",
  },
  {
    text: "Setelah website di-revamp, customer jadi lebih gampang checkout. Flow belanjanya nggak ribet, cancel order berkurang banyak.",
    name: "Ad**** Nu*****",
    role: "Owner Clothing Brand",
    initial: "A",
  },
  {
    text: "Suka banget sama hasil portfolio-nya. Tampilannya clean dan estetik. Timnya juga enak diajak diskusi soal visual.",
    name: "Cl****** Pu***",
    role: "Content Creator",
    initial: "C",
  },
  {
    text: "MVP bisa rilis tepat waktu buat demo ke investor. Aplikasinya stabil dan skalabel. Partner tech yang pas buat startup.",
    name: "Sa*** Wi****",
    role: "Startup Founder",
    initial: "S",
  },
  {
    text: "Website corporate yang dihasilkan sangat representatif. Desainnya profesional, sesuai dengan citra perusahaan kami.",
    name: "Ba***** Su******",
    role: "Direktur Perusahaan",
    initial: "B",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden" id="portofolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Real Stories, Real Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Kata Mereka Tentang <span className="text-gradient">Kolaborasi Kami</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Kami bangga menjadi bagian dari kesuksesan mitra kami.
          </p>

          <motion.div
            className="flex items-center justify-center gap-8 mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
          >
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4.9</span>
              <p className="text-xs text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <motion.span
                className="text-2xl font-bold text-foreground block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                100+
              </motion.span>
              <p className="text-xs text-muted-foreground">Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-elevated transition-shadow duration-300"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold text-sm"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {t.initial}
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
