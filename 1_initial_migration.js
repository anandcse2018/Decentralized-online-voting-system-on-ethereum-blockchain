const Migrations = artifacts.require("election");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
