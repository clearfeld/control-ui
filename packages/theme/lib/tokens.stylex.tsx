import * as stylex from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  background: {
    default: 'hsl(20 5.8824% 90%)',
    [DARK]: 'hsl(0 0% 3.1373%)'
  },
  foreground: {
    default: 'hsl(217.2414 32.5843% 17.4510%)',
    [DARK]: 'hsl(214.2857 31.8182% 91.3725%)'
  },
  card: {
    default: 'hsl(60 4.7619% 95.8824%)',
    [DARK]: 'hsl(25.7143 8.6420% 15.8824%)'
  },
  cardForeground: {
    default: 'hsl(217.2414 32.5843% 17.4510%)',
    [DARK]: 'hsl(214.2857 31.8182% 91.3725%)'
  },
  popover: {
    default: 'hsl(60 4.7619% 95.8824%)',
    [DARK]: 'hsl(25.7143 8.6420% 15.8824%)'
  },
  popoverForeground: {
    default: 'hsl(217.2414 32.5843% 17.4510%)',
    [DARK]: 'hsl(214.2857 31.8182% 91.3725%)'
  },
  primary: {
    default: 'hsl(238.7324 83.5294% 66.6667%)',
    [DARK]: 'hsl(203.0769 85.1528% 55.0980%)'
  },
  primaryForeground: {
    default: 'hsl(0 0% 100%)',
    [DARK]: 'hsl(0 0% 3.1373%)'
  },
  secondary: {
    default: 'hsl(24.0000 5.7471% 82.9412%)',
    [DARK]: 'hsl(25.7143 6.4220% 21.3725%)'
  },
  secondaryForeground: {
    default: 'hsl(215 13.7931% 34.1176%)',
    [DARK]: 'hsl(216.0000 12.1951% 83.9216%)'
  },
  muted: {
    default: 'hsl(20 5.8824% 90%)',
    [DARK]: 'hsl(25.7143 8.6420% 15.8824%)'
  },
  mutedForeground: {
    default: 'hsl(220 8.9362% 46.0784%)',
    [DARK]: 'hsl(217.8947 10.6145% 64.9020%)'
  },
  accent: {
    default: 'hsl(292.5000 44.4444% 92.9412%)',
    [DARK]: 'hsl(25.7143 5.1095% 26.8627%)'
  },
  accentForeground: {
    default: 'hsl(216.9231 19.1176% 26.6667%)',
    [DARK]: 'hsl(216.0000 12.1951% 83.9216%)'
  },
  destructive: {
    default: 'hsl(0 84.2365% 60.1961%)',
    [DARK]: 'hsl(0 84.2365% 60.1961%)'
  },
  destructiveForeground: {
    default: 'hsl(0 0% 100%)',
    [DARK]: 'hsl(30 11.1111% 10.5882%)'
  },
  border: {
    default: 'hsl(24.0000 5.7471% 82.9412%)',
    [DARK]: 'hsl(25.7143 6.4220% 21.3725%)'
  },
  input: {
    default: 'hsl(24.0000 5.7471% 82.9412%)',
    [DARK]: 'hsl(25.7143 6.4220% 21.3725%)'
  },
  ring: {
    default: 'hsl(238.7324 83.5294% 66.6667%)',
    [DARK]: 'hsl(203.0769 85.1528% 55.0980%)'
  },
  chart1: {
    default: 'hsl(238.7324 83.5294% 66.6667%)',
    [DARK]: 'hsl(234.4538 89.4737% 73.9216%)'
  },
  chart2: {
    default: 'hsl(243.3962 75.3555% 58.6275%)',
    [DARK]: 'hsl(238.7324 83.5294% 66.6667%)'
  },
  chart3: {
    default: 'hsl(244.5205 57.9365% 50.5882%)',
    [DARK]: 'hsl(243.3962 75.3555% 58.6275%)'
  },
  chart4: {
    default: 'hsl(243.6522 54.5024% 41.3725%)',
    [DARK]: 'hsl(244.5205 57.9365% 50.5882%)'
  },
  chart5: {
    default: 'hsl(242.1687 47.4286% 34.3137%)',
    [DARK]: 'hsl(243.6522 54.5024% 41.3725%)'
  },
  sidebar: {
    default: 'hsl(24.0000 5.7471% 82.9412%)',
    [DARK]: 'hsl(25.7143 6.4220% 21.3725%)'
  },
  sidebarForeground: {
    default: 'hsl(217.2414 32.5843% 17.4510%)',
    [DARK]: 'hsl(214.2857 31.8182% 91.3725%)'
  },
  sidebarPrimary: {
    default: 'hsl(238.7324 83.5294% 66.6667%)',
    [DARK]: 'hsl(234.4538 89.4737% 73.9216%)'
  },
  sidebarPrimaryForeground: {
    default: 'hsl(0 0% 100%)',
    [DARK]: 'hsl(30 11.1111% 10.5882%)'
  },
  sidebarAccent: {
    default: 'hsl(292.5000 44.4444% 92.9412%)',
    [DARK]: 'hsl(25.7143 5.1095% 26.8627%)'
  },
  sidebarAccentForeground: {
    default: 'hsl(216.9231 19.1176% 26.6667%)',
    [DARK]: 'hsl(216.0000 12.1951% 83.9216%)'
  },
  sidebarBorder: {
    default: 'hsl(24.0000 5.7471% 82.9412%)',
    [DARK]: 'hsl(25.7143 6.4220% 21.3725%)'
  },
  sidebarRing: {
    default: 'hsl(238.7324 83.5294% 66.6667%)',
    [DARK]: 'hsl(234.4538 89.4737% 73.9216%)'
  }
});

