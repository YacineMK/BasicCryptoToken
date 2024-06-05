const { network, ethers } = require("hardhat");

async function main() {
    if (network.name === "hardhat") {
        console.warn(
            "You are trying to deploy a contract to the Hardhat Network, which" +
            " gets automatically created and destroyed every time. Use the Hardhat" +
            " option '--network localhost'"
        );
    }


    const [deployer] = await ethers.getSigner();
    console.log(
        "Deploying the contracts with the account:",
        deployer.getAddress()
    )

    const TokenFactory = await ethers.getContractFactory("token");
    const Token = await TokenFactory.connect(deployer).deploy();
    await Token.waitForDeployment();
    const TokenAddress = await Token.getAddress();

    console.log("Token address:", TokenAddress);

    saveFrontendFiles(TokenAddress);

}

function saveFrontendFiles(tokenAdress) {
    const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        path.join(contractsDir, "contract-address.json"),
        JSON.stringify({ Token: tokenAdress }, undefined, 2)
    );

    const TokenArtifact = artifacts.readArtifactSync("Token");

    fs.writeFileSync(
        path.join(contractsDir, "Token.json"),
        JSON.stringify(TokenArtifact, null, 2)
    );
}
