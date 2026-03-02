import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

type FooterLinkProps = {
  label: string;
};

const FooterLink = ({ label }: FooterLinkProps) => (
  <motion.li variants={fadeUp}>
    <a
      href="#"
      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group inline-block"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
    </a>
  </motion.li>
);

const ServerStatus = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono"
    >
      <span className="relative flex h-1.5 w-1.5">
        <motion.span
          key={count}
          className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
          initial={{ scale: 1, opacity: 0.75 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
      </span>
      Server: Running
    </motion.div>
  );
};

const Logo = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-2 mb-4 group cursor-default"
  >
    <motion.div
      className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center"
      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-primary-foreground font-bold text-sm">B</span>
    </motion.div>

    <span className="font-bold text-lg text-foreground">
      Bisa<span className="text-gradient">Web</span>
    </span>
  </motion.div>
);

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12 relative overflow-hidden">
      {/* Background Animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: "-5%", top: "-30%" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{ right: "5%", bottom: "-10%" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Logo />

            <motion.p
              className="text-sm text-muted-foreground max-w-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Partner terpercaya untuk solusi website dan digital marketing.
              Bergabung dengan klien sukses kami.
            </motion.p>
          </motion.div>

          {/* Layanan */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h4
              variants={fadeUp}
              className="font-semibold text-foreground mb-3 text-sm"
            >
              Layanan
            </motion.h4>

            <ul className="space-y-2">
              {[
                "Web Development",
                "Web Design",
                "SEO Optimization",
                "Digital Marketing",
              ].map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </ul>
          </motion.div>

          {/* Perusahaan */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h4
              variants={fadeUp}
              className="font-semibold text-foreground mb-3 text-sm"
            >
              Perusahaan
            </motion.h4>

            <ul className="space-y-2">
              {["Tentang Kami", "Portfolio", "Harga", "Kontak"].map(
                (item) => (
                  <FooterLink key={item} label={item} />
                )
              )}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.p className="text-xs text-muted-foreground">
            © 2025 BisaWeb. All rights reserved.
          </motion.p>

          <ServerStatus />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;