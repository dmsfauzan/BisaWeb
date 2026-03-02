import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const WA_LINK =
  "https://wa.me/6282111053731?text=Halo%20BisaWeb%2C%20saya%20punya%20pertanyaan%20mengenai%20layanan%20website.";

const faqs = [
  {
    q: "Berapa biaya pembuatan website?",
    a: "Biaya bervariasi tergantung pada kompleksitas, fitur, dan desain yang diinginkan. Kami menyediakan paket mulai dari website sederhana hingga kustom sesuai kebutuhan bisnis Anda.",
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Rata-rata 2-4 minggu tergantung kompleksitas proyek. Website sederhana bisa selesai dalam 1-2 minggu, sedangkan proyek custom membutuhkan 4-8 minggu.",
  },
  {
    q: "Apakah website saya akan mobile-friendly?",
    a: "Tentu! Semua website yang kami buat sudah responsive dan dioptimasi untuk semua perangkat, dari desktop hingga smartphone.",
  },
  {
    q: "Apakah saya bisa mengelola konten website sendiri?",
    a: "Ya, kami menyediakan panel admin yang mudah digunakan sehingga Anda bisa mengupdate konten secara mandiri tanpa pengetahuan teknis.",
  },
  {
    q: "Apakah layanan termasuk domain dan hosting?",
    a: "Ya, kami menyediakan paket lengkap termasuk domain, hosting, dan SSL certificate untuk keamanan website Anda.",
  },
  {
    q: "Apakah website saya akan SEO-friendly?",
    a: "Semua website dibangun dengan struktur SEO native, termasuk optimasi meta tags, sitemap, dan core web vitals.",
  },
];

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="mr-2 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.079-1.124l-.29-.173-3.023.866.847-3.088-.19-.317A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
  </svg>
);

const FAQSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Pusat Informasi
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hal-hal yang sering ditanyakan seputar layanan Website Development. Kami percaya transparansi adalah kunci awal kerjasama yang baik.
            </p>
            <div className="bg-background rounded-xl border border-border p-6">
              <p className="font-semibold text-foreground mb-2">Punya Pertanyaan Lain?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Tim kami siap mendengarkan kebutuhan spesifik Anda.
              </p>
              <Button asChild className="bg-gradient-hero text-primary-foreground hover:opacity-90 w-full">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Hubungi Kami Sekarang
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-card"
                >
                  <AccordionTrigger className="text-foreground text-left font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;