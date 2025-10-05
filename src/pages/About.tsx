import { Target, Eye, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-office.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-hero opacity-95"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 51, 102, 0.95), rgba(0, 102, 153, 0.9)), url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Tentang Metronet
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Penyedia layanan internet terpercaya dengan jaringan fiber optik berkualitas tinggi
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Profil Perusahaan</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-4">
                Metronet adalah penyedia layanan internet berbasis fiber optik yang berdiri sejak
                2018. Kami berkomitmen memberikan koneksi internet cepat, stabil, dan terjangkau
                bagi pelanggan rumah, bisnis, serta institusi di berbagai kota di Indonesia.
              </p>
              <p className="text-muted-foreground text-lg mb-4">
                Dengan infrastruktur jaringan yang modern dan tim teknis yang berpengalaman,
                Metronet terus berinovasi untuk memberikan layanan terbaik kepada lebih dari 50.000
                pelanggan di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-muted-foreground">
                Menjadi penyedia layanan internet terpercaya dengan jaringan yang menjangkau seluruh
                Indonesia, memberikan koneksi berkualitas tinggi untuk mendukung transformasi
                digital masyarakat.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <p className="text-muted-foreground">
                Memberikan layanan internet berkualitas, inovatif, dan berorientasi pada kepuasan
                pelanggan dengan dukungan teknologi terkini dan tim profesional yang siap melayani
                24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nilai-Nilai Perusahaan</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Prinsip yang kami pegang dalam memberikan layanan terbaik
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Kualitas Terbaik",
                description:
                  "Berkomitmen memberikan layanan internet dengan standar kualitas tertinggi",
              },
              {
                icon: Users,
                title: "Fokus Pelanggan",
                description:
                  "Kepuasan pelanggan adalah prioritas utama dalam setiap layanan kami",
              },
              {
                icon: Target,
                title: "Inovasi Berkelanjutan",
                description:
                  "Terus berinovasi dengan teknologi terkini untuk pengalaman internet yang lebih baik",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-md group text-center"
              >
                <div className="mb-4 p-4 bg-gradient-primary rounded-lg w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perjalanan Kami</h2>
            <p className="text-muted-foreground text-lg">Milestones penting Metronet</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2018",
                  title: "Pendirian Metronet",
                  description: "Metronet didirikan dengan visi memberikan internet berkualitas tinggi",
                },
                {
                  year: "2019",
                  title: "Ekspansi Jaringan",
                  description: "Perluasan jaringan fiber optik ke 5 kota besar",
                },
                {
                  year: "2021",
                  title: "50.000 Pelanggan",
                  description: "Mencapai milestone 50.000 pelanggan aktif",
                },
                {
                  year: "2023",
                  title: "Inovasi Layanan",
                  description: "Meluncurkan paket dedicated line dan layanan cloud hosting",
                },
                {
                  year: "2025",
                  title: "Ekspansi Nasional",
                  description: "Menjangkau lebih dari 20 kota di seluruh Indonesia",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-md group-hover:shadow-glow transition-all duration-300">
                      {milestone.year.slice(2)}
                    </div>
                    {index !== 4 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-8 flex-1">
                    <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
                      <div className="text-sm text-muted-foreground mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tim Profesional Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dipimpin oleh para ahli berpengalaman di bidang telekomunikasi dan jaringan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Ir. Bambang Setiawan",
                role: "CEO & Founder",
                description: "20+ tahun pengalaman di industri telekomunikasi",
              },
              {
                name: "Dra. Siti Rahayu, M.T.",
                role: "CTO",
                description: "Expert dalam infrastruktur fiber optik",
              },
              {
                name: "Ahmad Fauzi, S.Kom",
                role: "Head of Customer Service",
                description: "Fokus pada kepuasan dan pengalaman pelanggan",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-3xl group-hover:shadow-glow transition-all duration-300">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Penghargaan & Sertifikasi</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Komitmen kami terhadap kualitas telah diakui berbagai institusi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "ISO 9001:2015", desc: "Quality Management" },
              { title: "Best ISP 2024", desc: "Indonesia Telecom Award" },
              { title: "Customer Choice", desc: "Service Excellence" },
              { title: "Green Technology", desc: "Eco-Friendly Network" },
            ].map((award, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-md text-center group"
              >
                <div className="mb-3 p-3 bg-gradient-primary rounded-lg w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-1">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
