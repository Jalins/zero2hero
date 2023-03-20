const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { hardhat } = require("hardhat");

describe("ZTHToken", function () {

  async function deployZTHTokenFixture() {
    const initSupply = 1000000
    const [owner, otherAccount] = await ethers.getSigners();

    const ZTHToken = await ethers.getContractFactory("ZTHToken");
    const token = await ZTHToken.deploy(initSupply);

    return { token, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should assign the total supply of tokens to the owner", async function () {
      const { token, owner } = await loadFixture(deployZTHTokenFixture);
      const total = await token.totalSupply();
      expect(total).to.equal(await token.balanceOf(owner.address));
    });

  });

  describe("Transaction", function () {

      it("Should transfer tokens between accounts", async function () {
          const { token, owner, otherAccount } = await loadFixture(deployZTHTokenFixture);

          const ownerBalance = await token.balanceOf(owner.address);

          await token.transfer(otherAccount.address, 50);
          const addr1Balance = await token.balanceOf(otherAccount.address);
          expect(addr1Balance).to.equal(50);

          const ownerNewBalance = await token.balanceOf(owner.address);
          expect(ownerNewBalance).to.equal(ownerBalance.sub(50));
      });

      it("Should fail if sender doesn’t have enough tokens", async function () {
          const { token, otherAccount } = await loadFixture(deployZTHTokenFixture);

          await expect(
           token.transfer(otherAccount.address, ethers.utils.parseEther('10001'))
          ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
      });        

    });

});
