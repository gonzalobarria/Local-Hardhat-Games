/*
copy the result of deploy.js and paste it into contractName

Example: 
const contractName = {
  Game1: '0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf',
  Game2: '0x9d4454B.....
}
*/
const contractName = {
  Game1: '0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf',
  Game2: '0x9d4454B023096f34B160D6B654540c56A1F81688',
  Game3: '0x5eb3Bc0a489C5A8288765d2336659EbCA68FCd00',
  Game5: '0x36C02dA8a0983159322a80FFE9F24b1acfF8B570',
  Game4: '0x809d550fca64d94Bd9F66E60752A544199cfAC3D',
};

const game1 = async (gameName) => {
  const game = await hre.ethers.getContractAt(gameName, contractName[gameName]);

  const tx = await game.win();
  const receipt = await tx.wait();

  if (receipt.events[0].event === 'Winner') {
    console.log(`Congrats, you are the winner of ${gameName}`);
  }
};

const game2 = async (gameName) => {
  const game = await hre.ethers.getContractAt(gameName, contractName[gameName]);

  await game.setX(20);
  await game.setY(30);

  const tx = await game.win();
  const receipt = await tx.wait();

  if (receipt.events[0].event === 'Winner') {
    console.log(`Congrats, you are the winner of ${gameName}`);
  }
};
const game3 = async (gameName) => {
  const game = await hre.ethers.getContractAt(gameName, contractName[gameName]);

  const tx = await game.win(45);
  const receipt = await tx.wait();

  if (receipt.events[0].event === 'Winner') {
    console.log(`Congrats, you are the winner of ${gameName}`);
  }
};

const game4 = async (gameName) => {
  const game = await hre.ethers.getContractAt(gameName, contractName[gameName]);

  const tx = await game.win(56);
  const receipt = await tx.wait();

  if (receipt.events[0].event === 'Winner') {
    console.log(`Congrats, you are the winner of ${gameName}`);
  }
};

const game5 = async (gameName) => {
  const game = await hre.ethers.getContractAt(gameName, contractName[gameName]);

  await game.giveMeAllowance(30000);
  await game.mint(20000);

  const tx = await game.win();
  const receipt = await tx.wait();

  if (receipt.events[0].event === 'Winner') {
    console.log(`Congrats, you are the winner of ${gameName}`);
  }
};

async function main() {
  await game1('Game1');
  await game2('Game2');
  await game3('Game3');
  await game4('Game4');
  await game5('Game5');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
