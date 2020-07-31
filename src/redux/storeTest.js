const storeTest = {
  isLoading: false,
  auth: {
    token: '',
    name: '',
    photo: '',
    error: '',
  },
  operations: {
    ballance: '',
    income: [{
      date: "2019-12-01T16:37:41.000Z",
      amount: 500,
      incomeId: "5de3ec95ae03df0b29a4029f"
    },
    {
      date: "2019-10-01T16:37:41.000Z",
      amount: 400,
      incomeId: "5de3ec95ae03df0b29a4029f"
    },{
      date: "2019-11-01T16:37:41.000Z",
      amount: 300,
      incomeId: "5de3ec95ae03df0b29a4029f"
    }], //[{}, {}]
    costs: [ {
      product: {
        category: {
          name: "Продукти",
          categoryId: "5ddaefec2a022d8ddf05cddb"
        },
        productId: "5ddaf08f248237915ad7dfbc",
        name: "Банани"
      },
      costsId: "5de3f3f3ed0e6a41dc21576f",
      amount: 434,
      date: "2019-11-01T19:10:40.086Z"
    },
    {
      product: {
        category: {
          name: "Продукти",
          categoryId: "5ddaefec2a022d8ddf05cddb"
        },
        productId: "5ddaf08f248237915ad7dfbc",
        name: "Банани"
      },
      costsId: "5de3f3f3ed0e6a41dc21576f",
      amount: 434,
      date: "2019-10-01T19:10:40.086Z"
    },
    {
      product: {
        category: {
          name: "Продукти",
          categoryId: "5ddaefec2a022d8ddf05cddb"
        },
        productId: "5ddaf08f248237915ad7dfbc",
        name: "Банани"
      },
      costsId: "5de3f3f3ed0e6a41dc21576f",
      amount: 434,
      date: "2019-12-01T19:10:40.086Z"
    },
], //[{}, {}]
    incomeCategories: [], //['', '', '']
    costsCategories: [], //['', '', '']
  },
  statistics: {
    mounth: '',
  },
};
