import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const WA_NUMBER = "6282111053731";

// Floating particle component
const FloatingDot = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
    style={{ left: x, top: y }}
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
    transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

// Animated input
const AnimatedInput = ({
  label, type = "text", placeholder, index, value, onChange,
}: {
  label: string; type?: string; placeholder: string; index: number; value: string; onChange: (v: string) => void;
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative"
    >
      <motion.label
        className="block text-sm font-medium mb-2 transition-colors duration-300"
        animate={{ color: focused ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
      >
        {label}
      </motion.label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none transition-all duration-300"
          style={{
            boxShadow: focused ? "0 0 0 2px hsl(var(--primary) / 0.3), 0 4px 20px hsl(var(--primary) / 0.1)" : "none",
            borderColor: focused ? "hsl(var(--primary))" : undefined,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/40 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        {value && !focused && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center"
          >
            <motion.svg width="10" height="8" viewBox="0 0 10 8">
              <motion.path
                d="M1 4L3.5 6.5L9 1"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Animated textarea
const AnimatedTextarea = ({
  index, value, onChange,
}: {
  index: number; value: string; onChange: (v: string) => void;
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative"
    >
      <motion.label
        className="block text-sm font-medium mb-2 transition-colors duration-300"
        animate={{ color: focused ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
      >
        Message
      </motion.label>
      <div className="relative">
        <textarea
          rows={5}
          placeholder="Deskripsi Project"
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none transition-all duration-300 resize-none"
          style={{
            boxShadow: focused ? "0 0 0 2px hsl(var(--primary) / 0.3), 0 4px 20px hsl(var(--primary) / 0.1)" : "none",
            borderColor: focused ? "hsl(var(--primary))" : undefined,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/40 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// Contact info card with hover tilt
const ContactCard = ({ icon: Icon, text, index }: { icon: any; text: string; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-30, 30], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      whileHover={{ scale: 1.03 }}
      className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm cursor-default"
    >
      <motion.div
        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <Icon className="text-primary h-5 w-5" />
      </motion.div>
      <span className="text-muted-foreground text-sm">{text}</span>
    </motion.div>
  );
};

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.079-1.124l-.29-.173-3.023.866.847-3.088-.19-.317A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
  </svg>
);

// Submit — bundles form data into WA message
const SubmitButton = ({ name, email, phone, message }: { name: string; email: string; phone: string; message: string }) => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleClick = () => {
    if (sending || sent) return;
    setSending(true);

    const text = [
      `Halo BisaWeb, saya ingin konsultasi! 👋`,
      ``,
      `*Nama:* ${name || "-"}`,
      `*Email:* ${email || "-"}`,
      `*WhatsApp:* ${phone || "-"}`,
      `*Pesan:* ${message || "-"}`,
    ].join("\n");

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      setTimeout(() => setSent(false), 3000);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Button
        type="button"
        size="lg"
        onClick={handleClick}
        className="w-full relative overflow-hidden bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-glow"
      >
        <motion.span
          className="absolute inset-0 bg-white/10 rounded-lg"
          initial={{ scale: 0, opacity: 0.5 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          className="flex items-center justify-center gap-2"
          animate={sending ? { x: [-2, 2, -2, 2, 0] } : {}}
          transition={{ duration: 0.3, repeat: sending ? Infinity : 0 }}
        >
          {sent ? (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Membuka WhatsApp...
            </motion.span>
          ) : sending ? (
            <motion.span className="flex items-center gap-2">
              <motion.div
                className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
              Menyiapkan...
            </motion.span>
          ) : (
            <span className="flex items-center gap-2">
              <WhatsAppIcon />
              Kirim via WhatsApp
            </span>
          )}
        </motion.span>
      </Button>
    </motion.div>
  );
};

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const dots = [
    { x: "5%", y: "15%", delay: 0 },
    { x: "15%", y: "70%", delay: 0.8 },
    { x: "85%", y: "20%", delay: 1.2 },
    { x: "90%", y: "75%", delay: 0.4 },
    { x: "50%", y: "90%", delay: 1.8 },
    { x: "30%", y: "5%", delay: 2.2 },
  ];

  return (
    <section id="kontak" className="py-24 bg-background relative overflow-hidden">
      {dots.map((d, i) => (
        <FloatingDot key={i} delay={d.delay} x={d.x} y={d.y} />
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-primary/8 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              💬
            </motion.span>
            Hubungi Kami
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Start a{" "}
              <motion.span
                className="text-primary relative inline-block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Conversation.
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
              </motion.span>
            </motion.h2>
          </div>

          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Ceritakan ide besar Anda. Kami siap mendengarkan.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-foreground mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact Information
            </motion.h3>
            <div className="space-y-4">
              <ContactCard icon={Mail} text="hello@bisaweb.com" index={0} />
              <ContactCard icon={Phone} text="+62 821-1105-3731" index={1} />
              <ContactCard icon={MapPin} text="Remote & On-site Available" index={2} />
            </div>
            <motion.div
              className="mt-10 p-5 rounded-2xl border border-dashed border-primary/20 bg-primary/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-foreground">Tersedia Sekarang</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Kami membalas pesan dalam waktu{" "}
                <strong className="text-foreground">kurang dari 24 jam</strong>. Jangan ragu untuk mengirim pesan!
              </p>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <AnimatedInput label="Name" placeholder="Your name" index={0} value={name} onChange={setName} />
            <AnimatedInput label="Email" type="email" placeholder="your@email.com" index={1} value={email} onChange={setEmail} />
            <AnimatedInput label="WhatsApp" placeholder="No. HandPhone" index={2} value={phone} onChange={setPhone} />
            <AnimatedTextarea index={3} value={message} onChange={setMessage} />
            <SubmitButton name={name} email={email} phone={phone} message={message} />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;