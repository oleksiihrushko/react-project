import randomDate from "@js-random/date";

const randomAmount = () => Math.round(Math.random() * 1000);

const getDate = () => {
  return randomDate({
    from: new Date(2020, 6, 1),
    to: new Date(2020, 6, 31),
  });
};

const categoriesLabels = [
  "Продукты",
  "Алкоголь",
  "Развлечения",
  "Здоровье",
  "Транспорт",
  "Все для дома",
  "Техника",
  "Коммуналка, связь",
  "Спорт, хобби",
  "Образование",
  "Прочее",
];

const categories = [
  "products",
  "alcohol",
  "leisure",
  "health",
  "transport",
  "housing",
  "electronics",
  "utilityPayments",
  "sports",
  "studying",
  "other",
];

const getCategory = () => {
  const random = Math.floor(Math.random() * categories.length);
  return categories[random];
};

const products =
  "lorem ipsum dolor consectetur adipisicing excepturi sapiente placeat quisquam";
const alcohol = "repudiandae asperiores exercitationem";
const leisure = "aspernatur possimus odititaque rerum culpa";
const health = "corporis atque praesentium imperdiet";
const transport = "curabitur ligula sapien tincidunt euismod vitae posuere";
const housing = "fusce convallis metus felis luctus adipiscing laoreet";
const electronics = "etiam tortor egestas vestibulum malesuada adipiscing";
const utilityPayments = "felis ligula pharetra condimentum iaculis";
const sports = "dolor phasellus justo pellentesque facilisis";
const studying = "phasellus consectetuer vestibulum praesent";
const other = "phasellus viverra laoreet blandit luctus pulvinarhendrerit";

const productsArray = products.split(" ");
const alcoholArray = alcohol.split(" ");
const leisureArray = leisure.split(" ");
const healthArray = health.split(" ");
const transportArray = transport.split(" ");
const housingArray = housing.split(" ");
const electronicsArray = electronics.split(" ");
const utilityPaymentsArray = utilityPayments.split(" ");
const sportsArray = sports.split(" ");
const studyingArray = studying.split(" ");
const otherArray = other.split(" ");

const randomSubCategory = (category) => {
  let index;
  switch (category) {
    case "products":
      index = Math.round(Math.random() * productsArray.length);
      return productsArray[index];

    case "alcohol":
      index = Math.round(Math.random() * alcoholArray.length);
      return alcoholArray[index];

    case "leisure":
      index = Math.round(Math.random() * leisureArray.length);
      return leisureArray[index];

    case "health":
      index = Math.round(Math.random() * healthArray.length);
      return healthArray[index];

    case "transport":
      index = Math.round(Math.random() * transportArray.length);
      return transportArray[index];

    case "housing":
      index = Math.round(Math.random() * housingArray.length);
      return housingArray[index];

    case "electronics":
      index = Math.round(Math.random() * electronicsArray.length);
      return electronicsArray[index];

    case "utilityPayments":
      index = Math.round(Math.random() * utilityPaymentsArray.length);
      return utilityPaymentsArray[index];

    case "sports":
      index = Math.round(Math.random() * sportsArray.length);
      return sportsArray[index];

    case "studying":
      index = Math.round(Math.random() * studyingArray.length);
      return studyingArray[index];

    case "other":
      index = Math.round(Math.random() * otherArray.length);
      return otherArray[index];

    default:
      return "";
  }
};

