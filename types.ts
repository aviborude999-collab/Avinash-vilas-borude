import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  primaryAction: string;
  secondaryAction?: string;
  isPopular?: boolean;
}

export interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface IndustrialCapacityProps {
  capacity: string;
  users: string;
  idealFor: string;
}

export interface IndustrialProcessStep {
  step: number;
  title: string;
  desc: string;
}

export enum ServiceType {
  REPAIR = 'Repair & Service',
  INSTALLATION = 'Installation',
  AMC = 'AMC Plan',
  INDUSTRIAL = 'Industrial Inquiry'
}