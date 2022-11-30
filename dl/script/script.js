tailwind.config = {
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          xsm: "370px",
          sm: "440px",
          md: "560px",
          lg: "768px",
          xl: "960px",
          "2xl": "1180px",
        },
      },
      colors: {
        "color-D52": "#4D4D52",
        "color-2B9": "#7872B9",
        "color-CFF": "#F9FCFF",
        "color-1FF": "#CDE1FF",
        "color-5FF": "#EBF5FF",
        "color-6F7": "#F1E6F7",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "size-16": [
          "16px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        "size-18": [
          "18px",
          {
            lineHeight: "25px",
            fontWeight: "800",
          },
        ],
        "size-18w5": [
          "18px",
          {
            lineHeight: "25px",
            fontWeight: "500",
          },
        ],
        "size-14": [
          "14px",
          {
            lineHeight: "18px",
            fontWeight: "500",
          },
        ],
        "size-40": [
          "40px",
          {
            lineHeight: "52px",
            letterSpacing: "2%",
            fontWeight: "800",
          },
        ],
        "size-24": [
          "24px",
          {
            lineHeight: "33.6px",
            letterSpacing: "1%",
            fontWeight: "500",
          },
        ],
        "size-24w7": [
          "24px",
          {
            lineHeight: "33.6px",
            letterSpacing: "1%",
            fontWeight: "700",
          },
        ],
      },
      maxWidth: {
        "maxWidth-128": "128.13px",
        "maxWidth-250": "250px",
        "maxWidth-280": "280px",
        "maxWidth-300": "300px",
        "maxWidth-400": "400.25px",
        "maxWidth-454": "454px",
        "maxWidth-500": "500.3px",
        "maxWidth-580": "580px",
        "maxWidth-600": "600px",
        "maxWidth-675": "675px",
        "maxWidth-940": "940px",
        "maxWidth-1160": "1160px",
      },
      boxShadow: {
        Shadow: "7px 10px 2px 1px rgba(0, 0, 0, 0.3)",
      },
    },
    screens: {
      xsm: "370px",
      sm: "440px",
      md: "560px",
      lg: "768px",
      xl: "960px",
      "2xl": "1180px",
    },
    // screens: {
    //   "3xl": { max: "1440px" },
    //   "2xl": { max: "1130px" },
    //   xl: { max: "960px" },
    //   lg: { max: "768px" },
    //   md: { max: "560px" },
    //   sm: { max: "440px" },
    //   xsm: { max: "370px" },
    // },
  },
};
