/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core component colors (referencing Oklch CSS variables)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // Chart colors
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },

        // Sidebar colors
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },

        // You can still keep any static hex colors here if needed, but they won't be dynamic
        // Example: 'my-static-blue': '#123456',
      },
      fontSize: {
        "2xs": "0.6875rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.375rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "2.8125rem",
        "6xl": "3.5625rem",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      boxShadow: {
        "M3/Elevation Light/1":
          "0px 1px 3px 1px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
        "M3/Elevation Light/2":
          "0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
        "M3/Elevation Light/3":
          "0px 1px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)",
        "M3/Elevation Light/4":
          "0px 2px 3px 0px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15)",
        "M3/Elevation Light/5":
          "0px 4px 4px 0px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)",
        "M3/Elevation Dark/1":
          "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)",
        "M3/Elevation Dark/2":
          "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)",
        "M3/Elevation Dark/3":
          "0px 1px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)",
        "M3/Elevation Dark/4":
          "0px 2px 3px 0px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15)",
        "M3/Elevation Dark/5":
          "0px 4px 4px 0px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        "rounded-0": "NaNrem",
        "rounded-1": "NaNrem",
        "rounded-2": "NaNrem",
        "rounded-3": "NaNrem",
        "rounded-4": "NaNrem",
        "rounded-5": "NaNrem",
        "rounded-6": "NaNrem",
        "rounded-7": "NaNrem",
        "rounded-8": "NaNrem",
        "rounded-9": "NaNrem",
        "rounded-10": "NaNrem",
        "rounded-11": "NaNrem",
        "rounded-12": "NaNrem",
        "rounded-13": "NaNrem",
        "rounded-14": "NaNrem",
        "rounded-15": "NaNrem",
        "rounded-16": "NaNrem",
        "rounded-17": "NaNrem",
        "rounded-18": "NaNrem",
        "rounded-19": "NaNrem",
        "rounded-20": "NaNrem",
        "rounded-21": "NaNrem",
        "rounded-22": "NaNrem",
        "rounded-23": "NaNrem",
        "rounded-24": "NaNrem",
        "rounded-25": "NaNrem",
        "rounded-26": "NaNrem",
        "rounded-27": "NaNrem",
        "rounded-28": "NaNrem",
        "rounded-29": "NaNrem",
        "rounded-30": "NaNrem",
        "rounded-31": "NaNrem",
      },
    },
  },
  plugins: [],
};
