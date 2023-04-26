/** 
Given an array of Combo Boxes, and a number of fruit needed, write a
function that will return the number of combo boxes needed to fulfill
the order of fruit. Combo boxes may not exactly match the number of
fruit needed, so the function should fulfill the order as best as 
possible but should not give more fruit than ordered.

For example, given an array of Combo Boxes:
[
  {
    apples: 10,
    oranges: 10,
    name: '10 Apples & 10 Oranges Combo',
  },
  {
    apples: 20,
    oranges: 0,
    name: '20 Apples Box',
  }
]

Given an order of 10 apples and 10 oranges,
the function should return: {
  name: '10 Apples & 10 Oranges Combo',
  quantity: 1,
}

Given an order of 50 apples and 10 oranges,
the function should return: {
  name: '10 Apples & 10 Oranges Combo',
  quantity: 1,
},
{
  name: '20 Apples Box',
  quantity: 2,
}
The function perfectly fulfilled the order using
a combination of combo boxes and non-combo boxes.

Given an order of 50 apples and 0 oranges,
the function should return: {
  name: '20 Apples Box',
  quantity: 2,
}
The function should not attempt to fulfull 50 apples
by adding a combo box because that would give an excess
of 10 oranges.

Given an order of 10 apples and 20 oranges,
the function should return: {
  name: '10 Apples & 10 Oranges Combo',
  quantity: 1,
}
The function should not attempt to fulfull 20 oranges
by adding a combo box because that would give an excess
of 10 apples.
*/

// The following array `comboBoxes` is given.
const comboBoxes = [
  {
    apples: 50,
    oranges: 0,
    name: '50 Apples Box',
  },
  {
    apples: 0,
    oranges: 50,
    name: '50 Oranges Box',
  },
  {
    apples: 100,
    oranges: 100,
    name: '100 Apples & Oranges Combo',
  },
  {
    apples: 0,
    oranges: 20,
    name: '20 Oranges Box',
  },
  {
    apples: 75,
    oranges: 75,
    name: '75 Apples & Oranges Combo',
  },
];

interface ComboBox {
  apples: number;
  oranges: number;
  name: string;
};

enum ORDER {
  'ASCENDING',
  'DESCENDING',
};

enum FRUIT_KEY {
  APPLES = 'apples',
  ORANGES = 'oranges',
};

interface ComboBoxesNeeded extends ComboBox {
  quantity: number;
};

const sortComboBoxesByCount = (fruit: keyof ComboBox, order: ORDER) => {
  return [...comboBoxes].filter((b: ComboBox) => b[fruit] !== 0).sort((b1, b2) => {
    if (order === ORDER.ASCENDING) return b1[fruit] > b2[fruit] ? 1 : -1;
    return b1[fruit] < b2[fruit] ? 1 : -1;
  });
};

const getHigherFruitNeeded = (
  applesNeeded: number,
  orangesNeeded: number,
) => {
  return applesNeeded >= orangesNeeded ? FRUIT_KEY.APPLES : FRUIT_KEY.ORANGES;
};

interface FindAvailableComboBoxesProps {
  apples: number;
  oranges: number;
};

const findAvailableComboBoxes = ({
  apples,
  oranges,
}: FindAvailableComboBoxesProps) => {
  let applesNeeded = apples;
  let orangesNeeded = oranges;
  let comboBoxesNeeded: { [key: string]: ComboBoxesNeeded } = {};

  const checkBoxes = () => {
    for (const box of sortComboBoxesByCount(
      getHigherFruitNeeded(applesNeeded, orangesNeeded),
      ORDER.DESCENDING,
    )) {
      if (applesNeeded >= box.apples && orangesNeeded >= box.oranges) {
        applesNeeded -= box.apples;
        orangesNeeded -= box.oranges;

        comboBoxesNeeded[box.name] = {
          ...box,
          quantity: comboBoxesNeeded[box.name]
            ? comboBoxesNeeded[box.name].quantity + 1
            : 1,
        };
        
        break;
      }
    };
  };

  while (applesNeeded >= sortComboBoxesByCount(FRUIT_KEY.APPLES, ORDER.ASCENDING)[0].apples) {
    checkBoxes();
  }
  while (orangesNeeded >= sortComboBoxesByCount(FRUIT_KEY.ORANGES, ORDER.ASCENDING)[0].oranges) {
    checkBoxes();
  }

  console.log(comboBoxesNeeded);
};

console.log('--------------------------------------');
findAvailableComboBoxes({ apples: 80, oranges: 60 });
console.log('--------------------------------------');
findAvailableComboBoxes({ apples: 100, oranges: 160 });
console.log('--------------------------------------');
findAvailableComboBoxes({ apples: 1, oranges: 51 });
console.log('--------------------------------------');
findAvailableComboBoxes({ apples: 0, oranges: 40 });

/** 
Known bugs:

1.Function always takes the largest divisible box. For example if there
is a `50 Oranges` box, and a `20 Oranges` box, and the needed amount
is 60 oranges, the function will return 1 `50 Oranges` box instead
of 3 `20 Oranges` boxes.

2. It would be difficult to add another fruit to the function.

3. Performance of `sortComboBoxesByCount` could be improved so that it
will only recalculate if there are changes to `comboBoxes`.
*/
