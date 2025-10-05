import { MapPin, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Coverage = () => {
  const cities = [
    {
      name: "Yogyakarta",
      areas: ["Sleman", "Kota Yogyakarta", "Bantul", "Ngaglik", "Depok"],
      status: "active",
    },
    {
      name: "Solo",
      areas: ["Laweyan", "Banjarsari", "Jebres", "Pasar Kliwon", "Serengan"],
      status: "active",
    },
    {
      name: "Semarang",
      areas: ["Semarang Tengah", "Semarang Barat", "Semarang Selatan", "Tembalang", "Banyumanik"],
      status: "active",
    },
    {
      name: "Surabaya",
      areas: ["Surabaya Pusat", "Surabaya Timur", "Surabaya Barat", "Rungkut", "Gubeng"],
      status: "active",
    },
    {
      name: "Jakarta",
      areas: ["Jakarta Selatan", "Jakarta Pusat", "Jakarta Barat", "Kebayoran", "Sudirman"],
      status: "active",
    },
    {
      name: "Bandung",
      areas: ["Bandung Utara", "Bandung Selatan", "Dago", "Setiabudhi", "Ciumbuleuit"],
      status: "coming-soon",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Area Layanan
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Metronet telah menjangkau berbagai kota besar di Indonesia dengan jaringan fiber optik
            berkualitas tinggi
          </p>
        </div>
      </section>

      {/* Coverage Map Info */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-card p-6 rounded-lg border border-border max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Cek Ketersediaan Layanan</h3>
                <p className="text-muted-foreground mb-4">
                  Lihat daftar area yang sudah terjangkau layanan Metronet di bawah, atau hubungi
                  kami untuk informasi lebih detail tentang ketersediaan di lokasi Anda.
                </p>
                <Link to="/contact">
                  <Button variant="default">Hubungi Kami untuk Cek Lokasi</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kota yang Telah Terjangkau</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Jangkauan layanan Metronet terus berkembang untuk melayani lebih banyak pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cities.map((city, index) => (
              <div
                key={index}
                className={`bg-gradient-card p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                  city.status === "active"
                    ? "border-border hover:border-primary"
                    : "border-border/50 opacity-75"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{city.name}</h3>
                  </div>
                  {city.status === "active" ? (
                    <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                      <CheckCircle className="h-4 w-4" />
                      <span>Aktif</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-amber-600 text-xs font-semibold">
                      <Clock className="h-4 w-4" />
                      <span>Segera</span>
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                    Area yang Terjangkau:
                  </h4>
                  <ul className="space-y-1">
                    {city.areas.map((area, areaIndex) => (
                      <li key={areaIndex} className="flex items-start gap-2">
                        <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {city.status === "active" && (
                  <Link to="/contact" className="block mt-4">
                    <Button variant="outline" className="w-full" size="sm">
                      Daftar Sekarang
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Info */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ekspansi Berkelanjutan</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Kami terus memperluas jangkauan jaringan fiber optik ke lebih banyak kota dan area di
              seluruh Indonesia. Jika lokasi Anda belum terjangkau, hubungi kami untuk mendapatkan
              informasi tentang rencana ekspansi berikutnya.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Hubungi Tim Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "20+", label: "Kota Terjangkau" },
              { number: "50.000+", label: "Pelanggan Aktif" },
              { number: "99.9%", label: "Uptime Jaringan" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-card p-6 rounded-xl border border-border text-center hover:border-primary transition-all duration-300 hover:shadow-md"
              >
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proses Instalasi Mudah</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dari survey hingga aktivasi, kami pastikan proses berjalan lancar dan profesional
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "1",
                  title: "Survey Lokasi",
                  description: "Tim kami akan melakukan survey untuk memastikan kesiapan infrastruktur di lokasi Anda",
                },
                {
                  step: "2",
                  title: "Instalasi Perangkat",
                  description: "Teknisi profesional akan memasang fiber optik dan router dengan rapi dan aman",
                },
                {
                  step: "3",
                  title: "Testing Koneksi",
                  description: "Kami melakukan testing menyeluruh untuk memastikan koneksi bekerja optimal",
                },
                {
                  step: "4",
                  title: "Aktivasi & Edukasi",
                  description: "Aktivasi layanan dan penjelasan penggunaan kepada pelanggan",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 group-hover:shadow-glow transition-all duration-300">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cerita Sukses Pelanggan</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Bagaimana Metronet membantu pelanggan mencapai tujuan mereka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "CV. Digital Kreatif",
                location: "Yogyakarta",
                story: "Dengan Metronet Business Pro, produktivitas tim kami meningkat 40%. Video conference lancar dan upload project ke client jadi lebih cepat.",
              },
              {
                name: "Keluarga Wijaya",
                location: "Solo",
                story: "3 anak sekolah online bersamaan, orang tua WFH, streaming Netflix malam hari - semua lancar dengan paket Family 50 Mbps!",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-gradient-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <p className="text-sm text-primary">{story.location}</p>
                </div>
                <p className="text-muted-foreground italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coverage;
