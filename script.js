tailwind.config = {
    theme: {
      extend: {
        colors: {
          'regal-blue': '#243c5a',
          'cr-blastic' : ' #7872B9',
          'bg-whblue' : '#F9FCFF;',
          'bg-proper' : '#EBF5FF',
          'bg-pink' : '#F1E6F7'
          
        },
        container: {
            screens:{
                "2xl":"1140px"

            }

        },
        fontFamily:{
            'body':['Montserrat']
        } ,
        
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
        screens: {
          xsm: "370px",
          sm: "440px",
          md: "560px",
          lg: "768px",
          xl: "960px",
          "2xl": "1180px",
        },
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
      }
    }
  }
