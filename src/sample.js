const articles = [
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title:
      "Can Moderate Abortion-Rights Supporter Become Republican Nominee?Sununu Wants to Find Out...",
    description:
      "Four-term New Hampshire governor from political dynasty courts voters alienated by Donald Trump",
    url: "https://www.wsj.com/articles/can-a-moderate-abortion-rights-supporter-be-the-republican-presidential-nominee-chris-sununu-wants-to-find-out-cdc88434",
    urlToImage: "https://images.wsj.net/im-736327/social",
    publishedAt: "2023-03-04T16:00:04Z",
    content:
      "Can a Moderate Abortion-Rights Supporter Be the Republican Presidential Nominee? Chris Sununu Wants to Find Out.BEDFORD, N.H.—Gov. Chris Sununu says abortion should remain legal in New Hampshire well… [+989 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "The Wall Street Journal",
    title: "The number of ATMs has declined as people rely less on cash",
    description:
      "ATMs are disappearing due to rising crime and an increase in digital transactions. Banks are forced to close ATMs at night in major cities like New York.",
    url: "https://www.wsj.com/articles/the-number-of-atms-has-declined-as-people-rely-less-on-cash-81268fa2",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/0/0/Bank-of-America-ATM.jpg?ve=1&tl=1",
    publishedAt: "2023-03-03T18:36:13Z",
    content:
      "The slow move toward a cashless society is helping to send the ubiquitous ATM into decline around the U.S., presenting challenges for those who still largely rely on cash. \r\nAfter peaking at 470,000 … [+5836 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "The Don's Hush-Money Probe Enters Final Stages...",
    description:
      "Grand jurors soon will have heard testimony from all central figures in payment to porn star Stormy Daniels before 2016 election",
    url: "https://www.wsj.com/articles/trump-hush-money-probe-enters-final-stages-20730014",
    urlToImage: "https://images.wsj.net/im-735182/social",
    publishedAt: "2023-03-03T16:00:04Z",
    content:
      "Trump Hush-Money Probe Enters Final Stages\r\nManhattan prosecutors are in the final stages of presenting evidence to a grand jury about Donald Trump’s alleged role in paying hush money to a porn star … [+1000 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title:
      "Lost at Sea for 24 Days, This Man Survived on Ketchup, Seasoning and Dirty Water...",
    description:
      "Heinz launched social-media campaign to help Elvis Francois buy a boat",
    url: "https://www.wsj.com/articles/lost-at-sea-for-24-days-this-man-survived-on-ketchup-seasoning-and-dirty-water-ac2ef753",
    urlToImage: "https://images.wsj.net/im-733334/social",
    publishedAt: "2023-03-03T13:00:04Z",
    content:
      "Lost at Sea for 24 Days, This Man Survived on Ketchup, Seasoning and Dirty Water\r\nElvis Francois was lost at sea for more than 20 days with nothing to eat but ketchup and seasoning. When he closed hi… [+770 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "The Wall Street Journal",
    title:
      "Grand Ambitions: When Encyclopedias Thought To Collect Up All The Knowledge In The World",
    description:
      "Encyclopedias have always been a hard sell. Moving a hefty set of books at a big ticket price—toward its last days Britannica sold for $1,500—it could scarcely have been otherwise. – The Wall Street Journal",
    url: "https://www.wsj.com/articles/all-the-knowledge-in-the-world-review-the-encyclopedia-eternal-924e57b7",
    urlToImage: "https://images.wsj.net/im-731223/social",
    publishedAt: "2023-02-28T23:05:00Z",
    content:
      "In a YouTube video called Teens React to Encyclopedias, one kid comes up with the definition of encyclopedia as the internet in books; another says that it was Google way back in the day. . . it was … [+685 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Louise Radnofsky, Andrew Beaton",
    title:
      "Suit Alleges NFL Catalogs Lewd Shots of Women at Games in Database...",
    description:
      "The league says that some images of female fans and cheerleaders are marked as ‘sensitive’ to make them inaccessible for future productions",
    url: "https://www.wsj.com/articles/nfl-films-lawsuit-cheerleaders-women-eb4731e7",
    urlToImage: "https://images.wsj.net/im-732739/social",
    publishedAt: "2023-02-28T15:52:38Z",
    content:
      "As the National Football Leagues official production arm, NFL Films has long generated popular content that chronicles the history of Americas most popular sport from an up-close, behind-the-scenes p… [+710 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Ted Bunker, Ben Chapman",
    title: "Thomas H. Lee, Leveraged-Buyout Pioneer, Dies of Apparent Suicide",
    description:
      "He was the founder of Thomas H. Lee Partners and Lee Equity Partners",
    url: "https://www.wsj.com/articles/tom-lee-leveraged-buyout-pioneer-dies-at-78-374cd320",
    urlToImage: "https://images.wsj.net/im-731228/social",
    publishedAt: "2023-02-25T01:26:00Z",
    content:
      "Private-equity pioneer Thomas H. Lee died unexpectedly at 78, his colleagues and family said late Thursday.\r\nNew York Police Department officials said first responders to an emergency call Thursday m… [+254 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "NATO's Biggest Members Float Defense Pact With Kyiv...",
    description:
      "French and German leaders told Ukrainian President Zelensky that he needs to consider peace talks",
    url: "https://www.wsj.com/articles/natos-biggest-european-members-float-defense-pact-with-ukraine-38966950",
    urlToImage: "https://images.wsj.net/im-729996/social",
    publishedAt: "2023-02-24T20:00:04Z",
    content:
      "WSJ News Exclusive | NATO’s Biggest European Members Float Defense Pact With Ukraine\r\nAs Russia’s invasion of Ukraine enters its second year, Ukrainian President Volodymyr Zelensky pledged 2023 to be… [+1315 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "The Deepfake Dangers Ahead...",
    description:
      "AI-generated disinformation, especially from hostile foreign powers, is a growing threat to democracies based on the free flow of ideas.",
    url: "https://www.wsj.com/articles/the-deepfake-dangers-ahead-b08e4ecf",
    urlToImage: "https://images.wsj.net/im-730155/social",
    publishedAt: "2023-02-23T16:00:05Z",
    content:
      "Essay | The Deepfake Dangers AheadBots, trolls, influence campaigns: Every day we seem to be battling more fake or manipulated content online. Because of advances in computing power, smarter machine … [+2732 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Benjamin Katz",
    title:
      "New Rolls-Royce CEO Embarks on Strategic Review of Jet Engine-Maker",
    description:
      "Review comes after comments by new boss to staff that company was a ‘burning platform’",
    url: "https://www.wsj.com/articles/new-rolls-royce-ceo-embarks-on-strategic-review-of-jet-engine-maker-1834c3ab",
    urlToImage: "https://images.wsj.net/im-730451/social",
    publishedAt: "2023-02-23T10:43:00Z",
    content:
      "LONDONEmbattled British aircraft-engine maker Rolls-Royce Holdings PLC has embarked on a strategic review led by its new chief executive in a fresh effort to turn the company around. \r\nTufan Erginbil… [+603 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Energy Dept Officials Hold Stocks Related to Agency Work...",
    description:
      "Ethics lawyers caution officials not to work on matters affecting the companies but don’t tell them to sell",
    url: "https://www.wsj.com/articles/hundreds-of-energy-department-officials-hold-stocks-related-to-agencys-work-despite-warnings-73198908",
    urlToImage: "https://images.wsj.net/im-728966/social",
    publishedAt: "2023-02-22T23:00:06Z",
    content:
      "Hundreds of Energy Department Officials Hold Stocks Related to Agency’s Work Despite Warnings U.S. ethics officials in recent years have warned one-third of the Energy Department’s senior officials t… [+1852 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "GOOGLE Offers Rare Look at Restricted Areas Near Korean DMZ...",
    description:
      "Wildlife has flourished in and around the stretch of land that has separated North Korea from the South for the past 70 years",
    url: "https://www.wsj.com/articles/google-offers-rare-look-at-restricted-areas-near-korean-peninsulas-dmz-22648d06",
    urlToImage: "https://images.wsj.net/im-728805/social",
    publishedAt: "2023-02-22T22:00:04Z",
    content:
      "Google Offers Rare Look at Restricted Areas Near Korean Peninsula’s DMZSEOUL—For nearly 70 years, the demilitarized zone that divides the Korean Peninsula has stayed off limits to nearly all human ha… [+1947 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Dan Gallagher",
    title: "マイクロソフト、AI検索で早くも辛酸",
    description:
      "News Corp is a global, diversified media and information services company focused on creating and distributing authoritative and engaging content and other products and services.",
    url: "https://jp.wsj.com/articles/microsoft-gets-an-early-taste-of-searchs-dark-side-55d52833",
    urlToImage: "https://images.wsj.net/im-728021/social",
    publishedAt: "2023-02-22T01:03:23Z",
    content: "",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "The Wall Street Journal",
    title:
      "Church of Jesus Christ of Latter-day Saints, its investment adviser settle SEC probe",
    description:
      "The church will also pay a $1 million fine, the SEC said Tuesday. The money manager and the church settled the SEC's investigation without admitting or denying wrongdoing.",
    url: "https://www.wsj.com/articles/church-of-jesus-christ-of-latter-day-saints-its-investment-adviser-settle-sec-probe-792ffc71?mod=hp_lista_pos2",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/03/0/0/mormon-church-AP.jpg?ve=1&tl=1",
    publishedAt: "2023-02-21T18:35:02Z",
    content:
      "Ensign Peak Advisors Inc., which oversees a $32 billion equities portfolio for the Church of Jesus Christ of Latter-day Saints, will pay $4 million to settle regulatory claims that the money manager … [+5950 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Battle for Big-Money Donors...",
    description:
      "The former president and the Florida governor this week intensify fight for campaign cash",
    url: "https://www.wsj.com/articles/donald-trump-ron-desantis-to-court-big-money-donors-at-dueling-palm-beach-events-b04771ba",
    urlToImage: "https://images.wsj.net/im-727953/social",
    publishedAt: "2023-02-20T12:00:04Z",
    content:
      "Donald Trump, Ron DeSantis to Court Big-Money Donors at Dueling Palm Beach EventsDonald Trump and Ron DeSantis have battled in polls for months over who has a better shot at the 2024 GOP presidential… [+2406 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title:
      "GOOGLE Case Heads to Supreme Court With Powerful Internet Law at Stake...",
    description:
      "Company’s defense against liability in 2015 Paris terrorist attack invokes ‘Magna Carta of the Internet’",
    url: "https://www.wsj.com/articles/google-case-heads-to-supreme-court-with-powerful-internet-shield-law-at-stake-e548e241",
    urlToImage: "https://images.wsj.net/im-727450/social",
    publishedAt: "2023-02-20T11:00:04Z",
    content:
      "Google Case Heads to Supreme Court With Powerful Internet Shield Law at StakeWASHINGTON—Google goes before the U.S. Supreme Court this week to defend what is widely regarded as a pillar of the online… [+2560 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Demetria Gallegos",
    title:
      "A Young Couple Wants to Know: Should We Invest in More Real Estate?",
    description:
      "A financial adviser weighs in with her thoughts about what they should do about their finances",
    url: "https://www.wsj.com/articles/invest-in-real-estate-advice-6c62cdb3",
    urlToImage: "https://images.wsj.net/im-726995/social",
    publishedAt: "2023-02-19T15:00:00Z",
    content:
      "Austin Laue and Megan Laue bought their first home last year in Northbrook, Ill., near Chicago. Now theyre considering whether buying more real estate is a good way to build wealth.\r\nMr. Laue, 29, wo… [+504 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Biden's New Chief of Staff Enters as Political Rancor Heats Up...",
    description:
      "Jeff Zients isn’t as steeped in the inner workings of Washington as predecessor",
    url: "https://www.wsj.com/articles/bidens-new-chief-of-staff-enters-as-political-rancor-heats-up-eb854a08",
    urlToImage: "https://images.wsj.net/im-720162/social",
    publishedAt: "2023-02-19T14:00:04Z",
    content:
      "Biden’s New Chief of Staff Enters as Political Rancor Heats UpWASHINGTON—On his first day as White House chief of staff, Jeff Zients dispatched an all-staff note that said governing is never easy. Ma… [+2655 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Already providing drones!",
    description:
      "Despite sanctions, Kremlin continues to deploy small unmanned Chinese aircraft",
    url: "https://www.wsj.com/articles/chinese-drones-still-support-russias-war-in-ukraine-trade-data-show-cd39d40b",
    urlToImage: "https://images.wsj.net/im-728098/social",
    publishedAt: "2023-02-19T13:00:06Z",
    content:
      "WSJ News Exclusive | Chinese Drones Still Support Russia’s War in Ukraine, Trade Data Show\r\nUkraine’s neighbor Moldova has become the latest flashpoint in the war with Russia. Illustration: Daniel Or… [+2631 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Blinken, Beijing Official Clash Over Balloon Incident...",
    description:
      "In Munich meeting, spokesman says Blinken told China’s Wang balloon flights mustn’t happen again",
    url: "https://www.wsj.com/articles/chinas-top-diplomat-criticizes-u-s-as-two-sides-seek-bilateral-talks-4aef93e",
    urlToImage: "https://images.wsj.net/im-727727/social",
    publishedAt: "2023-02-19T12:00:04Z",
    content:
      "Blinken, China’s Top Diplomat Hold First Meeting Since Balloon IncidentMUNICH—Senior officials from the U.S. and China traded accusations over the downed Chinese balloon in a tense atmosphere of publ… [+2389 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Drilling Deeper Into Ocean Floor in Search for Origins of Life...",
    description:
      "Decadeslong effort has transformed knowledge of planet’s history",
    url: "https://www.wsj.com/articles/drilling-deeper-into-ocean-floor-in-search-for-origins-of-life-fadfcab2",
    urlToImage: "https://images.wsj.net/im-726727/social",
    publishedAt: "2023-02-19T11:00:05Z",
    content:
      "Drilling Deeper Into Ocean Floor in Search for Origins of LifeA ship that has spent decades trying to drill nearer to the earth’s mantle is preparing for a new voyage to uncover clues to how life beg… [+2004 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Vaclav Smil",
    title: "Tech Progress Is Slowing Down",
    description:
      "Despite utopian hopes, the exponential growth of computer technology can’t be replicated in other key areas",
    url: "https://www.wsj.com/articles/tech-progress-is-slowing-down-b7fcaee0",
    urlToImage: "https://images.wsj.net/im-725945/social",
    publishedAt: "2023-02-18T17:18:17Z",
    content:
      "Nothing has affected, and warped, modern thinking about the pace of technological invention more than the rapid exponential advances of solid-state electronics. The conviction that we have left the a… [+766 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Dwarf Goats: Man's Idea for Saving Town in Rural America...",
    description:
      "The former mayor of Wilson, Kan., believes he can lure travelers off Interstate 70 to see a collection of frolicking goats; he is butting heads with skeptics",
    url: "https://www.wsj.com/articles/former-mayor-bets-nigerian-dwarf-goats-will-save-wilson-kan-d873f2c8",
    urlToImage: "https://images.wsj.net/im-725634/social",
    publishedAt: "2023-02-17T22:00:04Z",
    content:
      "Dwarf Goats: One Man’s Idea for Saving a Town in Rural AmericaWILSON, Kan.—Like many visionaries, David Criswell can’t say exactly how he dreamed up his big idea.Yet after chewing it over, Mr. Criswe… [+1796 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "WSJ: Trump Officials Aware of Breaches in Airspace...",
    description:
      "Some in Pentagon suspected China links but didn’t reach definitive conclusions",
    url: "https://www.wsj.com/articles/trump-era-officials-were-aware-of-suspected-balloons-in-u-s-airspace-e9a15e9f",
    urlToImage: "https://images.wsj.net/im-725101/social",
    publishedAt: "2023-02-17T21:00:07Z",
    content:
      "WSJ News Exclusive | Trump-Era Officials Were Aware of Suspected Balloons in U.S. Airspace\r\nA suspected Chinese spy balloon and three unidentified flying objects were shot down over the U.S. and Cana… [+2751 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "RUSSIA DEATH TOLL MOUNTS",
    description:
      "U.K. Defense Ministry estimates that more than 200,000 Russian soldiers have been killed or wounded since the start of the invasion",
    url: "https://www.wsj.com/articles/russias-death-toll-from-ukraine-war-is-as-high-as-60-000-u-k-says-14305ba5",
    urlToImage: "https://images.wsj.net/im-727281/social",
    publishedAt: "2023-02-17T14:00:04Z",
    content:
      "Russia’s Death Toll From Ukraine War Is as High as 60,000, U.K. SaysRussia’s death toll from the war in Ukraine has reached as high as 60,000, the U.K. said, an estimate that draws attention to Mosco… [+2456 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "NOONAN: America's Longing for Authenticity...",
    description:
      "Reflections on Nikki Haley’s announcement, Super Bowl ads and Will Smith’s humiliation.",
    url: "https://www.wsj.com/articles/america-longs-for-authenticity-nikki-haley-super-bowl-ads-will-smith-oscars-trump-presidential-campaign-2024-8a3ade1c",
    urlToImage: "https://images.wsj.net/im-727010/social",
    publishedAt: "2023-02-17T13:00:05Z",
    content:
      "Opinion | America’s Longing for Authenticity\r\nMoments after he assaulted Chris Rock on stage, the actor received an ovation from the Hollywood audience (03/28/22). Images: Zuma Press/Reuters Composit… [+2639 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title:
      "Americans Moving From Colder Climes Face New Extremes: 100 Degree Temps and Drought...",
    description:
      "Intense heat and water scarcity are now major design considerations for those building homes in desert locales",
    url: "https://www.wsj.com/articles/homes-designed-for-extreme-heat-4a60426a",
    urlToImage: "https://images.wsj.net/im-723529/social",
    publishedAt: "2023-02-16T13:00:05Z",
    content:
      "Americans Moving From Colder Climes Face New Weather Extremes: 100 Degree Temps and DroughtThis week, The Wall Street Journal’s Mansion section is rolling out stories from our special desert living i… [+1871 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "ZILLOW Signals More Pain Ahead in Online Real Estate...",
    description:
      "Investors don’t seem to appreciate the difficulties faced by online home buying platforms",
    url: "https://www.wsj.com/articles/zillow-signals-more-pain-ahead-in-online-real-estate-89fd1b41",
    urlToImage: "https://images.wsj.net/im-725843/social",
    publishedAt: "2023-02-16T13:00:05Z",
    content:
      "Zillow Signals More Pain Ahead in Online Real EstateInvestors in online real estate platforms probably could waste a lot of energy figuring out how low home prices will go or whether mortgage rates h… [+2365 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Could Electric Vehicles Be Hacked?",
    description:
      "Cybersecurity experts warn that EVs will be ripe targets for hackers unless more attention is paid to the risks",
    url: "https://www.wsj.com/articles/could-electric-vehicles-be-hacked-71a543e3",
    urlToImage: "https://images.wsj.net/im-723461/social",
    publishedAt: "2023-02-14T22:00:04Z",
    content:
      "Could Electric Vehicles Be Hacked? Will electric cars and trucks be the next playground for hackers? Some cybersecurity experts are raising the alarm, describing disturbing scenarios of possible atta… [+2188 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Bolsonaro to Return to Brazil in March to Lead Opposition...",
    description:
      "Ex-president tells The Wall Street Journal he will defend himself against accusations he fomented postelection riots",
    url: "https://www.wsj.com/articles/bolsonaro-says-he-will-return-to-brazil-in-march-to-lead-opposition-b57411f9",
    urlToImage: "https://images.wsj.net/im-724773/social",
    publishedAt: "2023-02-14T22:00:04Z",
    content:
      "WSJ News Exclusive | Bolsonaro Says He Will Return to Brazil in March to Lead OppositionORLANDO, Fla.—Former Brazilian President Jair Bolsonaro said he plans to return to Brazil in March to lead the … [+2183 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "As Home Sales Slow, Realtors Go Back to Other Jobs...",
    description:
      "Some agents who pivoted into real estate during the pandemic now struggle to make a living; ‘I need to feed my family’",
    url: "https://www.wsj.com/articles/as-home-sales-slow-realtors-go-back-to-their-other-jobs-679ae309",
    urlToImage: "https://images.wsj.net/im-723616/social",
    publishedAt: "2023-02-14T21:00:04Z",
    content:
      "As Home Sales Slow, Realtors Go Back to Their Other JobsDave Parker has quit trying to sell houses.Last spring, the 46-year-old father of three joined a real-estate brokerage in Silver Spring, Md., h… [+1691 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "mfiguiere",
    title: "Why I’m Resigning as an FTC Commissioner",
    description:
      "Article URL: https://www.wsj.com/articles/why-im-resigning-from-the-ftc-commissioner-ftc-lina-khan-regulation-rule-violation-antitrust-339f115d\nComments URL: https://news.ycombinator.com/item?id=34795184\nPoints: 10\n# Comments: 0",
    url: "https://www.wsj.com/articles/why-im-resigning-from-the-ftc-commissioner-ftc-lina-khan-regulation-rule-violation-antitrust-339f115d",
    urlToImage: "https://images.wsj.net/im-723599/social",
    publishedAt: "2023-02-14T20:06:06Z",
    content:
      "Much ink has been spilled about Lina Khans attempts to remake federal antitrust law as chairman of the Federal Trade Commission. Less has been said about her disregard for the rule of law and due pro… [+884 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Suspected Iran Weapons Seized by Navy May Go to Ukraine...",
    description:
      "U.S. officials are considering sending a cache of arms to help Kyiv in its battle against Russia",
    url: "https://www.wsj.com/articles/seized-weapons-bound-for-yemen-may-go-to-ukraine-2516b45d",
    urlToImage: "https://images.wsj.net/im-724443/social",
    publishedAt: "2023-02-14T20:00:04Z",
    content:
      "WSJ News Exclusive | Suspected Iranian Weapons Seized by U.S. Navy May Go to Ukraine\r\nUkraine is trying to convince the ​West to provide it with F-16​s​, modern fighter jets capable of traveling twic… [+1678 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Aaron Rodgers Going on Darkness Retreat. What Is That?",
    description:
      "The Green Bay Packers quarterback hopes isolation in complete darkness for days will help him decide his next career move",
    url: "https://www.wsj.com/articles/aaron-rodgers-darkness-retreat-what-is-that-9b231a86",
    urlToImage: "https://images.wsj.net/im-721712/social",
    publishedAt: "2023-02-14T16:00:04Z",
    content:
      "Aaron Rodgers Is Going on a Darkness Retreat. What Is That?Green Bay Packers quarterback Aaron Rodgers is about to make one of his biggest decisions. Literally in the dark.“I’ve got a pretty cool opp… [+1173 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Dean Seal",
    title: "Coca-Cola Earnings Drop as Stronger Dollar Weighs",
    description:
      "Fourth-quarter sales rose 7% on higher prices, but beverage maker expects sales growth to slow",
    url: "https://www.wsj.com/articles/coca-cola-ko-q4-earnings-report-2022-b580807d",
    urlToImage: "https://images.wsj.net/im-723429/social",
    publishedAt: "2023-02-14T12:38:00Z",
    content:
      "Coca-Cola Co. said profit fell in the fourth quarter from a \r\nstronger dollar, while revenue rose 7% as higher prices offset a decline in sales volume.For the current year, Coke expects sales growth … [+191 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Benjamin Katz",
    title:
      "Air India Places Airbus Order in First Half of Biggest-Ever Aircraft Deal",
    description:
      "Air India Places Airbus Order in First Half of Biggest-Ever Aircraft Dealwsj.com",
    url: "https://www.wsj.com/articles/air-india-places-airbus-order-in-first-half-of-biggest-ever-aircraft-deal-7c7cd86f",
    urlToImage: "https://images.wsj.net/im-724242/social",
    publishedAt: "2023-02-14T12:03:42Z",
    content:
      "Air India Ltd. ordered 470 jets from Boeing Co. and Airbus SE, marking the largest deal for commercial aircraft in aviation history and coming as airlines scramble for jets to meet surging demand for… [+182 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Sarah Nassauer",
    title:
      "Walmart to Close Three Tech Hubs, Tells Tech Staff to Return to Offices",
    description:
      "Retail giant is closing offices in Austin, Portland and Carlsbad and telling hundreds of staff they must relocate to keep their jobs",
    url: "https://www.wsj.com/articles/walmart-to-close-three-tech-hubs-tells-tech-staff-to-return-to-offices-3fb131e4",
    urlToImage: "https://images.wsj.net/im-723841/social",
    publishedAt: "2023-02-13T23:54:46Z",
    content:
      "Walmart Inc. plans to close three of its U.S. technology hubs and require hundreds of workers to relocate to keep their jobs, according to a memo reviewed by The Wall Street Journal. The retailer wil… [+323 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "NEW UFO TASK FORCE",
    description:
      "U.S. officials are at a loss to explain what three airborne objects shot down over the weekend were",
    url: "https://www.wsj.com/articles/as-mystery-objects-get-shot-down-u-s-sets-up-new-task-force-on-ufos-afa4d12c",
    urlToImage: "https://images.wsj.net/im-723614/social",
    publishedAt: "2023-02-13T21:00:04Z",
    content:
      "As Mystery Objects Get Shot Down, U.S. Sets Up New Task Force on UFOs\r\nJohn Kirby, a spokesman for the National Security Council, told reporters on Friday that President Biden ordered the military to… [+1524 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Sarah Toy",
    title:
      "Teen Girls Experiencing Record Levels of Sadness and Suicide Risk, CDC Says",
    description:
      "Teens reported increasing experiences of violence and suicidal thoughts, but girls fared worse than boys",
    url: "https://www.wsj.com/articles/teen-girls-experiencing-record-levels-of-sadness-and-suicide-risk-cdc-says-b30b7e8e",
    urlToImage: "https://images.wsj.net/im-723400/social",
    publishedAt: "2023-02-13T18:46:47Z",
    content:
      "Nearly three out of five high-school girls in the U.S. who were surveyed reported feelings of persistent sadness or hopelessness in 2021, a roughly 60% increase over the past decade, new research fro… [+479 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title:
      "After Quakes, Turkey Makes More Arrests Connected to Collapsed Buildings...",
    description:
      "Death toll from last week’s quakes has reached over 35,000 in Turkey and Syria",
    url: "https://www.wsj.com/articles/after-earthquakes-turkey-makes-more-arrests-connected-to-collapsed-buildings-644f0f8",
    urlToImage: "https://images.wsj.net/im-723334/social",
    publishedAt: "2023-02-13T16:00:04Z",
    content:
      "After Earthquakes, Turkey Makes More Arrests Connected to Collapsed BuildingsGAZIANTEP, Turkey—Turkish authorities widened a crackdown on those allegedly involved in shoddy construction practices and… [+1021 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Spencer Jakab",
    title: "Exxon Is an Exile on Wall Street and Loving It",
    description:
      "The Dow Jones Industrial Average’s shake-up dumped Exxon Mobil, Pfizer and Raytheon just as it was their turn to shine",
    url: "https://www.wsj.com/articles/exxon-is-an-exile-on-wall-street-and-loving-it-487d25f",
    urlToImage: "https://images.wsj.net/im-723029/social",
    publishedAt: "2023-02-13T14:10:00Z",
    content:
      "Want to annoy an investing pedant? Just talk about U.S. stocks in terms of the Dow Jones Industrial Average.\r\nWhile the pros vastly prefer more sophisticated indexes weighted by market value over the… [+235 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Raffaele Huang",
    title:
      "Amazon, Microsoft, Google Pressured by Chinese Cloud Rivals in Southeast Asia",
    description:
      "China’s Alibaba, Huawei and Tencent are investing hundreds of millions of dollars in developing markets including Thailand, Indonesia",
    url: "https://www.wsj.com/articles/amazon-microsoft-google-pressured-by-chinese-cloud-rivals-in-southeast-asia-2c8d98b4",
    urlToImage: "https://images.wsj.net/im-723292/social",
    publishedAt: "2023-02-13T13:32:00Z",
    content:
      "SINGAPOREU.S. cloud-computing companies, dominant globally, are facing intensifying competition from upstart Chinese rivals in Southeast Asia, offering a head-to-head look at how the two geopolitical… [+236 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Belle Lin",
    title: "Uber Signs Cloud Deals With Google and Oracle",
    description:
      "Two seven-year deals will help ride-hailing company end reliance on its own data centers",
    url: "https://www.wsj.com/articles/uber-signs-cloud-deals-with-google-and-oracle-b45a9372",
    urlToImage: "https://images.wsj.net/im-722868/social",
    publishedAt: "2023-02-13T13:03:00Z",
    content:
      "Uber\r\nTechnologies Inc. plans to move its information-technology from its own data centers to\r\nAlphabet Inc.\r\nand\r\nOracle Corp.s\r\ncloud-computing platforms, the companies said Monday.The San Francisc… [+4507 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Eliza Collins",
    title: "Tim Scott Preps for Presidential Run...",
    description:
      "Tim Scott Preps for Presidential Run...\r\n\n \n \n \n (First column, 7th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
    url: "https://www.wsj.com/articles/republican-sen-tim-scott-prepares-for-presidential-run-cd0078f1",
    urlToImage: "https://images.wsj.net/im-722717/social",
    publishedAt: "2023-02-13T12:34:37Z",
    content:
      "South Carolina Sen. Tim Scott is taking steps to run for president, people familiar with his plans said, adding to the \r\nstable of Republicans looking to wrest the party mantle from former President … [+283 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Collin Eaton",
    title:
      "Chevron Weighs Extending CEO Mike Wirth Past Mandatory Retirement Age",
    description:
      "Board doesn’t yet see an obvious internal replacement for CEO, remains pleased with stewardship",
    url: "https://www.wsj.com/articles/chevron-weighs-extending-ceo-mike-wirth-past-mandatory-retirement-age-82cd233c",
    urlToImage: "https://images.wsj.net/im-722576/social",
    publishedAt: "2023-02-13T12:02:00Z",
    content:
      "Chevron Corp.s board of directors is considering waiving the companys mandatory retirement age for Chief Executive Mike Wirth, a move that would allow him to remain CEO for a longer period, people fa… [+408 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Mahomes Makes Case as New Brady...",
    description:
      "With a second Super Bowl win in four years, Mahomes cemented the Kansas City Chiefs as the singularly dominant force in the NFL—a role that had been vacated by the New England Patriots and Brady.",
    url: "https://www.wsj.com/articles/patrick-mahomes-chiefs-super-bowl-tom-brady-62216408",
    urlToImage: "https://images.wsj.net/im-723256/social",
    publishedAt: "2023-02-13T12:00:04Z",
    content:
      "Patrick Mahomes Makes His Case as the New Tom BradyPhoenix The Kansas City Chiefs’ 38-35 victory in Sunday night’s Super Bowl was gutty and dramatic. Patrick Mahomes was gimpy and in pain while playi… [+905 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "CLOSE ENCOUNTERS OF THE BALLOON KIND",
    description:
      "Action comes amid stepped-up defense of airspace, closer examination of raw radar data",
    url: "https://www.wsj.com/articles/latest-flying-objects-shot-down-over-north-america-were-balloons-schumer-says-7c2c63ec",
    urlToImage: "https://images.wsj.net/im-723164/social",
    publishedAt: "2023-02-13T01:00:03Z",
    content:
      "U.S. Military Shoots Down Fourth High-Altitude Object Over North AmericaWASHINGTON—The U.S. shot down a fourth flying object Sunday afternoon at 20,000 feet above Michigan’s Lake Huron, the Pentagon … [+1284 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Turkey earthquake death toll passes 33,000...",
    description:
      "Search-and-rescue teams continue to face a host of logistical challenges as survivors struggle to find food and shelter, as the death toll in Turkey and Syria surpasses 33,000",
    url: "https://www.wsj.com/articles/aid-arrives-in-turkey-but-anger-grows-8e347992",
    urlToImage: "https://images.wsj.net/im-723018/social",
    publishedAt: "2023-02-12T15:00:04Z",
    content:
      "Aid Arrives in Turkey After Earthquakes but Anger GrowsGAZIANTEP, Turkey—Aid is now rushing into Turkey since twin earthquakes devastated vast swaths of the country, but anger is growing in destroyed… [+754 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Stephanie Armour, Kristina Peterson",
    title: "U.S. Begins Allowing Medicaid Money to Be Spent on Food...",
    description:
      "U.S. Begins Allowing Medicaid Money to Be Spent on Food...\r\n\n \n \n \n (Second column, 14th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Solution to Housing Crisis: Just Make People Rich...",
    url: "https://www.wsj.com/articles/u-s-begins-allowing-medicaid-money-to-be-spent-on-food-62f78cac",
    urlToImage: "https://images.wsj.net/im-721832/social",
    publishedAt: "2023-02-12T14:13:37Z",
    content:
      "WASHINGTONThe Biden administration has started approving state requests to use Medicaid to pay for groceries and nutritional counseling as policy makers explore whether food as medicine programs can … [+379 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title:
      "Republican Lawmaker's Two Jobs: Investigating Bidens, Managing Firebrands...",
    description:
      "Oversight Chairman James Comer points to experience in knitting together factions",
    url: "https://www.wsj.com/articles/gop-lawmakers-two-jobs-investigating-bidens-managing-firebrands-a43c414",
    urlToImage: "https://images.wsj.net/im-716867/social",
    publishedAt: "2023-02-12T12:00:04Z",
    content:
      "GOP Lawmaker’s Two Jobs: Investigating Bidens, Managing FirebrandsWASHINGTON—The Republican leading several investigations related to President Biden and his administration faces the dual challenges … [+1564 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Meghan Bobrowsky",
    title: "TikTok’s Parent Takes On Meta in Battle for Virtual-Reality Market",
    description:
      "Pico, owned by ByteDance, has increased shipments of VR headsets as it attempts to compete with Meta’s Quest 2",
    url: "https://www.wsj.com/articles/tiktoks-parent-takes-on-meta-in-battle-for-virtual-reality-market-dd4abdb6",
    urlToImage: "https://images.wsj.net/im-710224/social",
    publishedAt: "2023-02-12T10:32:04Z",
    content:
      "ByteDance Ltd., the China-based owner of TikTok, is starting to snare market share in the virtual-reality headset space that Meta Platforms Inc. has \r\nidentified as critical to its future. Two years … [+292 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Dan Strumpf, Yoko Kubota",
    title:
      "From Apple to VW, CEOs Gradually Returning to China After Its Reopening",
    description: "Beijing counts on executive visits to attract investments",
    url: "https://www.wsj.com/articles/from-apple-to-vw-ceos-gradually-returning-to-china-after-its-reopening-277d6ac6",
    urlToImage: "https://images.wsj.net/im-721142/social",
    publishedAt: "2023-02-12T10:30:00Z",
    content:
      "BEIJINGTop executives from multinational companies are trickling back into China with \r\nthe countrys reopening, as Beijing seeks to restore confidence from global businesses in its struggling economy… [+355 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Patrick Thomas",
    title:
      "High Food Prices, Chinese Demand Boost Prospects of U.S. Agriculture Companies",
    description:
      "High Food Prices, Chinese Demand Boost Prospects of U.S. Agriculture Companieswsj.com",
    url: "https://www.wsj.com/articles/high-food-prices-chinese-demand-boost-prospects-of-u-s-agriculture-companies-8e02afb1",
    urlToImage: "https://images.wsj.net/im-722365/social",
    publishedAt: "2023-02-11T15:22:11Z",
    content:
      "The U.S. agriculture industry is projecting another strong year, with \r\nelevated crop prices and Chinas rebound from Covid-19 expected to boost farmers, chemical suppliers and grain traders.Grain-tra… [+428 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Christopher Mims",
    title: "AI Boom Could Make GOOGLE, MICROSOFT Even More Powerful...",
    description:
      "AI Boom Could Make GOOGLE, MICROSOFT Even More Powerful...\r\n\n \n \n \n (Third column, 2nd story, link)\r\n\n \r\n\n \r\n\n \n Related stories:GATES: CHATGPT 'will change our world'...",
    url: "https://www.wsj.com/articles/the-ai-boom-that-could-make-google-and-microsoft-even-more-powerful-9c5dd2a6",
    urlToImage: "https://images.wsj.net/im-722610/social",
    publishedAt: "2023-02-11T15:13:37Z",
    content:
      "Seeing the new artificial intelligence-powered chatbots touted in dueling announcements this past week by \r\nMicrosoft and Google drives home two major takeaways. First, the feeling of wow, this defin… [+701 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Jinjoo Lee",
    title: "Natural Gas: Fasten Your Seat Belts",
    description:
      "The buffers that keep America’s natural-gas price fluctuations at bay are eroding",
    url: "https://www.wsj.com/articles/natural-gas-fasten-your-seat-belts-5c0fcdf4",
    urlToImage: "https://images.wsj.net/im-720080/social",
    publishedAt: "2023-02-11T15:00:00Z",
    content:
      "Last year, natural-gas prices wereby some measuresthe most volatile since the U.S. shale boom began about a decade earlier. Despite the \r\nrecent plunge in prices, it could be just a preview of coming… [+552 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Bob Tita",
    title:
      "Nikola Constructs Hydrogen Fuel Network to Power Zero-Emissions Trucks",
    description:
      "Manufacturer relying on partnerships to support 7,500 heavy-duty vehicles by 2026",
    url: "https://www.wsj.com/articles/nikola-constructs-hydrogen-fuel-network-to-power-zero-emissions-trucks-29634212",
    urlToImage: "https://images.wsj.net/im-721617/social",
    publishedAt: "2023-02-11T10:51:40Z",
    content:
      "Nikola Corp. has started work on hydrogen plants, part of a fueling network the company intends to underpin its push to compete in the nascent \r\nzero-emissions truck market. The seven-year-old manufa… [+229 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Soma Biswas, Alexander Gladstone",
    title: "Bed Bath & Beyond to Shut Down Canadian Stores in Bankruptcy",
    description:
      "The retailer doesn’t have the resources to save both its U.S. and Canadian operations, even with its newfound financial lifeline",
    url: "https://www.wsj.com/articles/bed-bath-beyond-to-shut-down-canadian-stores-in-bankruptcy-19ec3e37",
    urlToImage: "https://images.wsj.net/im-722774/social",
    publishedAt: "2023-02-10T22:26:00Z",
    content:
      "Bed Bath &amp; Beyond Inc.s Canadian division will shut down its stores under court protection after the company received an unusual lifeline earlier this week to save its U.S. operations from bankru… [+447 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Mormon Church Investment Arm Under Investigation by SEC...",
    description:
      "The $100 billion portfolio of the Church of Jesus Christ of Latter-day Saints was long a secret in the investment world",
    url: "https://www.wsj.com/articles/mormon-churchs-investment-arm-under-investigation-by-sec-dca77f9",
    urlToImage: "https://images.wsj.net/im-722346/social",
    publishedAt: "2023-02-10T22:00:04Z",
    content:
      "WSJ News Exclusive | Mormon Church’s Investment Arm Under Investigation by SECThe Securities and Exchange Commission is investigating the Mormon Church’s past efforts to keep its giant investment por… [+1397 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Dean Seal",
    title: "Lyft Shares Fall After Unexpected Loss, Weak Outlook",
    description:
      "Shares fall 36% after disappointing revenue guidance sent some Wall Street analysts to the sidelines",
    url: "https://www.wsj.com/articles/lyft-shares-fall-after-unexpected-loss-weak-outlook-1946c36e",
    urlToImage: "https://images.wsj.net/im-722474/social",
    publishedAt: "2023-02-10T21:45:00Z",
    content:
      "Lyft Inc.s shares sank by more than a third on Friday after the ride-hailing company \r\nposted an unexpected quarterly loss and concerns mounted that it was falling further behind Uber Technologies In… [+327 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Alyssa Lukpat",
    title:
      "Brett Favre Sues Shannon Sharpe, Pat McAfee and Mississippi Auditor for Defamation",
    description:
      "Former NFL quarterback said the men made malicious statements about his welfare fraud case",
    url: "https://www.wsj.com/articles/brett-favre-sues-shannon-sharpe-pat-mcafee-and-mississippi-auditor-for-defamation-d66d69dc",
    urlToImage: "https://images.wsj.net/im-722233/social",
    publishedAt: "2023-02-10T21:19:00Z",
    content:
      "Former NFL quarterback Brett Favre sued the Mississippi state auditor and two sports commentators, Shannon Sharpe and Pat McAfee, for defamation, saying they made false statements about him on TV and… [+289 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Te-Ping Chen",
    title: "Tech Layoffs Hit H1B Visa Workers Hard",
    description:
      "When many visa holders lose a job, they have 60 days to find a new one, or go home",
    url: "https://www.wsj.com/articles/tech-layoffs-hit-h1b-visa-workers-hard-ca03c2cd",
    urlToImage: "https://images.wsj.net/im-719349/social",
    publishedAt: "2023-02-10T14:00:00Z",
    content:
      "When she lost her job at Google last month, Jingjing Tan started worrying about her dog, an energetic, 75-pound German shepherd.\r\nAs a foreign worker living in the U.S. on a temporary work visa, if s… [+191 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Isabel Coles",
    title: "Moldova Says Russian Missile Entered Airspace...",
    description:
      "Moldova Says Russian Missile Entered Airspace...\r\n\n \n \n \n (Third column, 5th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Moscow massing tanks, aircraft, 500,000 troops for new assault... Developing...\r\nPentagon looks to restart top-secret programs in Ukraine...",
    url: "https://www.wsj.com/articles/moldova-says-russian-missile-entered-its-airspace-as-barrage-in-ukraine-intensifies-9923e6f9",
    urlToImage: "https://images.wsj.net/im-722133/social",
    publishedAt: "2023-02-10T12:16:39Z",
    content:
      "SLOVYANSK, UkraineMoldova said a Russian missile entered its airspace en route to a target in Ukraine during the latest wave of Russian attacks, adding to the risk of the war spilling over as the Kre… [+497 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Georgi Kantchev",
    title: "Russia to Cut Oil Production, Sending Prices Higher",
    description:
      "Moscow plans to cut output by 500,000 barrels a day next month, taking a rare move on oil policy outside of its alliance with OPEC",
    url: "https://www.wsj.com/articles/russia-to-cut-oil-production-sending-prices-higher-5697a8e8",
    urlToImage: "https://images.wsj.net/im-722122/social",
    publishedAt: "2023-02-10T10:51:00Z",
    content:
      "Russia said it plans to cut its oil production by around 500,000 barrels a day, or about 5%, next month, sending crude prices higher in a move that Moscow said was in response to \r\nWestern sanctions.… [+283 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Trefor Moss",
    title: "Adidas Warns of Losses Stemming From Yeezy Fallout",
    description:
      "German sneaker giant sets out financial cost of exit from partnership with Kanye West",
    url: "https://www.wsj.com/articles/adidas-warns-of-losses-stemming-from-yeezy-fallout-11675977491",
    urlToImage: "https://images.wsj.net/im-721695/social",
    publishedAt: "2023-02-09T21:18:00Z",
    content:
      "Adidas AG warned it could swing to a loss in 2023 should it fail to sell its inventory of Yeezy shoes, following the \r\ntermination of its partnership with rapper Kanye West.The German sportswear gian… [+340 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Nora Eckert",
    title: "Ford CEO Says Employees Need Clearer Goals, Performance Metrics",
    description:
      "Comments, at a virtual town-hall meeting, follow Ford’s disappointing earnings report last week",
    url: "https://www.wsj.com/articles/ford-ceo-says-employees-need-clearer-goals-performance-metrics-11675959499",
    urlToImage: "https://images.wsj.net/im-721160/social",
    publishedAt: "2023-02-09T17:10:00Z",
    content:
      "Ford Motor Co. Chief Executive Jim Farley said in a virtual town-hall meeting Thursday morning that he was working to simplify goals and performance metrics for employees, according to people who wer… [+329 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Carol Ryan",
    title: "The Battle for America’s Smokers Is Heating Up",
    description:
      "U.S. cigarette volumes fell sharply last year as smokers cut back to save cash. Tobacco giants Altria and BAT also have a new rival on their turf.",
    url: "https://www.wsj.com/articles/the-battle-for-americas-smokers-is-heating-up-11675954343",
    urlToImage: "https://images.wsj.net/im-718855/social",
    publishedAt: "2023-02-09T14:52:00Z",
    content:
      "So far, tobacco firms have managed to balance spending billions of dollars on new, smoke-free products with milking their old-school cigarette brands for profits. The American market may be approachi… [+317 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Sean McLain",
    title: "EV Startup Lucid Offers $7,500 Credit on Some Air Sedans",
    description:
      "Promotion follows a federal rule change that disqualified Lucid’s Air sedans from government tax incentives",
    url: "https://www.wsj.com/articles/ev-startup-lucid-offers-7-500-credit-on-some-air-sedans-11675947509",
    urlToImage: "https://images.wsj.net/im-721003/social",
    publishedAt: "2023-02-09T14:00:00Z",
    content:
      "Luxury electric-vehicle maker Lucid Group is offering a $7,500 purchase credit on certain configurations of its Air sedan, the latest car manufacturer to slash the cost of \r\nbuying a battery-powered … [+287 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "John D. Sailer",
    title: "How ‘Diversity’ Policing Fails Science",
    description:
      "An open-records request reveals that Texas Tech faculty penalize candidates for heterodox opinions.",
    url: "https://www.wsj.com/articles/how-diversity-policing-fails-science-equality-equity-education-texas-tech-job-candidates-interview-dei-pronouns-11675722169",
    urlToImage: "https://images.wsj.net/im-717621/social",
    publishedAt: "2023-02-09T13:10:42Z",
    content:
      "At Texas Tech University, a candidate for a faculty job in the department of biological sciences was flagged by the departments search committee for not knowing the difference between equality and eq… [+658 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Dean Seal",
    title: "PepsiCo Earnings Top Expectations as Sales Rise 11%",
    description:
      "Higher prices for company’s beverages and snacks continue to offset rising costs",
    url: "https://www.wsj.com/articles/pepsi-pep-q4-earnings-report-2022-11675943579",
    urlToImage: "https://images.wsj.net/im-717915/social",
    publishedAt: "2023-02-09T12:21:00Z",
    content:
      "PepsiCo Inc. posted a nearly 11% rise in sales for the fourth quarter as higher prices for its beverages and snacks continued to offset rising costs.\r\nThe beverage maker said Thursday that it expects… [+331 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: null,
    title: "Seattle Storm Sells Minority Stake At WNBA Record $151M Valuation",
    description:
      "The Seattle Storm have sold minority stakes in their franchise at a record valuation of $151 million.\nThe sale of stakes to 15 investors will help finance a $64 million, 50,000-square-foot practice facility and business office for the Storm.\nThe Storm's valua…",
    url: "https://www.wsj.com/articles/seattle-storm-wnba-franchise-value-151-million-11675872816?st=jiyjfhz7yrmfhle&reflink=desktopwebshare_permalink",
    urlToImage:
      "https://basketball.realgm.com/images/nba/4.2/wiretap/photos/2006/nba_wnba.jpg",
    publishedAt: "2023-02-08T17:59:55Z",
    content:
      "The Seattle Storm have sold minority stakes in their franchise at a record valuation of $151 million.\r\nThe sale of stakes to 15 investors will help finance a $64 million, 50,000-square-foot practice … [+793 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Colin Kellaher",
    title:
      "Fabuloso Parent Recalls Nearly 5 Million Bottles of Cleaning Product Over Infection Risk",
    description:
      "Fabuloso Parent Recalls Nearly 5 Million Bottles of Cleaning Product Over Infection Riskwsj.com",
    url: "https://www.wsj.com/articles/fabuloso-parent-recalls-nearly-5-million-bottles-of-cleaning-product-over-infection-risk-11675875851",
    urlToImage: "https://images.wsj.net/im-720140/social",
    publishedAt: "2023-02-08T17:06:50Z",
    content:
      "Colgate-Palmolive Co. is recalling nearly 5 million bottles of Fabuloso multipurpose cleaning products due to the risk of exposure to bacteria, the U.S. Consumer Product Safety Commission and the com… [+355 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Russia Throws Soldiers into Ukraine Firing Line to Gain Inches...",
    description:
      "Moscow shows scant regard for the lives of its conscripts, but the battle for Bakhmut is also costly for Ukrainian defenders",
    url: "https://www.wsj.com/articles/ukraine-bakhmut-russia-soldiers-killed-11675810722",
    urlToImage: "https://images.wsj.net/im-719146/social",
    publishedAt: "2023-02-08T16:00:04Z",
    content:
      "Russia Throws Soldiers into Ukraine Firing Line to Gain InchesBAKHMUT, Ukraine—Ukrainian artillery fire mangled the platoon of Russian soldiers advancing on this besieged city. Guided by a live video… [+867 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Anna Wilde Mathews",
    title:
      "CVS Reaches $10.6 Billion Deal to Buy Clinic Owner Oak Street Health",
    description:
      "CVS Reaches $10.6 Billion Deal to Buy Clinic Owner Oak Street Healthwsj.com",
    url: "https://www.wsj.com/articles/cvs-earnings-report-oak-street-health-merger-11675835625",
    urlToImage: "https://images.wsj.net/im-719316/social",
    publishedAt: "2023-02-08T11:01:47Z",
    content:
      "CVS Health Corp. agreed to acquire Oak Street Health Inc. for about $10.6 billion including debt, in the latest sign of the growing tie-ups between health insurers and primary-care doctors.\r\nThe all-… [+163 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Sam Schechner",
    title:
      "Google to Roll Out AI Search Features as Microsoft Rivalry Heats Up",
    description:
      "Alphabet unit plans to describe new types of search results days after Bard is opened for testing",
    url: "https://www.wsj.com/articles/google-to-roll-out-ai-search-features-as-microsoft-rivalry-heats-up-11675835792",
    urlToImage: "https://images.wsj.net/im-719881/social",
    publishedAt: "2023-02-08T10:06:34Z",
    content:
      "PARISGoogle plans to give details on new search features powered by artificial intelligence a day after Microsoft Corp. said\r\n it was building the technology behind the chatbot ChatGPT into its Bing … [+388 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Businesses Paying Premium to Hire Migrant Workers...",
    description:
      "Employers, struggling to fill hourly wage jobs in construction, restaurants and other services, are offering higher pay and better working conditions to people coming to the U.S. to work; ‘The scarcity is huge’",
    url: "https://www.wsj.com/articles/migrants-are-doing-better-than-ever-thanks-to-tight-labor-market-11675784935",
    urlToImage: "https://images.wsj.net/im-718426/social",
    publishedAt: "2023-02-07T23:00:04Z",
    content:
      "U.S. Business Owners Pay Premium to Hire Migrant Workers in Extremely Tight Labor MarketMigrants who come to the U.S. to find work are now being hired more quickly, at higher pay and under better wor… [+1150 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "John Gruber",
    title: "Joanna Stern on Microsoft’s New AI-Powered Bing",
    description:
      "Our columnist got an early look at the software’s new ChatGPT-like powers",
    url: "https://www.wsj.com/articles/i-tried-microsofts-new-ai-powered-bing-search-will-never-be-the-same-11675799762",
    urlToImage: "https://images.wsj.net/im-719346/social",
    publishedAt: "2023-02-07T22:21:00Z",
    content:
      "Joanna Stern interviewed Satya Nadella about Microsoft’s OpenAI-powered improvements to Bing and Edge (News+ link):\n\n\n “We are grounded in the fact that Google dominates this [search]\nspace,” Microso… [+623 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title:
      "Home-Buying Companies Stuck With Hundreds of Houses as Demand Slows...",
    description:
      "As mortgage rates surged, some customers backed out of purchases or needed more time for financing",
    url: "https://www.wsj.com/articles/home-buying-companies-stuck-with-hundreds-of-houses-as-demand-slows-11675739434",
    urlToImage: "https://images.wsj.net/im-718049/social",
    publishedAt: "2023-02-07T20:00:04Z",
    content:
      "Home-Buying Companies Stuck With Hundreds of Houses as Demand SlowsRibbon Home Inc. had a fast-growing business during the housing boom. The New York City-based startup purchased homes with cash on b… [+1359 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Will Feuer",
    title: "Zoom to Lay Off 15% of Staff, CEO Slashes Salary",
    description:
      "Videoconferencing company reduces its workforce as work-from-home trend winds down",
    url: "https://www.wsj.com/articles/zoom-to-lay-off-15-of-staff-ceo-slashes-salary-11675794502",
    urlToImage: "https://images.wsj.net/im-719215/social",
    publishedAt: "2023-02-07T18:28:00Z",
    content:
      "Zoom Video Communications Inc. is laying off 1,300 of its employees, or 15%, of its staff, becoming the \r\nlatest technology company to trim its workforce as it adjusts to more normalized trends after… [+343 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Tom Dotan",
    title: "Microsoft Adds ChatGPT AI Technology to Bing Search Engine",
    description:
      "Microsoft Adds ChatGPT AI Technology to Bing Search Enginewsj.com",
    url: "https://www.wsj.com/articles/microsoft-adds-chatgpt-ai-technology-to-bing-search-engine-11675793525",
    urlToImage: "https://images.wsj.net/im-718594/social",
    publishedAt: "2023-02-07T18:14:29Z",
    content:
      "Microsoft Corp. is integrating the technology behind the viral chatbot ChatGPT into its Bing search engine, hoping the artificial intelligence upgrade can help it chip away at Googles dominance of th… [+242 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Beijing Now Has More ICBM Launchers Than USA...",
    description:
      "While the U.S. leads in intercontinental missiles and warheads, China’s gains are fueling debate in Congress",
    url: "https://www.wsj.com/articles/china-has-more-icbm-launchers-than-u-s-american-military-reports-11675779463",
    urlToImage: "https://images.wsj.net/im-718555/social",
    publishedAt: "2023-02-07T16:00:06Z",
    content:
      "WSJ News Exclusive | China Has More ICBM Launchers Than U.S., American Military ReportsThe U.S. military has notified Congress that China now has more land-based intercontinental-range missile launch… [+1346 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Katherine Sayre",
    title: "Betting Projected to Hit Record $16B!",
    description:
      "Betting Projected to Hit Record $16B!\r\n\n \n \n \n (Second column, 4th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Mahomes, Hurts aware of significance of this Super Bowl duel...",
    url: "https://www.wsj.com/articles/super-bowl-betting-projected-to-hit-record-16-billion-11675731607",
    urlToImage: "https://images.wsj.net/im-718660/social",
    publishedAt: "2023-02-07T12:25:39Z",
    content:
      "Gambling on this weekends Super Bowl is expected to reach record-breaking levels, with more than 50 million Americans projected to bet $16 billion on the championship game, according to a gambling-in… [+415 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Maria Armental",
    title: "Carlyle Reports Sharply Lower Fourth-Quarter Earnings",
    description:
      "The firm’s net income fell during the fourth quarter, but its assets under management grew to $373 billion",
    url: "https://www.wsj.com/articles/carlyle-reports-sharply-lower-fourth-quarter-earnings-11675771315",
    urlToImage: "https://images.wsj.net/im-718676/social",
    publishedAt: "2023-02-07T12:01:00Z",
    content:
      "Carlyle Group Inc. reported a roughly 80% drop in net income during the quarter ending Dec. 31 from the same period a year ago, while its total assets grew to $373 billion, thanks largely to growth i… [+318 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Salvador Rodriguez",
    title:
      "Meta to Revamp Horizon Metaverse App, Plans to Open for Teen Use as Soon as March",
    description:
      "Meta to Revamp Horizon Metaverse App, Plans to Open for Teen Use as Soon as Marchwsj.com",
    url: "https://www.wsj.com/articles/meta-to-revamp-horizon-metaverse-app-plans-to-open-for-teen-use-as-soon-as-march-11675749223",
    urlToImage: "https://images.wsj.net/im-718652/social",
    publishedAt: "2023-02-07T10:30:00Z",
    content:
      "Facebook parent Meta Platforms Inc. is revamping its fledgling Horizon Worlds metaverse app, seeking to draw in more teen and young-adult users after working to improve the services design, according… [+296 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Alexander Gladstone, Soma Biswas, Suzanne Kapner",
    title:
      "Bed Bath & Beyond Strikes Investor Deal for Over $1 Billion to Avoid Bankruptcy",
    description:
      "Distressed retailer reached an equity-financing deal shortly after it missed interest payments on debt",
    url: "https://www.wsj.com/articles/bed-bath-beyond-launches-equity-offering-to-raise-more-than-1-billion-11675722393",
    urlToImage: "https://images.wsj.net/im-718566/social",
    publishedAt: "2023-02-07T02:06:00Z",
    content:
      "Bed Bath &amp; Beyond Inc. has secured investor backing for a more than $1 billion capital raise to stave off bankruptcy and try to turn around its flagging business, people familiar with the matter … [+452 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Anna Wilde Mathews",
    title:
      "CVS Nearing $10.5 Billion Deal for Primary-Care Provider Oak Street Health",
    description:
      "The deal would expand the health insurer and pharmacy chain’s role in medical care",
    url: "https://www.wsj.com/articles/cvs-nearing-10-5-billion-deal-for-primary-care-provider-oak-street-health-11675727217",
    urlToImage: "https://images.wsj.net/im-718575/social",
    publishedAt: "2023-02-06T23:49:35Z",
    content:
      "CVS Health Corp. is close to an agreement to acquire Oak Street Health Inc. for about $10.5 billion including debt, a deal that would rapidly expand the big healthcare companys footprint of primary-c… [+317 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Robbie Whelan",
    title:
      "Florida Lawmakers Move to Take Over DISNEY's Special-Tax District...",
    description:
      "If approved, bill would give Gov. Ron DeSantis the power to appoint members to oversee the district, instead of eliminating it, as governor had pledged",
    url: "https://www.wsj.com/articles/florida-lawmakers-move-to-take-over-disneys-special-tax-district-11675717239",
    urlToImage: "https://images.wsj.net/im-718456/social",
    publishedAt: "2023-02-06T21:58:38Z",
    content:
      "Walt Disney Co.s dominion over its magic kingdom in Florida may be coming to an end.\r\nRepublicans in Floridas House of Representatives on Monday filed a bill that would dramatically alter the governa… [+1325 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Sam Schechner",
    title: "AI WAR: GOOGLE unveils ChatGPT rival...",
    description:
      "Alphabet unit will launch the service more broadly to the public in coming weeks, CEO says",
    url: "https://www.wsj.com/articles/google-opens-testing-of-chatgpt-rival-as-artificial-intelligence-war-heats-up-11675711198",
    urlToImage: "https://images.wsj.net/im-718341/social",
    publishedAt: "2023-02-06T21:04:39Z",
    content:
      "Google is rolling out a new conversational artificial-intelligence service to a select set of testers, and plans a broader public launch in coming weeks, part of the companys \r\neffort to play catch-u… [+315 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "The Wall Street Journal",
    title: "Generative AI Art Is Just Theft, Say Some Artists",
    description:
      "Critics of these systems include artists, coders, legal experts, and even some of the engineers who build them. They argue that the systems that make this possible and art-generating AIs, all ingest content without securing permission from its creators. – The…",
    url: "https://www.wsj.com/articles/ai-chatgpt-dall-e-microsoft-rutkowski-github-artificial-intelligence-11675466857",
    urlToImage: "https://images.wsj.net/im-715988/social",
    publishedAt: "2023-02-06T20:44:00Z",
    content:
      "Grzegorz Rutkowski has studied the great masters of texture and lightCaravaggio, Rembrandt, Vermeerand his ability to mimic their techniques has made him an in-demand painter of \r\nfantastical beasts … [+365 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "David Luhnow, Max Colchester",
    title: "UK Govt-Run Healthcare Service in Crisis...",
    description:
      "The NHS is struggling under the effects of budget cuts, Covid delays and an aging population",
    url: "https://www.wsj.com/articles/nhs-uk-national-health-service-strike-costs-11675693883",
    urlToImage: "https://images.wsj.net/im-717154/social",
    publishedAt: "2023-02-06T19:43:37Z",
    content:
      "For more than a decade, the British government has run its National Health Service, the worlds largest government-run healthcare system, on a tight budget. The NHS prided itself on being one of the l… [+611 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Jon Kamp",
    title: "Homelessness Hits New England...",
    description:
      "Homelessness Hits New England...\r\n\n \n \n \n (First column, 7th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Ann Arbor, Michigan Best Place To Live...\r\nLIST...",
    url: "https://www.wsj.com/articles/rise-in-homelessness-hits-several-new-england-states-11675695322",
    urlToImage: "https://images.wsj.net/im-715947/social",
    publishedAt: "2023-02-06T15:16:37Z",
    content:
      "PROVIDENCE, R.I.Inside a cavernous armory building in Rhode Islands capital city, up to 185 people have recently gathered each night to get out of the cold.\r\nThe federal- and state-funded site in Pro… [+329 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Kristina Peterson, Anthony DeBarros",
    title: "Farmland Becomes Flashpoint in U.S.-China Relations...",
    description:
      "Farmland Becomes Flashpoint in U.S.-China Relations...\r\n\n \n \n \n (Third column, 1st story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
    url: "https://www.wsj.com/articles/farmland-becomes-flashpoint-in-u-s-china-relations-11675652368",
    urlToImage: "https://images.wsj.net/im-717242/social",
    publishedAt: "2023-02-06T14:01:37Z",
    content:
      "GRAND FORKS, N.D.For more than two years, the mayor of this city near the Minnesota border backed a Chinese companys plans to build a $700 million corn mill on the outskirts of town, citing the prosp… [+322 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Will Feuer",
    title: "Dell to Cut 5% of Workforce",
    description:
      "Computer maker’s co-operating chief says market conditions continue to erode",
    url: "https://www.wsj.com/articles/dell-to-cut-5-of-workforce-11675688897",
    urlToImage: "https://images.wsj.net/im-717873/social",
    publishedAt: "2023-02-06T13:10:52Z",
    content:
      "Dell Technologies Inc. said it is cutting about 5% of its workforce, the latest technology company \r\nadding to a wave of layoffs as interest rates rise and financial conditions tighten.The cuts would… [+143 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: null,
    title:
      "Newmont Proposes $17 Billion Takeover of Australia’s Newcrest Mining",
    description:
      "U.S. gold producer makes second offer after Newcrest rejected an earlier proposal as too low",
    url: "https://www.wsj.com/articles/newmont-proposes-17-billion-takeover-of-australias-newcrest-mining-11675648137",
    urlToImage: "https://images.wsj.net/im-717722/social",
    publishedAt: "2023-02-06T07:10:00Z",
    content:
      "ADELAIDE, AustraliaNewmont Corp. has made a roughly $17 billion offer to acquire Australias Newcrest Mining Ltd., aiming to seal one of the biggest deals for a global gold miner as the industry strug… [+336 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Lauren Thomas",
    title:
      "Public Storage Makes $11 Billion Unsolicited Offer for Life Storage",
    description:
      "The smaller rival rebuffed the company’s overtures in December and January",
    url: "https://www.wsj.com/articles/public-storage-makes-11-billion-unsolicited-offer-for-life-storage-11675635919",
    urlToImage: "https://images.wsj.net/im-717614/social",
    publishedAt: "2023-02-05T22:57:00Z",
    content:
      "Public Storage has made an $11 billion unsolicited offer for its smaller rival Life Storage Inc., ramping up an effort to buy its smaller rival after an earlier bid was rejected, in a move that would… [+276 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Matthew Thomas",
    title:
      "Adani Crisis: How a Short Seller Wiped Out Billions in Wealth From One of India’s Richest Men",
    description:
      "Report from Hindenburg Research led to a $100 billion slide in Adani stock prices",
    url: "https://www.wsj.com/articles/adani-group-your-guide-to-the-indian-companys-stock-market-rout-11675335951",
    urlToImage: "https://images.wsj.net/im-715639/social",
    publishedAt: "2023-02-05T20:22:00Z",
    content:
      "Gautam Adani, an Indian businessman, is \r\none of the richest people in the world. His wealth took a big hit when shares of companies owned by his flagship Adani Group fell dramatically following the … [+352 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Jan Wolfe",
    title: "Judge Releases Decision Approving Meta’s Virtual-Reality Deal",
    description:
      "Unsealed ruling lays out details on FTC’s loss of its bid to block acquisition",
    url: "https://www.wsj.com/articles/judge-releases-decision-approving-metas-virtual-reality-deal-11675624589",
    urlToImage: "https://images.wsj.net/im-717546/social",
    publishedAt: "2023-02-05T19:18:19Z",
    content:
      "WASHINGTONA judge has made public his decision that allowed Meta Platforms Inc. to acquire a virtual-reality startup, providing new details on why \r\nhe ruled against the Federal Trade Commission in i… [+397 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "When Does Elon Sleep?",
    description:
      "At Tesla trial and in tweets, executive gives a glimpse into personal challenges",
    url: "https://www.wsj.com/articles/when-does-elon-musk-sleep-billionaire-speaks-of-limits-to-fixing-twitter-and-his-back-pain-11675604800",
    urlToImage: "https://images.wsj.net/im-716985/social",
    publishedAt: "2023-02-05T15:00:04Z",
    content:
      "When Does Elon Musk Sleep? Billionaire Speaks of Limits to Fixing Twitter and His Back PainElon Musk is tired, his back hurts and his mom wants him to get some sleep.“I had trouble sleeping last nigh… [+1472 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Randall Smith",
    title: "Some Investors Are Missing Out on Higher Yields—and Don’t Know It",
    description:
      "With ‘cash sweeps,’ brokerage firms automatically put uninvested client assets into a low-yielding bank-deposit program",
    url: "https://www.wsj.com/articles/investing-high-yield-funds-deposits-11675530179",
    urlToImage: "https://images.wsj.net/im-714702/social",
    publishedAt: "2023-02-05T14:00:00Z",
    content:
      "Stocks and bonds both fell sharply last year. But one bright spot in financial markets was the rising interest rates on money-market funds, which in December topped 4% on average for the first time i… [+362 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Collin Eaton, Jenny Strasburg",
    title: "Oil Industry’s Windfall Fails to Excite Wall Street",
    description:
      "Exxon, Chevron and Shell deliver record profits, but investors are wary",
    url: "https://www.wsj.com/articles/oil-industrys-windfall-fails-to-excite-wall-street-11675564711",
    urlToImage: "https://images.wsj.net/im-715480/social",
    publishedAt: "2023-02-05T10:30:00Z",
    content:
      "Oil companies delivered the markets best shareholder returns last year, but Wall Street is still wary.    \r\nThe biggest Western oil companies, Exxon Mobil Corp.,Chevron Corp. and Shell PLC, together … [+203 chars]",
  },
]

export default articles;