const random1 = getCategory();
const random2 = getCategory();
const random3 = getCategory();
const random4 = getCategory();
const random5 = getCategory();
const random6 = getCategory();
const random7 = getCategory();
const random8 = getCategory();
const random9 = getCategory();
const random10 = getCategory();
const random11 = getCategory();
const random12 = getCategory();
const random13 = getCategory();
const random14 = getCategory();
const random15 = getCategory();
const random16 = getCategory();
const random17 = getCategory();
const random18 = getCategory();
const random19 = getCategory();
const random20 = getCategory();
const random21 = getCategory();
const random22 = getCategory();
const random23 = getCategory();
const random24 = getCategory();
const random25 = getCategory();
const random26 = getCategory();
const random27 = getCategory();
const random28 = getCategory();
const random29 = getCategory();
const random30 = getCategory();
const random31 = getCategory();
const random32 = getCategory();
const random33 = getCategory();
const random34 = getCategory();
const random35 = getCategory();
const random36 = getCategory();
const random37 = getCategory();
const random38 = getCategory();
const random39 = getCategory();
const random40 = getCategory();
const random41 = getCategory();
const random42 = getCategory();
const random43 = getCategory();
const random44 = getCategory();
const random45 = getCategory();
const random46 = getCategory();
const random47 = getCategory();
const random48 = getCategory();
const random49 = getCategory();
const random50 = getCategory();

export const dummyData = {
  items: [
    {
      product: {
        category: {
          name: random1,
        },
        name: randomSubCategory(random1),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random2,
        },
        name: randomSubCategory(random2),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random3,
        },
        name: randomSubCategory(random3),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random4,
        },
        name: randomSubCategory(random4),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random5,
        },
        name: randomSubCategory(random5),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random6,
        },
        name: randomSubCategory(random6),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random7,
        },
        name: randomSubCategory(random7),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random8,
        },
        name: randomSubCategory(random8),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random9,
        },
        name: randomSubCategory(random9),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random10,
        },
        name: randomSubCategory(random10),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random11,
        },
        name: randomSubCategory(random11),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random12,
        },
        name: randomSubCategory(random12),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random13,
        },
        name: randomSubCategory(random13),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random14,
        },
        name: randomSubCategory(random14),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random15,
        },
        name: randomSubCategory(random15),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random16,
        },
        name: randomSubCategory(random16),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random17,
        },
        name: randomSubCategory(random17),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random18,
        },
        name: randomSubCategory(random18),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random19,
        },
        name: randomSubCategory(random19),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random20,
        },
        name: randomSubCategory(random20),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random21,
        },
        name: randomSubCategory(random21),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random22,
        },
        name: randomSubCategory(random22),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random23,
        },
        name: randomSubCategory(random23),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random24,
        },
        name: randomSubCategory(random24),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random25,
        },
        name: randomSubCategory(random25),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random26,
        },
        name: randomSubCategory(random26),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random27,
        },
        name: randomSubCategory(random27),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random28,
        },
        name: randomSubCategory(random28),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random29,
        },
        name: randomSubCategory(random29),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random30,
        },
        name: randomSubCategory(random30),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random31,
        },
        name: randomSubCategory(random31),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random32,
        },
        name: randomSubCategory(random32),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random33,
        },
        name: randomSubCategory(random33),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random34,
        },
        name: randomSubCategory(random34),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random35,
        },
        name: randomSubCategory(random35),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random36,
        },
        name: randomSubCategory(random36),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random37,
        },
        name: randomSubCategory(random37),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random38,
        },
        name: randomSubCategory(random38),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random39,
        },
        name: randomSubCategory(random39),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random40,
        },
        name: randomSubCategory(random40),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random41,
        },
        name: randomSubCategory(random41),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random42,
        },
        name: randomSubCategory(random42),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random43,
        },
        name: randomSubCategory(random43),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random44,
        },
        name: randomSubCategory(random44),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random45,
        },
        name: randomSubCategory(random45),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random46,
        },
        name: randomSubCategory(random46),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random47,
        },
        name: randomSubCategory(random47),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random48,
        },
        name: randomSubCategory(random48),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random49,
        },
        name: randomSubCategory(random49),
      },
      amount: randomAmount(),
      date: getDate(),
    },
    {
      product: {
        category: {
          name: random50,
        },
        name: randomSubCategory(random50),
      },
      amount: randomAmount(),
      date: getDate(),
    },
  ],
};