export const fonts = stylex.defineVars({
  sans: 'Plus Jakarta Sans, sans-serif',
  serif: 'Lora, serif',
  mono: 'Roboto Mono, monospace'
});

export const spacing = stylex.defineVars({
  none: '0',
  base: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
  xxl: '8rem'
  
});

export const radius = stylex.defineVars({
  sm: 'calc(1.25rem - 4px)',
  md: 'calc(1.25rem - 2px)', 
  lg: '1.25rem',
  xl: 'calc(1.25rem + 4px)'
});

export const shadows = stylex.defineVars({
  xxs: {
    default: '2px 2px 10px 4px hsl(240 4% 60% / 0.09)',
    [DARK]: '2px 2px 10px 4px hsl(0 0% 0% / 0.09)'
  },
  xs: {
    default: '2px 2px 10px 4px hsl(240 4% 60% / 0.09)',
    [DARK]: '2px 2px 10px 4px hsl(0 0% 0% / 0.09)'
  },
  sm: {
    default: '2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 1px 2px 3px hsl(240 4% 60% / 0.18)',
    [DARK]: '2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 1px 2px 3px hsl(0 0% 0% / 0.18)'
  },
  default: {
    default: '2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 1px 2px 3px hsl(240 4% 60% / 0.18)',
    [DARK]: '2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 1px 2px 3px hsl(0 0% 0% / 0.18)'
  },
  md: {
    default: '2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 2px 4px 3px hsl(240 4% 60% / 0.18)',
    [DARK]: '2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 2px 4px 3px hsl(0 0% 0% / 0.18)'
  },
  lg: {
    default: '2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 4px 6px 3px hsl(240 4% 60% / 0.18)',
    [DARK]: '2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 4px 6px 3px hsl(0 0% 0% / 0.18)'
  },
  xl: {
    default: '2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 8px 10px 3px hsl(240 4% 60% / 0.18)',
    [DARK]: '2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 8px 10px 3px hsl(0 0% 0% / 0.18)'
  },
  xxl: {
    default: '2px 2px 10px 4px hsl(240 4% 60% / 0.45)',
    [DARK]: '2px 2px 10px 4px hsl(0 0% 0% / 0.45)'
  }
});