import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Pesan Terkirim!",
      description: "Tim kami akan segera menghubungi Anda. Terima kasih!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Hubungi Kami
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Kami siap membantu Anda. Hubungi tim kami untuk informasi lebih lanjut atau konsultasi
            kebutuhan internet Anda
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Informasi Kontak</h2>
              <p className="text-muted-foreground mb-8">
                Hubungi kami melalui berbagai channel yang tersedia. Tim customer service kami siap
                melayani Anda 24/7.
              </p>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4 p-4 bg-gradient-card rounded-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Kantor Pusat</h3>
                    <p className="text-muted-foreground text-sm">
                      Jl. Mangkubumi No. 27, Yogyakarta 55233
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-gradient-card rounded-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telepon & WhatsApp</h3>
                    <a
                      href="tel:02745559999"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                    >
                      (0274) 555-999
                    </a>
                    <a
                      href="https://wa.me/628123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                    >
                      +62 812-3456-7890 (WhatsApp)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-gradient-card rounded-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:info@metronet.id"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                    >
                      info@metronet.id
                    </a>
                    <a
                      href="mailto:support@metronet.id"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                    >
                      support@metronet.id
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 bg-gradient-card rounded-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Jam Operasional</h3>
                    <p className="text-muted-foreground text-sm">
                      Senin - Jumat: 08.00 - 17.00 WIB
                    </p>
                    <p className="text-muted-foreground text-sm">Sabtu: 08.00 - 14.00 WIB</p>
                    <p className="text-muted-foreground text-sm">
                      Customer Support: 24/7 (Online)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-card p-8 rounded-xl border border-border">
                <h2 className="text-3xl font-bold mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">
                      Nama Lengkap <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+62 812-3456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Pesan <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tuliskan pertanyaan atau pesan Anda..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Kirim Pesan
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Dengan mengirim pesan ini, Anda menyetujui kebijakan privasi kami
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kantor Cabang Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kunjungi kantor cabang Metronet terdekat di kota Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                city: "Yogyakarta",
                address: "Jl. Mangkubumi No. 27",
                phone: "(0274) 555-999",
                hours: "08:00 - 17:00 WIB",
              },
              {
                city: "Solo",
                address: "Jl. Slamet Riyadi No. 45",
                phone: "(0271) 555-888",
                hours: "08:00 - 17:00 WIB",
              },
              {
                city: "Semarang",
                address: "Jl. Pemuda No. 123",
                phone: "(024) 555-777",
                hours: "08:00 - 17:00 WIB",
              },
              {
                city: "Surabaya",
                address: "Jl. Basuki Rahmat No. 88",
                phone: "(031) 555-666",
                hours: "08:00 - 17:00 WIB",
              },
              {
                city: "Jakarta",
                address: "Jl. Sudirman No. 200",
                phone: "(021) 555-555",
                hours: "08:00 - 17:00 WIB",
              },
              {
                city: "Bandung",
                address: "Jl. Asia Afrika No. 50",
                phone: "(022) 555-444",
                hours: "08:00 - 17:00 WIB",
              },
            ].map((office, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-md"
              >
                <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lokasi Kantor Pusat</h2>
            <p className="text-muted-foreground text-lg">Kunjungi kantor pusat kami di Yogyakarta</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0199777878544!2d110.36556931477642!3d-7.790794694389451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5828f5e3c441%3A0x5647a91b6c7dbf86!2sJl.%20Mangkubumi%2C%20Yogyakarta!5e0!3m2!1sen!2sid!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Metronet Office Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum sebelum menghubungi kami
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Bagaimana cara mendaftar layanan Metronet?",
                answer: "Anda bisa mendaftar melalui website, telepon ke (0274) 555-999, atau datang langsung ke kantor cabang terdekat. Tim kami akan membantu proses pendaftaran Anda.",
              },
              {
                question: "Berapa lama waktu yang dibutuhkan untuk instalasi?",
                answer: "Setelah pendaftaran disetujui, instalasi biasanya dilakukan dalam 3-5 hari kerja. Proses instalasi sendiri memakan waktu 2-4 jam.",
              },
              {
                question: "Apa yang harus saya lakukan jika internet bermasalah?",
                answer: "Hubungi customer service kami 24/7 melalui telepon (0274) 555-999 atau WhatsApp +62 812-3456-7890. Tim teknis kami akan segera membantu Anda.",
              },
              {
                question: "Apakah bisa pindah alamat?",
                answer: "Ya, layanan bisa dipindah ke alamat baru (dalam area coverage). Silakan hubungi customer service minimal 7 hari sebelum pindah.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
