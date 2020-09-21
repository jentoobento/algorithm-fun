/**
 * Given an array of stores and their gems for sale, buy gems and
 * return the amount of gems purchased.
 * 
 * offers - an array of stores and their gems for sale.
 * exmaple: ["Shiny Rock Shop", "ruby", "10"]
 * In the example above, the shop name is "Shiny Rock Shop" which
 * is currently selling 10 rubies.
 *
 * preferences - an array of gems that you're looking to buy, the highest
 * preference is index zero, the lowest preference is the last index.
 * example: ["diamond", "emerald", "ruby", "jade"]
 * In the example above, the highest preference is diamond and lowest is jade.
 * 
 * output - an array of gems purchased equal to the preferences array.
 * example: if your preference list is ["diamond", "ruby", "emerald"]
 * and your output is [10, 3, 7], then you purchased 10 diamonds, 3 rubies,
 * and 7 emeralds.
 * 
 * You will only buy 1 type of gem from each store. You will attempt
 * to purchase the highest prefrence gem from the store if that type
 * of gem is available, if it is not available, then you will purchase
 * the next highest preference gem. If that store has no gems that
 * are in your preference list, then you will buy nothing from that store.
 * 
 * Assumptions:
 * 1. offers will always contain at least 1 store.
 * 2. offers will always be in format: ["store name", "gem type", "gem amount"]
 * 3. preferences will always contain at least 1 preference.
 * 4. preferences will always be in format: ["gem type", "gem type", ...]
 * 
 * Examples:
 * Given:
 * [
 *  ["Shiny Rock Shop", "ruby", "10"],
 * ]
 * ["diamond", "emerald", "ruby", "jade"]
 * Return: [0, 0, 10, 0]
 * 
 * In the example above, the Shiny Rock Shop is selling 10 rubies, your
 * third highest preference. There was only 1 shop so you were not able to
 * purchase diamonds, emeralds, or jade, therefore those amounts remain at zero.
 * 
 * Given:
 * [
 *  ["Shiny Rock Shop", "ruby", "10"],
 *  ["Shiny Rock Shop", "diamond", "10"],
 * ]
 * ["diamond", "emerald", "ruby", "jade"]
 * Return: [10, 0, 0, 0]
 * 
 * In the example above, the Shiny Rock Shop is selling 10 rubies, your
 * third highest preference. They are also selling diamonds, your highest
 * preference. You skip the rubies and purchase the diamonds instead. You were
 * not able to purchase emeralds or jade, therefore those amounts remain at zero.
 * 
 * Given:
 * [
 *  ["Lothlorian Gemstones", "ruby", "5"],
 *  ["Catseye Gems", "jade", "2"],
 *  ["Catseye Gems", "emerald", "4"],
 *  ["Ralph's Rubies", "diamond", "20"],
 *  ["Ralph's Rubies", "ruby", "1"],
 *  ["Moria Stone Shop", "jade", "5"],
 *  ["Lothlorian Gemstones", "jade", "9"],
 * ]
 * ["diamond", "emerald", "ruby", "jade"],
 * Return: [20, 4, 5, 5]
 * 
 * In the example above, Lothlorian Gemstones are selling 5 rubies and 9 jades.
 * Rubies are higher on your preferences list, so you buy the 5 rubies but not the jades.
 * Catseye Gems are selling 2 jades and 4 emeralds. You buy the 4 emeralds since those
 * are higher preference than the jade. Ralph's Rubies are selling 20 diamonds and 1 ruby.
 * You buy the diamonds as those are your higher preference than ruby. Finally, Moira Stone Shop
 * is selling 5 jades and nothing else, so you buy the 5 jade.
 * 
 * Your total diamonds is 20, emeralds is 4, rubies are 5 and jade is 5.
 * 
 * Given:
 * [
 *  ["Lothlorian Gemstones", "ruby", "5"],
 *  ["Ralph's Rubies", "ruby", "1"],
 * ]
 * ["opal", "ruby", "jade"],
 * Return: [0, 6, 0]
 * 
 * In the example above, Lothlorian Gemstones are selling 5 rubies and Ralph's Rubies
 * are selling 1 ruby. You buy the rubies from both stores, therefore your total count
 * is 6 rubies and zero of everything else.
 * 
 * Given:
 * [
 *  ["Lothlorian Gemstones", "ruby", "5"],
 *  ["Ralph's Rubies", "ruby", "1"],
 * ]
 * ["diamond", "jade"],
 * Return: [0, 0]
 * 
 * In the example above, the two stores are both selling rubies but you aren't looking for
 * rubies at all, therefore you buy nothing from both stores and your total count is
 * zero for everything.
 */
 
