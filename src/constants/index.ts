import { SectionContent } from "@/types/termsType";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = API_URL?.includes("staging")
  ? "https://staging.app.cryptpay.co"
  : "https://app.cryptpay.co";

export const LOGIN_URL = `${BASE_URL}/login`;
export const SIGNUP_URL = `${BASE_URL}/sign-up`;

export const termsContent: SectionContent[] = [
  {
    title: "PART A: BACKGROUND",
    content: [
      "BEFORE YOU START, IT IS IMPORTANT TO NOTE THAT BUYING AND SELLING CRYPTO ASSETS IS INHERENTLY RISKY. YOU SHOULD CONSIDER THE RISKS BEFORE DECIDING TO BUY OR SELL CRYPTO ASSETS.",
      "IF YOU HAVE QUESTIONS OR CONCERNS REGARDING YOUR CRYPTO CURRENCIES SERVICES, YOUR CRYPTO ASSETS, OUR SERVICE PROVIDER(S), OR RELATED TRANSACTIONS OR ACCOUNT ACTIVITY, PLEASE CONTACT CRYPTPAY CUSTOMER SUPPORT AT SUPPORT@CRYPTPAY.CO YOU CAN ALSO ACCESS SUPPORT VIA IN-APP CHAT.",
      "PLEASE NOTE THAT THERE MAY BE TAX CONSEQUENCES FROM ANY GAIN OR LOSS YOU INCUR WHEN YOU SELL YOUR CRYPTO ASSETS. WE DO NOT PROVIDE FINANCIAL, INVESTMENT, LEGAL OR TAX ADVICE. PLEASE SEEK ASSISTANCE FROM A QUALIFIED PROFESSIONAL.",
      'This Terms of Use (“Cryptocurrency Terms of Use”) is a contract between you and Tampay by Cq Ltd and the owner of the product and application Cryptpay Application (“Cryptpay”) and governs your use of the portion of your Cryptpay App balance where you can buy, sell, hold, and learn about cryptocurrency (your "Cryptocurrency Services").',
    ],
  },
  {
    title: "1. The Cryptocurrency Services",
    content: [
      {
        subTitle: "1.1",
        text: "The “Cryptocurrency Services” are additional services which permit eligible Cryptpay Account holders to buy, sell, or hold interests in certain Supported Cryptocurrencies using funds held in their Cryptpay Accounts.",
      },
      {
        subTitle: "1.2",
        text: "We will automatically link your Cryptocurrencies Account to your personal Cryptpay Account. Your login credentials for your personal Cryptpay account act as the credentials to access your Cryptocurrencies Account Balance.",
      },
      {
        subTitle: "1.3",
        text: "As described in more detail below, here are some things you can do with the Cryptocurrencies Account (subject to some jurisdictional differences):",
        bulletPoints: [
          "Buy Crypto Assets;",
          "Hold Crypto Assets;",
          "Sell Crypto Assets;",
          "Send and Receive Crypto Assets on-Chain;",
          "View market information and educational content.",
        ],
      },
      {
        subTitle: "1.4",
        text: "Before you can obtain exposure to the Cryptocurrency Services you are required to read these Cryptocurrency Terms and the various associated risk warnings contained herein. By accessing and using the Cryptocurrencies Services, you agree to comply with all aspects of these Cryptocurrency Terms. You also agree to comply with the following additional policies as applicable by jurisdiction:",
        bulletPoints: ["Cryptpay Privacy Policy", "Terms of use Nigeria"],
      },
      {
        subTitle: "1.5",
        text: "Please read carefully all of these Cryptocurrency Terms and each of the other agreements and policies that apply to you, including our Privacy Statement, which applies to the transaction and activity data we collect involving your Cryptocurrencies use. If there is any conflict between the applicable Terms of Use and these Cryptocurrency Terms, these Cryptocurrency Terms will govern and apply.",
      },
      {
        subTitle: "1.6",
        text: "We may revise these Cryptocurrency Terms and any of the agreements and policies listed above from time to time. The revised version will be effective at the time we post it, unless otherwise noted. If our changes to these Cryptocurrency Terms reduce your rights or increase your responsibilities, we will provide you at least 21 days' advance notice, or such longer period as required by law. By continuing to use the services, including by holding Crypto Assets (as defined below), after any change to these Cryptocurrency Terms, you agree to abide by and be bound by those changes. If you do not agree with any changes to these Cryptocurrency Terms, you must sell your Crypto Assets and stop accessing your Cryptocurrencies Services through Cryptpay. ",
      },
      {
        subTitle: "1.7",
        text: "Although Cryptpay is a regulated entity, it is important to note that the Cryptocurrency Services we provide in relation to these Cryptocurrency Terms, as with the majority of cryptocurrency services across the world, are currently unregulated in some Territories not permitted. ",
      },
      {
        subTitle: "1.8",
        text: "As part of the Cryptocurrency Services, we may provide information on the price, range, or volatility of the Supported Cryptocurrencies and events that have affected the price of cryptocurrencies generally. Any such information provided is solely for your personal use and you may not redistribute it to any third party. We will not provide you with any advice in connection with the Cryptocurrency Services therefore any such information (whether provided directly by us or via a Cryptocurrency Exchange) should not be relied upon for any investment decision – any decision to buy or sell an interest in a Supported Cryptocurrency rests with you. ",
      },
      {
        subTitle: "1.9",
        text: "The value of crypto assets can be extremely volatile and unpredictable, which can result in significant losses in a short time, including possibly a loss of total value. The price and liquidity of crypto assets has been subject to large fluctuations in the past and may be subject to large fluctuations in the future. Buying and selling crypto assets is inherently risky, and you should consider the risks before deciding to buy or sell crypto assets. If you are unsure about whether a transaction involving cryptocurrencies is suitable for you and your circumstances, you should contact an independent financial adviser.",
      },
      {
        subTitle: "1.10",
        text: "Supported Cryptocurrencies. Your Cryptpay Account is intended solely for proper use of Supported Cryptocurrencies as designated by Cryptpay on our app or website. Any attempt to transfer any cryptocurrency or other digital or virtual assets that Cryptpay does not formally recognize, whether through forks, airdrops, user error, OMNI layer protocols or otherwise, will not be accepted by Cryptpay on behalf of any user, and, subject to the sole discretion of Cryptpay, you will not receive any value with respect to any such Unsupported Assets. Under no circumstances should you attempt to use your Cryptocurrencies Account to store, send, request, or receive any assets other than Supported Cryptocurrencies. Cryptpay assumes no responsibility in connection with any attempt to use your Cryptocurrencies Account with digital currencies that we do not support. SENDING INCOMPATIBLE CRYPTOCURRENCIES RESULTS IN A COMPLETE LOSS OF THE FUNDS AND THESE FUNDS CANNOT BE RECOVERED.",
      },
      {
        subTitle: "1.11",
        text: "In the event that an Unsupported Asset is sent to Cryptpay by a third party or user, by error or otherwise, it is effectively lost to such third parties or users. Any such Unsupported Assets will be treated as property of Cryptpay. CRYPTPAY IS NOT RESPONSIBLE FOR THE RECOVERY OR RETURN OF ANY UNSUPPORTED ASSET SENT TO CRYPTPAY BY ANY THIRD PARTY OR USER, REGARDLESS OF THE INTENTION OF THE PERSON SENDING SUCH UNSUPPORTED ASSET OR ATTEMPTS BY CRYPTPAY TO RETURN SUCH UNSUPPORTED ASSET. Cryptpay will not be responsible for or be required to attempt to recover or provide any value with respect to any Unsupported Assets sent to the platform unless it decides to do so in its sole and absolute discretion. Any Asset not listed within the Cryptpay App or website is an Unsupported Asset.",
      },
    ],
  },
  {
    title: "2. About Cryptpay and these Cryptocurrency Terms",
    content: [
      {
        subTitle: "2.1",
        text: "Cryptpay is a trading name and product of Tampay by Cq Ltd a registered company incorporated under the Laws of the Federal Republic of Nigeria. ",
      },
      {
        subTitle: "2.2",
        text: "You are advised to print or download and keep a copy of these Cryptocurrency Terms of Use for future reference. You can always view the current Cryptocurrency Terms of Use on our Website.",
      },
    ],
  },
  {
    title: "3. Eligibility",
    content: [
      {
        subTitle: "3.1",
        text: "You may only access the Cryptocurrency Services if:",
        bulletPoints: [
          " you are at least 18 years old, or the age of majority in your state or territory of residence;",
          "you register and create a Cryptpay Account;",
          "you have not breached the Cryptpay Terms of Use;",
          "you have provided the required identifying information including: name, physical address, date of birth and taxpayer identification number. We may require additional information from you from time to time in order to verify the required identifying information, such as a copy of your government issued photo ID or evidence of your residency, like a utility bill;",
          "your Cryptpay Account has not been locked or suspended by Cryptpay; and",
          "you are a resident in a Supported Country.",
        ],
      },
      {
        subTitle: "3.2",
        text: "If you do not have a Cryptpay, you can register by following the instructions on our Website, as set out in the Terms of Use.",
      },
      {
        subTitle: "3.3",
        text: "In certain circumstances, we may ask certain questions or request additional information from you in order to verify your identity so that we can continue to meet our legal obligations.",
        bulletPoints: [
          " We may need to do those checks before or after we have made the Cryptocurrency Services available to you.",
          " We may require you to provide us with information if we reasonably need it in order to complete our checks.",
        ],
      },
      {
        subTitle: "3.4",
        text: "By using the Cryptocurrency Services, you confirm that:",
        bulletPoints: [
          " you will not use the Cryptocurrency Services in a manner which is contrary to the general prohibitions regarding your Cryptpay Account according to the Cryptpay Terms of Use.",
          " you will maintain adequate security and control of any and all IDs, passwords, personal identification numbers, or any other codes that you use to access your Cryptocurrencies Account and the Cryptpay services. You agree to keep your physical address, mailing address, email address and other personal information current in your Cryptpay profile.",
        ],
      },
    ],
  },
  {
    title: "4. Availability of the Cryptocurrency Services",
    content: [
      {
        subTitle: "4.1",
        text: "We make no guarantee that you will be able to use the Cryptocurrency Services at all times. While we will try to complete purchases and sales of Crypto Assets that you authorize and that comply with these Cryptocurrency Terms, we do not guarantee your ability to buy or sell Crypto Assets. Your ability to buy or sell Crypto Assets may be delayed or unavailable due to the availability of the Crypto Asset or funds from your funding source, issues with the trading network or our ability to interface with our Service Provider(s), system downtime, limitations or suspensions we impose on your Cryptocurrencies Services in our sole discretion, for required safety, security, or legal reasons, or for other reasons outside Cryptpay's or any Service Provider's control, and we are not liable to you if we are unable or delayed in executing your transactions. We will only reflect a Cryptocurrency Transaction in your Cryptpay Account if we have been able to fulfill the Order with a cryptocurrency service provider.",
      },
      {
        subTitle: "4.2",
        text: `All custody of and trading in Crypto Assets is performed for us by our licensed service providers or other appropriately licensed provider of trading and/or custody services that we identify from time to time ("Service Provider"). You can only use the Cryptocurrencies Account if you have a personal Cryptpay account in good standing. If you are a Hawaii resident, we will not allow you to establish a Cryptocurrency Account at this time.`,
      },
      {
        subTitle: "4.3",
        text: "We cannot guarantee the value of any Supported Cryptocurrencies at the point you submit your Order Instruction. We will use reasonable efforts to fulfill your Order Instruction at the price offered but in some circumstances the Cryptocurrency Exchange may not allow us to do so (and may not tell us why). ",
      },
      {
        subTitle: "4.4",
        text: "The underlying protocols of the Supported Cryptocurrencies are subject to sudden changes in operating rules (‘forks’). If a fork occurs within the underlying system, we will liaise with the relevant Cryptocurrency Exchange in order to determine the best approach for Cryptpay members in relation to such an event. Any decision made on behalf of Cryptpay members will be made at Cryptpay’s sole discretion.",
      },
      {
        subTitle: "4.5",
        text: "The Cryptocurrency Services are provided without warranty of any kind, either express or implied. We do not represent that the Cryptocurrency Services will be available all of the time to meet your needs. We will use reasonable endeavors to provide you with the Cryptocurrency Services as soon as possible but we do not guarantee that access will not be interrupted, or that there will be no delays, failures, errors, omissions or loss of transmitted information.",
      },
      {
        subTitle: "4.6",
        text: "We will use reasonable endeavors to ensure that the Cryptocurrency Services can normally be accessed by you in accordance with these Cryptocurrency Terms of Use. However, Cryptpay will not be responsible for losses due to fluctuations in value that may occur if an order cannot be placed during a technical (or other type of failure) whether at Cryptpay or a third-party.",
      },
      {
        subTitle: "4.7",
        text: "We may suspend use of the Cryptocurrency Services for maintenance and we will make reasonable efforts to give you notice of any such suspensions. Where this isn’t possible, we’ll provide you with notice as soon as possible after the fact.",
      },
      {
        subTitle: "4.8",
        text: "Cryptpay may not make all of the Cryptocurrency Services available in all markets and jurisdictions and may restrict or prohibit use of all or a portion of the Cryptocurrency Services from certain states, territories, or jurisdictions (“Restricted Locations”). You must not attempt to use the Cryptocurrency Services if you are in any of those Restricted Locations. You must not attempt to circumvent any restrictions imposed via the Cryptocurrency Services, such as by obscuring your IP address or submitting any inaccurate information regarding your location. ",
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
        subTitle: "5.1",
        text: "Our Buy/Sell service enables you to:",
        bulletPoints: [
          "purchase interests in one or more Supported Cryptocurrencies using e-money in your Cryptpay Account;",
          "sell your interests in one or more Supported Cryptocurrencies in exchange for e-money;",
        ],
      },
      {
        subTitle: "5.2",
        text: "We do not currently allow use of a credit card or other credit products to purchase Crypto Assets. When you buy Crypto Assets, you agree that you have enough available funds in your selected funding source to complete your purchase. If we are not able to collect the required funds to complete your purchase from your selected funding source, you authorize us to:stop your purchase so that you are not able to buy Crypto Assets in that transaction,debit any other balance you hold in your Cryptpay Account,debit any other funding source you have linked to your Cryptpay account,remove the Crypto Assets from your Cryptocurrency Account for which we did not receive payment; and/ortake any other action that we deem necessary to collect payment for your transaction, as allowed or required by relevant laws and regulations.",
      },
      {
        subTitle: "5.3",
        text: "By using the Buy/Sell service:",
        bulletPoints: [
          "you will have no relationship, contractual or otherwise, with a Cryptocurrency Exchange;",
          "you will not have a personal cryptocurrency wallet with a Cryptocurrency Exchange; and",
          "we will only update the balance in your Cryptocurrency Account to reflect your interest in Supported Cryptocurrency/ies once we have received confirmation of the completed purchase or sale from the relevant Cryptocurrency Exchange.",
        ],
      },
      {
        subTitle: "5.4",
        text: "When you purchase, sell, or hold digital assets which are supported on the blockchain you may only withdraw or deposit to or from a supported blockchain address of the same type.",
      },
      {
        subTitle: "5.5",
        text: "When you buy, sell, or hold digital assets which are not supported for blockchain settlements, you may only buy, sell, or hold said digital assets in your Cryptpay digital wallet. You may not transfer said digital assets to another digital wallet with a different service provider.",
      },
      {
        subTitle: "5.6",
        text: "When you receive or deposit a stablecoin digital asset where Cryptpay provides an automated conversion function, you grant Cryptpay the authority to execute said conversion without your consent or notice. The conversion value shall be governed by the local market rate, where Cryptpay will make a reasonable effort at maintaining a 1-to-1 conversion rate. At this time, only BUSD to USDC automated conversion will be supported or honored.",
      },
      {
        subTitle: "5.7",
        text: "Recurring Buy: You may create recurring purchases of Supported Cryptocurrencies on a daily, weekly, or monthly basis on the Cryptpay in order to take advantage of dollar cost averaging. ",
      },
      {
        subTitle: "5.8",
        text: "Dollar-cost averaging (DCA) is an investment strategy in which an investor divides up the total amount to be invested across periodic purchases of a target asset in an effort to reduce the impact of volatility on the overall purchase. The purchases occur regardless of the asset's price and at regular intervals. Recurring Buy gives App users the ability to apply this investment strategy DCA to cryptocurrency by creating recurring purchases of cryptocurrencies.",
      },
      {
        subTitle: "5.9",
        text: "Payment Methods: You can set up recurring crypto purchases using fiat within your Cryptpay App wallet. If you do not have sufficient fiat in your Cryptpay App wallet on the date of a scheduled recurring buy your transaction will not be completed and Cryptpay will not be responsible for losses due to fluctuations in value when a crypto buy is not executed.",
      },
      {
        subTitle: "5.10",
        text: "Timing: A pending transaction will be created at the time of scheduling and the scheduled purchase will be executed typically within 24 to 48 hours.",
      },
      {
        subTitle: "5.11",
        text: "You may create a recurring buy by setting the exact amount of crypto you want to purchase. The amount of fiat you’ll need will vary based on the rate of the cryptocurrency at the time the scheduled purchase is executed.",
      },
      {
        subTitle: "5.12",
        text: "You may also create a recurring buy by setting the exact amount of local fiat currency to be used in the transaction. The amount of crypto you’ll buy will vary based on the rate at the time the scheduled purchase is executed. ",
      },
      {
        subTitle: "5.13",
        text: "To Cancel a Recurring Buy: To cancel a recurring buy, click to enter into the recurring buy screen. On the bottom of the screen click the “Cancel recurring investment” button. Once the steps are completed, click “Yes” to confirm the cancellation. For questions or support in canceling a recurring buy contact ",
      },
      {
        subTitle: "5.14",
        text: "If your first purchase is on the date of creation then it will be charged immediately and it can not be canceled. If your first purchase is within 7 days of creation your first purchase can only be canceled within 7 days from the scheduled creation date.",
      },
      {
        subTitle: "5.15",
        text: "For subsequent purchases, the payment will be charged on the scheduled date and you can cancel anytime before the execution date.",
      },
    ],
  },
  {
    title: "6. Changing the Supported Cryptocurrencies",
    content: [
      {
        subTitle: "6.1",
        text: "We may elect to add cryptocurrencies as Supported Cryptocurrencies for the Buy/Sell service from time to time. We may also elect to remove cryptocurrencies as Supported Cryptocurrencies for the Buy/Sell service from time to time (“Removed Cryptocurrencies”). When we remove a cryptocurrency as a Supported Cryptocurrency we will update the Cryptpay App. You shall be obliged to sell any interest you have in the Removed Cryptocurrency within 14 calendar days or such shorter period as is required in the following circumstances:",
        bulletPoints: [
          "a Cryptocurrency Exchange withdraws a Supported Cryptocurrency from trading;",
          "where a regulator so specifies; or",
          "as otherwise required to comply with applicable laws.",
          "If you have not sold all your interests in the Removed Cryptocurrency within 14 calendar days, you authorize us to buy back your interest in the Removed Cryptocurrency at the best available price (as calculated by reference to prices listed on the relevant Cryptocurrency Exchange). The proceeds of such buy back will be credited to the e-money balance in your Cryptpay.",
        ],
      },
      {
        subTitle: "6.1",
        text: "We may elect to add cryptocurrencies as Supported Cryptocurrencies for the Buy/Sell service from time to time. We may also elect to remove cryptocurrencies as Supported Cryptocurrencies for the Buy/Sell service from time to time (“Removed Cryptocurrencies”). When we remove a cryptocurrency as a Supported Cryptocurrency we will update the Cryptpay App.",
      },
    ],
  },
  {
    title: "7. Buy/Sell orders",
    content: [
      {
        subTitle: "7.1",
        text: "To buy Crypto Assets, Cryptpay will first show you the amount of Crypto Assets you would receive in exchange for the amount of money that you wish to spend. Because the price of Crypto Assets fluctuates, the price we provide will only be valid for a limited time. If the price we provided expires, you won't be able to complete your transaction at that price. If you still want to buy Crypto Assets, we will provide you with updated pricing information. The updated price you see may be much higher than a price that just expired. This is because Crypto Assets are inherently volatile. Once you confirm your transaction, we will then execute your purchase with our trading Service Provider.",
      },
      {
        subTitle: "7.2",
        text: "You may place an Order Instruction by inputting the transaction details and submitting a request to buy or sell an interest in your chosen Supported Cryptocurrency at a specified price subject to Fees where applicable.",
      },
      {
        subTitle: "7.3",
        text: "You will not be able to cancel your Order Instruction once you have confirmed it. By confirming your Order Instruction, you shall authorise us to submit an Order to the Cryptocurrency Exchange.",
      },
      {
        subTitle: "7.4",
        text: "When you submit an Order Instruction to purchase interests in a Supported Cryptocurrency:",
        bulletPoints: [
          "we will buy the Supported Cryptocurrency via a Cryptocurrency Exchange;",
          "once we have bought the Supported Cryptocurrency via a Cryptocurrency Exchange we will redeem an amount of e-money equivalent to the Buy Price from your Cryptpay Account; and",
          "the redeemed funds will be deemed to be paid by you to us, in consideration of which we will assign to you our beneficial interest (including any rights, title and benefits arising therefrom) in the Supported Cryptocurrency.",
          "Note. Following fulfillment of a Buy Order, a Cryptocurrency Exchange shall hold the Supported Cryptocurrency in a pooled account on an “omnibus” basis. This means that it may be held alongside cryptocurrency belonging to other Cryptocurrency Exchange customers (as well as cryptocurrency belonging to the Cryptocurrency Exchange itself). ",
        ],
      },
      {
        subTitle: "7.5",
        text: "In order for us to fulfill your Cryptocurrency Transaction, you must have sufficient funds in your Cryptpay Account or your Cryptocurrency Account. If you do not have sufficient funds, you cannot submit an Order Instruction (unless you upload additional funds).",
      },
      {
        subTitle: "7.6",
        text: "We will make reasonable efforts to fulfill all purchase Order Instructions, but in some circumstances, we may be unable to do so; for example, due to a problem at the Cryptocurrency Exchange.",
      },
      {
        subTitle: "7.7",
        text: "The value of interests held in your Cryptocurrency Account will be displayed on your Cryptpay Account invest dashboard.",
      },
      {
        subTitle: "7.8",
        text: "To sell Crypto Assets, Cryptpay will first show you the amount of money for which the Crypto Assets would be sold. You cannot choose which Crypto Assets will be sold for each transaction. ",
      },
      {
        subTitle: "7.9",
        text: "Because the price of Crypto Assets fluctuates, the price we provide will only be valid for a limited time. If the price we provided expires, you won't be able to complete your transaction at that price. If you still want to sell your Crypto Assets, we will provide you updated pricing information. The updated price you see may be much lower than a price that just expired. This is because Crypto Assets are inherently volatile. Once you confirm your transaction, we will execute your sale with our trading Service Provider.",
      },
      {
        subTitle: "7.10",
        text: "When you submit an Order Instruction to sell a specified amount of interests in one or more Supported Cryptocurrencies, you will assign to us your interest in the Supported Cryptocurrency and authorise us to:",
        bulletPoints: [
          "sell your beneficial interest in the Supported Cryptocurrency back to a Cryptocurrency Exchange; and",
          "credit the Sell Price to your Cryptpay Account.",
          "Once you confirm your sale, your transaction is not reversible. If we cannot complete your sale for any reason, we will notify you. You may also see your transaction history within the Cryptpay App.",
        ],
      },
    ],
  },
  {
    title: "8. Canceling Orders",
    content: [
      {
        subTitle: "8.1",
        text: " We shall execute any Order on the terms of the Order Instruction received by us. This means that:",
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
        subTitle: "9.1",
        text: "You may only use your e-money balance in your Cryptpay Account to buy and sell interests in Supported Cryptocurrencies. You may not use your Cryptpay Account or Cryptocurrency Account to buy interests via any cryptocurrency exchange that we do not partner with.",
      },
      {
        subTitle: "9.2",
        text: "You may not use the Buy/Sell service to:",
        bulletPoints: [
          "use interests in Supported Cryptocurrencies to transact with merchants P2B;",
          "spend your interests in Supported Cryptocurrencies directly on a Prepaid Debit Card you may have;",
        ],
      },
      {
        subTitle: "9.3",
        text: "We may apply limits to the number or value of Cryptocurrency Transactions you are able to undertake (e.g. limiting the amount of the interest in Supported Cryptocurrency you are able to buy or transfer in a single transaction) if we reasonably think it would help to manage any risk in a proportionate way.",
      },
      {
        subTitle: "9.4",
        text: "Any limits as described in subsection 12.3 above will be communicated to you within your Cryptpay Account while using the Buy/Sell service prior to any proposed transaction being confirmed by you.",
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
        subTitle: "10.1",
        text: "Each time you effect a Cryptocurrency Transaction we will  display the transaction details in your transaction history, which shall include the date of transaction, the Fees charged and, where applicable, the exchange rate applied.",
      },
      {
        subTitle: "10.2",
        text: "Each Cryptocurrency Transaction is given a unique transaction ID and shown in the transaction history. We will not alter or amend information displayed in your online transaction history.",
      },
      {
        subTitle: "10.3",
        text: "You should check your transaction history regularly and you should report any irregularities or clarify any questions you may have as soon as possible by contacting Customer Service.",
      },
      {
        subTitle: "10.4",
        text: "When you view your Cryptocurrencies Account balance, we will show you the amount of each type of Crypto Asset you own, as well as an equivalent fiat value of those Crypto Assets. The price of Crypto Assets will rise and fall over time, and the price may sometimes change quickly and dramatically. So, even if the number of each type of Crypto Assets you hold remains the same, the fiat equivalent value will change as the market price of each Crypto Asset fluctuates. The fiat value we display is an estimate based on market data from our trading Service Provider. The value we show is the midpoint between the lowest recent sale price at which the applicable cryptocurrency was offered for sale and the highest recent price at which that same cryptocurrency was purchased, as reported by the Service Provider. This estimate does not represent the value you will receive if you actually sell your Crypto Assets or the price you will pay to buy more Crypto Assets and does not include our spread or fees.",
      },
    ],
  },
  {
    title:"11. Fees",
    content:[
         {
        subTitle: "11.1",
        text: "Each Cryptocurrency Transaction could be subject to a fee, which we will display in-app prior to each Cryptocurrency Transaction."
      },
         {
        subTitle: "11.2",
        text: "Customers that send cryptocurrency out of the Cryptpay ecosystem are charged a fee to facilitate the transaction on the blockchain. Cryptpay does not set the fee and the customer is informed of the fee before sending their cryptocurrency out."
     },
         {
        subTitle: "11.3",
        text: "Fees which are not charged, credited or paid by Cryptpay shall be announced at the time of buy or sell. "
     },
         {
        subTitle: "11.4",
        text: "Cryptpay is not responsible for fees which are charged by a third party or network."
     },
         {
        subTitle: "11.5",
        text: "Cryptpay is not responsible for fees which, by error, are not charged or credited to the customer. "
     },
         {
        subTitle: "11.6",
        text: "Cryptpay reserves the right to amend or cancel any cryptocurrency fees at any time. "
     },
    ]
  },
  {
    title:"12. Termination; suspension; refusal",
    content:[
         {
        subTitle: "12.1",
        text: "You may terminate your access to the Cryptocurrency Services with us at any time by sending us notice in writing."
      },
         {
        subTitle: "12.2",
        text: "We may terminate your access to the Cryptocurrency Services at any time in our sole discretion by giving you notice, which may take effect immediately or on a later date as may be specified in the notice."
      },
         {
        subTitle: "12.3",
        text: "We may at any time suspend or terminate your use of the Cryptocurrency Services without notice if:",
        bulletPoints:[
            "we are required to take such action by a Cryptocurrency Exchange;",
            "you breach any condition of these Cryptocurrency Terms of Use;",
            "you violate or we have reason to believe that you are in violation of any law or regulation that is applicable to your use of the Cryptocurrency Services;",
            "we have reason to believe that you are in any way involved in any fraudulent activity, money laundering, terrorism financing or other illegal or criminal activity;",
            "it is reasonably necessary for us to do so to prevent you or us contravening any applicable law or regulatory requirements;",
            "it is necessary for security reasons; or",
            "if we reasonably suspect the Cryptocurrency Services have been or are being used without your authorisation or fraudulently; and we shall notify you either prior to the suspension or, if prior notification is not possible under the circumstances, promptly after the suspension unless we are prohibited by law to notify you; or",
            "if the direct or indirect inherent risk attributed to your crypto activity falls outside of Cryptpay’s risk appetite.",
            "Cryptpay retains the right to determine the appropriate risk level it is willing to accept in regards to any Crypto Currency activity."
        ]
     },
       {
        subTitle: "12.4",
        text: "We may refuse to submit an Order Instruction where:",
        bulletPoints:[
            "we are, in our reasonable opinion, required to do so by applicable law, regulation or any court or other authority to which we are subject in any jurisdiction; and",
            "We have concerns about the security of your Cryptpay Account or we suspect the Cryptocurrency Services are being used in a fraudulent or unauthorized manner.",
            ""
        ]
     },
       {
        subTitle: "12.5",
        text: "We will try to give you advance notice of any suspension or refusal. Where advance notice is not possible, we will provide you with notice as soon as reasonably practicable thereafter. Unless we are prevented by law (or unless the relevant Cryptocurrency Exchange does not provide us with details), we will try to provide you with details of the nature of the suspension or refusal, the anticipated duration and anything you have to do to remedy any error or circumstances which have led to the suspension or refusal.",
        
     },
       {
        subTitle: "12.6",
        text: "Whilst your use of the Cryptocurrency Services is suspended, we may (using our reasonable discretion) sell off all or some of your interests by providing notice to you in certain circumstances, for example;",
        bulletPoints:[
            "if you fail to provide any information we have requested or any warranty/representation you have given us is or becomes, in our opinion, materially inaccurate, incorrect or misleading;",
            "if you take some action (or refrain from doing something) which places us in breach of our legal or regulatory obligations;",
            "if you breach these Cryptocurrency Terms of Use or those of your Cryptpay Account; or",
            "for any other reason which we may specify in our notice to you."
        ]
     },
      {
        subTitle: "12.7",
        text: "If we sell off your interests in Supported Cryptocurrencies, we will buy back the interest(s) at prevailing market rates. If the value of the Supported Cryptocurrency has weakened, this means that you may incur a loss relative to the amount you initially paid. We will credit the sale proceeds (in your preferred currency) to your Cryptpay Account."
     },
      {
        subTitle: "12.8",
        text: "On termination, unless prohibited by applicable law or by any court or other order to which we are subject in any jurisdiction, for a period of 10 days following the date of termination:",
        bulletPoints:[
            "you will continue to be able to view the balance of your interest(s) in Supported Cryptocurrencies on your Cryptpay Account dashboard;",
            "you will not be permitted to buy any further interests in Supported Cryptocurrencies; and",
            "you may – at our sole discretion – sell your interests in Supported Cryptocurrencies back to us."
        ]
      },
      {
        subTitle: "12.9",
        text: "If at the end of the 14 day period you have not sold down all your interests in Supported Cryptocurrencies, you authorise us to buy back your interests at the best available price via the relevant Cryptocurrency Exchange. The proceeds of such buy back will be credited to the e-money balance in your Cryptpay Account."
     },
      {
        subTitle: "12.10",
        text: "For the avoidance of doubt, if your Cryptpay Account is terminated or suspended your access to the Cryptocurrency Services will also be terminated or suspended (as applicable)."
    },
      {
        subTitle: "12.11",
        text: "Except where prohibited by law or regulation, as security for the performance of your obligations under these Cryptocurrency Terms, you grant to Cryptpay a lien on, and security interest in and to, your Crypto Assets."
     },
      {
        subTitle: "12.12",
        text: "If the balance in your Cryptpay Account (including your Cryptocurrencies Services) becomes negative for any reason, that negative balance represents an amount that you owe to Cryptpay. In addition to any rights we have under the Cryptpay Terms of Use, you authorize Cryptpay to sell your Crypto Assets and use the proceeds to pay a negative balance you owe to us in any Cryptpay account you own at our sole discretion."
     },
      {
        subTitle: "12.13",
        text: "If we sell your Crypto Assets to pay amounts you owe to us, we will value the Crypto Assets using the price that otherwise applies to the sale of Crypto Assets at that time, or another reasonable price determined by Cryptpay in its reasonable discretion. You understand that the value of Crypto Assets may rise or fall quickly and that we have no obligation to sell at a time that provides the best price for you. While Cryptpay will notify you if you have a negative balance, regardless of how quickly we sell your Crypto Assets, we have no obligation to give you notice before we sell."
    },
      {
        subTitle: "12.14",
        text: "Error in Receiving Cryptocurrency. In the event of an error, you give Company permission, subject to Company’s compliance with applicable law, to make appropriate corrections by debiting or crediting your Cryptpay balance, or debiting or crediting your primary or alternate funding sources as applicable. We may also, in our sole discretion, block, freeze, or deny access to these funds, associated wallets, or services."
    },
     
      {
        subTitle: "12.15",
        text: "If your account is dormant for a period of (12) consecutive months, Cryptpay reserves the right to terminate the relationship to include selling your crypto assets into your local currency and/or transferring funds to a verified payment method. "
    },
      {
        subTitle: "12.16",
        text: "Prior to the termination of your account due to dormancy, Cryptpay will make an honest best effort to contact you in regards to your Crypto assets."
    },
      {
        subTitle: "12.17",
        text: "Cryptpay reserves the right to liquidate all crypto positions after (12) consecutive months of dormancy at current market rates. Any gain or loss of value due to this action is the responsibility of the User. Cryptpay is not liable for any lost value nor any tax implication which may arise. "
    },
      {
        subTitle: "12.18",
        text: "Liquidation of Crypto Positions, In addition to the termination rights outlined in above, Cryptpay reserves the right, at its sole discretion, to liquidate all crypto positions held in your account at the prevailing market rate under the following circumstances:",
        bulletPoints:[
            "Failure to Comply with Applicable Laws: If we, in our reasonable judgment, determine that your actions or use of our services violate Applicable Laws, or if you fail to comply with any legal obligations as specified in this Agreement.",
            " Failure to Provide Necessary Information: In the event that you fail to provide information or documentation necessary for us to perform due diligence measures to our full satisfaction, including but not limited to identifying the purpose of using our services, verifying your identity, and obtaining relevant information about the origin of your funds or wealth.",
            "Suspicion of Illegal Activities: If we reasonably suspect your involvement in money laundering, terrorist financing, fraud, or any other illegal activities, and we are unable to alleviate such suspicions through further investigation.",
            "Risk Assessment: If circumstances related to you or a person affiliated with you indicate a higher risk of money laundering, terrorist financing, fraud, or any other illegal activity, and providing services to you is deemed undesirable by us.",
            "International Sanctions: If you or a person affiliated with you is or has been the subject of an international financial sanction.",
            "Overdue Payables: In the event of overdue payables to Cryptpay for which we have the right to claim interest for late payment.",
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
        subTitle: "13.1",
        text: "Nothing in these Cryptocurrency Terms of Use shall operate to exclude liability for death or personal injury due to negligence or for fraud or fraudulent misrepresentation or for any statutory liability that cannot be excluded or amended according to applicable laws."
      },
        {
        subTitle: "13.2",
        text: "Subject to section 16.1, we shall not be liable for:",
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
        subTitle: "13.3",
        text: "No Liability for Liquidation: If Cryptpay exercises its right to liquidate crypto positions under Section 12.18, we shall not be liable to you for any costs, losses, claims, or expenses incurred as a result of such liquidation." 
    },
    ]
  },
  {
    title:"14. Complaints",
    content:[
        {
        subTitle: "14.1",
        text: "If you have a complaint in relation to the Cryptocurrency Services you should contact Customer Operations at.. You should clearly indicate that you are wishing to make a complaint to us. This helps us to distinguish a complaint from a mere query. "
    },
    ]
  },
  {
    title:"15. General Disclosures",
    content:[
        "Legislative and regulatory changes or actions at the state, federal, or international level may adversely affect the use, transfer, exchange and value of cryptocurrency.Transactions in cryptocurrency may be irreversible, and accordingly, losses due to fraudulent or accidental transactions may not be recoverable.Some cryptocurrency transactions shall be deemed to be made when recorded on the public ledger, which is not necessarily the date or time the customer initiates the transaction.The volatility and unpredictability of the price of cryptocurrency relative to fiat currency may result in significant loss over a short period of time.The nature of cryptocurrency may lead to an increased risk of fraud or cyberattack.The nature of cryptocurrency means that any technical difficulties experienced by Cryptpay may prevent the access or use of a customer's cryptocurrency.Any bond or trust account maintained by Cryptpay for the benefit of its customers may not be sufficient to cover all losses incurred by customers.Rhode Island Disclosures Information on fees and pricing can be obtained upon request to …… Your Crypto Assets are not insured or guaranteed by the FDIC, Securities Investor Protection Corporation (SIPC) or any other public or private insurer, including against cyber theft or theft by other means.The transfer, purchase and sale of cryptocurrency is irrevocable.Information about unauthorized transactions and error-resolution can be obtained from ……..You may update your contact information through your personal Cryptpay account.The date or time when a transaction is executed, and your funding device is charged may differ from the date or time when you provided the instruction to authorize the transaction.You will receive an email receipt with respect to your purchase and sale of Crypto Assets.You have the right to at least thirty (30) days' prior notice of a change in our fee schedule or changes to these terms and conditions.Cryptocurrency is not legal tender Washington Disclosures Information on fees and pricing can be obtained upon request to…………………..Your Crypto Assets are not insured or guaranteed by the FDIC, Securities Investor Protection Corporation (SIPC) or any other public or private insurer, including against cyber theft or theft by other means.The transfer, purchase and sale of cryptocurrency is irrevocable.Information about unauthorized transactions and error-resolution can be obtained from ……...The nature of cryptocurrency may lead to an increased risk of fraud or cyber-attack and your cryptocurrency value may be irretrievably stolen."
    ]
  },
  {
    title:"15. General Disclosures",
    content:[
    `
    Any capitalized terms which are not defined in these Cryptocurrency Terms of Use shall have the meaning given in the Cryptpay Account Terms of Use.
“Buy Order” means an instruction submitted by us to a Cryptocurrency Exchange to buy Supported Cryptocurrencies in accordance with an Order Instruction.
“Buy Price” means the price payable by you to us (plus applicable Fees) for the purchase of interests in Supported Cryptocurrencies;
“Cryptocurrency Account” means the interests in Supported Cryptocurrencies held by a customer of the Cryptocurrency Service.
“Cryptocurrency Exchange” means a cryptocurrency exchange which we partner with.
“Cryptocurrency Services” means the functionality within your Cryptpay Account as described at subsection 1.1.
“Cryptocurrency Transaction” means a purchase or sale of an interest in a Supported Cryptocurrency by us on your behalf, including a Crypto to Crypto Transaction;
“Cryptocurrency Wallet” means any third-party custodian wallet which enables the receipt and storage of at least the Supported Cryptocurrencies.
“Crypto to Crypto Transaction” is a Cryptocurrency Transaction where the Buy Price is payable in interests of a Supported Cryptocurrency.
“Existing Member” means a person who is a user of the Cryptpay Cryptocurrency Service at the time you wish to make a P2P Transfer and who fulfils the eligibility criteria at section 3.
“Fiat Currency” means a government-issued currency which is supported by the Cryptpay Account.
“Holding Crypto Assets'' means the balance reflected in your cryptocurrency account represents your ownership of the amount of each type of Crypto Asset shown. Cryptpay combines your Crypto Asset balance with the Crypto Asset balances of other Cryptpay account holders and holds those Crypto Assets in an omnibus account through our custodial Service Provider. We keep a record of your interest in that omnibus account based on the amount of each type of Crypto Asset that is reflected in your balance. You do not own any specific, identifiable, Crypto Asset. These Crypto Assets are held apart from Cryptpay’s corporate assets and Cryptpay will neither use these assets for its operating expenses or any other corporate or business purposes, nor will it voluntarily make these Crypto Assets available to its creditors in the event of bankruptcy.
“Order” means an instruction submitted by us to a Cryptocurrency Exchange to buy or sell Supported Cryptocurrencies, in accordance with an Order Instruction.
“Order Instruction” means an instruction – submitted by you to us – to buy or sell a specified quantity of interests in Supported Cryptocurrencies at a specified price;
“Sell Order” an instruction submitted by us to a Cryptocurrency Exchange to sell Supported Cryptocurrencies in accordance with an Order Instruction.
“Sell Price” means the price (net of applicable Fees) payable to you by us for the sale of your nominated interests in Supported Cryptocurrencies;
“Supported Country” means a country in which we currently offer the Cryptocurrency Service.
“Supported Cryptocurrencies” means the cryptocurrencies listed in the Cryptpay App (as may be amended by us in our sole discretion from time to time). 

    `   
    ]
  },
];
