import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
  speed?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, price, speed }: ServiceCardProps) => {
  return (
    <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
      <CardHeader>
        <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        {speed && (
          <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {speed}
          </div>
        )}
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        {price && (
          <div className="mb-4">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="text-muted-foreground">/bulan</span>
          </div>
        )}
        <Button variant="outline" className="w-full">
          Pilih Paket
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
