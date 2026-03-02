import { motion } from "framer-motion";
import { Globe, ShoppingCart, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK =
  "https://wa.me/6282111053731?text=Halo%20BisaWeb%2C%20saya%20ingin%20konsultasi%20mengenai%20website.";

const reasons = [
  {
    icon: Globe,
    title: "Promosi 24/7",
    description: "Brand bekerja tanpa henti. Website memastikan informasi produk tersampaikan akurat bahkan saat Anda tidur.",
    tags: ["Jangkauan Global", "Selalu Aktif"],
  },
  {
    icon: ShoppingCart,
    title: "Mesin Penjualan Otomatis",
    description: "Konversi pengunjung menjadi pembeli dengan sistem katalog dan pemesanan yang terintegrasi sempurna.",
    tags: ["Checkout Otomatis", "Payment Gateway Aman"],
  },
  {
    icon: Shield,
    title: "Kredibilitas",
    description: "Konsumen modern meriset online sebelum membeli. Website profesional adalah tanda legitimasi bisnis Anda.",
    tags: ["Trust Building", "Professional Image"],
  },
];

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.079-1.124l-.29-.173-3.023.866.847-3.088-.19-.317A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
  </svg>
);

const WhyDigitalSection = () => {
  return (
    <section className="py-20 overflow-hidden" id="layanan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Mengapa Go Digital?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Lebih dari Sekadar <span className="text-gradient">Eksistensi Online</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Website adalah investasi strategis yang mengubah cara Anda berinteraksi dengan pasar, menjual produk, dan membangun kepercayaan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-shadow duration-300 group"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-5"
                whileHover={{ rotate: -10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <r.icon className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{r.description}</p>
              <div className="flex flex-wrap gap-2">
                {r.tags.map((t, ti) => (
                  <motion.span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + ti * 0.1 + 0.3 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center bg-card rounded-2xl border border-border p-8 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <TrendingUp className="h-5 w-5 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold text-foreground">Siap untuk Bertumbuh?</span>
          </div>
          <p className="text-muted-foreground mb-5 max-w-md">
            Konsultasikan kebutuhan digital Anda hari ini dan mulai transformasi.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button asChild className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-glow">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Mulai Sekarang
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDigitalSection;