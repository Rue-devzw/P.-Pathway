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
};

export function getInstrumentIcon(instrument: 'Piano') {
    switch (instrument) {
        case 'Piano':
            return Icons.Piano;
    }
}
