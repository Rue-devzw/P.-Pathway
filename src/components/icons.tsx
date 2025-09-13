import * as React from 'react';

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
  Guitar: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18.5 3.5a7.5 7.5 0 1 0-15 0" />
      <path d="M9.5 12.5l-6 6" />
      <path d="M14.5 12.5l6 6" />
      <path d="M12 15V3" />
      <path d="M9 7h6" />
    </svg>
  ),
  Drums: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="18" r="3" />
      <path d="M12 8v7" />
      <path d="M19.07 13.43A8.5 8.5 0 0 0 12 5" />
      <path d="M4.93 13.43A8.5 8.5 0 0 1 12 5" />
      <path d="M12 5v0" />
      <path d="M12 18v0" />
      <path d="M4.93 13.43l-1.41 1.41" />
      <path d="M19.07 13.43l1.41 1.41" />
    </svg>
  ),
  Violin: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 12c0-5-3-9-3-9s-3 4-3 9c0 4.2 2.7 8 6 8s6-3.8 6-8c0-5-3-9-3-9s-3 4-3 9z" />
      <path d="M10 12h4" />
      <path d="M12 12v10" />
      <path d="M8 22h8" />
      <path d="M5 4.5L19 18.5" />
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
