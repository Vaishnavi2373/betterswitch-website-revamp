import React from 'react';
import { colors } from '../../lib/constants';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizes = {
  small: 24,
  medium: 32,
  large: 48,
};

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const dimension = sizes[size];

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background rounded square */}
      <rect
        x="8"
        y="8"
        width="240"
        height="240"
        rx="44"
        ry="44"
        fill={colors.primary}
      />

      {/* Big 'b' letter */}
      <text
        x="128"
        y="146"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFFFFF"
        fontSize="220"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
      >
        b
      </text>
    </svg>
  );
};

export default Logo;
