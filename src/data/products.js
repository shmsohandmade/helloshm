export const productCategories = [
  "All",
  "Hair care",
  "Body care",
  "Household care"
] 

export function getCategoryClass(category) {
  return `category-${category.toLowerCase().replaceAll(" ", "-")}`
}

const orderWithImpactText = "Order directly from us and 5% of the profit will help fund beach clean-up initiatives through SoBeachy. Your purchase supports both handmade craftsmanship and a cleaner coastline."

function createShampooInfoSections({
  ingredientTitle,
  ingredientText,
  ingredientNote,
  keyPoints,
  aromatherapyTitle,
  aromatherapyText,
  aromatherapyNote
}) {
  return [
    {
      title: aromatherapyTitle,
      text: aromatherapyText,
      note: aromatherapyNote
    },
    {
      title: "",
      text: keyPoints,
      variant: "key-points"
    },
    {
      title: ingredientTitle,
      text: ingredientText,
      note: ingredientNote
    },
    {
      title: "Order with impact description",
      text: orderWithImpactText,
      coverImage: "/SoBeachyGroupPic.jpg",
      coverAlt: "SoBeachy beach clean-up group",
      logoImage: "/So Beachy Logo Round.png",
      logoAlt: "So Beachy logo",
      variant: "impact"
    }
  ]
}

