import * as React from 'react';
import { Music, Drum, GitGraph } from 'lucide-react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  Piano: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 6h20v12H2z" />
      <path d="M6 6v12" />
      <path d="M10 6v12" />
      <path d="M14 6v12" />
      <path d="M18 6v12" />
      <path d="M4 9h2" />
      <path d="M8 9h2" />
      <path d="M12 9h2" />
      <path d="M16 9h2" />
    </svg>
  ),
  Guitar: GitGraph,
  Drums: Drum,
  Violin: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7.5 10.5 3 6" />
      <path d="M13.5 3 6 10.5" />
      <path d="m9 9-1.5 1.5" />
      <path d="M14.5 13c-1-2-3-3-4.5-3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5" />
      <path d="M14.5 8.5c1.5 0 3 .5 4.5 1.5" />
      <path d="m21 9-6 6" />
    </svg>
  ),
};

export function getInstrumentIcon(instrument: 'Piano' | 'Guitar' | 'Drums' | 'Violin') {
    switch (instrument) {
        case 'Piano':
            return Icons.Piano;
        case 'Guitar':
            return Icons.Guitar;
        case 'Drums':
            return Icons.Drums;
        case 'Violin':
            return Icons.Violin;
    }
}
