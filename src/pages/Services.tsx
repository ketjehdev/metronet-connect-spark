import { Home, Building2, Server, Globe, Shield, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Layanan Kami
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Pilihan paket internet yang sesuai dengan kebutuhan rumah dan bisnis Anda
          </p>
        </div>
      </section>

      {/* Home Internet Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket Internet Rumah</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Koneksi fiber optik untuk streaming, gaming, dan kerja dari rumah
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Home}
              title="Paket Starter"
              description="Cocok untuk browsing dan streaming HD"
              speed="30 Mbps"
              price="Rp 250.000"
              features={[
                "Kecepatan hingga 30 Mbps",
                "Unlimited kuota",
                "WiFi router gratis",
                "Support 24/7",
                "Free instalasi",
              ]}
            />
            <ServiceCard
              icon={Home}
              title="Paket Family"
              description="Ideal untuk keluarga dengan multiple devices"
              speed="50 Mbps"
              price="Rp 350.000"
              features={[
                "Kecepatan hingga 50 Mbps",
                "Unlimited kuota",
                "WiFi router dual band",
                "Support 24/7",
                "Free instalasi",
                "1 IP Publik (opsional)",
              ]}
            />
            <ServiceCard
              icon={Home}
              title="Paket Ultimate"
              description="Untuk gaming dan streaming 4K"
              speed="100 Mbps"
              price="Rp 500.000"
              features={[
                "Kecepatan hingga 100 Mbps",
                "Unlimited kuota",
                "WiFi router mesh",
                "Priority support",
                "Free instalasi",
                "1 IP Publik gratis",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Business Internet Packages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket Internet Bisnis</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dedicated line dengan SLA tinggi untuk operasional bisnis
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Building2}
              title="Business Lite"
              description="Untuk usaha kecil dan startup"
              speed="100 Mbps"
              price="Rp 2.500.000"
              features={[
                "Dedicated line 100 Mbps",
                "SLA 99.5%",
                "5 IP Publik",
                "Priority support",
                "Bandwidth garanteed 1:1",
              ]}
            />
            <ServiceCard
              icon={Building2}
              title="Business Pro"
              description="Solusi untuk perusahaan menengah"
              speed="500 Mbps"
              price="Rp 8.500.000"
              features={[
                "Dedicated line 500 Mbps",
                "SLA 99.9%",
                "10 IP Publik",
                "24/7 dedicated support",
                "Bandwidth garanteed 1:1",
                "Free monitoring tools",
              ]}
            />
            <ServiceCard
              icon={Building2}
              title="Business Enterprise"
              description="Untuk perusahaan besar dan enterprise"
              speed="1 Gbps"
              price="Custom"
              features={[
                "Dedicated line up to 1 Gbps",
                "SLA 99.99%",
                "Custom IP allocation",
                "Dedicated account manager",
                "Bandwidth garanteed 1:1",
                "Custom solutions",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Tambahan</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan digital Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <div className="mb-4 p-4 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">IP Publik</h3>
              <p className="text-muted-foreground mb-4">
                Static IP untuk akses remote, CCTV online, dan server hosting
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Static IP dedicated</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Full access & control</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Mulai dari Rp 100.000/bulan</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <div className="mb-4 p-4 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                <Server className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cloud Hosting</h3>
              <p className="text-muted-foreground mb-4">
                Web hosting dengan performa tinggi dan reliability maksimal
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>SSD storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Free SSL certificate</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <div className="mb-4 p-4 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">CCTV Cloud</h3>
              <p className="text-muted-foreground mb-4">
                Solusi monitoring CCTV dengan cloud storage dan akses remote
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Cloud recording & playback</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Mobile app access</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Motion detection alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 p-4 bg-primary-foreground/10 rounded-full w-fit mx-auto">
            <Headphones className="h-12 w-12 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Dukungan Pelanggan 24/7
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Tim teknis kami siap membantu Anda kapan saja untuk memastikan koneksi internet Anda
            selalu optimal
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
