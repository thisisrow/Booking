import { ReactNode } from 'react';
import { useTilt } from '../hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const tiltRef = useTilt();

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}