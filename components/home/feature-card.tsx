import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText: string;
  href: string;
  className?: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  actionText, 
  href,
  className = ''
}: FeatureCardProps) {
  return (
    <Card className={`p-4 sm:p-6 ${className}`}>
      <Icon className="mb-4 h-8 w-8 sm:h-10 sm:w-10 text-primary" />
      <h3 className="mb-2 text-lg sm:text-xl font-bold">{title}</h3>
      <p className="mb-4 text-sm sm:text-base text-muted-foreground">
        {description}
      </p>
      <Button variant="link" className="p-0" asChild>
        <a href={href}>{actionText} →</a>
      </Button>
    </Card>
  );
}