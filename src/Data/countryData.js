const countryData = [
  {
    name: "Armenia",
    img: "../../public/logo/flag/Armenia.png",
    continent: "Asia",
  },
  {
    name: "Singapore",
    img: "../../public/logo/flag/Singapore.png",
    continent: "Asia",
  },
  {
    name: "Azerbaijan",
    img: "../../public/logo/flag/Azerbaijan.png",
    continent: "Asia",
  },
  {
    name: "Brunei",
    img: "../../public/logo/flag/BRUNEI_DARUSSALAM.png",
    continent: "Asia",
  },
  {
    name: "Cambodia",
    img: "../../public/logo/flag/Cambodia.png",
    continent: "Asia",
  },
  { name: "China", img: "../../public/logo/flag/China.png", continent: "Asia" },
  {
    name: "Cyprus",
    img: "../../public/logo/flag/Cyprus.png",
    continent: "Asia",
  },
  {
    name: "HONG KONG",
    img: "../../public/logo/flag/HONG KONG, SAR CHINA.png",
    continent: "Asia",
  },
  { name: "India", img: "../../public/logo/flag/India.png", continent: "Asia" },
  {
    name: "Indonesia",
    img: "../../public/logo/flag/Indonesia.png",
    continent: "Asia",
  },
  {
    name: "Israel",
    img: "../../public/logo/flag/Israel.png",
    continent: "Asia",
  },
  { name: "Japan", img: "../../public/logo/flag/Japan.png", continent: "Asia" },
  {
    name: "Kazakhstan",
    img: "../../public/logo/flag/Kazakhstan.png",
    continent: "Asia",
  },
  {
    name: "Korea (North)",
    img: "../../public/logo/flag/Korea (North).png",
    continent: "Asia",
  },
  {
    name: "KOREA (SOUTH)",
    img: "../../public/logo/flag/KOREA (SOUTH).png",
    continent: "Asia",
  },
  {
    name: "Kuwait",
    img: "../../public/logo/flag/Kuwait.png",
    continent: "Asia",
  },
  {
    name: "Kyrgyzstan",
    img: "../../public/logo/flag/Kyrgyzstan.png",
    continent: "Asia",
  },
  { name: "Laos", img: "../../public/logo/flag/Laos.png", continent: "Asia" },
  {
    name: "MACAO, SAR CHINA",
    img: "../../public/logo/flag/MACAO, SAR CHINA.png",
    continent: "Asia",
  },
  {
    name: "Malaysia",
    img: "../../public/logo/flag/Malaysia.png",
    continent: "Asia",
  },
  {
    name: "Myanmar",
    img: "../../public/logo/flag/Myanmar.png",
    continent: "Asia",
  },
  { name: "Nepal", img: "../../public/logo/flag/Nepal.png", continent: "Asia" },
  {
    name: "Philippines",
    img: "../../public/logo/flag/Philippines.png",
    continent: "Asia",
  },
  {
    name: "Thailand",
    img: "../../public/logo/flag/Thailand.png",
    continent: "Asia",
  },
  {
    name: "Turkey",
    img: "../../public/logo/flag/Turkey.png",
    continent: "Asia",
  },
  {
    name: "Turkmenistan",
    img: "../../public/logo/flag/Turkmenistan.png",
    continent: "Asia",
  },
  {
    name: "Uzbekistan",
    img: "../../public/logo/flag/Uzbekistan.png",
    continent: "Asia",
  },
  {
    name: "Vietnam",
    img: "../../public/logo/flag/Vietnam.png",
    continent: "Asia",
  },

  // European countries
  {
    name: "Albania",
    img: "../../public/logo/flag/Europe/Albania.png",
    continent: "Europe",
  },
  {
    name: "Austria",
    img: "../../public/logo/flag/Europe/Austria.png",
    continent: "Europe",
  },
  {
    name: "Belarus",
    img: "../../public/logo/flag/Europe/Belarus.png",
    continent: "Europe",
  },
  {
    name: "Belgium",
    img: "../../public/logo/flag/Europe/Belgium.png",
    continent: "Europe",
  },
  {
    name: "Bulgaria",
    img: "../../public/logo/flag/Europe/Bulgaria.png",
    continent: "Europe",
  },
  {
    name: "Croatia",
    img: "../../public/logo/flag/Europe/Croatia.png",
    continent: "Europe",
  },
  {
    name: "Czech Republic",
    img: "../../public/logo/flag/Europe/Czech Republic.png",
    continent: "Europe",
  },
  {
    name: "Denmark",
    img: "../../public/logo/flag/Europe/Denmark.png",
    continent: "Europe",
  },
  {
    name: "Estonia",
    img: "../../public/logo/flag/Europe/Estonia.png",
    continent: "Europe",
  },
  {
    name: "Finland",
    img: "../../public/logo/flag/Europe/Finland.png",
    continent: "Europe",
  },
  {
    name: "France",
    img: "../../public/logo/flag/Europe/France.png",
    continent: "Europe",
  },
  {
    name: "Germany",
    img: "../../public/logo/flag/Europe/Germany.png",
    continent: "Europe",
  },
  {
    name: "Hungary",
    img: "../../public/logo/flag/Europe/Hungary.png",
    continent: "Europe",
  },
  {
    name: "Iceland",
    img: "../../public/logo/flag/Europe/Iceland.png",
    continent: "Europe",
  },
  {
    name: "Italy",
    img: "../../public/logo/flag/Europe/Italy.png",
    continent: "Europe",
  },
  {
    name: "Latvia",
    img: "../../public/logo/flag/Europe/Latvia.png",
    continent: "Europe",
  },
  {
    name: "Lithuania",
    img: "../../public/logo/flag/Europe/Lithuania.png",
    continent: "Europe",
  },
  {
    name: "Luxembourg",
    img: "../../public/logo/flag/Europe/Luxembourg.png",
    continent: "Europe",
  },
  {
    name: "Malta",
    img: "../../public/logo/flag/Europe/Malta.png",
    continent: "Europe",
  },
  {
    name: "Monaco",
    img: "../../public/logo/flag/Europe/Monaco.png",
    continent: "Europe",
  },
  {
    name: "Netherlands",
    img: "../../public/logo/flag/Europe/Netherlands.png",
    continent: "Europe",
  },
  {
    name: "Norway",
    img: "../../public/logo/flag/Europe/Norway.png",
    continent: "Europe",
  },
  {
    name: "Poland",
    img: "../../public/logo/flag/Europe/Poland.png",
    continent: "Europe",
  },
  {
    name: "Portugal",
    img: "../../public/logo/flag/Europe/Portugal.png",
    continent: "Europe",
  },
  {
    name: "Romania",
    img: "../../public/logo/flag/Europe/Romania.png",
    continent: "Europe",
  },
  {
    name: "RUSSIAN FEDERATION",
    img: "../../public/logo/flag/Europe/RUSSIAN FEDERATION.png",
    continent: "Europe",
  },
  {
    name: "Slovakia",
    img: "../../public/logo/flag/Europe/Slovakia.png",
    continent: "Europe",
  },
  {
    name: "Slovenia",
    img: "../../public/logo/flag/Europe/Slovenia.png",
    continent: "Europe",
  },
  {
    name: "Sweden",
    img: "../../public/logo/flag/Europe/Sweden.png",
    continent: "Europe",
  },
  {
    name: "Switzerland",
    img: "../../public/logo/flag/Europe/Switzerland.png",
    continent: "Europe",
  },
  {
    name: "Ukraine",
    img: "../../public/logo/flag/Europe/Ukraine.png",
    continent: "Europe",
  },
  // Americans countries
  {
    name: "Argentina",
    img: "../../public/logo/flag/Americans/Argentina.png",
    continent: "Americas",
  },
  {
    name: "Brazil",
    img: "../../public/logo/flag/Americans/Brazil.png",
    continent: "Americas",
  },
  {
    name: "Canada",
    img: "../../public/logo/flag/Americans/Canada.png",
    continent: "Americas",
  },
  {
    name: "Chile",
    img: "../../public/logo/flag/Americans/Chile.png",
    continent: "Americas",
  },
  {
    name: "Colombia",
    img: "../../public/logo/flag/Americans/Colombia.png",
    continent: "Americas",
  },
  {
    name: "Cuba",
    img: "../../public/logo/flag/Americans/Cuba.png",
    continent: "Americas",
  },
  {
    name: "Ecuador",
    img: "../../public/logo/flag/Americans/Ecuador.png",
    continent: "Americas",
  },
  {
    name: "Mexico",
    img: "../../public/logo/flag/Americans/Mexico.png",
    continent: "Americas",
  },
  {
    name: "Paraguay",
    img: "../../public/logo/flag/Americans/Paraguay.png",
    continent: "Americas",
  },
  {
    name: "Peru",
    img: "../../public/logo/flag/Americans/Peru.png",
    continent: "Americas",
  },
  {
    name: "United States of America",
    img: "../../public/logo/flag/Americans/United States of America.png",
    continent: "Americas",
  },
  {
    name: "Uruguay",
    img: "../../public/logo/flag/Americans/Uruguay.png",
    continent: "Americas",
  },

  // Oceania countries
  {
    name: "Australia",
    img: "../../public/logo/flag/Oceania/Australia.png",
    continent: "Oceania",
  },
  {
    name: "New Zealand",
    img: "../../public/logo/flag/Oceania/New Zealand.png",
    continent: "Oceania",
  },
];

export default countryData;
