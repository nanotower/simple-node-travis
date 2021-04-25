function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const favoriteFood = process.env.FAVORITE_FOOD;
  console.log(`My favorite food is ${favoriteFood}`);
  
  async function main() {
    while(true) {
      console.log('Containers rule!');
      await sleep(5000);
    }
  }
  
  main();