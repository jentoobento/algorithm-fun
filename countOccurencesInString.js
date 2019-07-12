const topics = {
    "Price": ["cheap", "expensive", "price"],
    "Business Specialties": ["gnome", "gnomes"],
    "Harry Shrub": ["harry shrub"]
}

const reviews = [
    "Harry shrub did a great job with my garden, but I expected more gnomes for the price.",
    "I love my new gnomes, they are so cute! My dog loves them too! Thanks Harry!",
    "Very expensive at fifty dollars per gnome."
]

function countOccurences(topics, reviews) {
    let numOccurencesPrices = 0;
    let numOccurencesBusinessSpecialties = 0;
    let numOccurencesHS = 0;

    for (let i = 0; i < reviews.length; i++) {

        let str = reviews[i].toLowerCase().trim();


        // for (let key in topics) {
        //   console.log(topics[key]);
        //   for (let word = 0; word < topics[key].length; word++) {
        //     console.log(topics[key][word]);
        //     if(str.includes(topics[key][word])){
        //       console.log('includes');
        //     }
        //   }
        // }


        let pricesArr = topics.Price;

        for (let word = 0; word < pricesArr.length; word++) {
            if (str.includes(pricesArr[word])) {
                numOccurencesPrices++;
            }
        }

        let businessArr = topics["Business Specialties"];

        for (let word = 0; word < businessArr.length; word++) {
            if (str.includes(businessArr[word])) {
                numOccurencesBusinessSpecialties++;
            }
        }

        let HSArr = topics["Harry Shrub"];

        for (let word = 0; word < HSArr.length; word++) {
            if (str.includes(HSArr[word])) {
                numOccurencesHS++;
            }
        }
    }

    return {
        "Price": numOccurencesPrices,
        "Business Spcialties": numOccurencesBusinessSpecialties,
        "Harry Shrub": numOccurencesHS
    }

}

console.log(countOccurences(topics, reviews));
