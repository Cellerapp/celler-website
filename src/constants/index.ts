import { SectionContent } from "@/types/termsType";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = API_URL?.includes("staging")
  ? "https://web.celler.app"
  : "https://web.celler.app";

export const LOGIN_URL = `${BASE_URL}/login`;
export const SIGNUP_URL = `${BASE_URL}/sign-up`;
export const messages = [
  {
    id: 1,
    title: "Buy Digital assets",
    description:
      "Purchase digital assets in just a few clicks. Enjoy secure transactions and real-time pricing for a smooth experience.",
  },
  {
    id: 2,
    title: "Sell Digital assets",
    description:
      "Quickly convert your digital assets into cash or other currencies. Enjoy competitive rates and a straightforward selling process.",
  },
  {
    id: 3,
    title: "Swift PayOut Transaction",
    description:
      "Experience instant payouts with lightning-fast transaction processing, ensuring your funds reach you in no time.",
  },
  {
    id: 4,
    title: "Enhanced Security with Built-in KYC",
    description:
      "Our safety is our priority. Complete our trusted KYC process to protect your account and enable secure transactions.",
  },
];


export const termsContent: SectionContent[] = [
  {
    title: "PART A: BACKGROUND",
    content: [
      "BEFORE YOU START, IT IS IMPORTANT TO NOTE THAT BUYING AND SELLING CRYPTO ASSETS IS INHERENTLY RISKY. YOU SHOULD CONSIDER THE RISKS BEFORE DECIDING TO BUY OR SELL CRYPTO ASSETS.",
      "IF YOU HAVE QUESTIONS OR CONCERNS REGARDING YOUR CRYPTO CURRENCIES SERVICES, YOUR CRYPTO ASSETS, OUR SERVICE PROVIDER(S), OR RELATED TRANSACTIONS OR ACCOUNT ACTIVITY, PLEASE CONTACT CELLER CUSTOMER SUPPORT AT INFO@celler.app YOU CAN ALSO ACCESS SUPPORT VIA IN-APP CHAT.",
      "PLEASE NOTE THAT THERE MAY BE TAX CONSEQUENCES FROM ANY GAIN OR LOSS YOU INCUR WHEN YOU SELL YOUR CRYPTO ASSETS. WE DO NOT PROVIDE FINANCIAL, INVESTMENT, LEGAL OR TAX ADVICE. PLEASE SEEK ASSISTANCE FROM A QUALIFIED PROFESSIONAL.",
      'This Terms of Use (“Cryptocurrency Terms of Use”) is a contract between you and Tampay by Cq Ltd and the owner of the product and application Celler Application (“Celler”) and governs your use of the portion of your Celler App balance where you can buy, sell, hold, and learn about cryptocurrency (your "Cryptocurrency Services").',
    ],
  },
  {
    title: "1. The Cryptocurrency Services",
    content: [
      {
        subTitle: "1. The Cryptocurrency Services",
        text: "1.1 The “Cryptocurrency Services” are additional services which permit eligible Celler Account holders to buy, sell, or hold interests in certain Supported Cryptocurrencies using funds held in their Celler Accounts.",
      },
      {
        subTitle: "",
        text: "1.2. We will automatically link your Cryptocurrencies Account to your personal Celler Account. Your login credentials for your personal Celler account act as the credentials to access your Cryptocurrencies Account Balance.",
      },
      {
        subTitle: "",
        text: "1.3. As described in more detail below, here are some things you can do with the Cryptocurrencies Account (subject to some jurisdictional differences):",
        bulletPoints: [
          "Buy Crypto Assets;",
          "Hold Crypto Assets;",
          "Sell Crypto Assets;",
          "Send and Receive Crypto Assets on-Chain;",
          "View market information and educational content.",
        ],
      },
      {
        subTitle: "",
        text: "1.4. Before you can obtain exposure to the Cryptocurrency Services you are required to read these Cryptocurrency Terms and the various associated risk warnings contained herein. By accessing and using the Cryptocurrencies Services, you agree to comply with all aspects of these Cryptocurrency Terms. You also agree to comply with the following additional policies as applicable by jurisdiction:",
        bulletPoints: ["Celler Privacy Policy", "Terms of use Nigeria"],
      },
      {
        subTitle: "",
        text: "1.5. Please read carefully all of these Cryptocurrency Terms and each of the other agreements and policies that apply to you, including our Privacy Statement, which applies to the transaction and activity data we collect involving your Cryptocurrencies use. If there is any conflict between the applicable Terms of Use and these Cryptocurrency Terms, these Cryptocurrency Terms will govern and apply.",
      },
      {
        subTitle: "",
        text: "1.6. We may revise these Cryptocurrency Terms and any of the agreements and policies listed above from time to time. The revised version will be effective at the time we post it, unless otherwise noted. If our changes to these Cryptocurrency Terms reduce your rights or increase your responsibilities, we will provide you at least 21 days' advance notice, or such longer period as required by law. By continuing to use the services, including by holding Crypto Assets (as defined below), after any change to these Cryptocurrency Terms, you agree to abide by and be bound by those changes. If you do not agree with any changes to these Cryptocurrency Terms, you must sell your Crypto Assets and stop accessing your Cryptocurrencies Services through Celler. ",
      },
      {
        subTitle: "",
        text: "1.7. Although Celler is a regulated entity, it is important to note that the Cryptocurrency Services we provide in relation to these Cryptocurrency Terms, as with the majority of cryptocurrency services across the world, are currently unregulated in some Territories not permitted. ",
      },
      {
        subTitle: "",
        text: "1.8. As part of the Cryptocurrency Services, we may provide information on the price, range, or volatility of the Supported Cryptocurrencies and events that have affected the price of cryptocurrencies generally. Any such information provided is solely for your personal use and you may not redistribute it to any third party. We will not provide you with any advice in connection with the Cryptocurrency Services therefore any such information (whether provided directly by us or via a Cryptocurrency Exchange) should not be relied upon for any investment decision – any decision to buy or sell an interest in a Supported Cryptocurrency rests with you. ",
      },
      {
        subTitle: "",
        text: "1.9. The value of crypto assets can be extremely volatile and unpredictable, which can result in significant losses in a short time, including possibly a loss of total value. The price and liquidity of crypto assets has been subject to large fluctuations in the past and may be subject to large fluctuations in the future. Buying and selling crypto assets is inherently risky, and you should consider the risks before deciding to buy or sell crypto assets. If you are unsure about whether a transaction involving cryptocurrencies is suitable for you and your circumstances, you should contact an independent financial adviser.",
      },
      {
        subTitle: "",
        text: "1.10. Supported Cryptocurrencies. Your Celler Account is intended solely for proper use of Supported Cryptocurrencies as designated by Celler on our app or website. Any attempt to transfer any cryptocurrency or other digital or virtual assets that Celler does not formally recognize, whether through forks, airdrops, user error, OMNI layer protocols or otherwise, will not be accepted by Celler on behalf of any user, and, subject to the sole discretion of Celler, you will not receive any value with respect to any such Unsupported Assets. Under no circumstances should you attempt to use your Cryptocurrencies Account to store, send, request, or receive any assets other than Supported Cryptocurrencies. Celler assumes no responsibility in connection with any attempt to use your Cryptocurrencies Account with digital currencies that we do not support. SENDING INCOMPATIBLE CRYPTOCURRENCIES RESULTS IN A COMPLETE LOSS OF THE FUNDS AND THESE FUNDS CANNOT BE RECOVERED.",
      },
      {
        subTitle: "",
        text: "1.11. In the event that an Unsupported Asset is sent to Celler by a third party or user, by error or otherwise, it is effectively lost to such third parties or users. Any such Unsupported Assets will be treated as property of Celler. CELLER IS NOT RESPONSIBLE FOR THE RECOVERY OR RETURN OF ANY UNSUPPORTED ASSET SENT TO CELLER BY ANY THIRD PARTY OR USER, REGARDLESS OF THE INTENTION OF THE PERSON SENDING SUCH UNSUPPORTED ASSET OR ATTEMPTS BY CELLER TO RETURN SUCH UNSUPPORTED ASSET. Celler will not be responsible for or be required to attempt to recover or provide any value with respect to any Unsupported Assets sent to the platform unless it decides to do so in its sole and absolute discretion. Any Asset not listed within the Celler App or website is an Unsupported Asset.",
      },
    ],
  },
  {
    title: "2. About Celler and these Cryptocurrency Terms",
    content: [
      {
        subTitle: "",
        text: "2.1. Celler is a trading name and product of Tampay by Cq Ltd a registered company incorporated under the Laws of the Federal Republic of Nigeria. ",
      },
      {
        subTitle: "",
        text: "2.2. You are advised to print or download and keep a copy of these Cryptocurrency Terms of Use for future reference. You can always view the current Cryptocurrency Terms of Use on our Website.",
      },
    ],
  },
  {
    title: "3. Eligibility",
    content: [
      {
        subTitle: "",
        text: "3.1. You may only access the Cryptocurrency Services if:",
        bulletPoints: [
          " you are at least 18 years old, or the age of majority in your state or territory of residence;",
          "you register and create a Celler Account;",
          "you have not breached the Celler Terms of Use;",
          "you have provided the required identifying information including: name, physical address, date of birth and taxpayer identification number. We may require additional information from you from time to time in order to verify the required identifying information, such as a copy of your government issued photo ID or evidence of your residency, like a utility bill;",
          "your Celler Account has not been locked or suspended by Celler; and",
          "you are a resident in a Supported Country.",
        ],
      },
      {
        subTitle: "",
        text: "3.2. If you do not have a Celler, you can register by following the instructions on our Website, as set out in the Terms of Use.",
      },
      {
        subTitle: "",
        text: "3.3. In certain circumstances, we may ask certain questions or request additional information from you in order to verify your identity so that we can continue to meet our legal obligations.",
        bulletPoints: [
          " We may need to do those checks before or after we have made the Cryptocurrency Services available to you.",
          " We may require you to provide us with information if we reasonably need it in order to complete our checks.",
        ],
      },
      {
        subTitle: "",
        text: "3.4. By using the Cryptocurrency Services, you confirm that:",
        bulletPoints: [
          " you will not use the Cryptocurrency Services in a manner which is contrary to the general prohibitions regarding your Celler Account according to the Celler Terms of Use.",
          " you will maintain adequate security and control of any and all IDs, passwords, personal identification numbers, or any other codes that you use to access your Cryptocurrencies Account and the Celler services. You agree to keep your physical address, mailing address, email address and other personal information current in your Celler profile.",
        ],
      },
    ],
  },
  {
    title: "4. Availability of the Cryptocurrency Services",
    content: [
      {
        subTitle: "",
        text: "4.1. We make no guarantee that you will be able to use the Cryptocurrency Services at all times. While we will try to complete purchases and sales of Crypto Assets that you authorize and that comply with these Cryptocurrency Terms, we do not guarantee your ability to buy or sell Crypto Assets. Your ability to buy or sell Crypto Assets may be delayed or unavailable due to the availability of the Crypto Asset or funds from your funding source, issues with the trading network or our ability to interface with our Service Provider(s), system downtime, limitations or suspensions we impose on your Cryptocurrencies Services in our sole discretion, for required safety, security, or legal reasons, or for other reasons outside Celler's or any Service Provider's control, and we are not liable to you if we are unable or delayed in executing your transactions. We will only reflect a Cryptocurrency Transaction in your Celler Account if we have been able to fulfill the Order with a cryptocurrency service provider.",
      },
      {
        subTitle: "",
        text: `4.2. All custody of and trading in Crypto Assets is performed for us by our licensed service providers or other appropriately licensed provider of trading and/or custody services that we identify from time to time ("Service Provider"). You can only use the Cryptocurrencies Account if you have a personal Celler account in good standing. If you are a Hawaii resident, we will not allow you to establish a Cryptocurrency Account at this time.`,
      },
      {
        subTitle: "",
        text: "4.3. We cannot guarantee the value of any Supported Cryptocurrencies at the point you submit your Order Instruction. We will use reasonable efforts to fulfill your Order Instruction at the price offered but in some circumstances the Cryptocurrency Exchange may not allow us to do so (and may not tell us why). ",
      },
      {
        subTitle: "",
        text: "4.4. The underlying protocols of the Supported Cryptocurrencies are subject to sudden changes in operating rules (‘forks’). If a fork occurs within the underlying system, we will liaise with the relevant Cryptocurrency Exchange in order to determine the best approach for Celler members in relation to such an event. Any decision made on behalf of Celler members will be made at Celler’s sole discretion.",
      },
      {
        subTitle: "",
        text: "4.5. The Cryptocurrency Services are provided without warranty of any kind, either express or implied. We do not represent that the Cryptocurrency Services will be available all of the time to meet your needs. We will use reasonable endeavors to provide you with the Cryptocurrency Services as soon as possible but we do not guarantee that access will not be interrupted, or that there will be no delays, failures, errors, omissions or loss of transmitted information.",
      },
      {
        subTitle: "",
        text: "4.6. We will use reasonable endeavors to ensure that the Cryptocurrency Services can normally be accessed by you in accordance with these Cryptocurrency Terms of Use. However, Celler will not be responsible for losses due to fluctuations in value that may occur if an order cannot be placed during a technical (or other type of failure) whether at Celler or a third-party.",
      },
      {
        subTitle: "",
        text: "4.7. We may suspend use of the Cryptocurrency Services for maintenance and we will make reasonable efforts to give you notice of any such suspensions. Where this isn’t possible, we’ll provide you with notice as soon as possible after the fact.",
      },
      {
        subTitle: "",
        text: "4.8. Celler may not make all of the Cryptocurrency Services available in all markets and jurisdictions and may restrict or prohibit use of all or a portion of the Cryptocurrency Services from certain states, territories, or jurisdictions (“Restricted Locations”). You must not attempt to use the Cryptocurrency Services if you are in any of those Restricted Locations. You must not attempt to circumvent any restrictions imposed via the Cryptocurrency Services, such as by obscuring your IP address or submitting any inaccurate information regarding your location. ",
      },
    ],
  },
  {
    title: "PART B – BUY/SELL",
    content: [],
  },
  {
    title: "5. The Buy/Sell service",
    content: [
      {
        subTitle: "",
        text: "5.1. Our Buy/Sell service enables you to:",
        bulletPoints: [
          "purchase interests in one or more Supported Cryptocurrencies using e-money in your Celler Account;",
          "sell your interests in one or more Supported Cryptocurrencies in exchange for e-money;",
        ],
      },
      {
        subTitle: "",
        text: "5.2. We do not currently allow use of a credit card or other credit products to purchase Crypto Assets. When you buy Crypto Assets, you agree that you have enough available funds in your selected funding source to complete your purchase. If we are not able to collect the required funds to complete your purchase from your selected funding source, you authorize us to:stop your purchase so that you are not able to buy Crypto Assets in that transaction,debit any other balance you hold in your Celler Account,debit any other funding source you have linked to your Celler account,remove the Crypto Assets from your Cryptocurrency Account for which we did not receive payment; and/ortake any other action that we deem necessary to collect payment for your transaction, as allowed or required by relevant laws and regulations.",
      },
      {
        subTitle: "",
        text: "5.3. By using the Buy/Sell service:",
        bulletPoints: [
          "you will have no relationship, contractual or otherwise, with a Cryptocurrency Exchange;",
          "you will not have a personal cryptocurrency wallet with a Cryptocurrency Exchange; and",
          "we will only update the balance in your Cryptocurrency Account to reflect your interest in Supported Cryptocurrency/ies once we have received confirmation of the completed purchase or sale from the relevant Cryptocurrency Exchange.",
        ],
      },
      {
        subTitle: "",
        text: "5.4. When you purchase, sell, or hold digital assets which are supported on the blockchain you may only withdraw or deposit to or from a supported blockchain address of the same type.",
      },
      {
        subTitle: "",
        text: "5.5. When you buy, sell, or hold digital assets which are not supported for blockchain settlements, you may only buy, sell, or hold said digital assets in your Celler digital wallet. You may not transfer said digital assets to another digital wallet with a different service provider.",
      },
      {
        subTitle: "",
        text: "5.6. When you receive or deposit a stablecoin digital asset where Celler provides an automated conversion function, you grant Celler the authority to execute said conversion without your consent or notice. The conversion value shall be governed by the local market rate, where Celler will make a reasonable effort at maintaining a 1-to-1 conversion rate. At this time, only BUSD to USDC automated conversion will be supported or honored.",
      },
      {
        subTitle: "",
        text: "5.7. Recurring Buy: You may create recurring purchases of Supported Cryptocurrencies on a daily, weekly, or monthly basis on the Celler in order to take advantage of dollar cost averaging. ",
      },
      {
        subTitle: "",
        text: "5.8. Dollar-cost averaging (DCA) is an investment strategy in which an investor divides up the total amount to be invested across periodic purchases of a target asset in an effort to reduce the impact of volatility on the overall purchase. The purchases occur regardless of the asset's price and at regular intervals. Recurring Buy gives App users the ability to apply this investment strategy DCA to cryptocurrency by creating recurring purchases of cryptocurrencies.",
      },
      {
        subTitle: "",
        text: "5.9. Payment Methods: You can set up recurring crypto purchases using fiat within your Celler App wallet. If you do not have sufficient fiat in your Celler App wallet on the date of a scheduled recurring buy your transaction will not be completed and Celler will not be responsible for losses due to fluctuations in value when a crypto buy is not executed.",
      },
      {
        subTitle: "",
        text: "5.10. Timing: A pending transaction will be created at the time of scheduling and the scheduled purchase will be executed typically within 24 to 48 hours.",
      },
      {
        subTitle: "",
        text: "5.11. You may create a recurring buy by setting the exact amount of crypto you want to purchase. The amount of fiat you’ll need will vary based on the rate of the cryptocurrency at the time the scheduled purchase is executed.",
      },
      {
        subTitle: "",
        text: "5.12. You may also create a recurring buy by setting the exact amount of local fiat currency to be used in the transaction. The amount of crypto you’ll buy will vary based on the rate at the time the scheduled purchase is executed. ",
      },
      {
        subTitle: "",
        text: "5.13. To Cancel a Recurring Buy: To cancel a recurring buy, click to enter into the recurring buy screen. On the bottom of the screen click the “Cancel recurring investment” button. Once the steps are completed, click “Yes” to confirm the cancellation. For questions or support in canceling a recurring buy contact ",
      },
      {
        subTitle: "",
        text: "5.14. If your first purchase is on the date of creation then it will be charged immediately and it can not be canceled. If your first purchase is within 7 days of creation your first purchase can only be canceled within 7 days from the scheduled creation date.",
      },
      {
        subTitle: "",
        text: "5.15. For subsequent purchases, the payment will be charged on the scheduled date and you can cancel anytime before the execution date.",
      },
    ],
  },
  {
    title: "6. Changing the Supported Cryptocurrencies",
    content: [
      {
        subTitle: "",
        text: "6.1. We may elect to add cryptocurrencies as Supported Cryptocurrencies for the Buy/Sell service from time to time. We may also elect to remove cryptocurrencies as Supported Cryptocurrencies for the Buy/Sell service from time to time (“Removed Cryptocurrencies”). When we remove a cryptocurrency as a Supported Cryptocurrency we will update the Celler App. You shall be obliged to sell any interest you have in the Removed Cryptocurrency within 14 calendar days or such shorter period as is required in the following circumstances:",
        bulletPoints: [
          "a Cryptocurrency Exchange withdraws a Supported Cryptocurrency from trading;",
          "where a regulator so specifies; or",
          "as otherwise required to comply with applicable laws.",
          "If you have not sold all your interests in the Removed Cryptocurrency within 14 calendar days, you authorize us to buy back your interest in the Removed Cryptocurrency at the best available price (as calculated by reference to prices listed on the relevant Cryptocurrency Exchange). The proceeds of such buy back will be credited to the e-money balance in your Celler.",
        ],
      },
      {
        subTitle: "",
        text: "6.2. We may elect to add cryptocurrencies as Supported Cryptocurrencies for the Buy/Sell service from time to time. We may also elect to remove cryptocurrencies as Supported Cryptocurrencies for the Buy/Sell service from time to time (“Removed Cryptocurrencies”). When we remove a cryptocurrency as a Supported Cryptocurrency we will update the Celler App.",
      },
    ],
  },
  {
    title: "7. Buy/Sell orders",
    content: [
      {
        subTitle: "",
        text: "7.1. To buy Crypto Assets, Celler will first show you the amount of Crypto Assets you would receive in exchange for the amount of money that you wish to spend. Because the price of Crypto Assets fluctuates, the price we provide will only be valid for a limited time. If the price we provided expires, you won't be able to complete your transaction at that price. If you still want to buy Crypto Assets, we will provide you with updated pricing information. The updated price you see may be much higher than a price that just expired. This is because Crypto Assets are inherently volatile. Once you confirm your transaction, we will then execute your purchase with our trading Service Provider.",
      },
      {
        subTitle: "",
        text: "7.2. You may place an Order Instruction by inputting the transaction details and submitting a request to buy or sell an interest in your chosen Supported Cryptocurrency at a specified price subject to Fees where applicable.",
      },
      {
        subTitle: "",
        text: "7.3. You will not be able to cancel your Order Instruction once you have confirmed it. By confirming your Order Instruction, you shall authorise us to submit an Order to the Cryptocurrency Exchange.",
      },
      {
        subTitle: "",
        text: "7.4. When you submit an Order Instruction to purchase interests in a Supported Cryptocurrency:",
        bulletPoints: [
          "we will buy the Supported Cryptocurrency via a Cryptocurrency Exchange;",
          "once we have bought the Supported Cryptocurrency via a Cryptocurrency Exchange we will redeem an amount of e-money equivalent to the Buy Price from your Celler Account; and",
          "the redeemed funds will be deemed to be paid by you to us, in consideration of which we will assign to you our beneficial interest (including any rights, title and benefits arising therefrom) in the Supported Cryptocurrency.",
          "Note. Following fulfillment of a Buy Order, a Cryptocurrency Exchange shall hold the Supported Cryptocurrency in a pooled account on an “omnibus” basis. This means that it may be held alongside cryptocurrency belonging to other Cryptocurrency Exchange customers (as well as cryptocurrency belonging to the Cryptocurrency Exchange itself). ",
        ],
      },
      {
        subTitle: "",
        text: "7.5. In order for us to fulfill your Cryptocurrency Transaction, you must have sufficient funds in your Celler Account or your Cryptocurrency Account. If you do not have sufficient funds, you cannot submit an Order Instruction (unless you upload additional funds).",
      },
      {
        subTitle: "",
        text: "7.6. We will make reasonable efforts to fulfill all purchase Order Instructions, but in some circumstances, we may be unable to do so; for example, due to a problem at the Cryptocurrency Exchange.",
      },
      {
        subTitle: "",
        text: "7.7. The value of interests held in your Cryptocurrency Account will be displayed on your Celler Account invest dashboard.",
      },
      {
        subTitle: "",
        text: "7.8. To sell Crypto Assets, Celler will first show you the amount of money for which the Crypto Assets would be sold. You cannot choose which Crypto Assets will be sold for each transaction. ",
      },
      {
        subTitle: "",
        text: "7.9. Because the price of Crypto Assets fluctuates, the price we provide will only be valid for a limited time. If the price we provided expires, you won't be able to complete your transaction at that price. If you still want to sell your Crypto Assets, we will provide you updated pricing information. The updated price you see may be much lower than a price that just expired. This is because Crypto Assets are inherently volatile. Once you confirm your transaction, we will execute your sale with our trading Service Provider.",
      },
      {
        subTitle: "",
        text: "7.10. When you submit an Order Instruction to sell a specified amount of interests in one or more Supported Cryptocurrencies, you will assign to us your interest in the Supported Cryptocurrency and authorise us to:",
        bulletPoints: [
          "sell your beneficial interest in the Supported Cryptocurrency back to a Cryptocurrency Exchange; and",
          "credit the Sell Price to your Celler Account.",
          "Once you confirm your sale, your transaction is not reversible. If we cannot complete your sale for any reason, we will notify you. You may also see your transaction history within the Celler App.",
        ],
      },
    ],
  },
  {
    title: "8. Canceling Orders",
    content: [
      {
        subTitle: "",
        text: " 8.1.We shall execute any Order on the terms of the Order Instruction received by us. This means that:",
        bulletPoints: [
          "you cannot cancel, change or reverse a Cryptocurrency Transaction once an Order Instruction has been accepted by us; and",
          "we are not obliged to modify, suspend or reject any Order Instructions that we have received.",
        ],
      },
    ],
  },
  {
    title: "9. Restrictions/limitations on your use of Buy/Sell",
    content: [
      {
        subTitle: "",
        text: "9.1. You may only use your e-money balance in your Celler Account to buy and sell interests in Supported Cryptocurrencies. You may not use your Celler Account or Cryptocurrency Account to buy interests via any cryptocurrency exchange that we do not partner with.",
      },
      {
        subTitle: "",
        text: "9.2. You may not use the Buy/Sell service to:",
        bulletPoints: [
          "use interests in Supported Cryptocurrencies to transact with merchants P2B;",
          "spend your interests in Supported Cryptocurrencies directly on a Prepaid Debit Card you may have;",
        ],
      },
      {
        subTitle: "",
        text: "9.3. We may apply limits to the number or value of Cryptocurrency Transactions you are able to undertake (e.g. limiting the amount of the interest in Supported Cryptocurrency you are able to buy or transfer in a single transaction) if we reasonably think it would help to manage any risk in a proportionate way.",
      },
      {
        subTitle: "",
        text: "9.4. Any limits as described in subsection 12.3 above will be communicated to you within your Celler Account while using the Buy/Sell service prior to any proposed transaction being confirmed by you.",
      },
    ],
  },
  {
    title: "PART C – OUR RELATIONSHIP",
    content: [],
  },
  {
    title: "10. Transaction Records",
    content: [
      {
        subTitle: "",
        text: "10.1. Each time you effect a Cryptocurrency Transaction we will  display the transaction details in your transaction history, which shall include the date of transaction, the Fees charged and, where applicable, the exchange rate applied.",
      },
      {
        subTitle: "",
        text: "10.2. Each Cryptocurrency Transaction is given a unique transaction ID and shown in the transaction history. We will not alter or amend information displayed in your online transaction history.",
      },
      {
        subTitle: "",
        text: "10.3. You should check your transaction history regularly and you should report any irregularities or clarify any questions you may have as soon as possible by contacting Customer Service.",
      },
      {
        subTitle: "",
        text: "10.4. When you view your Cryptocurrencies Account balance, we will show you the amount of each type of Crypto Asset you own, as well as an equivalent fiat value of those Crypto Assets. The price of Crypto Assets will rise and fall over time, and the price may sometimes change quickly and dramatically. So, even if the number of each type of Crypto Assets you hold remains the same, the fiat equivalent value will change as the market price of each Crypto Asset fluctuates. The fiat value we display is an estimate based on market data from our trading Service Provider. The value we show is the midpoint between the lowest recent sale price at which the applicable cryptocurrency was offered for sale and the highest recent price at which that same cryptocurrency was purchased, as reported by the Service Provider. This estimate does not represent the value you will receive if you actually sell your Crypto Assets or the price you will pay to buy more Crypto Assets and does not include our spread or fees.",
      },
    ],
  },
  {
    title:"11. Fees",
    content:[
         {
        subTitle: "",
        text: "11.1. Each Cryptocurrency Transaction could be subject to a fee, which we will display in-app prior to each Cryptocurrency Transaction."
      },
         {
        subTitle: "",
        text: "11.2. Customers that send cryptocurrency out of the Celler ecosystem are charged a fee to facilitate the transaction on the blockchain. Celler does not set the fee and the customer is informed of the fee before sending their cryptocurrency out."
     },
         {
        subTitle: "",
        text: "11.3. Fees which are not charged, credited or paid by Celler shall be announced at the time of buy or sell. "
     },
         {
        subTitle: "",
        text: "11.4. Celler is not responsible for fees which are charged by a third party or network."
     },
         {
        subTitle: "",
        text: "11.5. Celler is not responsible for fees which, by error, are not charged or credited to the customer. "
     },
         {
        subTitle: "",
        text: "11.6. Celler reserves the right to amend or cancel any cryptocurrency fees at any time. "
     },
    ]
  },
  {
    title:"12. Termination; suspension; refusal",
    content:[
         {
        subTitle: "",
        text: "12.1. You may terminate your access to the Cryptocurrency Services with us at any time by sending us notice in writing."
      },
         {
        subTitle: "",
        text: "12.2. We may terminate your access to the Cryptocurrency Services at any time in our sole discretion by giving you notice, which may take effect immediately or on a later date as may be specified in the notice."
      },
         {
        subTitle: "",
        text: "12.3. We may at any time suspend or terminate your use of the Cryptocurrency Services without notice if:",
        bulletPoints:[
            "we are required to take such action by a Cryptocurrency Exchange;",
            "you breach any condition of these Cryptocurrency Terms of Use;",
            "you violate or we have reason to believe that you are in violation of any law or regulation that is applicable to your use of the Cryptocurrency Services;",
            "we have reason to believe that you are in any way involved in any fraudulent activity, money laundering, terrorism financing or other illegal or criminal activity;",
            "it is reasonably necessary for us to do so to prevent you or us contravening any applicable law or regulatory requirements;",
            "it is necessary for security reasons; or",
            "if we reasonably suspect the Cryptocurrency Services have been or are being used without your authorisation or fraudulently; and we shall notify you either prior to the suspension or, if prior notification is not possible under the circumstances, promptly after the suspension unless we are prohibited by law to notify you; or",
            "if the direct or indirect inherent risk attributed to your crypto activity falls outside of Celler’s risk appetite.",
            "Celler retains the right to determine the appropriate risk level it is willing to accept in regards to any Crypto Currency activity."
        ]
     },
       {
        subTitle: "",
        text: "12.4. We may refuse to submit an Order Instruction where:",
        bulletPoints:[
            "we are, in our reasonable opinion, required to do so by applicable law, regulation or any court or other authority to which we are subject in any jurisdiction; and",
            "We have concerns about the security of your Celler Account or we suspect the Cryptocurrency Services are being used in a fraudulent or unauthorized manner.",
            ""
        ]
     },
       {
        subTitle: "",
        text: "12.5. We will try to give you advance notice of any suspension or refusal. Where advance notice is not possible, we will provide you with notice as soon as reasonably practicable thereafter. Unless we are prevented by law (or unless the relevant Cryptocurrency Exchange does not provide us with details), we will try to provide you with details of the nature of the suspension or refusal, the anticipated duration and anything you have to do to remedy any error or circumstances which have led to the suspension or refusal.",
        
     },
       {
        subTitle: "",
        text: "12.6. Whilst your use of the Cryptocurrency Services is suspended, we may (using our reasonable discretion) sell off all or some of your interests by providing notice to you in certain circumstances, for example;",
        bulletPoints:[
            "if you fail to provide any information we have requested or any warranty/representation you have given us is or becomes, in our opinion, materially inaccurate, incorrect or misleading;",
            "if you take some action (or refrain from doing something) which places us in breach of our legal or regulatory obligations;",
            "if you breach these Cryptocurrency Terms of Use or those of your Celler Account; or",
            "for any other reason which we may specify in our notice to you."
        ]
     },
      {
        subTitle: "",
        text: "12.7. If we sell off your interests in Supported Cryptocurrencies, we will buy back the interest(s) at prevailing market rates. If the value of the Supported Cryptocurrency has weakened, this means that you may incur a loss relative to the amount you initially paid. We will credit the sale proceeds (in your preferred currency) to your Celler Account."
     },
      {
        subTitle: "",
        text: "12.8. On termination, unless prohibited by applicable law or by any court or other order to which we are subject in any jurisdiction, for a period of 10 days following the date of termination:",
        bulletPoints:[
            "you will continue to be able to view the balance of your interest(s) in Supported Cryptocurrencies on your Celler Account dashboard;",
            "you will not be permitted to buy any further interests in Supported Cryptocurrencies; and",
            "you may – at our sole discretion – sell your interests in Supported Cryptocurrencies back to us."
        ]
      },
      {
        subTitle: "",
        text: "12.9. If at the end of the 14 day period you have not sold down all your interests in Supported Cryptocurrencies, you authorise us to buy back your interests at the best available price via the relevant Cryptocurrency Exchange. The proceeds of such buy back will be credited to the e-money balance in your Celler Account."
     },
      {
        subTitle: "",
        text: "12.10. For the avoidance of doubt, if your Celler Account is terminated or suspended your access to the Cryptocurrency Services will also be terminated or suspended (as applicable)."
    },
      {
        subTitle: "",
        text: "12.11. Except where prohibited by law or regulation, as security for the performance of your obligations under these Cryptocurrency Terms, you grant to Celler a lien on, and security interest in and to, your Crypto Assets."
     },
      {
        subTitle: "",
        text: "12.12. If the balance in your Celler Account (including your Cryptocurrencies Services) becomes negative for any reason, that negative balance represents an amount that you owe to Celler. In addition to any rights we have under the Celler Terms of Use, you authorize Celler to sell your Crypto Assets and use the proceeds to pay a negative balance you owe to us in any Celler account you own at our sole discretion."
     },
      {
        subTitle: "",
        text: "12.13. If we sell your Crypto Assets to pay amounts you owe to us, we will value the Crypto Assets using the price that otherwise applies to the sale of Crypto Assets at that time, or another reasonable price determined by Celler in its reasonable discretion. You understand that the value of Crypto Assets may rise or fall quickly and that we have no obligation to sell at a time that provides the best price for you. While Celler will notify you if you have a negative balance, regardless of how quickly we sell your Crypto Assets, we have no obligation to give you notice before we sell."
    },
      {
        subTitle: "",
        text: "12.14. Error in Receiving Cryptocurrency. In the event of an error, you give Company permission, subject to Company’s compliance with applicable law, to make appropriate corrections by debiting or crediting your Celler balance, or debiting or crediting your primary or alternate funding sources as applicable. We may also, in our sole discretion, block, freeze, or deny access to these funds, associated wallets, or services."
    },
     
      {
        subTitle: "",
        text: "12.15. If your account is dormant for a period of (12) consecutive months, Celler reserves the right to terminate the relationship to include selling your crypto assets into your local currency and/or transferring funds to a verified payment method. "
    },
      {
        subTitle: "",
        text: "12.16. Prior to the termination of your account due to dormancy, Celler will make an honest best effort to contact you in regards to your Crypto assets."
    },
      {
        subTitle: "",
        text: "12.17. Celler reserves the right to liquidate all crypto positions after (12) consecutive months of dormancy at current market rates. Any gain or loss of value due to this action is the responsibility of the User. Celler is not liable for any lost value nor any tax implication which may arise. "
    },
      {
        subTitle: "",
        text: "12.18. Liquidation of Crypto Positions, In addition to the termination rights outlined in above, Celler reserves the right, at its sole discretion, to liquidate all crypto positions held in your account at the prevailing market rate under the following circumstances:",
        bulletPoints:[
            "Failure to Comply with Applicable Laws: If we, in our reasonable judgment, determine that your actions or use of our services violate Applicable Laws, or if you fail to comply with any legal obligations as specified in this Agreement.",
            " Failure to Provide Necessary Information: In the event that you fail to provide information or documentation necessary for us to perform due diligence measures to our full satisfaction, including but not limited to identifying the purpose of using our services, verifying your identity, and obtaining relevant information about the origin of your funds or wealth.",
            "Suspicion of Illegal Activities: If we reasonably suspect your involvement in money laundering, terrorist financing, fraud, or any other illegal activities, and we are unable to alleviate such suspicions through further investigation.",
            "Risk Assessment: If circumstances related to you or a person affiliated with you indicate a higher risk of money laundering, terrorist financing, fraud, or any other illegal activity, and providing services to you is deemed undesirable by us.",
            "International Sanctions: If you or a person affiliated with you is or has been the subject of an international financial sanction.",
            "Overdue Payables: In the event of overdue payables to Celler for which we have the right to claim interest for late payment.",
            "Lawful Orders: Upon receipt of a lawful order from a competent public authority or another competent authority, including but not limited to law enforcement, supervision, tax authority, court, bailiff, or any international clearing system administrator, demanding termination of your account or restriction of services provided to you.",
            "Non-Compliance with Applicable Law: If we determine that, under Applicable Law, we are prohibited from providing services to you or have the right to refuse services or terminate the Agreement with you."
        ]
    },
    
     
    ]
  },
  {
    title:"13. Limitation of Liability",
    content:[
        {
        subTitle: "",
        text: "13.1. Nothing in these Cryptocurrency Terms of Use shall operate to exclude liability for death or personal injury due to negligence or for fraud or fraudulent misrepresentation or for any statutory liability that cannot be excluded or amended according to applicable laws."
      },
        {
        subTitle: "",
        text: "13.2. Subject to section 16.1, we shall not be liable for:",
        bulletPoints:[
            "any disruption or impairment of our service or for disruptions or impairments of intermediary services on which we rely for the performance of our obligations hereunder, provided that such disruption or impairment is due to abnormal and unforeseeable circumstances beyond our reasonable control or the control of the intermediary affected;",
            "any indirect or consequential losses including but not limited to loss of profit, loss of business and loss of reputation;",
            "any losses arising from our compliance with legal and regulatory requirements;",
            "the assessment or payment of any taxes, duties or other charges that arise from your use of the Cryptocurrency Services;",
            "any losses arising from the inaccuracy or incompleteness of any market data provided to you in the course of us providing the Cryptocurrency Services (whether such data is provided to us by a Cryptocurrency Exchange or otherwise);",
            "any losses arising from any act or failure to act by a Cryptocurrency Exchange or the provider of any Cryptocurrency Wallet; and",
            "any losses arising from incorrect instructions received by us from you.",
            "Any loss arising from unauthorized access to your account due to loss of gadgets, fraud or your loss of access to your account without our knowledge",
        ]
     },
       {
        subTitle: "",
        text: "13.3. No Liability for Liquidation: If Celler exercises its right to liquidate crypto positions under Section 12.18, we shall not be liable to you for any costs, losses, claims, or expenses incurred as a result of such liquidation." 
    },
    ]
  },
  {
    title:"14. Complaints",
    content:[
        {
        subTitle: "",
        text: "14.1. If you have a complaint in relation to the Cryptocurrency Services you should contact Customer Operations at.. You should clearly indicate that you are wishing to make a complaint to us. This helps us to distinguish a complaint from a mere query. "
    },
    ]
  },
  {
    title:"15. General Disclosures",
    content:[
        "Legislative and regulatory changes or actions at the state, federal, or international level may adversely affect the use, transfer, exchange and value of cryptocurrency.Transactions in cryptocurrency may be irreversible, and accordingly, losses due to fraudulent or accidental transactions may not be recoverable.Some cryptocurrency transactions shall be deemed to be made when recorded on the public ledger, which is not necessarily the date or time the customer initiates the transaction.The volatility and unpredictability of the price of cryptocurrency relative to fiat currency may result in significant loss over a short period of time.The nature of cryptocurrency may lead to an increased risk of fraud or cyberattack.The nature of cryptocurrency means that any technical difficulties experienced by Celler may prevent the access or use of a customer's cryptocurrency.Any bond or trust account maintained by Celler for the benefit of its customers may not be sufficient to cover all losses incurred by customers.Rhode Island Disclosures Information on fees and pricing can be obtained upon request to …… Your Crypto Assets are not insured or guaranteed by the FDIC, Securities Investor Protection Corporation (SIPC) or any other public or private insurer, including against cyber theft or theft by other means.The transfer, purchase and sale of cryptocurrency is irrevocable.Information about unauthorized transactions and error-resolution can be obtained from ……..You may update your contact information through your personal Celler account.The date or time when a transaction is executed, and your funding device is charged may differ from the date or time when you provided the instruction to authorize the transaction.You will receive an email receipt with respect to your purchase and sale of Crypto Assets.You have the right to at least thirty (30) days' prior notice of a change in our fee schedule or changes to these terms and conditions.Cryptocurrency is not legal tender Washington Disclosures Information on fees and pricing can be obtained upon request to…………………..Your Crypto Assets are not insured or guaranteed by the FDIC, Securities Investor Protection Corporation (SIPC) or any other public or private insurer, including against cyber theft or theft by other means.The transfer, purchase and sale of cryptocurrency is irrevocable.Information about unauthorized transactions and error-resolution can be obtained from ……...The nature of cryptocurrency may lead to an increased risk of fraud or cyber-attack and your cryptocurrency value may be irretrievably stolen."
    ]
  },
  {
    title:"16. Definitions",
    content:[
    `
    Any capitalized terms which are not defined in these Cryptocurrency Terms of Use shall have the meaning given in the Celler Account Terms of Use.
“Buy Order” means an instruction submitted by us to a Cryptocurrency Exchange to buy Supported Cryptocurrencies in accordance with an Order Instruction.
“Buy Price” means the price payable by you to us (plus applicable Fees) for the purchase of interests in Supported Cryptocurrencies;
“Cryptocurrency Account” means the interests in Supported Cryptocurrencies held by a customer of the Cryptocurrency Service.
“Cryptocurrency Exchange” means a cryptocurrency exchange which we partner with.
“Cryptocurrency Services” means the functionality within your Celler Account as described at subsection 1.1.
“Cryptocurrency Transaction” means a purchase or sale of an interest in a Supported Cryptocurrency by us on your behalf, including a Crypto to Crypto Transaction;
“Cryptocurrency Wallet” means any third-party custodian wallet which enables the receipt and storage of at least the Supported Cryptocurrencies.
“Crypto to Crypto Transaction” is a Cryptocurrency Transaction where the Buy Price is payable in interests of a Supported Cryptocurrency.
“Existing Member” means a person who is a user of the Celler Cryptocurrency Service at the time you wish to make a P2P Transfer and who fulfils the eligibility criteria at section 3.
“Fiat Currency” means a government-issued currency which is supported by the Celler Account.
“Holding Crypto Assets'' means the balance reflected in your cryptocurrency account represents your ownership of the amount of each type of Crypto Asset shown. Celler combines your Crypto Asset balance with the Crypto Asset balances of other Celler account holders and holds those Crypto Assets in an omnibus account through our custodial Service Provider. We keep a record of your interest in that omnibus account based on the amount of each type of Crypto Asset that is reflected in your balance. You do not own any specific, identifiable, Crypto Asset. These Crypto Assets are held apart from Celler’s corporate assets and Celler will neither use these assets for its operating expenses or any other corporate or business purposes, nor will it voluntarily make these Crypto Assets available to its creditors in the event of bankruptcy.
“Order” means an instruction submitted by us to a Cryptocurrency Exchange to buy or sell Supported Cryptocurrencies, in accordance with an Order Instruction.
“Order Instruction” means an instruction – submitted by you to us – to buy or sell a specified quantity of interests in Supported Cryptocurrencies at a specified price;
“Sell Order” an instruction submitted by us to a Cryptocurrency Exchange to sell Supported Cryptocurrencies in accordance with an Order Instruction.
“Sell Price” means the price (net of applicable Fees) payable to you by us for the sale of your nominated interests in Supported Cryptocurrencies;
“Supported Country” means a country in which we currently offer the Cryptocurrency Service.
“Supported Cryptocurrencies” means the cryptocurrencies listed in the Celler App (as may be amended by us in our sole discretion from time to time). 

    `   
    ]
  },
];
export const policyContent: SectionContent[] = [
  {
    title: "1. Introduction",
    content: [
      "Celler (“we,” “our,” or “us”) is committed to protecting your privacy.",
      "We are a data controller of your personal data, meaning we determine the purposes and means of the processing when you visit our Website, our application, and/or use our Services.",
      "This Privacy Policy (the “Policy”) provides information to whom it applies, grounds for data processing, data processing description, regulatory requirements and specifics, and other information to transparently and comprehensively inform you about all aspects of privacy, including your limitations and rights.",
      "If this Policy does not meet your needs, we kindly ask you not to use our Service. By continuing to visit our Website it will be considered that you accept this Policy. As a user of our Services, you will be informed about this Policy when registering. If you do not accept it, you will not be able to register and/or use our Services. Should you have any questions please reach out to our legal team at compliance@celler.app or our data privacy officer at privacy@celler.app.",
      "This Privacy Policy may be revised, modified, updated, or supplemented at any time, without prior notice, at our sole discretion. When we make changes to this Privacy Policy, we will notify all users on our Website, and make the amended Privacy Policy available on our Website. By further using our Services it will be considered you accept with the implied changes.",
      "This privacy policy is an integral part of Celler Terms of Service and is of informative nature.",
    ],
  },
  {
    title: "2. What is Personal Data?",
    content: [
      "Personal data means any information relating to an identified or identifiable natural person (‘data subject’). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, and similar, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.",
      "As we receive personal identification data, such as ID documents, as well as certain economic data, it is important for you to understand how we treat your data and the purposes for which we process it.",
      "Processing of personal data means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.",
      "Through this Policy, we aim to inform you about how we process the personal data collected through our website and application. This includes details about the personal data we collect, the reasons for collecting it, the legal grounds for the collection, how we use and disclose it, your choices, and your obligations and rights considering privacy matters.",
    ],
  },
  {
    title: "3. Contact Information",
    content: [
      "If you have questions or concerns about this Privacy Policy or your personal data, please contact us: Celler Support Email: support@celler.app Website: https://www.celler.app",


    ],
  },
  {
    title: "4. Validity and Termination",
    content: [
      "By confirming “I confirm that I am at least 18 years old and I agree to the User Agreement and accept the Privacy Policy” during the registration process button you confirm you accept to this Policy which is mandatory for using our Services and becoming our customer.",
      "This Policy applies to you either as an individual user or as a legal or authorised representative, or ultimate beneficial owner (and altogether “User”, and/or “You”).",
      "In the scope of solely visiting the Website, our Cooky Policy applies to all Website visitors. Our Cooky Policy includes information on the different types of cookies we are using and your active consent will be required for all non-essential cookies. We use cookies and other tracking technologies to ensure the Website and our application are working smoothly, and for other purposes, for example, to improve or enhance user experience, for marketing or analytical purposes, and similar.",
      "This policy is valid for as long as you use our Services, and ceases to be valid when you stop using our Services.",
      "Since we are subjected to Money Laundry Act, we have certain reporting and data retention obligations even after the termination of the business relationship with you, and some of your rights (e.g. to deletion) may also be limited.",
    ],
  },
  {
    title: "5. Data We Collect",
    content: [
      {
        subTitle: "We may collect and process the following personal data:",
        text: "",
        bulletPoints: [
          "Identification data (full name, date of birth, gender, nationality, government-issued ID, selfie/liveness verification data ).",
          "Contact data (email address, phone number, residential address).",
          "Financial data (bank account details, transaction history, wallet addresses).",
          "Device and usage data (IP address, browser type, operating system, device identifiers, app usage logs, crash reports).",
          "Compliance data (KYC verification results, AML checks, sanctions screening).",
        ],
      },
    ],
  },
  {
    title: "6. Use of TrueDepth API",
    content: [
    
      {
        subTitle: "",
        text: "",
        bulletPoints: [
         "We use facial recognition technology via the TrueDepth API solely to verify user identity and liveness during onboarding.",
         "This Data is securely transmitted to our identity verification provider, SmileID, for the duration of the verification process (up to one hour) and is permanently deleted immediately after the verification process is completed.",
         "For more information on SmileID's handling of biometric data, please see their documentation: https://docs.usesmileid.com",
        "This data is used for compliance with KYC requirements, processed securely, and never shared.",
        "We do not use face data for advertising or profiling.",
        ],
      },
    ],
  },
  {
    title: "7. Purposes of Processing",
    content: [
      {
        subTitle: "We process your personal data for the following purposes:",
        text: "",
        bulletPoints: [
          "To provide, operate, and improve our Services.",
          "To verify your identity (KYC/AML compliance).",
          "To process transactions (deposits, withdrawals, payments).",
          "To prevent fraud, financial crime, and unauthorized activity.",
          "To comply with legal obligations under applicable laws (e.g. AML/CFT regulations).",
          "To provide customer support and communicate with you.",
        ],
      },
    ],
  },
  {
    title: "8. Legal Grounds for Processing",
    content: [
      {
        subTitle: "We rely on the following legal bases:",
        text: "",
        bulletPoints: [
          "Your consent (for non-essential processing such as marketing).",
          "Performance of a contract (to deliver Services you requested).",
          "Compliance with legal obligations (AML/CFT, reporting requirements).",
          "Our legitimate interests (fraud prevention, service improvement).",
        ],
      },
    ],
  },
  {
    title: "9. Sharing of Personal Data",
    content: [
      "We do not sell your personal data. We may share it with:",
      {
        subTitle: "",
        text: "",
        bulletPoints: [
          "Licensed Payout Partners & Service Providers (e.g., Quidax, licensed payment processors) for processing transactions and compliance.",
          "Regulatory and law enforcement authorities when required by law.",
          "Third-party service providers (e.g., hosting, analytics, identity verification).",
        ],
      },
    ],
  },
  {
    title: "10. International Use",
    content: [
      "Currently, our Services are only available in Nigeria. If you access our app from outside Nigeria, you do so at your own discretion.",
    ],
  },
  {
    title: "11. Data Retention",
    content: [
      "We retain personal data as long as your account is active or as required by law/regulations (e.g., AML/KYC obligations). When no longer required, we securely delete or anonymize your data.",
    ],
  },
  {
    title: "12. Security of Personal Data",
    content: [
      "We implement industry-standard security measures, including encryption and access controls, to protect your information. However, no method of transmission or storage is 100% secure.",
    ],
  },
  {
    title: "13. Your Rights",
    content: [
      {
        subTitle: "You have the right to:",
        text: "",
        bulletPoints: [
          "Access your personal data.",
          "Request correction of inaccurate or incomplete data.",
          "Request deletion of your data (subject to legal obligations).",
          "Object to or restrict certain types of processing.",
          "Withdraw consent for processing where applicable.",
        ],
      },
      "To exercise your rights, contact us at support@celler.app.",
    ],
  },
  {
    title: "14. Children’s Privacy",
    content: [
      "Our Services are not directed at individuals under 18 years of age. We do not knowingly collect data from children.",
    ],
  },
  {
    title: "15. Updates to this Policy",
    content: [
      "We may update this Policy from time to time. Updates will be posted on this page with a revised effective date. Continued use of our Services constitutes acceptance of the updated Policy.",
    ],
  },
];

