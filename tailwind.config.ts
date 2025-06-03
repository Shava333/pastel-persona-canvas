
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				lavender: {
					50: '#f8f7ff',
					100: '#f0edff',
					200: '#e4dfff',
					300: '#d1c7ff',
					400: '#b8a5ff',
					500: '#9b7fff',
					600: '#8b5cf6',
					700: '#7c3aed',
					800: '#6d28d9',
					900: '#5b21b6'
				},
				mint: {
					50: '#f0fdf9',
					100: '#ccfdf7',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#14b8a6',
					600: '#0d9488',
					700: '#0f766e',
					800: '#115e59',
					900: '#134e4a'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'50%': {
						transform: 'translateY(-15px) translateX(5px)'
					}
				},
				'float-medium': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'50%': {
						transform: 'translateY(-12px) translateX(-8px)'
					}
				},
				'float-fast': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'50%': {
						transform: 'translateY(-8px) translateX(10px)'
					}
				},
				'float-vertical': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'float-horizontal': {
					'0%, 100%': {
						transform: 'translateX(0px)'
					},
					'50%': {
						transform: 'translateX(15px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.8'
					},
					'50%': {
						opacity: '1'
					}
				},
				'pulse-particle': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'wiggle': {
					'0%, 100%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'wave-horizontal': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100vw)'
					}
				},
				'wave-horizontal-reverse': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(-100vw)'
					}
				},
				'wave-vertical': {
					'0%': {
						transform: 'translateY(-100%)'
					},
					'100%': {
						transform: 'translateY(100vh)'
					}
				},
				'wave-vertical-reverse': {
					'0%': {
						transform: 'translateY(100%)'
					},
					'100%': {
						transform: 'translateY(-100vh)'
					}
				},
				'orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(30px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(30px) rotate(-360deg)'
					}
				},
				'orbit-reverse': {
					'0%': {
						transform: 'rotate(360deg) translateX(25px) rotate(-360deg)'
					},
					'100%': {
						transform: 'rotate(0deg) translateX(25px) rotate(0deg)'
					}
				},
				'grid-shift': {
					'0%, 100%': {
						transform: 'translate(0, 0)'
					},
					'50%': {
						transform: 'translate(30px, 30px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 4s ease-in-out infinite',
				'float-medium': 'float-medium 3.5s ease-in-out infinite',
				'float-fast': 'float-fast 2.5s ease-in-out infinite',
				'float-vertical': 'float-vertical 2s ease-in-out infinite',
				'float-horizontal': 'float-horizontal 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'pulse-particle': 'pulse-particle 1.5s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'wave-horizontal': 'wave-horizontal 8s linear infinite',
				'wave-horizontal-reverse': 'wave-horizontal-reverse 10s linear infinite',
				'wave-vertical': 'wave-vertical 12s linear infinite',
				'wave-vertical-reverse': 'wave-vertical-reverse 9s linear infinite',
				'orbit': 'orbit 15s linear infinite',
				'orbit-reverse': 'orbit-reverse 12s linear infinite',
				'grid-shift': 'grid-shift 20s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
