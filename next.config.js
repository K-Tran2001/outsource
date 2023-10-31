
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.js"
);

module.exports = withNextIntl(nextConfig);

module.exports = {
  env: {
    "API_TRANSLATE_URL":"https://script.google.com/macros/s/AKfycbycuzr2XbisDtn5mzPFaZghtOnChQE8O7vJyUNVPJt6tgv7w2UQGVeLpGWj7enQ6sJa/exec",
    "API_TRANSLATE_URL_2":"https://script.google.com/macros/s/AKfycbyMNkppv_rahHpQFvW1AIwahx0MfW3m2abBlYmiImKGmMUbRjtf76h7KiAEpP1T2utFpA/exec",
    "API_TRANSLATE_URL_3":"https://script.google.com/macros/s/AKfycbx6Ht55wrFkzzN4W6jZ2elj73Wr2qBVre7P7iN45g3LBdz8VdM6J3UKKc-Hw8omG5Np/exec",
    "API_TRANSLATE_URL_4":"https://script.google.com/macros/s/AKfycbybWf76PT7300gs1ERJ6n5_Uy2hIBUfl6hNC7GoHjLdftGzRjbZSTvlOW01zFvb8I4/exec"
  }
}