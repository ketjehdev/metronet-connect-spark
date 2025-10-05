import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Zap, Shield, Clock, Home, Building2, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fiber.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-hero opacity-95"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 51, 102, 0.95), rgba(0, 102, 153, 0.9)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Solusi Internet Cepat dan Andal untuk Rumah dan Bisnis Anda
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Nikmati koneksi fiber optik berkecepatan tinggi dengan dukungan 24/7. Metronet
              memberikan pengalaman internet terbaik untuk kebutuhan digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/coverage">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Cek Area Layanan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Metronet?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan internet terbaik dengan teknologi terkini
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Kecepatan Tinggi",
                description: "Fiber optik hingga 1 Gbps untuk pengalaman internet tanpa hambatan",
              },
              {
                icon: Shield,
                title: "Koneksi Stabil",
                description: "Uptime 99.9% dengan infrastruktur jaringan yang handal",
              },
              {
                icon: Clock,
                title: "Support 24/7",
                description: "Tim teknis siap membantu Anda kapan saja, dimana saja",
              },
              {
                icon: Wifi,
                title: "Jangkauan Luas",
                description: "Tersedia di berbagai kota besar di Indonesia",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-md group"
              >
                <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Unggulan Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pilihan paket internet yang sesuai dengan kebutuhan Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Internet Rumah",
                description: "Paket internet fiber untuk kebutuhan streaming, gaming, dan kerja dari rumah",
                speed: "30-100 Mbps",
              },
              {
                icon: Building2,
                title: "Internet Bisnis",
                description: "Solusi dedicated line dengan SLA tinggi untuk operasional bisnis Anda",
                speed: "100 Mbps - 1 Gbps",
              },
              {
                icon: Server,
                title: "Layanan Tambahan",
                description: "IP Publik, Cloud Hosting, CCTV Cloud, dan IPTV untuk kebutuhan khusus",
                speed: "Custom",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <div className="mb-4 p-4 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="text-xl font-bold text-primary mb-3">{service.speed}</div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to="/services">
                  <Button variant="outline" className="w-full">
                    Lihat Detail
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Pelanggan Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ribuan pelanggan telah mempercayai Metronet untuk kebutuhan internet mereka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Budi Santoso",
                role: "Pemilik Bisnis Online",
                content: "Sejak menggunakan Metronet, bisnis online saya jadi lebih lancar. Kecepatan stabil dan support nya responsif banget!",
                rating: 5,
              },
              {
                name: "Siti Nurhaliza",
                role: "Ibu Rumah Tangga",
                content: "Anak-anak bisa belajar online dengan nyaman, saya bisa streaming tanpa buffering. Puas banget dengan layanan Metronet!",
                rating: 5,
              },
              {
                name: "Ahmad Wijaya",
                role: "IT Manager",
                content: "Untuk kebutuhan kantor, Metronet sangat reliable. SLA nya benar-benar dijaga dan tim teknisnya profesional.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-gradient-primary rounded-sm" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mudah Berlangganan</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              4 Langkah sederhana untuk menikmati internet cepat dari Metronet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Cek Area",
                description: "Pastikan lokasi Anda sudah terjangkau layanan Metronet",
              },
              {
                step: "02",
                title: "Pilih Paket",
                description: "Pilih paket internet yang sesuai dengan kebutuhan Anda",
              },
              {
                step: "03",
                title: "Daftar",
                description: "Isi formulir pendaftaran online atau hubungi customer service",
              },
              {
                step: "04",
                title: "Instalasi",
                description: "Tim teknisi kami akan melakukan instalasi di lokasi Anda",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl group-hover:shadow-glow transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "99.9%", label: "Uptime Jaringan" },
              { number: "50K+", label: "Pelanggan Puas" },
              { number: "20+", label: "Kota Terjangkau" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Upgrade Pengalaman Internet Anda?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang dan dapatkan penawaran terbaik untuk paket internet Metronet
          </p>
          <Link to="/contact">
            <Button variant="default" size="lg">
              Hubungi Kami Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
