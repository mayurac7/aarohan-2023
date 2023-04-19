/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('./assets/bg-image.png')",
        "groupDance": "URL('./assets/Desktop_GROUP_DANCE.JPG')",
        "bandWars": "url(./assets/Desktop_BANDWARS.JPG)",
        "streetPlay": "url(./assets/Desktop_STREETPLAY.JPG)",
        "soloDance": "url(./assets/Desktop_SOLO_DANCE.JPG)",
        "soloSinging": "url(./assets/Desktop_SOLO_SINGING.JPG)",
        "boxCricket": "url(./assets/Desktop_CRICKET.JPG)",
        "eSports": "url(./assets/Desktop_E-SPORTS.jpg)",
        "football": "url(./assets/Desktop_FOOTBALL.JPG)",
        "instrumental": "url(./assets/Desktop_INSTRUMENTAL.JPG)",
        "artMaestro": "url(./assets/Desktop_ART_MAESTRO.JPG)",
        "fashion": "url(./assets/Desktop_FASHION.JPG)",
        "platform": "url(./assets/Desktop_PLATFORM.JPG)",
        "groupDance_mobile": "url(./assets/GROUP_DANCE.JPG)",
        "bandWars_mobile": "url(./assets/BANDWARS.JPG)",
        "streetPlay_mobile": "url(./assets/STREETPLAY.JPG)",
        "soloDance_mobile": "url(./assets/SOLO_DANCE.JPG)",
        "soloSinging_mobile": "URL('./assets/SOLO_SINGING.JPG')",
        "boxCricket_mobile": "url(./assets/CRICKET.JPG)",
        "eSports_mobile": "url(./assets/E-SPORTS.jpg)",
        "football_mobile": "url(./assets/FOOTBALL.JPG)",
        "instrumental_mobile": "url(./assets/INSTRUMENTAL.JPG)",
        "artMaestro_mobile": "url(./assets/ART_MAESTRO.JPG)",
        "fashion_mobile": "url(./assets/FASHION.JPG)",
        "platform_mobile": "url(./assets/PLATFORM.JPG)",
        "comedyNite": "url(./assets/COMEDY_NITE.JPG)",
        "proNite": "url(./assets/PRO-NITE.jpg)",
        "theatre": "url(./assets/THEATRE.JPG)",
        "youtubers": "url(./assets/YOUTUBERS.JPG)",
        "comedyNite_desktop": "url(./assets/Desktop_COMEDY-NITE.JPG)",
        "proNite_desktop": "url(./assets/Desktop_PRO-NITE.jpg)",
        "theatre_desktop": "url(./assets/Desktop_THEATRE.JPG)",
        "youtubers_desktop": "url(./assets/Desktop_YOUTUBERS.JPG)",
        "aarohan_banner": "url(./assets/aarohan_banner.png)"

      },
      colors: {
        "orange-custom": "#ffa500"
      },
      height: {
        "100": "32rem",
        "custom": "29rem",
        "photoCustom":"32rem"
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      width: {
        "custom":"73rem",
      }
    },
  },
  plugins: [],
}
