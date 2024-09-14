import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "The World’s Biggest Bitcoin Mine Is Rattling This Texas Oil Town",
            "description": "A cash-strapped city in rural Texas will soon be home to the world’s largest bitcoin mine. Local protesters are “raising hell.”",
            "url": "https://www.wired.com/story/the-worlds-biggest-bitcoin-mine-is-rattling-this-texas-oil-town/",
            "urlToImage": "https://media.wired.com/photos/66c5ecc5724cee849e3104da/191:100/w_1280,c_limit/WIRED_BTC_EC_B-Elena-Chudoba.jpg",
            "publishedAt": "2024-09-11T10:00:00Z",
            "content": "The previous October, Sawicky organized a weeklong protest alongside environmental activist group Greenpeace and brandished various anti-bitcoin signs at anyone who entered the Riot facility. Only a … [+3641 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "Crypto Bro Charters Private SpaceX Mission to Earth’s Poles",
            "description": "Fram2 could fly as early as this year, marking SpaceX's seventh private crew of astronauts.",
            "url": "https://gizmodo.com/crypto-bro-charters-private-spacex-mission-to-earths-poles-2000486329",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg",
            "publishedAt": "2024-08-13T16:05:37Z",
            "content": "A private crew of astronauts that includes a cinematographer and an explorer, and commanded by a wealthy bitcoin entrepreneur, will be the first human spaceflight to go over Earth’s polar region.\r\nSp… [+2136 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jeremy Gan",
            "title": "Proton Drive now has a tier for business users",
            "description": "Proton Drive from Swiss technology company Proton AG now has a Professional tier. It joins services like Proton Mail, Proton VPN, and Proton Pass to receive professional tiers, letting teams select a single individual product that they need rather than signin…",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_21a908a3-4282-421e-b244-52b23957d2d3",
            "urlToImage": null,
            "publishedAt": "2024-08-27T14:30:09Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "kcloonan@insider.com (Kelly Cloonan)",
            "title": "The number of bitcoin millionaires has soared 111% in the last year as the cryptocurrency rallies",
            "description": "The number of bitcoin millionaires has soared as  the crypto rallies. There have also been six new crypto billionaires minted in the past year.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-millionaires-crypto-rally-cryptocurrency-etf-billionaires-sec-ethereum-wealth-2024-8",
            "urlToImage": "https://www.businessinsider.com/public/assets/logos/og-image-logo-social.png?v=2023-11",
            "publishedAt": "2024-08-27T18:50:37Z",
            "content": "As crypto rallies, the number of bitcoin millionaires has more than doubled in the last year.\r\nAccording to a new report from New World Wealth and Henley &amp; Partners, the number of bitcoin million… [+2414 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Gaby Del Valle",
            "title": "Trump is launching a cryptocurrency platform, and we have no idea what it does",
            "description": "There are few public details about the platform, which Trump announced in a post on Truth Social, but Trump’s sons have suggested it will help unbanked people.",
            "url": "https://www.theverge.com/2024/8/22/24226184/trump-defiant-ones-cryptocurrency-platform",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/_Nmh513ei1pcO8JPH6S8zPZY9Xk=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/25531774/STK175_Trump_Fist_Glitch.jpg",
            "publishedAt": "2024-08-22T18:51:46Z",
            "content": "Trump is launching a cryptocurrency platform, and we have no idea what it does\r\nTrump is launching a cryptocurrency platform, and we have no idea what it does\r\n / Trump and his sons have suggested th… [+3560 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Crypto Mining Company Denies Causing Health Problems in Texas Town",
            "description": "\"We are unaware of any scientific basis to conclude that any sounds from our facility can cause the types of conditions alleged,\" the crypto company said in a statement to Gizmodo.",
            "url": "https://gizmodo.com/crypto-mining-company-denies-causing-health-problems-in-texas-town-2000498078",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Constellation-Energy-Handley-Generating-Station-in-Fort-Worth.jpg",
            "publishedAt": "2024-09-12T20:00:22Z",
            "content": "Cryptocurrency mining is stressing the Texas power grid and causing “unexplained health problems,” for residents of some small towns in the state, according to a new report from the San Antonio Expre… [+4312 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Andrew R. Chow",
            "title": "Inside the Rise of Bitcoin-Powered Pools and Bathhouses",
            "description": "A handful of establishments are attempting to harness energy from intensive computing for greater societal use.",
            "url": "https://time.com/7017395/bitcoin-data-center-heat-bathhouses/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2024/09/Neutral-Pool-2.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2024-09-04T17:17:00Z",
            "content": "The scene inside Bathhouse, a spa in Manhattan, is one of complete serenity. Visitors recline in 105-degree pools, surrounded by cedar tiles and elegant marble slabs from Brazil. But just beyond clos… [+7823 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yaël Bizouati-Kennedy",
            "title": "I’m an Economist: Here Are My Predictions for Crypto in 2025",
            "description": "The crypto space has been on a huge recovery path in 2024 -- a year which saw the approval of spot Bitcoin ETFs (exchange-traded funds) in January, deemed by...",
            "url": "https://finance.yahoo.com/news/m-economist-predictions-crypto-2025-140053579.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/m9fItbamLFIl7Z4gRb0LIA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/2275020d68eed566369c9e83ca65ef52",
            "publishedAt": "2024-09-02T14:00:53Z",
            "content": "The crypto space has been on a huge recovery path in 2024 a year which saw the approval of spot Bitcoin ETFs (exchange-traded funds) in January, deemed by many a landmark decision for the crypto indu… [+4954 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Brent D. Griffiths",
            "title": "Read JD Vance's financial disclosure, which includes at least $4 million in total assets and $250,000 in bitcoin",
            "description": "JD Vance's net worth easily totals into the millions, following a bestselling book and a stint in venture capital.",
            "url": "https://www.businessinsider.com/read-jd-vance-financial-disclosure-net-worth-bitcoin-fec-report-2024-8",
            "urlToImage": "https://i.insider.com/66bbaae95da406397bf58292?width=1200&format=jpeg",
            "publishedAt": "2024-08-13T19:14:16Z",
            "content": "Sen. JD Vance of Ohio filed his required financial disclosure as the Republican vice presidential nominee.Anna Moneymaker/Getty\r\n<ul><li>Sen. JD Vance of Ohio filed his required annual financial disc… [+1786 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "The Crypto Lobby Is Spending Big Money on Democrats, and Republicans Aren’t Happy",
            "description": "Support for Democrats Rep. Ruben Gallego in Arizona and Rep. Elissa Slotkin in Michigan has raised eyebrows.",
            "url": "https://gizmodo.com/the-crypto-lobby-is-spending-big-money-on-democrats-and-republicans-arent-happy-2000487283",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Ruben-Gallego-and-Kamala-Harris-getty-crypto.jpg",
            "publishedAt": "2024-08-15T14:50:34Z",
            "content": "The cryptocurrency industry has raised hundreds of millions of dollars to spend in the 2024 election on various races House and Senate throughout the U.S. And while crypto is generally associated wit… [+3275 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Decentralized Dog",
            "title": "Bitcoin's Four-Year Cycle Declared \"Dead\" Amid Weakest Post-Halving Performance By Outline Venture",
            "description": "Industry experts are challenging the long-held belief that Bitcoin's price performance is intrinsically linked to the cryptocurrency's quadrennial halving...",
            "url": "https://finance.yahoo.com/news/bitcoins-four-cycle-declared-dead-133703692.html",
            "urlToImage": "https://media.zenfs.com/en/coinmarketcap_783/518f0854609b09d611006490a920471a",
            "publishedAt": "2024-09-04T13:37:03Z",
            "content": "Bitcoin's Four-Year Cycle Declared \"Dead\" Amid Weakest Post-Halving Performance By Outline Venture\r\nIndustry experts are challenging the long-held belief that Bitcoin's price performance is intrinsic… [+1360 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "fdemott@insider.com (Filip De Mott)",
            "title": "Stock market today: Indexes trade mixed after the S&P 500 hits longest winning streak of the year",
            "description": "The stock rally lost momentum Tuesday morning as investors gear up for the Fed's symposium in Jackson Hole, Wyoming.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-trades-mixed-sp500-win-streak-fed-rally-2024-8",
            "urlToImage": "https://i.insider.com/66c49e051aa2ac29ee32739b?width=1200&format=jpeg",
            "publishedAt": "2024-08-20T13:46:13Z",
            "content": "The stock market inched higher on Tuesday, though momentum stalled out as investors took a breather following the S&amp;P 500's longest winning streak of the year. \r\nIn the past week, improving senti… [+1485 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "Irán está ofreciendo recompensas a quienes delaten a los mineros de bitcoin",
            "description": "Irán se ha convertido en un país especialmente popular entre los mineros de criptodivisas por el bajo coste de la energía. Sin embargo, el gobierno iraní, preocupado por el crecimiento del consumo energético, ha tomado una decisión singular.\n<!-- BREAK 1 -->\n…",
            "url": "https://www.xataka.com/criptomonedas/iran-esta-ofreciendo-recompensas-a-quienes-delaten-a-mineros-bitcoin",
            "urlToImage": "https://i.blogs.es/f8f908/mining-iran/840_560.jpeg",
            "publishedAt": "2024-08-20T12:30:58Z",
            "content": "Irán se ha convertido en un país especialmente popular entre los mineros de criptodivisas por el bajo coste de la energía. Sin embargo, el gobierno iraní, preocupado por el crecimiento del consumo en… [+1285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Breaking Down 1 of Wall Street's Biggest Bitcoin Buys: A Warning or a Signal to Join the Cryptocurrency Revolution?",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0b9142c5-7307-47e8-9409-03fa372cf632",
            "urlToImage": null,
            "publishedAt": "2024-08-22T11:45:04Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Maria Aspan",
            "title": "Wall Street investors think Trump lost the debate, too",
            "description": "Shares in former President Trump’s company plunged the day after his debate with Vice President Harris.",
            "url": "https://www.npr.org/2024/09/11/nx-s1-5108849/wall-street-investors-think-trump-lost-the-debate-too",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5568x3132+0+290/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F22%2F39%2F299b1e534af1aa08e0b66384f9b7%2Fgettyimages-2170591870.jpg",
            "publishedAt": "2024-09-11T19:07:36Z",
            "content": "Even some of former President Donald Trumps most ardent supporters seem worried he lost Tuesdays debate with Vice President Kamala Harris.\r\nShares in Trump Media &amp; Technology Group, the parent co… [+1685 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Dirk Knop",
            "title": "Warnung vor Betrugsmasche: Opfersuche mit Bitcoin-Paper-Wallets",
            "description": "Ein Klarsichtbeutel auf dem Weg enthält eine Quittung und Bitcoin-Paper-Wallet. Wer die URL im QR-Code darauf besucht, kann Betrugsopfer werden.",
            "url": "https://www.heise.de/news/Warnung-vor-Betrugsmasche-Opfersuche-mit-Bitcoin-Paper-Wallets-9838899.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/5/3/7/2/3/2024-03-12-Bing_Designer-Phishing-3-3840px-13692f75f2fcb4d0.png",
            "publishedAt": "2024-08-19T07:27:00Z",
            "content": "Das Landeskriminalamt Bayern warnt vor einer Betrugsmasche, bei der die Täter Klarsichtbeutel mit vermeintlichen, sogenannten Bitcoin-Paper-Wallets und einem angeblichen Einzahlungsbeleg auf Gehwegen… [+2095 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Achim Sawall",
            "title": "BaFin: Finanzaufsicht beschlagnahmt Bitcoin-Automaten",
            "description": "Die Bundesanstalt für Finanzdienstleistungsaufsicht (Bafin) hat illegal betriebene Bitcoin-Automaten eingezogen - und auch rund 250.000 Euro beschlagnahmt. (Bitcoin, Security)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbafin-finanzaufsicht-beschlagnahmt-bitcoin-automaten-2408-188237.html&referer=https%3A%2F%2Ft.co%2F4b2cd0889a",
            "urlToImage": null,
            "publishedAt": "2024-08-21T11:06:01Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Stock market today: Dow hits record high while tech shares stumble ahead of Nvidia earnings",
            "description": "The Dow hit a record high on Monday. Tech shares edged lower ahead of the hotly anticipated Nvidia earning report scheduled for Wednesday.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-tech-shares-decline-nvidia-earnings-this-week-2024-8",
            "urlToImage": "https://i.insider.com/641471735f4f5400191a0fbe?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T20:10:10Z",
            "content": "US stocks were mixed on Monday with tech shares dragging the S&amp;P 500 and the Nasdaq Composite lower, while the Dow Jones Industrial Average climbed to a record high.\r\nAll eyes are on Nvidia earni… [+1913 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "Unos criptomineros usaron su estancia en Airbnb para ganar 100.000 dólares. Se descubrió cuando llegó la factura de la luz",
            "description": "Una de las anfitrionas que tienen un piso en alquiler en esta plataforma se llevó un buen disgusto recientemente. Unos chicos alquilaron su piso durante tres semanas y todo pareció ir perfecto, pero unos días más tarde se encontró con una factura de la luz de…",
            "url": "https://www.xataka.com/criptomonedas/unos-criptomineros-usaron-su-estancia-airbnb-para-ganar-100-000-dolares-se-descubrio-cuando-llego-factura-luz",
            "urlToImage": "https://i.blogs.es/1b5bdc/cripto/840_560.jpeg",
            "publishedAt": "2024-08-16T14:31:49Z",
            "content": "Una de las anfitrionas que tienen un piso en alquiler en esta plataforma se llevó un buen disgusto recientemente. Unos chicos alquilaron su piso durante tres semanas y todo pareció ir perfecto, pero … [+2457 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Faz.net"
            },
            "author": "Philipp Hornung",
            "title": "Bitcoin-Verluste richtig absetzen",
            "description": "Von ihrem Höchststand sind viele Kryptowährungen derzeit weit entfernt. Was Anleger nun berücksichtigen sollen. Ein Gastbeitrag.",
            "url": "https://www.faz.net/aktuell/finanzen/meine-finanzen/bitcoin-verluste-richtig-absetzen-19938406.html",
            "urlToImage": "https://media1.faz.net/ppmedia/aktuell/wirtschaft/1211282243/1.9938401/facebook_teaser_fplus/49ffaf6e-6065-11ef-a87c.jpg",
            "publishedAt": "2024-08-27T13:52:26Z",
            "content": "Die hohen Kursschwankungen von Kryptowährungen sorgen nachvollziehbarerweise bei Anlegern für Kopfschmerzen, die Bitcoin oder andere Kryptowährungen einst zu einem hohen Preis erworben hatten. Die gu… [+103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Threadreaderapp.com"
            },
            "author": null,
            "title": "We created a new account in Telegram and started looking for a job in Estonia",
            "description": "@holger_r: A few months ago we ran a small experiment. We created a new account in Telegram and started looking for a job. We joined channels that were directly about jobs in Estonia. Here’s what happened. We...…",
            "url": "https://threadreaderapp.com/thread/1828526705306411410.html",
            "urlToImage": "https://threadreaderapp.com/images/screenshots/thread/1828526705306411410.jpg",
            "publishedAt": "2024-08-28T15:48:44Z",
            "content": "Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VentureBeat"
            },
            "author": "Jon Stojan",
            "title": "How ChainMyne is tailoring crypto solutions for elite investors",
            "description": "CONTRIBUTOR CONTENT: The cryptocurrency world has undergone many transformations in recent years. The global crypto market capitalization is currently at $2.19 trillion, which highlights the growing acceptance and integration of digital assets into mainstream…",
            "url": "https://venturebeat.com/business/how-chainmyne-is-tailoring-crypto-solutions-for-elite-investors/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2024/09/Kims-shoot-shoot-15-juin-2024-Par-Randy-_I9A3725.jpg?w=1024?w=1200&strip=all",
            "publishedAt": "2024-09-09T17:20:21Z",
            "content": "The cryptocurrency world has undergone many transformations in recent years. The global crypto market capitalization is currently at $2.19 trillion, which highlights the growing acceptance and integr… [+5626 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "madams@businessinsider.com (Max Adams)",
            "title": "Stock market today: Indexes climb as producer inflation comes in cool",
            "description": "Stocks jumped after a cool PPI reading for July, setting the stage for consumer price inflation to show improvement when CPI is released Wednesday.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-ppi-inflation-economy-interest-rates-earnings-djt-2024-8",
            "urlToImage": "https://i.insider.com/631f874489d2b3001894b2e3?width=1200&format=jpeg",
            "publishedAt": "2024-08-13T13:36:10Z",
            "content": "US stocks were up on Tuesday after the producer price index for July showed wholesale inflation rose less than expected.\r\nData from the Bureau of Labor Statistics showed that producer prices increase… [+2502 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Harris and Trump face off for the first time tonight, but some corners of the business world are already over it",
            "description": "Kamala Harris and Donald Trump will face off on the debate stage at 9 p.m. ET, but some investors view it as a distraction for their money managers.",
            "url": "https://www.businessinsider.com/kamala-harris-donald-trump-presidential-debate-wall-street-tech-thoughts-2024-9",
            "urlToImage": "https://i.insider.com/66a8dbfdaab37011780b8f56?width=1200&format=jpeg",
            "publishedAt": "2024-09-10T12:54:00Z",
            "content": "Patrick Semansky/AP Images; Chip Somodevilla/Getty Images; Alyssa Powell/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's dail… [+7756 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Genbeta.com"
            },
            "author": "Marcos Merino",
            "title": "Estos propietarios de bitcoins eran millonarios… y al mismo tiempo no: tuvieron que recuperar sus monederos de las formas más enrevesadas",
            "description": "El mundo de las criptomonedas está repleto de historias fascinantes, tanto que alguna daría para un episodio de alguna serie. La descentralización y el anonimato de los bitcoins son sus principales atractivos... pero también se han convertido en la causa de c…",
            "url": "https://www.genbeta.com/a-fondo/estos-propietarios-bitcoins-eran-millonarios-al-tiempo-no-tuvieron-que-recuperar-sus-monederos-formas-enrevesadas",
            "urlToImage": "https://i.blogs.es/2567c4/yes_btc/840_560.jpeg",
            "publishedAt": "2024-09-04T18:59:04Z",
            "content": "El mundo de las criptomonedas está repleto de historias fascinantes, tanto que alguna daría para un episodio de alguna serie. La descentralización y el anonimato de los bitcoins son sus principales a… [+5809 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Cash, bitcoin, gold scams in metro Detroit send couriers, directions to ATMs",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_4dc91c61-4646-4e4b-bdc5-098cb932a0bb",
            "urlToImage": null,
            "publishedAt": "2024-08-22T11:01:32Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mmapped.blog"
            },
            "author": "Roman Kashitsyn",
            "title": "Transaction models are programming paradigms",
            "description": "Functional programming vs OOP, now on a blockchain.",
            "url": "https://mmapped.blog/posts/30-transaction-models.html",
            "urlToImage": null,
            "publishedAt": "2024-08-16T14:45:53Z",
            "content": "Many articles\r\nSee, for example, utxo vs. Account Models from Alchemy.\r\n explain the differences between the transaction models from the end users point of view.\r\nIn contrast, this section explores t… [+9465 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "City of Columbus Sues Man After He Discloses Severity of Ransomware Attack",
            "description": "An anonymous reader quotes a report from Ars Technica, written by Dan Goodin: A judge in Ohio has issued a temporary restraining order against a security researcher who presented evidence that a recent ransomware attack on the city of Columbus scooped up ream…",
            "url": "https://yro.slashdot.org/story/24/08/30/227217/city-of-columbus-sues-man-after-he-discloses-severity-of-ransomware-attack",
            "urlToImage": "https://a.fsdn.com/sd/topics/court_64.png",
            "publishedAt": "2024-08-30T22:40:00Z",
            "content": "A judge in Ohio has issued a temporary restraining order against a security researcher who presented evidence that a recent ransomware attack on the city of Columbus scooped up reams of sensitive per… [+2691 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Przemyslaw Szymanski",
            "title": "Neue Betrugmasche: Wenn Bitcoins auf der Straße liegen",
            "description": "Unscheinbare Tütchen sollen der Schlüssel zu großen Bitcoin-Gewinnen sein. In Wirklichkeit handelt es sich aber nur um eine Betrugsmasche. (Cybercrime, Security)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fneue-betrugmasche-wenn-bitcoins-auf-der-strasse-liegen-2408-188511.html&referer=https%3A%2F%2Ft.co%2F9f3d083f2d",
            "urlToImage": null,
            "publishedAt": "2024-08-29T08:35:01Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Github.io"
            },
            "author": "Zola Gonano",
            "title": "A Technical Look at BitMessage: Learning From a Dead Project",
            "description": "There are a lot of cool projects that unfortunately have been abandoned or unmaintained for years, but that doesn’t mean they added no value. Studying what they’ve done, taking their unique ways of doing certain things and their problems can lead us to build …",
            "url": "https://zolagonano.github.io/blog/posts/a-very-technical-look-at-bitmessage",
            "urlToImage": null,
            "publishedAt": "2024-08-25T10:38:26Z",
            "content": "At 25 Aug 2024 By Zola GonanoThere are a lot of cool projects that unfortunately have been abandoned or unmaintained for years, but that doesnt mean they added no value. Studying what theyve done, ta… [+38773 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Vera Bergengruen / San Salvador",
            "title": "How Nayib Bukele’s ‘Iron Fist’ Has Transformed El Salvador",
            "description": "A crackdown on gangs has made the authoritarian leader arguably the world's most popular head of state",
            "url": "https://time.com/7015598/nayib-bukeles-iron-fist-el-salvador/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2024/08/nayib-bukele-interview-1.jpg?quality=85&crop=0px%2C199px%2C2400px%2C1256px&resize=1200%2C628&strip",
            "publishedAt": "2024-08-29T12:00:00Z",
            "content": "You can read the transcript of the interview here and the Spanish version here.\r\nBefore he became arguably the most popular head of state in the world, Nayib Bukele was an adman. The President of El … [+30877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin miners are scooping up their rivals to survive the Bitcoin halving",
            "description": "Bitcoin mining companies have been acquiring their competitors for quite some time, and this trend has intensified following the Bitcoin halving—a technical event that occurs every four years to ensure scarcity and protect against inflation. This year, the ha…",
            "url": "https://qz.com/bitcoin-miners-acquiring-rivals-after-bitcoin-halving-1851628402",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/4ec9f5077d0bc9700130631aab39fecb.jpg",
            "publishedAt": "2024-08-21T20:40:00Z",
            "content": "In This Story\r\nBitcoin mining companies have been acquiring their competitors for quite some time, and this trend has intensified following the Bitcoin halvinga technical event that occurs every four… [+1129 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin marriages: Digital I dos",
            "description": "Wanna get married on blockchain?Read more...",
            "url": "https://qz.com/emails/quartz-obsession/1851646066/bitcoin-marriages-cryptocurrency",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0f2e373a1943641bf2d6df91ede4af64.png",
            "publishedAt": "2024-09-11T20:15:00Z",
            "content": "In This Story\r\nWanna get married on blockchain?\r\nCouples are increasingly looking for unique ways to make their wedding day unforgettable... so much so that some are using cryptocurrency and blockcha… [+4850 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin millionaires have doubled in a year — thanks to Bitcoin ETFs",
            "description": "The global population of crypto millionaires has surged by 95% over the past year, driven by the rise of Bitcoin ETFs and other crypto assets, according to a new report.Read more...",
            "url": "https://qz.com/bitcoin-millionaires-bitcoin-etfs-crypto-wealth-report-1851635391",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/062353e99b06fb5380e6c622d0ee26cb.jpg",
            "publishedAt": "2024-08-29T14:15:00Z",
            "content": "In This Story\r\nThe global population of crypto millionaires has surged by 95% over the past year, driven by the rise of Bitcoin ETFs and other crypto assets, according to a new report.\r\nThe latest Cr… [+1311 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "AI-powered Bitcoin mining would be a game changer — but not without challenges",
            "description": "Artificial intelligence is rapidly making its way into nearly every industry, and Bitcoin mining is no exception. The process of generating new Bitcoin by solving complex mathematical problems has grown increasingly competitive and intriguing, prompting miner…",
            "url": "https://qz.com/ai-bitcoin-mining-1851623128",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3f8846c172fc06962509557fdd1c8aef.jpg",
            "publishedAt": "2024-08-19T09:00:00Z",
            "content": "Artificial intelligence is rapidly making its way into nearly every industry, and Bitcoin mining is no exception. The process of generating new Bitcoin by solving complex mathematical problems has gr… [+4760 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin tops $63,000 after Jerome Powell's speech at Jackson Hole signals interest rate cuts are coming",
            "description": "Following Fed Chair Jerome Powell’s speech at the Jackson Hole conference, where he hinted at potential interest rate cuts and emphasized the need for policy adjustments, the crypto market experienced a notable surge. Bitcoin, which had been struggling to bre…",
            "url": "https://qz.com/bitcoin-crosses-63-000-powell-s-speech-at-jackson-hole-1851630578",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1fb99a4b91d2898fa2c43ff23d843400.jpg",
            "publishedAt": "2024-08-23T19:02:22Z",
            "content": "In This Story\r\nFollowing Fed Chair Jerome Powells speech at the Jackson Hole conference, where he hinted at potential interest rate cuts and emphasized the need for policy adjustments, the crypto mar… [+2180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau.de",
            "title": "Aktien, Bitcoin, Gold: Der Weg durch den ETF-Dschungel",
            "description": "Anleger haben die Qual der Wahl: Weltweit gibt es mittlerweile mehr als 10.000 Indexfonds. Wo fängt man da mit der Suche an? Von Aktien-, Anleihen-, Bitcoin- und Gold-ETF. Von Antonia Mannweiler.",
            "url": "https://www.tagesschau.de/wirtschaft/verbraucher/etf-gold-und-asche-podcast-anleihen-bitcoin-dax-100.html",
            "urlToImage": "https://images.tagesschau.de/image/926fc1d2-3a8f-40d3-b920-ff32bb898b02/AAABkSYDg4o/AAABkUqnCZ0/16x9-1280/nyse-340.jpg",
            "publishedAt": "2024-08-21T06:14:30Z",
            "content": "Stand: 21.08.2024 08:14 Uhr\r\nAnleger haben die Qual der Wahl - weltweit gibt es mittlerweile mehr als 10.000 Indexfonds. Wo fängt man da mit der Suche an? Von Aktien-, Anleihen-, Bitcoin- und Gold-ET… [+7302 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin ATM scams surge to $110 million in 2023 — is your crypto safe?",
            "description": "A recent report from the Federal Trade Commission (FTC) highlights a significant surge in Bitcoin ATM-related scams. Consumer losses have skyrocketed nearly tenfold since 2020, and in 2023 alone, reported losses exceeded $110 million. This alarming trend cont…",
            "url": "https://qz.com/bitcoin-atm-scams-110-million-in-2023-1851638807",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1421f60b3f60176d4b49a9ac54404715.jpg",
            "publishedAt": "2024-09-03T19:02:00Z",
            "content": "A recent report from the Federal Trade Commission (FTC) highlights a significant surge in Bitcoin ATM-related scams. Consumer losses have skyrocketed nearly tenfold since 2020, and in 2023 alone, rep… [+1689 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Forget Bitcoin $100,000: Why experts say it won't happen this year",
            "description": "Bitcoin is currently facing resistance around the $60,000 mark, and despite earlier predictions by some crypto experts, it appears increasingly unlikely that the top cryptocurrency will reach $100,000 by the end of 2024.Read more...",
            "url": "https://qz.com/bitcoin-price-experts-forecast-halving-1851636057",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a2edce10ad5de6a555f14d303b24a686.jpg",
            "publishedAt": "2024-09-03T09:00:00Z",
            "content": "Bitcoin is currently facing resistance around the $60,000 mark, and despite earlier predictions by some crypto experts, it appears increasingly unlikely that the top cryptocurrency will reach $100,00… [+4240 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin is below $60,000 because crypto whales are dumping it",
            "description": "Bitcoin fell below $60,000 again on Wednesday, triggered by a significant amount of tokens transferred to popular crypto exchanges. This reversed the gains made over the weekend following the Fed Chair’s speech. The leading cryptocurrency decreased by more th…",
            "url": "https://qz.com/bitcoin-falls-below-60-000-massive-sell-off-1851634397",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9db5937f47f217865c878ee479ec1cf4.jpg",
            "publishedAt": "2024-08-28T17:42:00Z",
            "content": "In This Story\r\nBitcoin fell below $60,000 again on Wednesday, triggered by a significant amount of tokens transferred to popular crypto exchanges. This reversed the gains made over the weekend follow… [+1567 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "William Gavin",
            "title": "Bitcoin, Ether, and other crypto stocks fall after Kamala Harris' strong debate performance",
            "description": "Vice President Kamala Harris’ strong performance in Tuesday night’s debate with Former President Donald Trump seems to have won her support from some voters, and sent cryptocurrency stocks down.Read more...",
            "url": "https://qz.com/kamala-harris-debate-trump-crypto-stocks-fall-bitcoin-1851645435",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a162555e92e557ecd2c4a2d66c142681.jpg",
            "publishedAt": "2024-09-11T12:30:00Z",
            "content": "In This Story\r\nVice President Kamala Harris strong performance in Tuesday nights debate with Former President Donald Trump seems to have won her support from some voters, and sent cryptocurrency stoc… [+2509 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "William Gavin",
            "title": "Donald Trump owns at least $1 million in crypto and made millions from NFTs",
            "description": "Donald Trump’s latest financial disclosure reveals that the former president — who once called Bitcoin a scam — now owns more than $1 million in cryptocurrency. Read more...",
            "url": "https://qz.com/donald-trump-bitcoin-crypto-holdings-ether-nfts-melania-1851623948",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/4b577bef60e3d2b96100471e3644ce82.jpg",
            "publishedAt": "2024-08-16T13:30:00Z",
            "content": "Donald Trumps latest financial disclosure reveals that the former president who once called Bitcoin a scam now owns more than $1 million in cryptocurrency. \r\nAccording to his filings, the Republican … [+2354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AndroidGuys"
            },
            "author": "AndroidGuys",
            "title": "Does Bitcoin Have Smart Contracts?",
            "description": "Smart contracts make it easy to complete complex deals and agreements on the blockchain. They are most common on newer platforms like Ethereum and Solana. But can you create smart contracts on Bitcoin?  The short answer is yes. Bitcoin does support smart cont…",
            "url": "https://androidguys.com/news/does-bitcoin-have-smart-contracts/",
            "urlToImage": "https://i0.wp.com/androidguys.com/wp-content/uploads/2024/08/bitcoin-8629503_1280.jpg?resize=1200%2C724&ssl=1",
            "publishedAt": "2024-08-15T21:45:56Z",
            "content": "Smart contracts make it easy to complete complex deals and agreements on the blockchain. They are most common on newer platforms like Ethereum and Solana. But can you create smart contracts on Bitcoi… [+3517 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Laila Kearney and Mrinalika Roy",
            "title": "AI's race for US energy butts up against bitcoin mining",
            "description": "U.S. technology companies are pursuing energy assets held by bitcoin miners as they race to secure a shrinking supply of electricity for their rapidly...",
            "url": "https://finance.yahoo.com/news/ais-race-us-energy-butts-100328984.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/189ab10ffb8448baaafed9ff315e8547",
            "publishedAt": "2024-08-28T10:03:28Z",
            "content": "By Laila Kearney and Mrinalika Roy\r\nU.S. technology companies are pursuing energy assets held by bitcoin miners as they race to secure a shrinking supply of electricity for their rapidly expanding ar… [+5320 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Investors scramble to shift positions after Trump-Harris debate",
            "description": "Shares of Trump trades such as Bitcoin, crypto fell while his Truth Social dropped 13% on view 'Harris won the debate'.",
            "url": "https://www.aljazeera.com/economy/2024/9/11/investors-scramble-to-shift-positions-after-trump-harris-debate",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/09/AFP__20240911__36FY3TZ__v1__Preview__UsVotePoliticsDebateHarrisTrump-1-1726050065.jpg?resize=1200%2C630",
            "publishedAt": "2024-09-11T20:51:58Z",
            "content": "Investors are scrambling to shift their positioning following the closely-watched debate between US Republican Donald Trump and Democratic Vice President Kamala Harris, as betting markets swung in Ha… [+4517 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Marie-Claire Koch",
            "title": "Sextortion-Fälle in den USA: Kriminelle schicken Bilder von der Umgebung mit",
            "description": "Kriminelle behaupten, im Besitz von Videos zu sein, in denen sich Menschen selbst befriedigen. Zudem schicken sie in der E-Mail ein Foto der Umgebung mit.",
            "url": "https://www.heise.de/news/Sextortion-Faelle-in-den-USA-Kriminelle-schicken-Bilder-von-der-Umgebung-mit-9857881.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/6/3/7/9/4/shutterstock_411748240-e60744b19d6f984b.jpg",
            "publishedAt": "2024-09-05T09:39:00Z",
            "content": "Eine neue Sextortion-Kampagne macht derzeit die Runde: Kriminelle behaupten, Videos zu haben, in denen sich Menschen selbst befriedigen. Gleichzeitig schicken sie ein Foto des Hauses oder der Umgebun… [+2104 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Genbeta.com"
            },
            "author": "Bárbara Bécares",
            "title": "Se compra un casoplón por un error de Crypto.com: le dieron 10 millones en vez de 100 dólares al pedir reembolso de criptomonedas",
            "description": "Una pareja recibió 10,5 millones de dólares en una transacción errónea de la popular plataforma de criptomonedas Crypto.com. Lo que tenía que haberle dado eran apenas 100 dólares de reembolso que la usuaria había solicitado.\n<!-- BREAK 1 -->\nLo que pasó despu…",
            "url": "https://www.genbeta.com/a-fondo/se-compra-casoplon-error-crypto-com-le-dieron-10-millones-vez-100-dolares-al-pedir-reembolso-criptomonedas",
            "urlToImage": "https://i.blogs.es/023d04/brian-j-tromp-qelsnhnhrfw-unsplash/840_560.jpeg",
            "publishedAt": "2024-09-06T15:35:51Z",
            "content": "Una pareja recibió 10,5 millones de dólares en una transacción errónea de la popular plataforma de criptomonedas Crypto.com. Lo que tenía que haberle dado eran apenas 100 dólares de reembolso que la … [+3787 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "J. B.",
            "title": "Pável Dúrov, fundador de Telegram, ha sido detenido en Francia",
            "description": "Pável Dúrov, fundador de Telegram, la popular app de mensajería, ha sido detenido en Francia. Ocurrió en el Aeropuerto de París-Le Bourget, ubicado a las afueras de la ciudad, cuando estaba a punto de abordar su jet privado. El multimillonario con nacionalida…",
            "url": "http://hipertextual.com/2024/08/pavel-durov-fundador-telegram-detenido-francia",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/08/pavel-durov-telegram.jpg",
            "publishedAt": "2024-08-25T09:01:25Z",
            "content": "Publicado enTecnología\r\nPável Dúrov, fundador de Telegram ha sido detenido en Francia mientras intentaba abordar su jet privado. Enfrenta acusaciones por permitir discursos de odio, pedofilia y terro… [+5372 chars]"
        },
        {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: Boerse - Lennart Jerke",
            "title": "US-Börse: Aktie von Trump Media stürzt nach TV-Duell ab",
            "description": "Nach dem TV-Duell steigen die Quoten für einen Sieg von Kamala Harris bei der US-Wahl. Die Aktie des Medienkonzerns von Donald Trump verliert massiv an Wert.",
            "url": "https://www.zeit.de/wirtschaft/boerse/2024-09/trump-aktie-tv-duell-harris-bitcoin",
            "urlToImage": "https://img.zeit.de/2024-09/tv-duell-trump-media-kryptos-aktien-bild/wide__1300x731",
            "publishedAt": "2024-09-11T11:00:12Z",
            "content": "Nach dem TV-Duell zwischen Donald Trump und Kamala Harris verzeichnet der Aktienkurs der Trump Media &amp; Technology Group deutliche Verluste. Im vorbörslichen US-Geschäft sackte die Aktie der Mutte… [+622 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Tirthankar Chakraborty",
            "title": "NVIDIA Wipes Out $400B in Value: Buy, Hold, or Sell NVDA Stock?",
            "description": "NVIDIA's shares lately took a beating as regulators launched a probe into the company's contracts. Is it the right time to sell the NVDA stock, or will...",
            "url": "https://finance.yahoo.com/news/nvidia-wipes-400b-value-buy-184500618.html",
            "urlToImage": "https://media.zenfs.com/en/zacks.com/02c1245facc17eb1278e28574fc5cc1c",
            "publishedAt": "2024-09-09T18:45:00Z",
            "content": "NVIDIA Corporation NVDA witnessed a meteoric rise over the past few years due to the advent of artificial intelligence (AI). Its recent share repurchase has installed confidence among investors and t… [+5279 chars]"
        },
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Le Monde avec AFP",
            "title": "Donald Trump veut charger Elon Musk d’un « audit » du gouvernement américain pour le « réformer » en profondeur, s’il est élu",
            "description": "Le candidat républicain et ex-président américaine, qui a évoqué cette idée jeudi depuis New-York, n’avait jamais été aussi précis concernant les tâches qu’il souhaite confier au patron de Tesla, SpaceX et du réseau social X, s’il est réélu le 5 novembre.",
            "url": "https://www.lemonde.fr/international/article/2024/09/05/donald-trump-veut-charger-elon-musk-d-un-audit-du-gouvernement-americain-pour-le-reformer-en-profondeur-s-il-est-elu_6305070_3210.html",
            "urlToImage": "https://img.lemde.fr/2024/09/05/0/0/4999/3333/1440/960/60/0/b9a7bc7_5596263-01-06.jpg",
            "publishedAt": "2024-09-05T19:40:30Z",
            "content": "Lancien président des États-Unis et candidat républicain à lélection présidentielle Donald Trump, sadresse à lEconomic Club of New York, le 5 septembre 2024. DAVID DEE DELGADO / AFP\r\nSil remporte lél… [+2659 chars]"
        },
        {
            "source": {
                "id": "focus",
                "name": "Focus"
            },
            "author": "FOCM",
            "title": "Nach Kurssturz - Krypto-Experte: „Bitcoin ist im Moment im Angebot“",
            "description": "Auch Bitcoin ist nicht immun gegen Panik und Angst an den Kapitalmärkten. Nach den jüngsten Kurseinbußen bieten sich Anlegern günstige Einstiegschancen.",
            "url": "https://www.focus.de/finanzen/boerse/nach-kurssturz-krpto-experte-raet-bitcoin-ist-im-moment-im-angebot_id_260219126.html",
            "urlToImage": "https://p6.focus.de/img/fotos/id_260108678/bitcoin.jpg?im=Crop%3D%280%2C375%2C3464%2C1732%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=08b96cacb02bedd75acb555575df8deaff5adfe0b6b0567b455e53db1d9eb952",
            "publishedAt": "2024-08-18T06:42:22Z",
            "content": "Auch Bitcoin ist nicht immun gegen Panik und Angst an den Kapitalmärkten. Nach den jüngsten Kurseinbußen bieten sich Anlegern günstige Einstiegschancen. Die Kryptowährung Bitcoin kann sich Börsenturb… [+2267 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "news.google.com",
            "title": "Bitcoin loses 8.6% in August as September starts with fresh 2-week low",
            "description": "Bitcoin loses 8.6% in August as September starts with fresh 2-week low Cointelegraph\nWhy is bitcoin struggling to stay above $60,000? Yahoo Finance\nBitcoin price keeps falling under $60K — Here is why Cointelegraph\nIs Bitcoin (BTC) Headed For A Deeper Correct…",
            "url": "https://biztoc.com/x/67e22687c428d4da",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-09-01T17:49:16Z",
            "content": "Bitcoin loses 8.6% in August as September starts with fresh 2-week low CointelegraphWhy is bitcoin struggling to stay above $60,000? Yahoo FinanceBitcoin price keeps falling under $60K Here is why Co… [+132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin slips to $56,000—an analyst is blaming a 'sell the news' effect",
            "description": "Bitcoin plunged deep into the red Wednesday morning, dropping nearly 4% to $56,000, as a massive sell-off in the stock market followed disappointing U.S. macroeconomic data. The ripple effect was felt across the crypto market, with Ether, the second-largest c…",
            "url": "https://qz.com/bitcoin-drops-tech-and-ai-stocks-sell-off-continues-1851639522",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ddee427972f05a83a318ba56f08e2f53.jpg",
            "publishedAt": "2024-09-04T14:59:24Z",
            "content": "Bitcoin plunged deep into the red Wednesday morning, dropping nearly 4% to $56,000, as a massive sell-off in the stock market followed disappointing U.S. macroeconomic data. The ripple effect was fel… [+2072 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Quartz Bot",
            "title": "Donald Trump's $2 billion stock windfall, Bitcoin falls, Super Micro Computer tanks: Markets news roundup",
            "description": "Former President Donald Trump could offload his 114.75 million shares of Trump Media & Technology Group, or about 60% of the company’s outstanding stock, next month. While the move would line his pockets, it could spell trouble for the already troubled stock.…",
            "url": "https://qz.com/donald-trump-media-super-micro-computer-stock-bitcoin-1851637051",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/137a5264c8c321ac4739521700ebd155.jpg",
            "publishedAt": "2024-08-31T13:00:00Z",
            "content": "Trump Media &amp; Technology Group stock hit a fresh post-merger low Wednesday, as its shares dipped below $20 for the first time since going public.\r\nShares of Trump Media, the company behind former… [+243 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Krebs on Security"
            },
            "author": "BrianKrebs",
            "title": "Sextortion Scams Now Include Photos of Your Home",
            "description": "An old but persistent email scam known as \"sextortion\" has a new personalized touch: The missives, which claim that malware has captured webcam footage of recipients pleasuring themselves, now include a photo of the target's home in a bid to make threats abou…",
            "url": "https://krebsonsecurity.com/2024/09/sextortion-scams-now-include-photos-of-your-home/",
            "urlToImage": "https://krebsonsecurity.com/wp-content/uploads/2024/09/sextortion-maps.png",
            "publishedAt": "2024-09-03T15:45:49Z",
            "content": "An old but persistent email scam known as “sextortion” has a new personalized touch: The missives, which claim that malware has captured webcam footage of recipients pleasuring themselves, now includ… [+3208 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Tristan Carballeda",
            "title": "“Je vais à Manchester United” le compte X de Kylian Mbappé piraté",
            "description": "Le joueur star du Réal Madrid Kylian Mbappé a vu son compte X piraté dans la nuit de mercredi à jeudi.",
            "url": "https://www.presse-citron.net/je-vais-a-manchester-united-le-compte-x-de-kylian-mbappe-pirate/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/08/kylian-mbappe-football.jpg",
            "publishedAt": "2024-08-29T08:49:09Z",
            "content": "Cela naura duré que quelques minutes. Mais avec une audience de plus de 14 millions de personnes, le moindre message peut avoir leffet dune bombe. Cest ce qua découvert à ses dépens Kylian Mbappé. Le… [+2610 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "Leak Reveals A Russia Earthquake Is Suddenly Hurtling Toward Bitcoin And Crypto Amid Price Swings",
            "description": "Bitcoin and The bitcoin price Now, Russia is gearing up to begin testing crypto exchanges to help ease the flow of cross-border transactions that have been crippled by...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/27/leak-reveals-a-russia-earthquake-is-suddenly-hurtling-toward-bitcoin-and-crypto-amid-price-swings/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66cd91d53500d6b3c403aa5e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-27T12:26:39Z",
            "content": "BitcoinBitcoin\r\n and cryptocurrency prices have roared back this year, with this week expected to be a make-or-break time for the bitcoin price.\r\nSubscribe now to Forbes' CryptoAsset &amp; Blockchain… [+3156 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Clubic"
            },
            "author": "Samir Rahmoune",
            "title": "Le FMI veut taxer le minage de cryptos et l'IA pour mieux protéger l'environnement",
            "description": "Le Fond Monétaire International estime qu'il existe un problème avec le coût environnemental des industries de la crypto et de l'IA. Raison pour laquelle une proposition de taxation a été émise.",
            "url": "https://www.clubic.com/actualite-535109-le-fmi-veut-taxer-le-minage-de-cryptos-et-l-ia-pour-mieux-proteger-l-environnement.html",
            "urlToImage": "https://pic.clubic.com/v1/images/2093328/raw",
            "publishedAt": "2024-08-19T13:08:00Z",
            "content": "L'IA et le Bitcoin sont sur la sellette. Une nouvelle note du blog du FMI publiée ces derniers jours met en effet en avant leur côté extrêmement énergivore. À elles seules, ces deux industries représ… [+735 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Becca Bratcher, Contributor, \n Becca Bratcher, Contributor\n https://www.forbes.com/sites/beccabratcher/",
            "title": "The New Power Couple: Renewable Energy And Bitcoin Mining",
            "description": "Bitcoin miners steady demand can help boost renewable energy projects",
            "url": "https://www.forbes.com/sites/beccabratcher/2024/09/03/the-new-power-couple-renewable-energy-and-bitcoin-mining/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d360bbf46ce8554c576784/0x0.jpg?format=jpg&crop=2046,2045,x509,y0,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-03T11:00:00Z",
            "content": "Our community is about connecting people through open and thoughtful conversations. We want our readers to share their views and exchange ideas and facts in a safe space.\r\nIn order to do so, please f… [+1334 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Sebastian Espinoza Ortiz",
            "title": "Quién es Pável Dúrov, creador de Telegram y multimillonario ruso",
            "description": "Pável Dúrov nació el 10 de octubre de 1984 en Leningrado, Unión Soviética, hoy San Petersburgo, Rusia. Es conocido por ser el fundador de la red social VK y posteriormente, junto a su hermano Nikolái, de Telegram, una de las plataformas de mensajería instantá…",
            "url": "http://hipertextual.com/2024/08/pavel-durov-biografia",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/08/pavel-durov-bio.jpg",
            "publishedAt": "2024-08-25T11:52:41Z",
            "content": "Publicado enTecnología\r\n¿Quién es Pável Dúrov? La historia detallada del controvertido personaje fundador de Telegram y VK, el Facebook ruso. \r\nPável Dúrov nació el 10 de octubre de 1984 en Leningrad… [+7577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Leeor Shimron, Senior Contributor, \n Leeor Shimron, Senior Contributor\n https://www.forbes.com/sites/leeorshimron/",
            "title": "The Bitcoin Renaissance: Unlocking Trillions In Value",
            "description": "The rise of Bitcoin L2 networks promises to unlock new use cases, enhance scalability, and tap into Bitcoin's immense latent value.",
            "url": "https://www.forbes.com/sites/leeorshimron/2024/08/13/the-bitcoin-renaissance-unlocking-trillions-in-value/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66ba86435bb2cb433495b12c/0x0.png?format=png&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-13T13:40:09Z",
            "content": "Bitcoin Layer 2 solutions are enhancing the utility and programmability of Bitcoin, marking the ... [+] beginning of a new era of innovation and development for the leading cryptocurrency.\r\nStacking … [+16989 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Susie Violet Ward, Contributor, \n Susie Violet Ward, Contributor\n https://www.forbes.com/sites/susievioletward/",
            "title": "New Research Shows Bitcoin Mining Cuts Carbon Emissions",
            "description": "New studies reveal that bitcoin mining can be sustainable and even reduce carbon emissions, challenging the common narrative of its negative environmental impact.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/09/09/new-research-shows-bitcoin-mining-cuts-carbon-emissions/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/668503667ca796429a231cb7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-09T12:43:20Z",
            "content": "Green Bitcoin Logo Photo Illustration by Omar Marques\r\nSOPA Images/LightRocket via Getty Images\r\nBitcoin mining has long been criticized for its environmental impact, with headlines often painting a … [+5275 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Niklas Jan Engelking",
            "title": "Android-Malware: SpyAgent stiehlt Zugangsdaten zu Krypto-Wallets aus",
            "description": "SpyAgent nutzt Texterkennung per OCR, um aus Bildschirmfotos auf Mobilgeräten Wiederherstellungsphrasen für Krypo-Wallets zu erbeuten.",
            "url": "https://www.heise.de/news/Android-Malware-SpyAgent-stiehlt-Zugangsdaten-zu-Krypto-Wallets-aus-9861205.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/6/5/5/8/6/shutterstock_2033447216-267e128890ac87b3.jpg",
            "publishedAt": "2024-09-08T17:00:00Z",
            "content": "Inhaltsverzeichnis\r\nEine neu entdeckte Malware für Googles mobiles Betriebssystem Android setzt auf optische Zeichenerkennung zum Klauen von Bitcoin &amp; Co. Die SpyAgent getaufte Schadsoftware verw… [+3684 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Artificial Superintelligence Alliance, Solana, FLOKI, and more: Cryptocurrencies to watch this week",
            "description": "The cryptocurrency market received a significant boost after U.S. Federal Reserve Chairman Jerome Powell announced that a monetary easing cycle is set to begin soon. This news propelled Bitcoin to $63,000 over the weekend, driving up the broader crypto market…",
            "url": "https://qz.com/artificial-superintelligence-alliance-solana-floki-cr-1851631247",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/77c7e8e30a85b33de47c147bd4507454.jpg",
            "publishedAt": "2024-08-26T13:20:00Z",
            "content": "Tron has successfully raised its energy cap to 120 billion, a move aimed at boosting network activity and lowering gas fees as meme coin projects gain traction. Tron founder Justin Sun announced the … [+227 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "Fabian Siegel, SWR",
            "title": "Wie seriös sind Krypto-Automaten?",
            "description": "In Deutschland gibt es immer mehr Automaten, an denen man mit Bargeld Kryptowährung kaufen kann. Nach einer Razzia gegen illegale Betreiber stellt sich allerdings die Frage nach den Risiken. Von Fabian Siegel.",
            "url": "https://www.tagesschau.de/wirtschaft/finanzen/krypto-automaten-100.html",
            "urlToImage": "https://images.tagesschau.de/image/3a083629-1667-4428-bc7c-3ba8bd4d164b/AAABkZ2yuv4/AAABkZLhkrw/16x9-1280/schild-kryptowaehrung-automat-100.jpg",
            "publishedAt": "2024-09-02T08:18:19Z",
            "content": "Stand: 02.09.2024 10:18 Uhr\r\nIn Deutschland gibt es immer mehr Automaten, an denen man mit Bargeld Kryptowährung kaufen kann. Nach einer Razzia gegen illegale Betreiber stellt sich allerdings die Fra… [+4694 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "Goldman Sachs Issues Huge Fed Crash Warning As A Legendary Trader Suddenly Flips His Bitcoin Price Prediction",
            "description": "Goldman Sachs analysts have issued a warning that this week's closely-watched jobs numbers could spark a stock market crash...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/09/05/goldman-sachs-issues-huge-fed-crash-warning-as-a-legendary-trader-suddenly-flips-his-bitcoin-price-prediction/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/626e4deb9cb7a8fb2aab7720/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-05T10:30:15Z",
            "content": "BitcoinBitcoin\r\n has been struggling over the last month as the bitcoin price teeters on the verge of \"a critical tipping point.\"\r\nSubscribe now to Forbes' CryptoAsset &amp; Blockchain Advisor and \"u… [+3738 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Litecoin, Fantom, Klaytn, and more: Cryptos to watch this week",
            "description": "The stock markets have been showing signs of recovery, but the same cannot be said for the crypto markets, as Bitcoin is still below the $60,000 mark. This may change after the Federal Open Market Committee (FOMC) meeting and minutes this week, in addition to…",
            "url": "https://qz.com/litecoin-fantom-klaytn-cryptocurrencies-to-watch-this-1851625428",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/2256121fe4ce085de14f00d6efcaa67d.jpg",
            "publishedAt": "2024-08-19T13:35:00Z",
            "content": "Founded by cryptocurrency entrepreneur Justin Sun in 2017, the Tron blockchain network aims to decentralize the internet. By hosting decentralized applications, also known as dApps, it intends to pro… [+518 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Clubic"
            },
            "author": "Samir Rahmoune",
            "title": "Le Bitcoin s'effondre depuis une semaine. Va-t-il passe sous la barre des 50 000 dollars ?",
            "description": "Le géant de la cryptomonnaie connaît un début de mois de septembre très violent. Au point même de se demander si le Bitcoin ne va pas retomber à des niveaux plus vus depuis le début de l'année.",
            "url": "https://www.clubic.com/actualite-536597-le-bitcoin-s-effondre-depuis-une-semaine-va-t-il-passe-sous-la-barre-des-50-000-dollars.html",
            "urlToImage": "https://pic.clubic.com/v1/images/2070951/raw",
            "publishedAt": "2024-09-07T11:27:00Z",
            "content": "Il y a un mois presque jour pour jour, le Bitcoin suivait la grande peur boursière qui venait de prendre la planète à la suite d'un lundi noir au Nikkei, et s'effondrait très violemment avant de repr… [+322 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘Get Ready’—Coinbase CEO Reveals Mind-Blowing AI Update That Could Be A Bitcoin And Crypto Price Game-Changer",
            "description": "The CEO of major bitcoin and crypto exchange Coinbase has issued an artificial intelligence (AI) prediction that could be a crypto market game-changer...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/31/get-ready-coinbase-ceo-reveals-mind-blowing-ai-update-that-could-be-a-bitcoin-and-crypto-price-game-changer/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d2bac14147b71a01c00d52/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-31T11:45:14Z",
            "content": "BitcoinBitcoin\r\n and crypto have struggle to hold onto the momentum that saw the bitcoin price surge through the first half of the year (though the Federal Reserve could be about to change that).\r\nSu… [+3506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "ambcrypto.com",
            "title": "111% hike in Bitcoin millionaires – Why, how, and will they get richer now?",
            "description": "111% hike in Bitcoin millionaires – Why, how, and will they get richer now?\n- Bitcoin millionaires surged by 111% in 2024, driven by new ETFs and Bitcoin highs\n- Top crypto hubs like Singapore and Hong Kong benefited from favorable tax policies\nDespite the re…",
            "url": "https://biztoc.com/x/d67512f838dd9efa",
            "urlToImage": "https://biztoc.com/cdn/d67512f838dd9efa_s.webp",
            "publishedAt": "2024-08-29T09:26:30Z",
            "content": "111% hike in Bitcoin millionaires Why, how, and will they get richer now?- Bitcoin millionaires surged by 111% in 2024, driven by new ETFs and Bitcoin highs- Top crypto hubs like Singapore and Hong K… [+120 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "coindesk.com",
            "title": "Switzerland’s Fourth-Biggest Bank ZKB Offers Retail Customers Bitcoin and Ether",
            "description": "switzerland-swiss-flag-bitcoin (Shutterstock)",
            "url": "https://biztoc.com/x/13a09c163290316f",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-09-04T15:58:59Z",
            "content": "switzerland-swiss-flag-bitcoin (Shutterstock)\r\nThis story appeared on coindesk.com, 2024-09-04."
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "Bitcoin’s ‘Next Stop’—China Could Be About To Blow Janet Yellen’s $1 Trillion Crypto Price Bombshell Out Of The Water",
            "description": "U.S. Treasury secretary Janet Yellen could inject up to $1 trillion into markets before the end of 2024—something that one legendary trader thinks would kick off a bitcoin price boom...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/17/bitcoins-next-stop-china-could-be-about-to-blow-janet-yellens-1-trillion-crypto-price-bombshell-out-of-the-water/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/662cd18980ea913a4b6f6fa9/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-17T11:45:11Z",
            "content": "BitcoinBitcoin\r\n and crypto prices have swung wildly this week as iPhone maker Apple announces a game-changing update to its Wallet app.\r\nSubscribe now to Forbes' CryptoAsset &amp; Blockchain Advisor… [+3520 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘Extreme Fear’ And Fed Panic Spark Sudden $2 Trillion Crypto Price Crash—Hitting Bitcoin, Ethereum, BNB, Solana, XRP And Dogecoin",
            "description": "The bitcoin price has dropped below a key resistance level as the crypto market crashes under $2 trillion...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/09/06/extreme-fear-and-fed-panic-and-spark-sudden-2-trillion-crypto-price-crash-hitting-bitcoin-ethereum-bnb-solana-xrp-and-dogecoin/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6456424532c7f204c1e31892/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-06T21:45:13Z",
            "content": "BitcoinBitcoin\r\n and cryptoincluding top ten coins ethereum, BNBBNB\r\n, solana, XRPXRP\r\n and dogecoinhave crashed after a serious Goldman Sachs warning.\r\nSubscribe now to Forbes' CryptoAsset &amp; Blo… [+3292 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘Institutions Are Coming’—$35 Trillion U.S. Dollar Collapse Predicted To Trigger A Bitcoin Price Boom To Rival Gold",
            "description": "The U.S. dollar has hit its lowest level since the start of the year, sparking fears of further collapse and potentially feeding a bitcoin price boom...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/21/institutions-are-coming-35-trillion-us-dollar-collapse-predicted-to-trigger-a-bitcoin-price-boom-to-rival-gold/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/652281c5904439112e9cb52c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-21T11:47:07Z",
            "content": "BitcoinBitcoin\r\n has swung wildly in recent weeks, bouncing around $60,000 per bitcoin as traders brace for a China earthquake.\r\nSubscribe now to Forbes' CryptoAsset &amp; Blockchain Advisor and \"unc… [+3789 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "$36 Trillion ‘By The End Of 2024’—Elon Musk Backs Serious U.S. Dollar Inflation Warning That’s Predicted To Cause An ‘Inevitable’ Bitcoin Price Crash",
            "description": "Elon Musk has backed a $36 trillion \"by the end of 2024\" warning over the spiraling interest payments on the huge U.S. national debt pile...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/09/08/36-trillion-by-the-end-of-2024-elon-musk-backs-serious-us-dollar-inflation-warning-thats-predicted-to-cause-an-inevitable-bitcoin-price-crash/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66dd487e5a965e162fcab0d5/0x0.jpg?format=jpg&crop=1783,1108,x437,y23,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-08T11:15:54Z",
            "content": "Elon Musk, the mercurial billionaire whose fickle interest in bitcoin has waned since 2021, is stoking fears the U.S. dollar could be heading for a $36 trillion disaster.\r\nSubscribe now to Forbes' Cr… [+3856 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘Strap In’—Fed Suddenly Braced For U.S. Dollar ‘Crisis’ That’s Predicted To Spark ‘Total Collapse’ And A ‘Critical’ Bitcoin Price ‘Tipping Point’",
            "description": "Fears are swirling the U.S. is on \"the verge of a total collapse,\" setting up the bitcoin price for \"a critical tipping point\"...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/09/02/strap-in-september-fed-us-dollar-crisis-predicted-to-spark-total-collapse-and-a-critical-bitcoin-price-tipping-point/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/633c2741f081733a2a78b209/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-02T10:15:24Z",
            "content": "Bitcoin and crypto prices have surged this year as the U.S. dollar index falls to year-to-date lows (with the Coinbase chief executive last week revealing an AI game-changer).\r\nSubscribe now to Forbe… [+5913 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Rubén Andrés",
            "title": "Los criptomillonarios compraron relojes de forma compulsiva en 2020. Ahora la industria de lujo está pagando la factura",
            "description": "En los últimos años, se ha hablado mucho de la burbuja inmobiliaria, de la burbuja de las criptomonedas e incluso ya hay voces que hablan de la burbuja de la inteligencia artificial. Sin embargo, como si un árbol en medio del bosque se tratara, la burbuja de …",
            "url": "https://www.xataka.com/empresas-y-economia/criptomillonarios-compraron-relojes-forma-compulsiva-2020-ahora-industria-lujo-esta-pagando-factura",
            "urlToImage": "https://i.blogs.es/b2d40c/audemars/840_560.jpeg",
            "publishedAt": "2024-08-31T16:31:03Z",
            "content": "En los últimos años, se ha hablado mucho de la burbuja inmobiliaria, de la burbuja de las criptomonedas e incluso ya hay voces que hablan de la burbuja de la inteligencia artificial. Sin embargo, com… [+5438 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘Strap In’—Serious $40,000 Bitcoin Price Crash Warning Issued As The Fed Suddenly Braces For A U.S. Dollar ‘Crisis’ That’s Predicted To Spark ‘Total Collapse’",
            "description": "Fears are swirling the U.S. is on \"the verge of a total collapse,\" setting up the bitcoin price for \"a critical tipping point\"...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/09/03/strap-in-september-fed-us-dollar-crisis-predicted-to-spark-total-collapse-and-a-critical-bitcoin-price-tipping-point/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/633c2741f081733a2a78b209/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-03T10:17:56Z",
            "content": "09/03 update below. This post was originally published on September 02\r\nBitcoinBitcoin\r\n and crypto prices have surged this year as the U.S. dollar index falls to year-to-date lows (with the Coinbase… [+7408 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "Fed Warning: Bitcoin And Crypto On The ‘Cusp’ Of A Major Price Shock",
            "description": "Analysts are betting a fresh injection of liquidity by the Fed will put the bitcoin and crypto market on the \"cusp\" of a major move...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/29/fed-warning-bitcoin-and-crypto-on-the-cusp-of-a-major-price-shock/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63020d5a58234c4b60fa8c68/0x0.jpg?format=jpg&crop=3074,2050,x0,y203,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-29T12:15:36Z",
            "content": "BitcoinBitcoin\r\n has dropped back after Federal Reserve chair Jerome Powell sent the price soaring last week (with major updates from China and Russia failing to rally the market).\r\nSubscribe now to … [+3211 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "John Berlau, Contributor, \n John Berlau, Contributor\n https://www.forbes.com/sites/johnberlau/",
            "title": "‘Strategic Bitcoin Reserve’ Plans Warrant Caution",
            "description": "Even those bullish on bitcoin’s value as an asset should treat the idea of a government-held bitcoin reserve with skepticism, (Photo illustration by Chesnot/Getty Images)",
            "url": "https://www.forbes.com/sites/johnberlau/2024/08/26/strategic-bitcoin-reserve-plans-warrant-caution/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/62fe40baadccff017f1dbcbd/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-26T18:19:49Z",
            "content": "At the recent BitcoinBitcoin\r\n 2024 conference in Nashville, speakers proposed many good policies to tame the federal governments regulatory hostility to Bitcoin and other cryptocurrencies. Among the… [+6899 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Yúbal Fernández",
            "title": "Estafa de amor y criptomonedas: cómo funciona y cómo evitar que alguien te engañe mientras coquetea contigo",
            "description": "Vamos a hablarte de un tipo de estafa que cada vez está creciendo más, y en la que un estafador manipula emocionalmente a alguien para timarle con criptomonedas llevando a que las compre en páginas fraudulentas o falsas que directamente no existen.\n<!-- BREAK…",
            "url": "https://www.xataka.com/basics/estafa-amor-criptomonedas-como-funciona-como-evitar-que-alguien-te-engane-coquetea-contigo",
            "urlToImage": "https://i.blogs.es/3de34e/bitcoin-timo/840_560.jpeg",
            "publishedAt": "2024-09-06T12:17:14Z",
            "content": "Vamos a hablarte de un tipo de estafa que cada vez está creciendo más, y en la que un estafador manipula emocionalmente a alguien para timarle con criptomonedas llevando a que las compre en páginas f… [+3939 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kaja Whitehouse",
            "title": "How Trump vs. Harris is playing out on Wall Street",
            "description": "Wall Street has a lot at stake in this presidential election. Find out which candidate leaders like Ken Griffin and Jon Gray are backing and why.",
            "url": "https://www.businessinsider.com/wall-street-political-contributions-by-name-for-trump-vs-harris-2024-8",
            "urlToImage": "https://i.insider.com/66c3aeb05da406397bf70380?width=1200&format=jpeg",
            "publishedAt": "2024-08-20T14:17:07Z",
            "content": "Kamala Harris and Donald Trump.RONDA CHURCHILL/AFP via Getty Images. NATALIE BEHRING/AFP via Getty Images.\r\n<ul><li>The US presidential election is always important, but this year the stakes are espe… [+9580 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tonya Evans, Contributor, \n Tonya Evans, Contributor\n https://www.forbes.com/sites/tonyaevans/",
            "title": "The Bitcoin, Not Crypto Debate: Why Words Matter",
            "description": "Explore differences between Bitcoin and cryptocurrencies. Understand why words matter in the ongoing debate and how these terms impact financial and regulatory talks.",
            "url": "https://www.forbes.com/sites/tonyaevans/2024/08/21/the-bitcoin-not-crypto-debate-why-words-matter/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66c4fdfd3ae40699c682151c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-21T10:00:00Z",
            "content": "Representation of cryptocurrencies are seen in this illustration photo taken in Krakow, Poland on ... [+] November 14, 2022. (Photo by Jakub Porzycki/NurPhoto via Getty Images)\r\nNurPhoto via Getty Im… [+5908 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "Leak Sparks Serious U.S. Crypto Crackdown Fears As The Bitcoin Price Bounces Back",
            "description": "The bitcoin and crypto community are braced for a U.S. crypto crackdown...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/14/leak-sparks-serious-us-crypto-crackdown-fears-as-the-bitcoin-price-bounces-back/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bc9b171354421c814626e3/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-14T12:10:21Z",
            "content": "BitcoinBitcoin\r\n and crypto are becoming an increasingly partisan issue as former president and Republican 2024 nominee Donald Trump readies a huge bitcoin bazooka.\r\nSubscribe now to Forbes' CryptoAs… [+3729 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "theblock.co",
            "title": "Bitwise Bitcoin ETF to acquire the assets from Osprey Bitcoin Trust",
            "description": "Osprey was considering a potential sale or merger with a bitcoin ETF amid other strategic maneuvers in March of this year.",
            "url": "https://biztoc.com/x/2f37b5333f8a1fae",
            "urlToImage": "https://biztoc.com/cdn/2f37b5333f8a1fae_s.webp",
            "publishedAt": "2024-08-27T19:36:53Z",
            "content": "Osprey was considering a potential sale or merger with a bitcoin ETF amid other strategic maneuvers in March of this year.\r\nThis story appeared on theblock.co, 2024-08-27."
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Clem Chambers, Senior Contributor, \n Clem Chambers, Senior Contributor\n https://www.forbes.com/sites/investor/people/clem/",
            "title": "Crypto Autumn: Has The Revolution Been Crippled For Good?",
            "description": "The bitcoin assent into six figures is not going to plan.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/16/crypto-autumn-has-the-revolution-been-crippled-for-good/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bf60d838204ec33a355631/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-16T16:01:47Z",
            "content": "Bitcoin is currently trading below $60,000.\r\ngetty\r\nThe bitcoin assent into six figures is not going to plan.\r\nTo me I feel the intersection of strict regulation on the one hand, nebulous and/or regu… [+2040 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Priyanka Rajput",
            "title": "The 10 worst states to live in, ranked",
            "description": "Louisiana was ranked the worst state to live in, according to a report by WalletHub. Find out what other states are part of the list.",
            "url": "https://www.businessinsider.com/worst-states-to-live-in-ranked-2024-8",
            "urlToImage": "https://i.insider.com/66c246e01aa2ac29ee321203?width=1200&format=jpeg",
            "publishedAt": "2024-08-22T15:08:55Z",
            "content": "Louisiana was ranked the worst state to live in by WalletHub.Kevin Ruck/Shutterstock\r\n<ul><li>WalletHub listed the 10 worst states to live in based on five key metrics.</li><li>It assessed each state… [+10809 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Alyse Killeen, Contributor, \n Alyse Killeen, Contributor\n https://www.forbes.com/sites/alysekilleen/",
            "title": "Bitcoin Intersects With Today’s Most Pivotal Macro Investment Trends",
            "description": "Bitcoin intersects with the macro investment trends of most importance to large asset managers, specifically generative AI & AI infrastructure and the energy transition.",
            "url": "https://www.forbes.com/sites/alysekilleen/2024/09/03/bitcoin-intersects-with-todays-most-pivotal-macro-investment-trends/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d7221c3102a7f90d0f7101/0x0.jpg?format=jpg&crop=2208,1241,x0,y114,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-03T14:51:37Z",
            "content": "On itss own, bitcoin is having a stellar year, gaining broader adoption and greater influence. Bitcoin the asset (BTC) is up over 125% in the last 12-months and over 33% year-to-date. BTC spot ETFs, … [+8229 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Stereogum"
            },
            "author": "Chris DeVille",
            "title": "Taylor Swift Is Actually A Massive Darkness Fan, Frontman Reveals After Viral US Open Singalong",
            "description": "I don’t know a single living person who doesn’t like “I Believe In A Thing Called Love,” the Darkness’ dead-serious yet also completely unserious 2003 pop-metal pastiche. So it’s not that surprising that Taylor Swift was seen passionately singing along to the…",
            "url": "https://www.stereogum.com/2279463/taylor-swift-is-actually-a-massive-darkness-fan-frontman-reveals-after-viral-us-open-singalong/news/",
            "urlToImage": "https://static.stereogum.com/uploads/2024/09/GettyImages-2170856982-1725901991.jpg",
            "publishedAt": "2024-09-09T17:49:18Z",
            "content": "I don’t know a single living person who doesn’t like “I Believe In A Thing Called Love,” the Darkness’ dead-serious yet also completely unserious 2003 pop-metal pastiche. So it’s not that surprising … [+1275 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Dan Runkevicius, Senior Contributor, \n Dan Runkevicius, Senior Contributor\n https://www.forbes.com/sites/danrunkevicius/",
            "title": "‘Big Psychological Turning Point’—Bitcoin Price Is Down Despite Positive News While Ethereum, Cardano, Solana, BNB, And XRP Turn Mixed",
            "description": "Bitcoin’s price is down 2.3% while the Ethereum price lost 1.8%. Altcoins are a mixed bag: Solana shed 3.1% off yesterday’s highs, Dogecoin 3.6%, Shiba Inu 2.5%, BNB 2.2%, and XRP 0.8%, while Cardano added 0.3%",
            "url": "https://www.forbes.com/sites/danrunkevicius/2024/08/16/big-psychological-turning-point-bitcoin-price-is-down-despite-positive-news-while-ethereum-cardano-solana-bnb-and-xrp-turn-mixed/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66b5d233714e892373f8f341/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-16T11:46:43Z",
            "content": "Bitcoin price\r\nNurPhoto via Getty Images\r\nBitcoin and Ethereumthe two largest cryptocurrencies by market valuedipped again following the post-Japan scare comeback\r\nBitcoins price is down 2.3% from it… [+2614 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Nimrod Lehavi, Contributor, \n Nimrod Lehavi, Contributor\n https://www.forbes.com/sites/nimrodlehavi/",
            "title": "One Kingdom, Two Kings: Will Bitcoin And Ethereum Reign On? (part 2)",
            "description": "With an expansive ecosystem of Layer 2s currently building on Ethereum and Bitcoin, it’s indisputable that the two giants will lead the next and all subsequent bull runs.",
            "url": "https://www.forbes.com/sites/nimrodlehavi/2024/09/05/one-kingdom-two-kings-will-bitcoin-and-ethereum-reign-on-part-2/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d9c32ad15886def71a0cc6/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-05T14:45:00Z",
            "content": "An expansive ecosystem of Layer 2s is currently being built on Ethereum and Bitcoin\r\ngetty\r\nBitcoinBitcoin\r\n and EthereumEthereum\r\n appear to be unshakeable from their positions at the top of the cry… [+3672 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Theregister.com"
            },
            "author": "Connor Jones",
            "title": "Russian man who sold logins to nearly 3,000 accounts gets 40 months in jail",
            "description": "He’ll also have to pay back $1.2 million from fraudulent transactions he facilitated\nA Russian national is taking a trip to prison in the US after being found guilty of peddling stolen credentials on a popular dark web marketplace.…",
            "url": "https://www.theregister.com/2024/08/15/russian_serial_credential_peddler_gets/",
            "urlToImage": "https://regmedia.co.uk/2022/03/11/stolen_credentials_shutterstock.jpg",
            "publishedAt": "2024-08-15T12:22:08Z",
            "content": "A Russian national is taking a trip to prison in the US after being found guilty of peddling stolen credentials on a popular dark web marketplace.\r\nHailing from Moscow, 27-year-old Georgy Kavzharadze… [+2641 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Roger Huang, Contributor, \n Roger Huang, Contributor\n https://www.forbes.com/sites/rogerhuang/",
            "title": "Resistance Builds Against The Warren \"Anti-Crypto\" Agenda",
            "description": "Sen. Warren's extreme anti-crypto position and platform has inspired resistance to her policies —as well as at least one candidate who is trying to beat her.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/15/resistance-builds-against-the-warren-anti-crypto-agenda/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66b8cd8b7cd3a2d062a07707/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-15T15:15:00Z",
            "content": "WASHINGTON, DC - APRIL 27: Sen. Elizabeth Warren (D-MA) speaks to a staff member before the start of ... [+] a Senate Banking Committee hearing on oversight of credit reporting agencies, on Capitol H… [+5482 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘New Oil And Gold’—Crypto Is Suddenly Braced For The ‘Most Important’ Week After A Federal Reserve-Powered Bitcoin Price Surge",
            "description": "Nvidia chief executive Jensen Huang, right, is poised to deliver \"the most important tech earnings in years\" next week, potentially sparking bitcoin and crypto price chaos...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/25/new-oil-and-gold-crypto-is-suddenly-braced-for-the-most-important-week-after-a-federal-reserve-powered-bitcoin-price-surge/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66c9bc2f91b84e66ad8492fc/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-25T11:45:00Z",
            "content": "BitcoinBitcoin\r\n has rocketed higher this week after Federal Reserve chair Jerome Powell dramatically announced the \"time has come\" for interest rate cuts (though some are more focused on a China baz… [+4658 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "BlackRock Issues Serious Fed Warning As Crypto Suddenly Braces For A Predicted 50% Bitcoin Price Crash",
            "description": "BlackRock analysts have warned they see more \"volatility flare-ups ahead\"...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/09/11/blackrock-issues-serious-fed-warning-as-fears-swirl-of-a-50-bitcoin-price-crash/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65a17e4e00d89b897eff9a70/0x0.jpg?format=jpg&crop=1397,709,x352,y38,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-11T13:12:01Z",
            "content": "09/11 update below. This post was originally published on September 10\r\nBitcoinBitcoin\r\n has bounced back from a price crash last week, climbing along with stock markets as traders hold their breath … [+5703 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Alexander S. Blume, Contributor, \n Alexander S. Blume, Contributor\n https://www.forbes.com/sites/alexanderblume/",
            "title": "Like Oil Prior, Bitcoin ETF Options Will Grow Market Later This Year",
            "description": "The introduction of bitcoin spot ETF options will allow for institutions to participate in a more meaningful way",
            "url": "https://www.forbes.com/sites/alexanderblume/2024/08/16/like-oil-prior-bitcoin-etf-options-will-grow-market-later-this-year/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bf4840703c1e59bdbfce56/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-16T12:39:52Z",
            "content": "Bitcoin ETF Options Will Grow the Market\r\nAFP via Getty Images\r\nThe launch of bitcoin spot exchange traded funds (ETFs) earlier this year marked a major milestone in the assets path to mainstream ado… [+3330 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gothamist"
            },
            "author": "Rosemary Misdary",
            "title": "Crypto company slammed for pollution sues to keep mining bitcoin at NY power plant",
            "description": "The Greenidge Generation gas-fired power plant is home to a large bitcoin mining operation.\n \n\nLocal environmentalists have long opposed the natural gas power plant on Seneca Lake. [ more › ]",
            "url": "https://gothamist.com/news/crypto-company-slammed-for-pollution-sues-to-keep-mining-bitcoin-at-ny-power-plant",
            "urlToImage": "https://api-prod.gothamist.com/images/346742/fill-1200x650|format-webp|webpquality-85/",
            "publishedAt": "2024-08-22T15:23:00Z",
            "content": "The owners of a bitcoin mine in upstate New York have filed a lawsuit against the state seeking to block the imminent closure of the natural gas power plant fueling their 24/7 crypto operation.\r\nGree… [+2410 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Andrey Sergeenkov, Contributor, \n Andrey Sergeenkov, Contributor\n https://www.forbes.com/sites/andreysergeenkov/",
            "title": "How Volatile Is Bitcoin Compared To Other Assets",
            "description": "Bitcoin's risk profile is shifting. See how bitcoin now compares to Tesla, NVIDIA, and traditional safe havens.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/08/16/how-volatile-is-bitcoin-compared-to-other-assets/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bf0581f62367460a7b0b82/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-16T09:00:11Z",
            "content": "Bitcoin's volatility trend shows signs of stabilization in 2024\r\nNurPhoto via Getty Images\r\nHigh volatility creates short-term uncertainty across crypto markets, which can lead to temporary losses, t… [+4994 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Susie Violet Ward, Contributor, \n Susie Violet Ward, Contributor\n https://www.forbes.com/sites/susievioletward/",
            "title": "BBC Bitcoin Coverage Raises Concern Over Its Journalism And Trust",
            "description": "The BBC's bitcoin coverage calls into question the organization's impartiality and fact-checking processes, raising concerns about its credibility.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/09/04/bbc-bitcoin-coverage-raises-concern-over-its-journalism-and-trust/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d82cb10e851dba15688380/0x0.jpg?format=jpg&crop=1751,952,x883,y1382,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-04T10:07:01Z",
            "content": "LONDON, ENGLAND - NOVEMBER 13: The BBC headquarters at New Broadcasting House is illuminated at ... [+] night on November 13, 2012 in London, England. Tim Davie has been appointed the acting Director… [+8681 chars]"
        }
    ];
    constructor(){
        super();
        this.state = {
            article : this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        let urls = ('https://newsapi.org/v2/top-headlines?country=in&apiKey=93e1ffea8d2444fa8d9fa45daa690004')
        let data = await fetch(urls)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})
        

    }
    render() {
        return (
            <div className='container my-4'>
                <h2 className="text-center">HeadLine</h2>
                <div className="row">
                {this.state.article.map((element)=> {
                    return  <div className='col-md-3' key = {element.url} >
                    <NewsItem title={element.title ? element.title.slice(0, 50) : "No Title Available"} description={element.description ? element.description.slice(0, 80) : "No Description Available"}  Imageurl={element.urlToImage || "https://i.insider.com/631f874489d2b3001894b2e3?width=1200&format=jpeg"}  url={element.url}  />
                    </div>
                            
                })}

                   
                </div>
            </div>
        );
    }
}

export default News;
