export default {
  categories: {
    meals: "Mat",
    travel: "Resa",
    software: "Mjukvara",
    office_supplies: "Kontorsmaterial",
    rent: "Hyra",
    equipment: "Utrustning",
    income: "Inkomst",
    transfer: "Överföring",
    activity: "Aktivitet",
    other: "Annan",
    uncategorized: "Okategoriserad",
  },
  transaction_methods: {
    card_purchase: "Kortbetalning",
    payment: "Betalning",
    card_atm: "Kort bankomat",
    transfer: "Överföring",
    other: "Annan",
  },
  language: {
    title: "Språk",
    description: "Ändra språket som används i användargränssnittet.",
    placeholder: "Välj språk",
  },
  languages: {
    en: "Engelska",
    sv: "Svenska",
  },
  spending_period: {
    this_month: "Den här månaden",
    last_month: "Förra månaden",
    this_year: "Det här året",
    last_year: "Förra året",
  },
  transactions_period: {
    all: "All",
    income: "Inkomst",
    outcome: "Utgifter",
  },
  chart_selector: {
    revenue: "Inkomst",
    profit_loss: "Vinst/Förlust",
  },
} as const;
