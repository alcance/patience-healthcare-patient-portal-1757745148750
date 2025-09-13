import { HeroSection } from '@/components/sections/HeroSection';
import { PortalSelector } from '@/components/sections/PortalSelector';
import { FeatureGrid } from '@/components/sections/FeatureGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <HeroSection 
          title="patience-healthcare-patient-portal-1757745148750"
          description="Keep going"
        />
        <PortalSelector />
        <FeatureGrid />
      </div>
    </main>
  );
}