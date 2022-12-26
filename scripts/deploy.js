const contractName = ['Game1', 'Game2', 'Game3', 'Game4', 'Game5'];

async function main() {
  await Promise.all(
    contractName.map(async (c) => {
      const Game = await hre.ethers.getContractFactory(c);
      const game = await Game.deploy();
      console.log(`${c}: '${game.address}',`);

      return game.address;
    })
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