function gemstone(offers, preferences) {
  const bag = {
    // shopName: [gem, gemCount, gemPreference]
  };
  // make an empty array that is the same size as my preferences array.
  const preferencesPurchased = preferences.map(() => 0);

  for (let i = 0; i < offers.length; i++) {
    const storeName = offers[i][0];
    const gem = offers[i][1];
    const gemCount = offers[i][2];
    const gemPreference = preferences.indexOf(gem);

    // only do something if the shop has a gem in my preferences array.
    if (preferences.includes(gem)) {
      if (!bag[storeName]) {
        preferencesPurchased[gemPreference] = preferencesPurchased[gemPreference] + parseInt(gemCount);
      } else if (bag[storeName][2] > gemPreference) {
        // add higher preference gem to preferencesPurchased.
        preferencesPurchased[gemPreference] = preferencesPurchased[gemPreference] + parseInt(gemCount);
        // remove lower preference gem from preferencesPurchased.
        preferencesPurchased[bag[storeName][2]] = preferencesPurchased[bag[storeName][2]] - bag[storeName][1];
      }
      bag[storeName] = [gem, gemCount, gemPreference];
    }
  }
  console.log(preferencesPurchased);
};

gemstone(
  [
    ["Shiny Rock Shop", "ruby", "10"],
  ],
  ["diamond", "emerald", "ruby", "jade"],
);
gemstone(
  [
    ["Shiny Rock Shop", "ruby", "10"],
  ],
  ["ruby", "jade", "emerald", "diamond"],
);
gemstone(
  [
    ["Lothlorian Gemstones", "ruby", "5"],
    ["Catseye Gems", "jade", "2"],
    ["Catseye Gems", "emerald", "4"],
    ["Ralph's Rubies", "diamond", "20"],
    ["Ralph's Rubies", "ruby", "1"],
    ["Moria Stone Shop", "jade", "5"],
    ["Lothlorian Gemstones", "jade", "9"],
  ],
  ["diamond", "emerald", "ruby", "jade"],
);
gemstone(
  [
    ["Lothlorian Gemstones", "ruby", "5"],
    ["Catseye Gems", "jade", "2"],
    ["Catseye Gems", "emerald", "4"],
    ["Ralph's Rubies", "diamond", "20"],
    ["Ralph's Rubies", "ruby", "1"],
    ["Moria Stone Shop", "jade", "5"],
    ["Lothlorian Gemstones", "jade", "9"],
  ],
  ["ruby", "jade", "emerald", "diamond"],
);
gemstone(
  [
    ["Shiny Rocks", "emerald", "5"],
    ["Bridge Gem Store", "diamond", "5"],
    ["Darling Diamonds", "ruby", "4"],
    ["Domino's Gems", "emerald", "2"],
    ["Darling Diamonds", "emerald", "4"],
    ["Darling Diamonds", "diamond", "20"],
    ["Domino's Gems", "jade", "5"],
    ["Shiny Rocks", "ruby", "9"],
  ],
  ["diamond", "emerald", "ruby", "jade"],
);
gemstone(
  [
    ["Shiny Rocks", "emerald", "5"],
    ["Bridge Gem Store", "diamond", "5"],
    ["Darling Diamonds", "ruby", "4"],
    ["Domino's Gems", "emerald", "2"],
    ["Darling Diamonds", "emerald", "4"],
    ["Darling Diamonds", "diamond", "20"],
    ["Domino's Gems", "jade", "5"],
    ["Shiny Rocks", "ruby", "9"],
  ],
  ["ruby", "jade", "emerald", "diamond"],
);
