'use client';

import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pjcreativearts@gmail.com',
    href: 'mailto:pjcreativearts@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(954) 951-1084',
    href: 'tel:+19459511084'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Los Angeles, CA, New York City, NY, Miami, FL',
    // href: 'https://maps.google.com/?q=Los+Angeles+CA'
  },
  {
    icon: Globe,
    label: 'Instagram',
    value: '@pbjcomedy',
    href: 'https://www.instagram.com/pbjcomedy/'
  }
];

export function ContactInfo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {contactDetails.map(({ icon: Icon, label, value, href }) => (
        <Card key={label} className="p-4">
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-primary transition-colors"
          >
            <Icon className="h-5 w-5" />
            <div>
              <div className="font-medium">{label}</div>
              <div className="text-sm text-muted-foreground">{value}</div>
            </div>
          </a>
        </Card>
      ))}
    </div>
  );
}