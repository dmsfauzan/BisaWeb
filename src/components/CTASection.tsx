import { motion } from "framer-motion";
import { Globe, Code2, Wrench, TrendingUp, Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK_BASE =
  "https://wa.me/6282111053731?text=Halo%20BisaWeb%2C%20saya%20tertarik%20dengan%20paket%20";

const features = [
  { icon: Globe, label: "Domain & Hosting", sub: "Infrastruktur setup" },
  { icon: Code2, label: "Web Development", sub: "Teknologi modern" },
  { icon: Wrench, label: "Maintenance", sub: "Monitoring 24/7" },
  { icon: TrendingUp, label: "Pertumbuhan Digital", sub: "SEO & Marketing" },
];

const packages = [
  {
    id: "basic",
    icon: Zap,
    name: "Basic",
    tagline: "Mulai go digital dengan budget terjangkau",
    price: "900Rb",
    period: "/ proyek",
    highlight: false,
    badge: null,
    description:
      "Cocok untuk UMKM, freelancer, atau bisnis kecil yang baru ingin hadir secara online. Dapatkan website profesional dengan tampilan bersih dan informatif.",
    features: [
      "Landing page 1 halaman",
      "Desain responsif (mobile-friendly)",
      "Domain .com gratis 1 tahun",
      "Hosting gratis 1 tahun",
      "Formulir kontak",
      "Integrasi WhatsApp",
      "SEO dasar",
      "Revisi hingga 2x",
    ],
    cta: "Mulai Paket Basic",
    waText: "Basic",
  },
  {
    id: "standard",
    icon: Star,
    name: "Standard",
    tagline: "Solusi lengkap untuk bisnis berkembang",
    price: "1.6Jt",
    period: "/ proyek",
    highlight: true,
    badge: "Paling Populer",
    description:
      "Ideal untuk bisnis yang ingin tampil lebih profesional dengan fitur lengkap. Dilengkapi multi-halaman, blog, dan integrasi media sosial untuk memperkuat brand.",
    features: [
      "Website multi-halaman (5 halaman)",
      "Desain custom sesuai brand",
      "Domain .com gratis 1 tahun",
      "Hosting premium gratis 1 tahun",
      "Blog / artikel",
      "Integrasi media sosial",
      "Google Analytics",
      "SEO on-page lengkap",
      "Formulir kontak + WhatsApp",
      "Revisi hingga 5x",
      "Dukungan teknis 1 bulan",
    ],
    cta: "Pilih Paket Standard",
    waText: "Standard",
  },
  {
    id: "professional",
    icon: Crown,
    name: "Professional",
    tagline: "Performa maksimal untuk bisnis serius",
    price: "2.5Jt",
    period: "/ proyek",
    highlight: false,
    badge: "Terlengkap",
    description:
      "Dirancang untuk perusahaan dan bisnis skala menengah yang membutuhkan website bertenaga tinggi. Fitur e-commerce, sistem manajemen konten, dan performa optimal.",
    features: [
      "Website full custom (unlimited halaman)",
      "Desain UI/UX premium",
      "Domain + hosting premium gratis 1 tahun",
      "Sistem e-commerce / toko online",
      "Dashboard admin (CMS)",
      "Payment gateway integration",
      "SEO advanced + sitemap",
      "Kecepatan loading dioptimasi",
      "Keamanan SSL + backup rutin",
      "Integrasi API pihak ketiga",
      "Revisi unlimited",
      "Dukungan teknis 3 bulan",
    ],
    cta: "Pilih Paket Professional",
    waText: "Professional",
  },
];

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.079-1.124l-.29-.173-3.023.866.847-3.088-.19-.317A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
  </svg>
);

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="harga">
      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(25_95%_53%/0.06),transparent_60%)]"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Pilih Paket Anda
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Harga Transparan,{" "}
            <motion.span
              className="text-gradient inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Hasil Luar Biasa
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pilih paket yang sesuai kebutuhan bisnis Anda. Semua paket sudah termasuk domain, hosting, dan dukungan teknis.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 items-start">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            const waLink = `${WA_LINK_BASE}${encodeURIComponent(pkg.waText)}%20-%20Rp%20${encodeURIComponent(pkg.price)}.`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 80 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative rounded-2xl border p-7 flex flex-col transition-shadow duration-300 ${
                  pkg.highlight
                    ? "border-primary bg-primary/5 shadow-glow"
                    : "border-border bg-card hover:shadow-elevated"
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -8 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      pkg.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-foreground text-background"
                    }`}
                  >
                    {pkg.badge}
                  </motion.div>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      pkg.highlight ? "bg-primary" : "bg-primary/10"
                    }`}
                    whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        pkg.highlight ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </motion.div>
                  <div>
                    <p className="font-bold text-foreground text-lg leading-none">{pkg.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{pkg.tagline}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">Rp {pkg.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{pkg.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 border-b border-border pb-5">
                  {pkg.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {pkg.features.map((feat, fi) => (
                    <motion.li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + fi * 0.04 + 0.3 }}
                    >
                      <span
                        className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          pkg.highlight ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      {feat}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    asChild
                    className={`w-full gap-2 ${
                      pkg.highlight
                        ? "bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-glow"
                        : "variant-outline border border-border text-foreground hover:bg-primary/5 hover:border-primary/40"
                    }`}
                  >
                    <a href={waLink} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon size={14} />
                      {pkg.cta}
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature icons row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30, rotateY: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, type: "spring" }}
              whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-card rounded-xl border border-border p-5 text-center hover:shadow-elevated transition-shadow duration-300"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <f.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              </motion.div>
              <p className="font-semibold text-foreground text-sm">{f.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{f.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;