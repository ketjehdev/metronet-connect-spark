import { Link } from "react-router-dom";
import { Wifi, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Wifi className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Metronet
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Solusi internet cepat dan andal untuk rumah dan bisnis Anda. Koneksi fiber optik
              berkecepatan tinggi dengan dukungan 24/7.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  to="/coverage"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Area Layanan
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Internet Rumah</li>
              <li className="text-muted-foreground text-sm">Internet Bisnis</li>
              <li className="text-muted-foreground text-sm">Dedicated Line</li>
              <li className="text-muted-foreground text-sm">IP Publik</li>
              <li className="text-muted-foreground text-sm">Cloud Hosting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Jl. Mangkubumi No. 27, Yogyakarta
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:02745559999"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (0274) 555-999
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@metronet.id"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@metronet.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Metronet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
