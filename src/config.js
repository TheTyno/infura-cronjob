module.exports = {
  cron: "* * * * * *",
  timezone: "America/Los_Angeles",
  web3: {
    infuraHost: "https://mainnet.infura.io/v3",
    infuraAccessToken: process.env.INFURA_ACCESS_TOKEN,
    contractAddress: "0x101884C6c941B1a70E2C5597f33889023db9dA23",
    contractABI: [
      { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
      { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
      { inputs: [], name: "ApprovalToCurrentOwner", type: "error" },
      { inputs: [], name: "ApproveToCaller", type: "error" },
      { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
      { inputs: [], name: "MintToZeroAddress", type: "error" },
      { inputs: [], name: "MintZeroQuantity", type: "error" },
      { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
      { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
      { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
      {
        inputs: [],
        name: "TransferToNonERC721ReceiverImplementer",
        type: "error"
      },
      { inputs: [], name: "TransferToZeroAddress", type: "error" },
      { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address"
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "Approval",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address"
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool"
          }
        ],
        name: "ApprovalForAll",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint8",
            name: "version",
            type: "uint8"
          }
        ],
        name: "Initialized",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        name: "RoyaltiesSet",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        inputs: [
          { internalType: "uint8", name: "stageId_", type: "uint8" },
          { internalType: "address[]", name: "accounts_", type: "address[]" }
        ],
        name: "addToWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address[]", name: "accounts_", type: "address[]" },
          { internalType: "uint256[]", name: "amounts_", type: "uint256[]" }
        ],
        name: "adminMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" }
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getApproved",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          { internalType: "string", name: "baseUri_", type: "string" },
          {
            internalType: "bytes32",
            name: "vipMerkleTreeRoot_",
            type: "bytes32"
          },
          { internalType: "uint256", name: "vipMintLimit_", type: "uint256" },
          {
            internalType: "bytes32",
            name: "whitelistMerkleTreeRoot_",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "whitelistMintLimit_",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "publicMintLimit_",
            type: "uint256"
          },
          { internalType: "uint256", name: "maxSupply_", type: "uint256" },
          {
            internalType: "address",
            name: "paymentSplitter_",
            type: "address"
          }
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "account_", type: "address" }
        ],
        name: "isAdmin",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "operator", type: "address" }
        ],
        name: "isApprovedForAll",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "ownerOf",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [{ internalType: "uint256", name: "amount_", type: "uint256" }],
        name: "publicMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "uint8", name: "stageId_", type: "uint8" },
          { internalType: "address[]", name: "accounts_", type: "address[]" }
        ],
        name: "removeFromWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "value", type: "uint256" }
        ],
        name: "royaltyInfo",
        outputs: [
          { internalType: "address", name: "receiver", type: "address" },
          { internalType: "uint256", name: "royaltyAmount", type: "uint256" }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" }
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "bytes", name: "_data", type: "bytes" }
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "account_", type: "address" },
          { internalType: "bool", name: "enable_", type: "bool" }
        ],
        name: "setAdminPermissions",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "bool", name: "approved", type: "bool" }
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [{ internalType: "string", name: "baseUri_", type: "string" }],
        name: "setBaseUri",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "uint256", name: "maxSupply_", type: "uint256" }
        ],
        name: "setMaxSupply",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" }
        ],
        name: "setRoyalties",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "enum PixelatedApes.Stage",
            name: "stage_",
            type: "uint8"
          }
        ],
        name: "setStage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "stage",
        outputs: [
          { internalType: "enum PixelatedApes.Stage", name: "", type: "uint8" }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          { internalType: "bytes4", name: "interfaceId", type: "bytes4" }
        ],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "tokenURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "tokensOfOwner",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "address", name: "newOwner", type: "address" }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "uint8", name: "stageId_", type: "uint8" },
          { internalType: "uint256", name: "limit_", type: "uint256" }
        ],
        name: "updateLimit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "uint8", name: "stageId_", type: "uint8" },
          { internalType: "bytes32", name: "merkleTreeRoot_", type: "bytes32" }
        ],
        name: "updateMerkleTreeRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "uint256", name: "amount_", type: "uint256" },
          { internalType: "bytes32[]", name: "proof_", type: "bytes32[]" }
        ],
        name: "vipMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { internalType: "uint256", name: "amount_", type: "uint256" },
          { internalType: "bytes32[]", name: "proof_", type: "bytes32[]" }
        ],
        name: "whitelistMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }
    ]
  }
};
