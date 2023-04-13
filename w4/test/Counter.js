const { loadFixture,} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Counter", function () {
 
  async function deployCounter() {

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter};
  }

  describe("Deployment", function () {
    it("更新状态变量count", async function () {
      const { counter } = await loadFixture(deployCounter);
      await expect(counter.increment()).not.to.be.reverted;
    });

    it("获取状态变量count", async function () {
      const { counter } = await loadFixture(deployCounter);
      await counter.increment();
      expect(await counter.getCount()).to.equal(1);
    });

  });
});
