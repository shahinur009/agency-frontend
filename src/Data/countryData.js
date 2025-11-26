const countryData = [
  {
    name: "Armenia",
    img: "/logo/flag/Armenia.png",
    continent: "Asia",
  },
  {
    name: "Singapore",
    img: "/logo/flag/Singapore.png",
    continent: "Asia",
  },
  {
    name: "Azerbaijan",
    img: "/logo/flag/Azerbaijan.png",
    continent: "Asia",
  },
  {
    name: "Brunei",
    img: "/logo/flag/BRUNEI_DARUSSALAM.png",
    continent: "Asia",
  },
  {
    name: "Cambodia",
    img: "/logo/flag/Cambodia.png",
    continent: "Asia",
  },
  { name: "China", img: "/logo/flag/China.png", continent: "Asia" },
  {
    name: "Cyprus",
    img: "/logo/flag/Cyprus.png",
    continent: "Asia",
  },
  {
    name: "HONG KONG",
    img: "/logo/flag/HONG KONG, SAR CHINA.png",
    continent: "Asia",
  },
  { name: "India", img: "/logo/flag/India.png", continent: "Asia" },
  {
    name: "Indonesia",
    img: "/logo/flag/Indonesia.png",
    continent: "Asia",
  },
  {
    name: "Israel",
    img: "/logo/flag/Israel.png",
    continent: "Asia",
  },
  { name: "Japan", img: "/logo/flag/Japan.png", continent: "Asia" },
  {
    name: "Kazakhstan",
    img: "/logo/flag/Kazakhstan.png",
    continent: "Asia",
  },
  {
    name: "Korea (North)",
    img: "/logo/flag/Korea (North).png",
    continent: "Asia",
  },
  {
    name: "KOREA (SOUTH)",
    img: "/logo/flag/KOREA (SOUTH).png",
    continent: "Asia",
  },
  {
    name: "Kuwait",
    img: "/logo/flag/Kuwait.png",
    continent: "Asia",
  },
  {
    name: "Kyrgyzstan",
    img: "/logo/flag/Kyrgyzstan.png",
    continent: "Asia",
  },
  { name: "Laos", img: "/logo/flag/Laos.png", continent: "Asia" },
  {
    name: "MACAO, SAR CHINA",
    img: "/logo/flag/MACAO, SAR CHINA.png",
    continent: "Asia",
  },
  {
    name: "Malaysia",
    img: "/logo/flag/Malaysia.png",
    continent: "Asia",
  },
  {
    name: "Myanmar",
    img: "/logo/flag/Myanmar.png",
    continent: "Asia",
  },
  { name: "Nepal", img: "/logo/flag/Nepal.png", continent: "Asia" },
  {
    name: "Philippines",
    img: "/logo/flag/Philippines.png",
    continent: "Asia",
  },
  {
    name: "Thailand",
    img: "/logo/flag/Thailand.png",
    continent: "Asia",
  },
  {
    name: "Turkey",
    img: "/logo/flag/Turkey.png",
    continent: "Asia",
  },
  {
    name: "Turkmenistan",
    img: "/logo/flag/Turkmenistan.png",
    continent: "Asia",
  },
  {
    name: "Uzbekistan",
    img: "/logo/flag/Uzbekistan.png",
    continent: "Asia",
  },
  {
    name: "Vietnam",
    img: "/logo/flag/Vietnam.png",
    continent: "Asia",
  },

  // European countries
  {
    name: "Albania",
    img: "/logo/flag/Europe/Albania.png",
    continent: "Europe",
  },
  {
    name: "Austria",
    img: "/logo/flag/Europe/Austria.png",
    continent: "Europe",
  },
  {
    name: "Belarus",
    img: "/logo/flag/Europe/Belarus.png",
    continent: "Europe",
  },
  {
    name: "Belgium",
    img: "/logo/flag/Europe/Belgium.png",
    continent: "Europe",
  },
  {
    name: "Bulgaria",
    img: "/logo/flag/Europe/Bulgaria.png",
    continent: "Europe",
  },
  {
    name: "Croatia",
    img: "/logo/flag/Europe/Croatia.png",
    continent: "Europe",
  },
  {
    name: "Czech Republic",
    img: "/logo/flag/Europe/Czech Republic.png",
    continent: "Europe",
  },
  {
    name: "Denmark",
    img: "/logo/flag/Europe/Denmark.png",
    continent: "Europe",
  },
  {
    name: "Estonia",
    img: "/logo/flag/Europe/Estonia.png",
    continent: "Europe",
  },
  {
    name: "Finland",
    img: "/logo/flag/Europe/Finland.png",
    continent: "Europe",
  },
  {
    name: "France",
    img: "/logo/flag/Europe/France.png",
    continent: "Europe",
  },
  {
    name: "Germany",
    img: "/logo/flag/Europe/Germany.png",
    continent: "Europe",
  },
  {
    name: "Hungary",
    img: "/logo/flag/Europe/Hungary.png",
    continent: "Europe",
  },
  {
    name: "Iceland",
    img: "/logo/flag/Europe/Iceland.png",
    continent: "Europe",
  },
  {
    name: "Italy",
    img: "/logo/flag/Europe/Italy.png",
    continent: "Europe",
  },
  {
    name: "Latvia",
    img: "/logo/flag/Europe/Latvia.png",
    continent: "Europe",
  },
  {
    name: "Lithuania",
    img: "/logo/flag/Europe/Lithuania.png",
    continent: "Europe",
  },
  {
    name: "Luxembourg",
    img: "/logo/flag/Europe/Luxembourg.png",
    continent: "Europe",
  },
  {
    name: "Malta",
    img: "/logo/flag/Europe/Malta.png",
    continent: "Europe",
  },
  {
    name: "Monaco",
    img: "/logo/flag/Europe/Monaco.png",
    continent: "Europe",
  },
  {
    name: "Netherlands",
    img: "/logo/flag/Europe/Netherlands.png",
    continent: "Europe",
  },
  {
    name: "Norway",
    img: "/logo/flag/Europe/Norway.png",
    continent: "Europe",
  },
  {
    name: "Poland",
    img: "/logo/flag/Europe/Poland.png",
    continent: "Europe",
  },
  {
    name: "Portugal",
    img: "/logo/flag/Europe/Portugal.png",
    continent: "Europe",
  },
  {
    name: "Romania",
    img: "/logo/flag/Europe/Romania.png",
    continent: "Europe",
  },
  {
    name: "RUSSIAN FEDERATION",
    img: "/logo/flag/Europe/RUSSIAN FEDERATION.png",
    continent: "Europe",
  },
  {
    name: "Slovakia",
    img: "/logo/flag/Europe/Slovakia.png",
    continent: "Europe",
  },
  {
    name: "Slovenia",
    img: "/logo/flag/Europe/Slovenia.png",
    continent: "Europe",
  },
  {
    name: "Sweden",
    img: "/logo/flag/Europe/Sweden.png",
    continent: "Europe",
  },
  {
    name: "Switzerland",
    img: "/logo/flag/Europe/Switzerland.png",
    continent: "Europe",
  },
  {
    name: "Ukraine",
    img: "/logo/flag/Europe/Ukraine.png",
    continent: "Europe",
  },
  // Americans countries
  {
    name: "Argentina",
    img: "/logo/flag/Americans/Argentina.png",
    continent: "Americas",
  },
  {
    name: "Brazil",
    img: "/logo/flag/Americans/Brazil.png",
    continent: "Americas",
  },
  {
    name: "Canada",
    img: "/logo/flag/Americans/Canada.png",
    continent: "Americas",
  },
  {
    name: "Chile",
    img: "/logo/flag/Americans/Chile.png",
    continent: "Americas",
  },
  {
    name: "Colombia",
    img: "/logo/flag/Americans/Colombia.png",
    continent: "Americas",
  },
  {
    name: "Cuba",
    img: "/logo/flag/Americans/Cuba.png",
    continent: "Americas",
  },
  {
    name: "Ecuador",
    img: "/logo/flag/Americans/Ecuador.png",
    continent: "Americas",
  },
  {
    name: "Mexico",
    img: "/logo/flag/Americans/Mexico.png",
    continent: "Americas",
  },
  {
    name: "Paraguay",
    img: "/logo/flag/Americans/Paraguay.png",
    continent: "Americas",
  },
  {
    name: "Peru",
    img: "/logo/flag/Americans/Peru.png",
    continent: "Americas",
  },
  {
    name: "United States of America",
    img: "/logo/flag/Americans/United States of America.png",
    continent: "Americas",
  },
  {
    name: "Uruguay",
    img: "/logo/flag/Americans/Uruguay.png",
    continent: "Americas",
  },

  // Oceania countries
  {
    name: "Australia",
    img: "/logo/flag/Oceania/Australia.png",
    continent: "Oceania",
  },
  {
    name: "New Zealand",
    img: "/logo/flag/Oceania/New Zealand.png",
    continent: "Oceania",
  },
];

export default countryData;
