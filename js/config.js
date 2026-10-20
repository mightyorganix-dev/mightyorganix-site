/* Mighty Organix — Stripe deposit config (TEST-MODE READY, NO SECRET KEYS).
   1. In Stripe Dashboard (test mode) create one Payment Link per package below.
   2. Paste each link URL (https://buy.stripe.com/test_...) into `link`.
   3. Switch to live-mode links when Dane approves prices. Never put sk_ keys here.
   Prices approved by Dane, Oct 20 2026. */
window.MO_CONFIG = {
  formEndpoint: "",            // e.g. "https://formspree.io/f/XXXXXXX"; empty = mailto fallback
  email: "dane.dison@gmail.com",
  phone: "727-207-7345",
  deposits: [
    { id:"launch",  name:"Launch Site (1 page)",            price:"from $450",       deposit:225,  note:"half up front", link:"" /* STRIPE_DEPOSIT_LINK_LAUNCH */ },
    { id:"starter", name:"Small Business Site (up to 5 pages)", price:"$1,250–$1,800", deposit:625,  note:"half of starting price", link:"" /* STRIPE_DEPOSIT_LINK_STARTER */ },
    { id:"redesign",name:"Website Redesign (6–12 pages)",   price:"$2,250–$3,250",   deposit:1125, note:"half of starting price", link:"" /* STRIPE_DEPOSIT_LINK_REDESIGN */ },
    { id:"shop",    name:"Online Payments Site",   price:"$3,500–$6,000",   deposit:1750, note:"half of starting price", link:"" /* STRIPE_DEPOSIT_LINK_SHOP */ },
    { id:"sign",    name:"Sign Design",                     price:"$120 per design", deposit:120,  note:"paid in full", link:"" /* STRIPE_DEPOSIT_LINK_SIGN */ },
    { id:"setup",   name:"Tech Help (2 hours)",  price:"$75/hr",          deposit:150,  note:"2 hours, paid up front", link:"" /* STRIPE_DEPOSIT_LINK_SETUP */ }
  ]
};
