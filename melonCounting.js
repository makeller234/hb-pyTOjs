'use strict';

const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']

const countMelons = melonList => {
    const melonCounts = {};

    for (const melon of melonList){
        if (!melonCounts.hasOwnProperty(melon)){
            melonCounts[melon] = 1;
        }
        else{
            melonCounts[melon] = melonCounts[melon] + 1;
        }
    }
    return melonCounts;
};


// Solution from HW
// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//     console.log(`mCounts: ${mCounts[melon]}`);
//     console.log(`melon: ${melon}`);
//     mCounts[melon] = (mCounts[melon] || 0) + 1;
//     console.log(`non-final mCounts: ${mCounts[melon]}`)
  
//     return mCounts;
//   }, {});
  
  //console.log(melonCounts);