export const products = [
  {
    slug: "bentonite-clay-shampoo-bar",
    name: "Bentonite Clay Shampoo Bar",
    category: "Hair care",
    type: "Sulphate-free shampoo bar",
    price: 28,
    showMainPrice: false,
    image: "/Product/Shampoo Bar/Bentonite Clay Shampoo Bar.jpg",
    galleryImages: [
      {
        src: "/Product/Shampoo Bar/Bentonite Clay Shampoo Bar.jpg",
        alt: "Bentonite Clay Shampoo Bar"
      },
      {
        src: "/Product/Shampoo Bar/Bentonite Clay Shampoo Bar - box.png",
        alt: "Bentonite Clay Shampoo Bar box packaging"
      },
      {
        src: "/Product/Shampoo Bar/Bentonite Clay Shampoo Bar Info.png",
        alt: "Bentonite Clay Shampoo Bar product information"
      },
      {
        src: "/Product/Shampoo Bar/Sulphate Free Shampoo Info.png",
        alt: "Sulphate free shampoo bar information"
      },
      {
        src: "/Product/Shampoo Bar/How to use Shampoo Bar.png",
        alt: "How to use shampoo bar guide"
      }
    ],
    priceOptions: [
      "Bare Bar: RM36",
      "Boxed: RM37.90",
      "Mini Me: RM17"
    ],
    description: "Suitable for all hair types. Formulated with bentonite clay to help remove excess oil, product residue, and impurities without over-cleansing. Known for its gentle clarifying properties, bentonite clay helps leave the scalp feeling refreshed while maintaining the hair's natural softness and volume.",
    howToUse: [
      "Wet your hair thoroughly and rub the shampoo bar directly onto your scalp, using three to six strokes depending on your hair length.",
      "Gently massage your hair and scalp with your fingertips, allowing the rich lather to work through your hair.",
      "Rinse thoroughly, and you are ready to go."
    ],
    storageTitle: "What is Order with Impact?",
    storage: orderWithImpactText,
    infoSections: createShampooInfoSections({
      ingredientTitle: "Bentonite Clay",
      ingredientText: "Bentonite clay is a naturally occurring mineral-rich clay known for its highly absorbent properties. In hair care, it helps bind excess sebum, product residue, and impurities during washing, providing a gentle clarifying cleanse without leaving hair feeling stripped. This makes it particularly suitable for those seeking a refreshed scalp while maintaining softness, body, and natural shine.",
      keyPoints: [
        "Gentle clarifying cleanse",
        "Softness & volume",
        "Suitable for all hair types"
      ],
      aromatherapyTitle: "Frankincense & Ginger Essential Oils",
      aromatherapyText: "Earthy frankincense pairs with the gentle warmth of ginger to create a grounding and comforting wash ritual. Traditionally used in aromatherapy to promote a sense of calm, focus, and balance, this distinctive blend helps turn everyday cleansing into a mindful moment of self-care."
    }),
    details: [
      {
        title: "Bentonite Clay",
        text: "Bentonite clay helps give this bar its naturally grounded character, creating a fresh cleansing ritual for hair that enjoys a clean, balanced feel."
      },
      {
        title: "Sulphate-Free Daily Care",
        text: "Made without sulphates, this compact bar supports a gentler wash while helping reduce plastic packaging in your everyday routine."
      }
    ],
    shopeeUrl: "https://my.shp.ee/7w7YKHFA",
    orderUrl: "https://so-hand-made-2.myshopify.com/products/bentonite-clay-shampoo-bar-sulphate-free-shampoo-bar-65g",
    lazadaUrl: "#"
  },
  {
    slug: "geranium-shampoo-bar",
    name: "Geranium Shampoo Bar",
    category: "Hair care",
    type: "Sulphate-free shampoo bar",
    price: 30,
    showMainPrice: false,
    image: "/Product/Shampoo Bar/Geranium Shampoo Bar.jpg",
    galleryImages: [
      {
        src: "/Product/Shampoo Bar/Geranium Shampoo Bar.jpg",
        alt: "Geranium Shampoo Bar"
      },
      {
        src: "/Product/Shampoo Bar/Geranium Shampoo Bar - box.png",
        alt: "Geranium Shampoo Bar box packaging"
      },
      {
        src: "/Product/Shampoo Bar/Geranium Shampoo Bar Info.png",
        alt: "Geranium Shampoo Bar product information"
      },
      {
        src: "/Product/Shampoo Bar/Sulphate Free Shampoo Info.png",
        alt: "Sulphate free shampoo bar information"
      },
      {
        src: "/Product/Shampoo Bar/How to use Shampoo Bar.png",
        alt: "How to use shampoo bar guide"
      }
    ],
    priceOptions: [
      "Bare Bar: RM36",
      "Boxed: RM37.90",
      "Mini Me: RM17"
    ],
    description: "Suitable for all hair types. Formulated with geranium essential oil to help maintain a balanced scalp environment while gently cleansing the hair. Traditionally used in hair care for its balancing properties, geranium leaves hair feeling clean, nourished, and refreshed without weighing it down.",
    howToUse: [
      "Wet your hair thoroughly and rub the shampoo bar directly onto your scalp, using three to six strokes depending on your hair length.",
      "Gently massage your hair and scalp with your fingertips, allowing the rich lather to work through your hair.",
      "Rinse thoroughly, and you are ready to go."
    ],
    storageTitle: "What is Order with Impact?",
    storage: orderWithImpactText,
    infoSections: createShampooInfoSections({
      ingredientTitle: "Geranium Oil",
      ingredientText: "Geranium essential oil is traditionally valued in hair care for its balancing properties. It is often used in formulations designed to support both dry and oily scalp conditions, helping maintain a healthy scalp environment while leaving hair feeling soft, manageable, and refreshed.",
      keyPoints: [
        "Balanced scalp care",
        "Clean & nourished",
        "Daily Hair Care"
      ],
      aromatherapyTitle: "Geranium Essential Oil",
      aromatherapyText: "A fresh floral aroma with soft green notes helps create a balanced and uplifting wash ritual. Traditionally used in aromatherapy to promote emotional harmony and wellbeing, geranium encourages a sense of calm, clarity, and renewal."
    }),
    details: [
      {
        title: "Geranium Essential Oil",
        text: "Geranium brings a soft floral aroma that feels balanced, graceful, and quietly uplifting during your wash ritual."
      },
      {
        title: "Sulphate-Free Daily Care",
        text: "Made without sulphates, this compact bar supports a gentler wash while helping reduce plastic packaging in your everyday routine."
      }
    ],
    shopeeUrl: "https://my.shp.ee/PPSGq7FT",
    orderUrl: "https://so-hand-made-2.myshopify.com/products/geranium-shampoo-bar-sulphate-free-shampoo-bar",
    lazadaUrl: "#"
  },
  {
    slug: "shea-butter-shampoo-bar",
    name: "Shea Butter Shampoo Bar",
    category: "Hair care",
    type: "Sulphate-free shampoo bar",
    price: 32,
    showMainPrice: false,
    image: "/Product/Shampoo Bar/Shea Butter Shampoo Bar.jpg",
    galleryImages: [
      {
        src: "/Product/Shampoo Bar/Shea Butter Shampoo Bar.jpg",
        alt: "Shea Butter Shampoo Bar"
      },
      {
        src: "/Product/Shampoo Bar/Shea Butter Shampoo Bar - box.png",
        alt: "Shea Butter Shampoo Bar box packaging"
      },
      {
        src: "/Product/Shampoo Bar/Shea Butter Shampoo Bar Info.png",
        alt: "Shea Butter Shampoo Bar product information"
      },
      {
        src: "/Product/Shampoo Bar/Sulphate Free Shampoo Info.png",
        alt: "Sulphate free shampoo bar information"
      },
      {
        src: "/Product/Shampoo Bar/How to use Shampoo Bar.png",
        alt: "How to use shampoo bar guide"
      }
    ],
    priceOptions: [
      "Bare Bar: RM38",
      "Boxed: RM39.90",
      "Mini Me: RM18"
    ],
    description: "Suitable for dry hair. Preferred by curly hair. Formulated with shea butter, a naturally rich source of fatty acids and vitamins A and E, to help nourish and condition the hair. This gentle shampoo bar helps maintain moisture while cleansing, leaving hair feeling soft, smooth, and manageable.",
    howToUse: [
      "Wet your hair thoroughly and rub the shampoo bar directly onto your scalp, using three to six strokes depending on your hair length.",
      "Gently massage your hair and scalp with your fingertips, allowing the rich lather to work through your hair.",
      "Rinse thoroughly, and you are ready to go."
    ],
    storageTitle: "What is Order with Impact?",
    storage: orderWithImpactText,
    infoSections: createShampooInfoSections({
      ingredientTitle: "Shea Butter",
      ingredientText: [
        "Shea butter is naturally rich in fatty acids and vitamins A and E, helping to nourish and condition dry hair while supporting moisture retention. It leaves hair feeling softer, smoother, and more manageable, making it ideal for daily care.",
        "Curly and textured hair types especially love shea butter for its rich moisturizing properties. By helping reduce dryness and frizz, it supports softer, more defined curls and healthy-looking shine without weighing hair down."
      ],
      keyPoints: [
        "Moisture & nourishment",
        "Soft & smooth",
        "Relaxing Ritual"
      ],
      aromatherapyTitle: "Chamomile & Clary Sage",
      aromatherapyText: "Delicate chamomile pairs with herbaceous clary sage to create a soothing floral aroma. Traditionally valued in aromatherapy for promoting calm and emotional balance, this comforting blend transforms everyday cleansing into a mindful self-care ritual."
    }),
    details: [
      {
        title: "Shea Butter",
        text: "Shea butter gives this bar its creamy, comforting character, perfect for customers who enjoy a softer-feeling cleansing ritual."
      },
      {
        title: "Sulphate-Free Daily Care",
        text: "Made without sulphates, this compact bar supports a gentler wash while helping reduce plastic packaging in your everyday routine."
      }
    ],
    shopeeUrl: "https://my.shp.ee/DG3ReBAi",
    orderUrl: "https://so-hand-made-2.myshopify.com/products/shea-butter-shampoo-bar-sulphate-free-shampoo-bar",
    lazadaUrl: "#"
  },
  {
    slug: "activated-charcoal-shampoo-bar",
    name: "Activated Charcoal Shampoo Bar",
    category: "Hair care",
    type: "Sulphate-free shampoo bar",
    price: 52,
    showMainPrice: false,
    image: "/Product/Shampoo Bar/Activated Charcoal Shampoo Bar.jpg",
    galleryImages: [
      {
        src: "/Product/Shampoo Bar/Activated Charcoal Shampoo Bar.jpg",
        alt: "Activated Charcoal Shampoo Bar"
      },
      {
        src: "/Product/Shampoo Bar/Activated Charcoal Shampoo Bar - box.png",
        alt: "Activated Charcoal Shampoo Bar box packaging"
      },
      {
        src: "/Product/Shampoo Bar/Activated Charcoal Shampoo Bar Info.png",
        alt: "Activated Charcoal Shampoo Bar product information"
      },
      {
        src: "/Product/Shampoo Bar/Sulphate Free Shampoo Info.png",
        alt: "Sulphate free shampoo bar information"
      },
      {
        src: "/Product/Shampoo Bar/How to use Shampoo Bar.png",
        alt: "How to use shampoo bar guide"
      }
    ],
    priceOptions: [
      "Bare bar: RM52",
      "Box: RM53.90",
      "Mini Me: RM20"
    ],
    description: "Suitable for oily and buildup-prone scalps. Formulated with activated charcoal and salicylic acid (BHA), this shampoo bar helps remove excess sebum, product residue, and dead skin cell buildup from the scalp. Provides a deep clarifying cleanse while supporting a refreshed, balanced scalp environment.",
    howToUse: [
      "Wet your hair thoroughly and rub the shampoo bar directly onto your scalp, using three to six strokes depending on your hair length.",
      "Gently massage your hair and scalp with your fingertips, allowing the rich lather to work through your hair.",
      "Rinse thoroughly, and you are ready to go."
    ],
    storageTitle: "What is Order with Impact?",
    storage: orderWithImpactText,
    infoSections: createShampooInfoSections({
      ingredientTitle: "Activated Charcoal & BHA",
      ingredientText: [
        "Activated charcoal helps lift excess sebum, product residue, and impurities from the scalp and hair, providing a deep clarifying cleanse without leaving a heavy residue behind.",
        "Salicylic acid (BHA) is an oil-soluble exfoliant that helps remove excess sebum and dead skin cell buildup from the scalp. By supporting gentle exfoliation, it helps maintain a refreshed scalp environment and is particularly suited for oily scalps."
      ],
      ingredientNote: "Not recommended for very dry or sensitive scalps. If irritation occurs, discontinue use.",
      keyPoints: [
        "Clarifying cleanse",
        "Gentle scalp exfoliation",
        "Refresh & rebalance"
      ],
      aromatherapyTitle: "Eucalyptus & Clary Sage Essential Oils",
      aromatherapyText: "A crisp, herbaceous blend of eucalyptus and clary sage creates a refreshing and uplifting wash ritual. Traditionally used in aromatherapy to promote a sense of clarity and balance, this invigorating aroma helps awaken the senses while encouraging a calm, grounded state of mind."
    }),
    details: [
      {
        title: "Eucalyptus & Clary Sage Essential Oil",
        text: "Fresh eucalyptus pairs with herbaceous clary sage to create a clean, uplifting aroma. Traditionally used in aromatherapy to encourage mental clarity and balance, this refreshing blend transforms everyday cleansing into a mindful ritual."
      },
      {
        title: "Gentle Exfoliation and Hydration",
        text: "Activated charcoal gives the bar its natural colour, while BHA and panthenol help cleanse, gently exfoliate, and leave hair feeling revived and moisturized."
      }
    ],
    shopeeUrl: "https://my.shp.ee/UQkkHMaS",
    orderUrl: "https://mvuh7lb9k40p67ps-73492627607.shopifypreview.com/products/activated-charcoal-shampoo-bar-bha-salicylic-acid-sulphate-free?variant=47873962737815",
    lazadaUrl: "#"
  },
  {
    slug: "lavender-shampoo-bar",
    name: "Lavender Shampoo Bar",
    category: "Hair care",
    type: "Sulphate-free shampoo bar",
    price: 30,
    showMainPrice: false,
    image: "/Product/Shampoo Bar/Lavender Shampoo Bar.jpg",
    galleryImages: [
      {
        src: "/Product/Shampoo Bar/Lavender Shampoo Bar.jpg",
        alt: "Lavender Shampoo Bar"
      },
      {
        src: "/Product/Shampoo Bar/Lavender Shampoo Bar - box.png",
        alt: "Lavender Shampoo Bar box packaging"
      },
      {
        src: "/Product/Shampoo Bar/Lavender Shampoo Bar Info.png",
        alt: "Lavender Shampoo Bar product information"
      },
      {
        src: "/Product/Shampoo Bar/Sulphate Free Shampoo Info.png",
        alt: "Sulphate free shampoo bar information"
      },
      {
        src: "/Product/Shampoo Bar/How to use Shampoo Bar.png",
        alt: "How to use shampoo bar guide"
      }
    ],
    priceOptions: [
      "Bare Bar: RM56",
      "Boxed: RM57.90",
      "Mini Me: RM21"
    ],
    description: "Suitable for dry, flaky, and blemish-prone scalps. Formulated with lavender-infused oil and salicylic acid (BHA), this shampoo bar helps remove excess sebum and dead skin cell buildup while providing gentle exfoliating care. Leaves the scalp feeling refreshed, balanced, and comfortably clean.",
    howToUse: [
      "Wet your hair thoroughly and rub the shampoo bar directly onto your scalp, using three to six strokes depending on your hair length.",
      "Gently massage your hair and scalp with your fingertips, allowing the rich lather to work through your hair.",
      "Rinse thoroughly, and you are ready to go."
    ],
    storageTitle: "What is Order with Impact?",
    storage: orderWithImpactText,
    infoSections: createShampooInfoSections({
      ingredientTitle: "Lavender-Infused Oil & BHA",
      ingredientText: [
        "Lavender-infused oil is created by steeping lavender buds in oil, allowing naturally occurring aromatic compounds to be extracted into the infusion. Traditionally used in hair care, lavender is valued for its soothing properties and helps create a gentle cleansing experience while leaving hair feeling soft and nourished.",
        "Salicylic acid (BHA) is an oil-soluble exfoliant that helps remove excess sebum and dead skin cell buildup from the scalp. By supporting gentle exfoliation, it helps maintain a cleaner scalp environment and complements regular scalp care routines."
      ],
      ingredientNote: "Not recommended for very dry or sensitive scalps. If irritation occurs, discontinue use.",
      keyPoints: [
        "Soothes dry scalps",
        "Gentle scalp exfoliation",
        "Refresh & rebalance"
      ],
      aromatherapyTitle: "Lavender Essential Oil",
      aromatherapyText: "Gentle floral notes of lavender help transform everyday cleansing into a calming self-care ritual. Lavender is traditionally used in aromatherapy to encourage relaxation and a sense of ease, its comforting aroma invites a sense of peace and wellbeing."
    }),
    details: [
      {
        title: "Lavender Essential Oil",
        text: "Lavender brings a soft, familiar floral aroma that helps turn an everyday wash into a calmer, slower ritual."
      },
      {
        title: "Sulphate-Free Daily Care",
        text: "Made without sulphates, this compact bar supports a gentler wash while helping reduce plastic packaging in your everyday routine."
      }
    ],
    shopeeUrl: "https://my.shp.ee/jVZBH2fA",
    orderUrl: "https://so-hand-made-2.myshopify.com/products/lavender-shampoo-bar-bha-salicylic-acid-sulphate-free",
    lazadaUrl: "#"
  },

 
  {
    slug: "uco-cube",
    name: "UCO Cube",
    category: "Household care",
    type: "Multipurpose soap",
    price: 3.5,
    showMainPrice: false,
    image: "/Product/Household Care/uco80g1.JPEG",
    galleryImages: [
      {
        src: "/Product/Household Care/uco80g1.JPEG",
        alt: "UCO multipurpose soap 80g"
      },
      {
        src: "/Product/Household Care/uco80g2.JPEG",
        alt: "UCO multipurpose soap 80g close-up"
      },
      {
        src: "/Product/Household Care/uco500g1.JPEG",
        alt: "UCO multipurpose soap 500g"
      },
      {
        src: "/Product/Household Care/uco500g2.JPEG",
        alt: "UCO multipurpose soap 500g close-up"
      },
      {
        src: "/Product/Household Care/uco500g3.JPEG",
        alt: "UCO multipurpose soap 500g packaging"
      }
    ],
    priceOptions: [
      "Small: RM3.50",
      "Big: RM16"
    ],
    description: "A gentle, no-frills soap made for everything your daily life needs. This handcrafted soap bar is made from filtered and purified used cooking oil, distilled water, and lye, with no added scent or colour.",
    howToUse: [
      "Wet the soap bar and lather directly with your hands, sponge, cloth, or cleaning brush.",
      "Use for personal care, pet washing, or light household cleaning as needed.",
      "Rinse thoroughly and allow the soap to dry between uses."
    ],
    storageTitle: "What is Order with Impact?",
    storage: orderWithImpactText,
    infoSections: createShampooInfoSections({
      ingredientTitle: "Used Cooking Oil",
      ingredientText: [
        "After use, the UCO (used cooking oil) is first filtered through a coffee filter to remove food particles and impurities, leaving a cleaner oil for further processing. It is then treated with a salting process, where salt helps draw out remaining moisture and fine residues, improving clarity and stability. This step ensures the oil is properly purified before being transformed into soap.",
        "It can be used as a body and hand soap, a mild cleanser for facial use, and even as a pet wash for animals with delicate skin. In the home, it also works as a simple, effective dishwashing soap. Cutting through grease while keeping things low-tox and environmentally mindful."
      ],
      keyPoints: [
        "Fragrance-free & gentle",
        "Multipurpose use",
        "Low-waste essential"
      ],
      aromatherapyTitle: "Scent-free",
      aromatherapyText: "A gentle, fragrance-free multipurpose soap designed for sensitive skin and everyday use. Safe for personal care, pet washing, and light household cleaning, it’s a simple all-in-one bar for low-waste living."
    }),
    shopeeUrl: "https://my.shp.ee/mG3VMqjq",
    orderUrl: "https://so-hand-made-2.myshopify.com/products/uco-multipurpose-soap-bar",
    lazadaUrl: "#"
  },



]
