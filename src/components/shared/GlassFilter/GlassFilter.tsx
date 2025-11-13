import { CSSProperties, useId } from 'react';

export type GlassFilterProps = {
  className?: string;
  children?: React.ReactNode;
  /** Border radius (default: 0, or read from --glass-border-radius CSS variable) */
  borderRadius?: number | string;
  /** Frost blur amount in pixels (default: 12px, or read from --glass-frost CSS variable) */
  frost?: number;
  /** Refraction scale for displacement effect - 0..1 (default: 0.3, or read from --glass-refraction CSS variable) */
  refraction?: number;
  /** Dispersion strength for chromatic aberration - 0..1 (default: 0.15, or read from --glass-dispersion CSS variable) */
  dispersion?: number;
  /** Depth strength for shadow effect - 0..1 (default: 0.4, or read from --glass-depth CSS variable) */
  depth?: number;
  /** Light angle in degrees 0..360 (default: 120, or read from --glass-light-angle CSS variable) */
  lightAngle?: number;
  /** Light intensity - 0..1 highlight opacity (default: 0.35, or read from --glass-light-intensity CSS variable) */
  lightIntensity?: number;
  /** Tint color - hex, rgb, or rgba string (default: white, or read from --glass-tint-color CSS variable) */
  tintColor?: string;
  /** Tint opacity - 0 to 1 (default: 0.12, or read from --glass-tint-opacity CSS variable) */
  tintOpacity?: number;
  /** Highlight color - hex, rgb, or rgba string (default: white, or read from --glass-highlight-color CSS variable) */
  highlightColor?: string;
};

export const GlassFilter = ({
  children,
  className = '',
  borderRadius,
  frost = 25,
  refraction = 0.8,
  dispersion = 0.5,
  depth = 0.2,
  lightAngle = -45,
  lightIntensity = 0.8,
  tintColor = '#FFFFFF80',
  highlightColor = '#FFFFFF',
}: GlassFilterProps) => {
  const filterId = useId().replace(/:/g, '-');

  const radius =
    typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

  // Clamp helpers
  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
  const frostPx = Math.max(0, frost);
  const refractScale = Math.round(clamp01(refraction) * 25); // 0..25 reasonable range
  const dispersionStrength = clamp01(dispersion);
  const depthStrength = clamp01(depth);
  const lightOpacity = clamp01(lightIntensity);

  // Depth via layered drop shadows
  const depthShadow = `0 1px 2px rgba(0,0,0,${0.06 * depthStrength}), 0 8px 24px rgba(0,0,0,${0.18 * depthStrength})`;

  // Dispersion via faint colored inner glows (approximation)
  const dispersionShadow = `inset 0 0 0.5px rgba(255,0,0,${0.12 * dispersionStrength}), inset 0 0 0.5px rgba(0,150,255,${0.12 * dispersionStrength})`;

  // Light highlight gradient overlay rotated by angle
  const lightGradient = `linear-gradient(${lightAngle}deg, rgba(255,255,255,${0.55 * lightOpacity}) 0%, rgba(255,255,255,${0.18 * lightOpacity}) 20%, rgba(255,255,255,0) 55%)`;

  const cardStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: radius,
    background: 'transparent',
  };

  const glassFilterStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backdropFilter: `blur(${frostPx}px)`,
    WebkitBackdropFilter: `blur(${frostPx}px)`,
    filter: `url(#liquid-lens-${filterId})`,
    boxShadow: `${depthShadow}, ${dispersionShadow}`,
    borderRadius: 'inherit',
    pointerEvents: 'none',
    zIndex: 0,
  };

  const glassOverlayStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: tintColor,
    borderRadius: 'inherit',
    pointerEvents: 'none',
    zIndex: 1,
  };

  const glassSpecularStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    mixBlendMode: 'soft-light',
    pointerEvents: 'none',
    boxShadow: `inset 1px 1px 0 ${highlightColor},
    inset 0 0 5px ${highlightColor}`,
    zIndex: 2,
  };

  const glassContentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 3,
  };

  return (
    <>
      <svg style={{ display: 'none' }}>
        <filter
          id={`liquid-lens-${filterId}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feImage
            x="0"
            y="0"
            result="normalMap"
            href="data:image/svg+xml;utf8,
               <svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
                 <radialGradient id='nmap' cx='50%' cy='50%' r='50%'>
                   <stop offset='0%' stop-color='rgb(128,128,255)'/>
                   <stop offset='100%' stop-color='rgb(255,255,255)'/>
                 </radialGradient>
                 <rect width='100%' height='100%' fill='url(#nmap)'/>
               </svg>"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="normalMap"
            scale={refractScale}
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feMerge>
            <feMergeNode in="displaced" />
          </feMerge>
        </filter>
      </svg>

      {/* Glass card container */}
      <div className={className} style={cardStyle}>
        <div style={glassFilterStyle} aria-hidden />
        <div style={glassOverlayStyle} aria-hidden />
        <div style={glassSpecularStyle} aria-hidden />
        <div style={glassContentStyle}>{children}</div>
      </div>
    </>
  );
};
