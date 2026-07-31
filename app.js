/* ==========================================================================
   THE SOCIOLOGY ARCHIVE & LIBRARY - CORE DATA & INTERACTIVITY ENGINE
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. SOCIOLOGIST ARCHIVE DATA REGISTRY (12 Thinkers across 4 Eras)
// --------------------------------------------------------------------------
const sociologistsData = [
    // GALLERY 1: THE BIRTH OF SOCIOLOGY (1800-1914)
    {
        id: "karl-marx",
        name: "Karl Marx",
        initials: "KM",
        lifespan: "1818–1883",
        origin: "Trier, Prussia (Germany) / London, UK",
        era: "era1",
        eraTitle: "Gallery I • The Birth of Sociology (1800–1914)",
        intuitionHeadline: "He witnessed factory workers producing staggering wealth in Victorian London while living in sewage-filled slums, concluding that economic power determines human culture and consciousness.",
        concepts: ["Historical Materialism", "Bourgeoisie vs. Proletariat", "Alienation", "Surplus Value", "Commodity Fetishism"],
        
        // Person & Origin
        personBioIntro: "Marx was not an ivory-tower academic—he was a revolutionary journalist and exile who spent his life fleeing political persecution across Europe while raising a family in desperate poverty.",
        bioEarlyLife: "Born to a middle-class Jewish lawyer family in Trier, Germany, Marx studied law and philosophy. His radical political critiques of Prussian authoritarianism quickly got his newspaper suppressed and sent him into exile.",
        bioTurningPoint: "While living in exile in Paris and London, Marx collaborated closely with Friedrich Engels, visiting steam-powered textile mills in Manchester. There he saw 12-year-olds working 14-hour days while factory owners amassed immense fortunes.",
        bioLivedExperience: "Living in a cramped two-room apartment in Soho, London, Marx often couldn't leave his home because his winter coat was hocked at the pawnshop. Four of his children died young from poverty-related illnesses. His theories were born from directly suffering the brutal underbelly of 19th-century industrial capitalism.",

        // Historical Crucible
        timelineEvents: [
            { year: "1848", title: "European Revolutions & Communist Manifesto", desc: "Monarchies across Europe face democratic uprisings; Marx & Engels publish their famous call to action." },
            { year: "1851", title: "The Great Exhibition in London", desc: "Britain showcases Victorian industrial dominance with steam engines and mass-manufactured commodities." },
            { year: "1867", title: "Publication of Das Kapital (Volume I)", desc: "Marx completes his monumental economic analysis of how capitalism extracts surplus value from human labor." }
        ],

        // Why They Believed It
        whyDetailedExplanation: `
            <p>Marx wondered why society made workers feel miserable despite humanity producing more goods than ever before. He realized that under feudalism, a blacksmith owned their hammer and saw the finished sword. But under industrial capitalism, workers are separated from their tools and products.</p>
            <p>Because factory owners own the means of production, workers must sell their time just to survive. Capitalism extracts <strong>surplus value</strong> (unpaid profit) from labor, causing <strong>Alienation</strong> (Entfremdung) in four ways: workers become alienated from the product they make, from the act of working, from their own human creative potential, and from their fellow human beings who become economic competitors.</p>
        `,
        whyModernRelevance: "Today, Marx's insights explain why gig-economy drivers, corporate spreadsheet workers, and generative AI content creators often feel disconnected from the value they generate for tech conglomerates.",

        // Key Concepts & Quotes
        conceptDetails: [
            { term: "Historical Materialism", desc: "The belief that economic production methods (the economic base) shape a society's laws, politics, religion, and culture (the superstructure)." },
            { term: "Alienation (Entfremdung)", desc: "The feeling of estrangement workers experience when they lose control over their work, products, and creative human identity." },
            { term: "Surplus Value", desc: "The wealth produced by workers over and above their wages, which is appropriated as profit by capitalist owners." }
        ],
        quotes: [
            "The history of all hitherto existing society is the history of class struggles.",
            "Workers of the world unite; you have nothing to lose but your chains.",
            "It is not the consciousness of men that determines their existence, but their social existence that determines their consciousness."
        ]
    },
    {
        id: "emile-durkheim",
        name: "Émile Durkheim",
        initials: "ED",
        lifespan: "1858–1917",
        origin: "Épinal / Paris, France",
        era: "era1",
        eraTitle: "Gallery I • The Birth of Sociology (1800–1914)",
        intuitionHeadline: "Watching traditional French village ties collapse during rapid secularisation, he proved that even the most intimate personal act—suicide—is driven by unseen social bonds.",
        concepts: ["Anomie", "Social Facts", "Mechanical vs. Organic Solidarity", "Collective Consciousness", "Sacred vs. Profane"],

        personBioIntro: "The son of a French rabbi, Durkheim was raised with a deep respect for communal moral duties and established sociology as a rigorous scientific academic discipline in France.",
        bioEarlyLife: "Growing up in a tight-knit Jewish community in Alsace-Lorraine, Durkheim witnessed France's traumatic defeat in the Franco-Prussian War (1870) and the secularisation of French public schooling.",
        bioTurningPoint: "As France transformed from rural villages into industrial cities, traditional religious authority waned. Durkheim worried that without shared moral guidelines, modern individuals would suffer moral confusion.",
        bioLivedExperience: "Durkheim gathered extensive police and municipal records across Europe to write his groundbreaking 1897 study <em>Suicide</em>, showing that suicide rates rose during rapid economic shifts and were higher among unmarried people and Protestants due to lower social integration.",

        timelineEvents: [
            { year: "1870–1871", title: "Franco-Prussian War & Paris Commune", desc: "France suffers national crisis and intense political division, driving Durkheim's obsession with social cohesion." },
            { year: "1893", title: "The Division of Labour in Society", desc: "Durkheim introduces how modern specialization transforms human connection from similarity to interdependence." },
            { year: "1897", title: "Publication of Suicide", desc: "First major empirical sociological study proving that social integration directly impacts individual survival." }
        ],

        whyDetailedExplanation: `
            <p>Durkheim believed society is a real, living force greater than the sum of its individual parts—what he called <strong>Social Facts</strong> (laws, morals, cultural norms that exert coercive pressure on us).</p>
            <p>In traditional societies, people were held together by <strong>Mechanical Solidarity</strong> (everyone did similar work, held shared religious beliefs, and shared a tight collective consciousness). Modern cities create <strong>Organic Solidarity</strong> (we rely on specialists like farmers, doctors, and bus drivers). However, when society changes too fast, the moral rules fail to keep pace, causing <strong>Anomie</strong>—a state of rootlessness, isolation, and normlessness.</p>
        `,
        whyModernRelevance: "Explains modern online loneliness, burnout, and why sudden social or career disruptions leave people feeling deeply ungrounded despite constant digital connection.",

        conceptDetails: [
            { term: "Anomie (Normlessness)", desc: "A condition of instability resulting from a breakdown of standards and values or from a lack of purpose or ideal." },
            { term: "Social Facts", desc: "Ways of acting, thinking, and feeling that exist outside the individual and exert social control over them." },
            { term: "Organic Solidarity", desc: "Social cohesion based on interdependence among specialists in modern complex industrial societies." }
        ],
        quotes: [
            "Society is not a mere sum of individuals. Rather, the system formed by their association represents a specific reality.",
            "When discipline is weak... human desires expand without limit.",
            "Religion is a system of ideas by which individuals represent to themselves the society of which they are members."
        ]
    },
    {
        id: "max-weber",
        name: "Max Weber",
        initials: "MW",
        lifespan: "1864–1920",
        origin: "Erfurt / Heidelberg, Imperial Germany",
        era: "era1",
        eraTitle: "Gallery I • The Birth of Sociology (1800–1914)",
        intuitionHeadline: "Recovering from a severe nervous breakdown, he realized that modern society was becoming trapped in an 'Iron Cage' of hyper-rational calculation and cold bureaucratic rules.",
        concepts: ["The Iron Cage", "Protestant Ethic & Capitalism", "Verstehen", "Bureaucracy", "Rationalisation"],

        personBioIntro: "Born to an authoritarian politician father and a deeply religious Calvinist mother, Weber lived at the intersection of German political power and intense psychological struggle.",
        bioEarlyLife: "Raised in Berlin in an intellectual home visited by famous historians and politicians. Weber studied law and history, developing an astonishing work ethic that pushed him to exhaustion.",
        bioTurningPoint: "Following a traumatic argument with his father shortly before his father's sudden death in 1897, Weber suffered a paralyzing nervous breakdown that left him unable to read or teach for five years.",
        bioLivedExperience: "During his recovery, Weber traveled through the United States in 1904. Observing American industrial efficiency and religious sects, he realized that religious worldviews (Calvinism) inadvertently created the psychological mindset needed for modern capitalism.",

        timelineEvents: [
            { year: "1871", title: "Unification of Imperial Germany", desc: "Bismarck unites Germany into an industrial power governed by strict legal bureaucracy and military efficiency." },
            { year: "1905", title: "The Protestant Ethic and the Spirit of Capitalism", desc: "Weber publishes his masterpiece exploring how religious ideas shaped modern economic behavior." },
            { year: "1914–1918", title: "World War I & Bureaucratic Mobilisation", desc: "Weber serves as a hospital director in Heidelberg, observing state administration firsthand." }
        ],

        whyDetailedExplanation: `
            <p>While Marx focused on money, Weber argued that <strong>Rationalisation</strong>—the replacement of traditions, values, and emotions with cold efficiency and logic—was the true driving force of modern life.</p>
            <p>He showed how Calvinists believed in <em>predestination</em> (God already chose who goes to heaven). To cope with anxiety, they treated hard work and frugal financial success as signs of divine favor. Over time, the religious faith faded, but the compulsion to work relentlessly, calculate every second, and organize life through rigid <strong>Bureaucracies</strong> remained, creating an inescapable <strong>Iron Cage</strong> (Stahlhartes Gehäuse).</p>
        `,
        whyModernRelevance: "Visible today in standardized testing, corporate metrics, algorithmic productivity tracking, and rigid bureaucratic phone trees.",

        conceptDetails: [
            { term: "The Iron Cage", desc: "The rigid social structure of rules and bureaucratic efficiency that traps individuals in rationalized routines." },
            { term: "Verstehen (Empathetic Understanding)", desc: "The sociological method of understanding social behavior by putting oneself in the shoes of those being studied." },
            { term: "Bureaucracy", desc: "The most efficient form of organization based on hierarchy, written rules, specialized roles, and impersonality." }
        ],
        quotes: [
            "The Puritan wanted to work in a calling; we are forced to do so.",
            "No one knows who will live in this cage in the future.",
            "Specialists without spirit, sensualists without heart; this nullity catches the illusion that it has attained a level of civilization never before achieved."
        ]
    },

    // GALLERY 2: UNDERSTANDING MODERN SOCIETY (1914-1970s)
    {
        id: "antonio-gramsci",
        name: "Antonio Gramsci",
        initials: "AG",
        lifespan: "1891–1937",
        origin: "Sardinia / Rome, Italy",
        era: "era2",
        eraTitle: "Gallery II • Understanding Modern Society (1914–1970s)",
        intuitionHeadline: "Writing from a Fascist prison cell, he realized that ruling elites stay in power not just by police force, but by shaping cultural 'common sense' so workers accept their own submission.",
        concepts: ["Cultural Hegemony", "Organic Intellectuals", "Common Sense", "Counter-Hegemony", "War of Position"],

        personBioIntro: "Born in impoverished rural Sardinia and physically disabled from childhood, Gramsci rose to lead the Italian Communist Party before Mussolini imprisoned him.",
        bioEarlyLife: "Gramsci grew up suffering severe poverty and illness. As a boy, he worked 10-hour days in a registry office carrying heavy ledger books despite a spinal deformity that stunted his growth.",
        bioTurningPoint: "In 1926, Mussolini's prosecutor declared at Gramsci's trial: <em>'We must stop this brain from working for twenty years.'</em> In prison, deteriorating in health, he filled 30 exercise notebooks with brilliant sociological analysis.",
        bioLivedExperience: "Cut off from academic libraries, Gramsci reflected on why working-class Italians supported Mussolini's fascism instead of revolting. He saw that power is maintained in schools, churches, media, and everyday language.",

        timelineEvents: [
            { year: "1922", title: "Mussolini's March on Rome", desc: "Fascism takes power in Italy, dismantling free speech and political opposition." },
            { year: "1926–1937", title: "Gramsci's Imprisonment & Prison Notebooks", desc: "Gramsci writes 3,000 pages of revolutionary social theory while suffering severe illness in Turi prison." }
        ],

        whyDetailedExplanation: `
            <p>Gramsci questioned why workers didn't overthrow oppressive systems. He realized that a ruling class maintains power in two ways: <strong>Domination</strong> (coercive police force) and <strong>Hegemony</strong> (cultural consent).</p>
            <p>Through schools, religious institutions, newspapers, and popular culture, the ruling class spreads its worldview as universal <strong>"Common Sense"</strong>. People come to believe that existing inequalities are natural, inevitable, and fair. To create change, subaltern groups need their own <strong>Organic Intellectuals</strong> to wage a long cultural "War of Position".</p>
        `,
        whyModernRelevance: "Illuminates how media narratives, billionaire-owned platforms, and viral memes shape what ordinary citizens perceive as 'normal' or 'unrealistic'.",

        conceptDetails: [
            { term: "Cultural Hegemony", desc: "The domination of a culturally diverse society by the ruling class who manipulate the culture so that their imposing worldview becomes accepted as the norm." },
            { term: "Organic Intellectuals", desc: "Thinkers born directly from working-class communities who give voice to their real lived struggles." },
            { term: "Common Sense", desc: "Unexamined, everyday assumptions that reinforce dominant power structures." }
        ],
        quotes: [
            "Pessimism of the intellect, optimism of the will.",
            "The crisis consists precisely in the fact that the old is dying and the new cannot be born; in this interregnum a great variety of morbid symptoms appear.",
            "I'm a prisoner, but my thought cannot be imprisoned."
        ]
    },
    {
        id: "simone-de-beauvoir",
        name: "Simone de Beauvoir",
        initials: "SB",
        lifespan: "1908–1986",
        origin: "Paris, France",
        era: "era2",
        eraTitle: "Gallery II • Understanding Modern Society (1914–1970s)",
        intuitionHeadline: "Living in post-WWII Paris, she broke academic silence to prove that women are not born with innate passive natures, but are conditioned by culture to be society's 'Other'.",
        concepts: ["Gender as Social Construct", "Woman as the 'Other'", "Existentialist Feminism", "Immanence vs. Transcendence"],

        personBioIntro: "A brilliant philosopher and novelist who became one of the 20th century's most influential feminist theorists.",
        bioEarlyLife: "Born to a wealthy bourgeois Parisian family that lost its fortune after WWI. Her father declared, 'Simone thinks like a man!' yet expected her to conform to traditional upper-class marriage expectations.",
        bioTurningPoint: "Studying philosophy at the Sorbonne, she became the youngest person ever to pass the elite national Agrégation exam. Living independently in Left Bank Paris cafés, she chose never to marry or have children to safeguard her intellectual freedom.",
        bioLivedExperience: "After WWII, while watching French society urge women back into domestic submission, she spent 14 months researching biological, historical, and literary records, publishing her landmark 1949 work <em>The Second Sex</em>.",

        timelineEvents: [
            { year: "1944", title: "French Women Gain the Right to Vote", desc: "Post-war France grants women political suffrage after decades of resistance." },
            { year: "1949", title: "Publication of The Second Sex", desc: "Beauvoir's foundational text sells 22,000 copies in its first week, provoking intense praise and Vatican condemnation." }
        ],

        whyDetailedExplanation: `
            <p>Beauvoir's core insight is encapsulated in her most famous line: <em>"One is not born, but rather becomes, a woman."</em></p>
            <p>She separated biological sex from social gender. Men are treated as the universal human default (the "Subject" seeking transcendence through action and creation), while women are conditioned from childhood (through toys, stories, and domestic expectations) to be the passive <strong>"Other"</strong> (confined to immanence and domestic duties). She demanded that women be granted full existential freedom to define their own lives.</p>
        `,
        whyModernRelevance: "Formed the cornerstone for modern gender studies, body positivity debates, and critiques of gendered toy marketing and domestic labor divisions.",

        conceptDetails: [
            { term: "Gender Socialisation", desc: "The process by which individuals learn the cultural expectations associated with their biological sex." },
            { term: "Woman as 'The Other'", desc: "The positioning of women as secondary, passive, and defined only in relation to men." },
            { term: "Transcendence", desc: "The existential human drive to act, create, and forge one's own future beyond domestic confinement." }
        ],
        quotes: [
            "One is not born, but rather becomes, a woman.",
            "Representation of the world, like the world itself, is the work of men; they describe it from their own point of view.",
            "Self-knowledge is no guarantee of pleasure."
        ]
    },
    {
        id: "talcott-parsons",
        name: "Talcott Parsons",
        initials: "TP",
        lifespan: "1902–1979",
        origin: "Colorado / Harvard University, USA",
        era: "era2",
        eraTitle: "Gallery II • Understanding Modern Society (1914–1970s)",
        intuitionHeadline: "Looking at post-war American stability, he constructed a grand theory comparing society to a human body, where every institution exists to keep the whole system in balance.",
        concepts: ["Structural Functionalism", "AGIL Scheme", "The Sick Role", "Warm Bath Theory of Family", "Expressive vs. Instrumental Roles"],

        personBioIntro: "The son of a Congregationalist minister, Parsons became the dominant figure in mid-century American sociology from his department chair at Harvard.",
        bioEarlyLife: "Educated at Amherst, the London School of Economics, and Heidelberg, Parsons brought European sociology (Weber, Durkheim) to the American academic world.",
        bioTurningPoint: "During the post-WWII economic boom, American society experienced rapid suburban expansion and institutional confidence. Parsons sought an all-encompassing 'Grand Theory' explaining social order.",
        bioLivedExperience: "Parsons analyzed how hospitals, schools, legal courts, and suburban nuclear families functioned together seamlessly, viewing social conflict as a temporary disturbance in a naturally self-balancing system.",

        timelineEvents: [
            { year: "1951", title: "Publication of The Social System", desc: "Parsons sets out his monumental structural functionalist framework at Harvard." },
            { year: "1955", title: "Family, Socialization and Interaction Process", desc: "Detailed analysis of post-war nuclear family roles and childhood socialization." }
        ],

        whyDetailedExplanation: `
            <p>Parsons viewed society through <strong>Structural Functionalism</strong>. Just as the heart, lungs, and liver work together to keep a human alive, institutions like the family, school, law, and economy fulfill essential needs to maintain social equilibrium (his <strong>AGIL scheme</strong>: Adaptation, Goal Attainment, Integration, Latency).</p>
            <p>For example, he argued the nuclear family performs the <strong>"Warm Bath" function</strong>: releasing adult stress after a grueling workday and socialising children into shared social values. He analyzed the <strong>"Sick Role"</strong>, showing that illness is a social status with rights (exempt from work) and obligations (seeking medical help to get back to being productive).</p>
        `,
        whyModernRelevance: "Provides the classic benchmark used by modern sociologists to debate how family structures, healthcare systems, and educational roles have changed.",

        conceptDetails: [
            { term: "Structural Functionalism", desc: "Perspective viewing society as a complex system whose parts work together to promote solidarity and stability." },
            { term: "The Sick Role", desc: "Social rights and obligations granted to ill individuals to maintain social order." },
            { term: "Warm Bath Theory", desc: "Idea that family life relaxes adult workers and absorbs emotional stress." }
        ],
        quotes: [
            "The main function of the family is the primary socialization of children.",
            "Social structure is a system of patterned human relationships.",
            "Health is the state of optimum capacity of an individual for the effective performance of roles."
        ]
    },
    {
        id: "howard-becker",
        name: "Howard Becker",
        initials: "HB",
        lifespan: "Born 1928",
        origin: "Chicago, Illinois, USA",
        era: "era2",
        eraTitle: "Gallery II • Understanding Modern Society (1914–1970s)",
        intuitionHeadline: "Playing jazz piano in Chicago night clubs at age 15, he realized that people aren't inherently 'deviant'—society simply applies labels to certain behaviors.",
        concepts: ["Labelling Theory", "Master Status", "Deviant Career", "Moral Entrepreneurs", "Self-Fulfilling Prophecy"],

        personBioIntro: "A pioneering figure of the Chicago School of sociology, Becker combined ethnography with a warm, empathetic curiosity for subcultures.",
        bioEarlyLife: "Growing up in Chicago, Becker was a talented pianist who began playing professionally in strip clubs and jazz joints as a teenager, observing musicians and drug users firsthand.",
        bioTurningPoint: "While studying under Everett Hughes at the University of Chicago, Becker realized that mainstream society called jazz musicians 'deviant', while the musicians viewed straight-laced citizens as 'squares'.",
        bioLivedExperience: "Instead of conducting statistical surveys from a desk, Becker hung out with marijuana smokers, dance band musicians, and art world outsiders, asking: <em>'Who makes the rules, and who gets tagged when they break them?'</em>",

        timelineEvents: [
            { year: "1953", title: "Becoming a Marihuana User Study", desc: "Becker publishes groundbreaking research showing drug effects are learned socially, not purely biological." },
            { year: "1963", title: "Publication of Outsiders", desc: "Becker lays out Labelling Theory, revolutionising criminology and sociology of deviance." }
        ],

        whyDetailedExplanation: `
            <p>Becker flipped traditional criminology on its head. He famously wrote: <em>"Deviance is not a quality of the act the person commits, but rather a consequence of the application by others of rules and sanctions."</em></p>
            <p>Powerful groups (<strong>Moral Entrepreneurs</strong>) create rules. When someone breaks a rule and gets caught, society tags them with a label (e.g., "criminal", "troublemaker"). This label becomes their <strong>Master Status</strong>—overriding all other qualities (friend, student, parent). Isolated and rejected, the individual often accepts the tag, leading to a self-fulfilling <strong>Deviant Career</strong>.</p>
        `,
        whyModernRelevance: "Explains how school suspensions, criminal record stigmas, and online cancel culture labels can permanently alter a person's life trajectory.",

        conceptDetails: [
            { term: "Labelling Theory", desc: "Theory that self-identity and behavior are determined or influenced by the terms used to describe or classify them." },
            { term: "Master Status", desc: "A dominant social position that overrides all other personal characteristics in the eyes of society." },
            { term: "Moral Entrepreneurs", desc: "Individuals or groups who crusade to create or enforce new moral rules and laws." }
        ],
        quotes: [
            "Deviance is not a quality of the act the person commits, but rather a consequence of the application by others of rules and sanctions.",
            "The deviant is one to whom that label has successfully been applied.",
            "Sociology should answer: whose side are we on?"
        ]
    },
    {
        id: "ann-oakley",
        name: "Ann Oakley",
        initials: "AO",
        lifespan: "Born 1944",
        origin: "London, UK",
        era: "era2",
        eraTitle: "Gallery II • Understanding Modern Society (1914–1970s)",
        intuitionHeadline: "Experiencing motherhood in 1970s London, she proved that domestic housework is grueling, repetitive unpaid labor that sociology had ignored because it was done by women.",
        concepts: ["Sociology of Housework", "Conventional Family Myth", "Sex vs. Gender Distinction", "Dual Burden", "Feminist Methodology"],

        personBioIntro: "A British sociologist and feminist writer who brought women's hidden domestic lives into rigorous academic study.",
        bioEarlyLife: "Daughter of social scientist Richard Titmuss, Oakley grew up in mid-century London and studied at Somerville College, Oxford.",
        bioTurningPoint: "In the late 1960s, while raising young children, she found that academic sociology treated the home as a peaceful, effortless 'warm bath' while ignoring the 70+ hours of physical work housewives performed weekly.",
        bioLivedExperience: "Oakley conducted in-depth interviews with 40 London housewives in the early 1970s, measuring their daily hours, feelings of monotony, and social isolation, producing landmark studies that exposed domestic labor as real work.",

        timelineEvents: [
            { year: "1972", title: "Publication of Sex, Gender and Society", desc: "Oakley popularises the vital distinction between biological sex and socially constructed gender." },
            { year: "1974", title: "The Sociology of Housework Published", desc: "First major sociological study documenting the physical toll, long hours, and monotony of unpaid housework." }
        ],

        whyDetailedExplanation: `
            <p>Oakley dismantled post-war myths about the happy suburban housewife. She proved that domestic work is real, demanding labor that directly benefits capitalism and men by reproducing a rested workforce every day for free.</p>
            <p>She showed that housewives experienced high levels of dissatisfaction, monotony, and social isolation—similar to factory workers—yet were expected to feel fulfilled. She also established that gender roles are learned through four processes in childhood: <em>manipulation</em>, <em>canalisation</em> (giving gendered toys), <em>verbal appellations</em>, and <em>different activities</em>.</p>
        `,
        whyModernRelevance: "Directly relates to modern discussions about the 'mental load', emotional labor, and the unequal distribution of domestic chores in working households.",

        conceptDetails: [
            { term: "Sociology of Housework", desc: "The academic study of unpaid domestic labor as real economic work with physical and psychological effects." },
            { term: "Canalisation", desc: "The direction of children's attention towards gender-stereotyped toys and interests by parents." },
            { term: "Dual Burden", desc: "When women work paid jobs outside the home while remaining primarily responsible for domestic labor." }
        ],
        quotes: [
            "Housework is a work situation with its own specific demands, stresses and rewards.",
            "Gender is a matter of culture: it refers to the social classification of men and women into 'masculine' and 'feminine'.",
            "Feminist research must listen to women's own voices rather than treating them as research objects."
        ]
    },
    {
        id: "paul-willis",
        name: "Paul Willis",
        initials: "PW",
        lifespan: "Born 1945",
        origin: "Wolverhampton / Birmingham, UK",
        era: "era2",
        eraTitle: "Gallery II • Understanding Modern Society (1914–1970s)",
        intuitionHeadline: "Spending months with working-class schoolboys in industrial England, he made a tragic discovery: their active rebellion against school rules ironically prepared them directly for factory labor.",
        concepts: ["Learning to Labour", "Counter-School Culture", "The Lads vs. Ear'oles", "Cultural Reproduction", "Penetrations & Limitations"],

        personBioIntro: "A prominent researcher at the University of Birmingham's famous Centre for Contemporary Cultural Studies (CCCS).",
        bioEarlyLife: "Educated at Cambridge and Birmingham, Willis focused on youth subcultures, working-class culture, and qualitative ethnography.",
        bioTurningPoint: "In the early 1970s, industrial towns in the English Midlands faced economic changes. Willis wanted to understand why working-class children consistently ended up in working-class jobs generation after generation.",
        bioLivedExperience: "Willis spent 3 years at an all-boys secondary school in Wolverhampton, attending classes, hanging out in youth clubs, and accompanying 12 working-class boys ('the lads') into their first industrial factory jobs.",

        timelineEvents: [
            { year: "1977", title: "Publication of Learning to Labour", desc: "Willis's ethnographic classic subtitled 'How working class kids get working class jobs' is published." }
        ],

        whyDetailedExplanation: `
            <p>Marxist sociologists used to argue that schools brainwash working-class children into submission. Willis proved something far more subtle and tragic: working-class boys were not passive victims—they actively resisted school!</p>
            <p>'The Lads' formed a <strong>Counter-School Culture</strong>. They mocked academic success, called conformist students 'ear'oles', valued manual toughness, and took pride in 'having a laff'. However, by rejecting academic qualifications and celebrating physical manual bravado, they voluntarily walked straight into low-paid, manual factory work—ironically reproducing their own working-class position.</p>
        `,
        whyModernRelevance: "Essential for understanding anti-school subcultures, educational inequality, and how working-class identity interacts with modern school systems.",

        conceptDetails: [
            { term: "Counter-School Culture", desc: "A student subculture that rejects school values, authority, and academic effort in favor of peer status." },
            { term: "Cultural Reproduction", desc: "The process by which social class positions are passed down across generations through cultural practices." },
            { term: "Having a Laff", desc: "The coping strategy used by working-class lads to resist authority both in school and later on the shop floor." }
        ],
        quotes: [
            "The difficult thing to explain is not why working class kids fail, but why they let themselves fail.",
            "The lads celebrate manual labor as a site of masculinity and independence, unaware it locks them into exploitation.",
            "Culture is not a passive sponge; it is an active production."
        ]
    },

    // GALLERY 3: LATE MODERNITY (1980s-2005)
    {
        id: "pierre-bourdieu",
        name: "Pierre Bourdieu",
        initials: "PB",
        lifespan: "1930–2002",
        origin: "Denguin, Pyrenees / Paris, France",
        era: "era3",
        eraTitle: "Gallery III • Late Modernity (1980s–2005)",
        intuitionHeadline: "Coming from a rural postman's home to elite Paris universities, he proved that class isn't just income—it's written into our body language, artistic taste, and accent.",
        concepts: ["Cultural Capital", "Habitus", "Social & Symbolic Capital", "Field Theory", "Distinction & Taste"],

        personBioIntro: "One of the most cited sociologists in the world, Bourdieu bridged deep philosophical theory with extensive empirical surveys.",
        bioEarlyLife: "Born in a tiny village in southwestern France, the son of a provincial postman. Bourdieu won a spot at the prestigious École Normale Supérieure in Paris, where he felt out of place amidst wealthy Parisian elites.",
        bioTurningPoint: "While serving in the French army in Algeria during the Independence War (1958–1960), he conducted pioneering ethnographic fieldwork among Kabyle villagers, witnessing traditional society clash with colonial modernization.",
        bioLivedExperience: "Returning to Paris, Bourdieu surveyed thousands of French citizens about their preferences in music, art, food, and furniture. He published <em>Distinction</em> (1979), proving that 'aesthetic taste' is a weapon used by upper classes to maintain social distance.",

        timelineEvents: [
            { year: "1979", title: "Publication of Distinction", desc: "Named one of the 20th century's ten most important sociology books by the International Sociological Association." },
            { year: "1986", title: "The Forms of Capital Essay", desc: "Bourdieu formally defines Economic, Cultural, and Social Capital." }
        ],

        whyDetailedExplanation: `
            <p>Bourdieu showed that economic wealth alone doesn't explain class privilege. He identified three vital forms of capital: <strong>Economic Capital</strong> (money/property), <strong>Social Capital</strong> (networks/connections), and <strong>Cultural Capital</strong> (education, artistic knowledge, accent, etiquette).</p>
            <p>Families pass down a deeply ingrained set of habits, postures, and tastes called the <strong>Habitus</strong>. Middle-class children inherit a Habitus that aligns naturally with schools and elite workplaces. When working-class individuals enter elite institutions, they feel like 'a fish out of water' because they lack the subtle cultural capital that elites quietly demand.</p>
        `,
        whyModernRelevance: "Explains why university admissions, corporate job interviews, and high-end consumer trends privilege those raised with subtle cultural cues.",

        conceptDetails: [
            { term: "Cultural Capital", desc: "Social assets (education, intellect, style of speech, dress, artistic taste) that promote social mobility." },
            { term: "Habitus", desc: "Deeply ingrained habits, skills, and dispositions that we possess due to our life experiences and class background." },
            { term: "Symbolic Violence", desc: "The subtle, non-physical violence where dominated groups accept their own subordination as natural." }
        ],
        quotes: [
            "Taste classifies, and it classifies the classifier.",
            "The habitus is necessity internalized and converted into a disposition.",
            "Social capital is the aggregate of the actual or potential resources which are linked to possession of a durable network."
        ]
    },
    {
        id: "steve-bruce",
        name: "Steve Bruce",
        initials: "SB",
        lifespan: "Born 1954",
        origin: "Edinburgh / Aberdeen, Scotland, UK",
        era: "era3",
        eraTitle: "Gallery III • Late Modernity (1980s–2005)",
        intuitionHeadline: "Documenting church attendance across Britain and Europe, he gathered empirical evidence showing that modern science and individual choices cause traditional religious authority to steadily decline.",
        concepts: ["Secularisation Thesis", "Disenchantment", "Structural Differentiation", "Rationalisation of Religion", "Privatised Belief"],

        personBioIntro: "Professor of Sociology at the University of Aberdeen and one of the foremost defenders of the Secularisation Thesis.",
        bioEarlyLife: "Educated at the University of Stirling, Bruce focused on the sociology of religion, politics, and sectarian conflicts in Northern Ireland and Scotland.",
        bioTurningPoint: "During the late 20th century, as commentators claimed religion was making a massive comeback, Bruce systematically gathered church records, baptism rates, and public belief surveys across industrial democracies.",
        bioLivedExperience: "Bruce demonstrated that while people might still express vague spiritual beliefs, religion had lost its power to dictate public laws, social norms, and daily community schedules in modern secular nations.",

        timelineEvents: [
            { year: "1996", title: "Publication of Religion in the Modern World", desc: "Bruce sets out his comprehensive defense of secularisation in Western democracies." },
            { year: "2002", title: "God is Dead: Secularization in the West", desc: "Detailed statistical evidence demonstrating the structural decline of religious authority." }
        ],

        whyDetailedExplanation: `
            <p>Bruce argues that <strong>Secularisation</strong> (the decline in the social significance of religion) is an inevitable feature of modern industrial democracies.</p>
            <p>He identifies three key drivers: <strong>Social Pluralism</strong> (living alongside diverse beliefs undermines the certainty that any single faith is uniquely true), <strong>Structural Differentiation</strong> (specialized institutions like state schools and NHS hospitals take over roles once held by churches), and <strong>Individualism</strong> (people pick and choose privatized spiritual tastes rather than obeying institutional religious doctrines).</p>
        `,
        whyModernRelevance: "Provides the analytical framework for understanding empty church buildings, growing numbers of 'no religion' census responses, and shifting moral legislation.",

        conceptDetails: [
            { term: "Secularisation Thesis", desc: "The proposition that as societies modernize, religious authority, practice, and belief systematically decline." },
            { term: "Structural Differentiation", desc: "Process where separate, specialized institutions take over functions previously performed by a single religious body." },
            { term: "Privatised Belief", desc: "When religious or spiritual beliefs become a private personal preference rather than a shared public obligation." }
        ],
        quotes: [
            "Modernization brings about secularization.",
            "Religion in the West has moved from being a matter of public necessity to one of private consumer choice.",
            "When everyone has a different truth, the idea of absolute truth falls apart."
        ]
    },
    {
        id: "ulrich-beck",
        name: "Ulrich Beck & Elisabeth Beck-Gernsheim",
        initials: "BG",
        lifespan: "1944–2015 & Born 1946",
        origin: "Stolp / Munich, Germany",
        era: "era3",
        eraTitle: "Gallery III • Late Modernity (1980s–2005)",
        intuitionHeadline: "Witnessing the Chernobyl nuclear cloud drift across Europe, they proved that late modernity produces 'manufactured risks' (pollution, financial crashes, relationship fragility) that no single nation can control.",
        concepts: ["Risk Society", "Manufactured Uncertainty", "Individualisation Thesis", "The Normal Chaos of Love", "Reflexive Modernity"],

        personBioIntro: "A brilliant husband-and-wife German sociological team whose work redefined how we understand late modern danger and personal relationships.",
        bioEarlyLife: "Beck was born in Stolp during WWII; Beck-Gernsheim studied sociology in Munich. Together they analyzed the shift from early industrial society to late modernity.",
        bioTurningPoint: "In April 1986, the Chernobyl nuclear plant exploded in Ukraine, sending radioactive clouds across Europe. Beck published <em>Risk Society</em> just weeks later—capturing the global realization that industrial 'progress' created invisible hazards.",
        bioLivedExperience: "Beck & Beck-Gernsheim observed how traditional lifelong careers, marriage structures, and gender expectations collapsed, forcing individuals to constantly manage risk, plan 'do-it-yourself biographies', and navigate relationship uncertainty.",

        timelineEvents: [
            { year: "1986", title: "Chernobyl Disaster & Publication of Risk Society", desc: "Beck's book becomes an international bestseller as global environmental hazards become undeniable." },
            { year: "1990", title: "Publication of The Normal Chaos of Love", desc: "Co-authored exploration of how freedom and individualisation make romantic relationships more fragile." }
        ],

        whyDetailedExplanation: `
            <p>In early industrial society, people worried about distribution of <em>goods</em> (wealth, food, jobs). In late modernity, we live in a <strong>Risk Society</strong> obsessed with the distribution of <em>bads</em> (pollution, microplastics, financial crashes, pandemics).</p>
            <p>These hazards are <strong>Manufactured Risks</strong>—created by human industrial technology itself. Furthermore, under the <strong>Individualisation Thesis</strong>, traditional social safety nets (lifelong jobs, church, family obligations) fade, forcing individuals to navigate a 'do-it-yourself' biography where every personal choice (education, health, relationships) carries terrifying individual responsibility.</p>
        `,
        whyModernRelevance: "Directly explains modern eco-anxiety, climate change politics, gig-economy insecurity, and the rise of dating apps where relationships are constantly negotiated.",

        conceptDetails: [
            { term: "Risk Society", desc: "A society systematically organized in response to hazards and uncertainties induced by modernization itself." },
            { term: "Individualisation", desc: "Process where individuals are forced to build their own lives and bear personal responsibility without traditional guidance." },
            { term: "Manufactured Risk", desc: "Hazards produced by the very progress of human technology, science, and industry." }
        ],
        quotes: [
            "Poverty is hierarchic, smog is democratic.",
            "In the risk society, one must choose, construct, and revise one's own biography.",
            "Love is becoming the central counterweight to the uncertainties of modern individualized life."
        ]
    }
];

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT & LOCAL STORAGE JOURNAL
// --------------------------------------------------------------------------
let journalEntries = JSON.parse(localStorage.getItem('sociology_archive_journal')) || [
    {
        id: "sample-1",
        title: "Marx's Concept of Alienation",
        category: "Karl Marx",
        content: "Fascinating to see how Marx's observations of Victorian textile workers mirror modern tech burnout and remote worker isolation.",
        date: "31/07/2026, 21:00"
    }
];

// Active state variables
let activeFilter = "all";
let activeSearchQuery = "";
let currentModalSociologist = null;

// --------------------------------------------------------------------------
// 3. INITIALISATION & DOM EVENT LISTENERS
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    renderAllGalleries();
    updateJournalUI();
    setupEventListeners();
    refreshIcons();
});

function refreshIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// --------------------------------------------------------------------------
// 4. RENDER GALLERY EXHIBIT CARDS
// --------------------------------------------------------------------------
function renderAllGalleries() {
    const eraGrids = {
        era1: document.getElementById("grid-era1"),
        era2: document.getElementById("grid-era2"),
        era3: document.getElementById("grid-era3")
    };

    // Clear grids
    Object.values(eraGrids).forEach(grid => { if (grid) grid.innerHTML = ""; });

    let matchCount = 0;

    sociologistsData.forEach(item => {
        // Filter Check
        const matchesFilter = (activeFilter === "all" || activeFilter === item.era);
        
        // Search Check
        const query = activeSearchQuery.toLowerCase().trim();
        const matchesSearch = query === "" || 
            item.name.toLowerCase().includes(query) ||
            item.origin.toLowerCase().includes(query) ||
            item.intuitionHeadline.toLowerCase().includes(query) ||
            item.concepts.some(c => c.toLowerCase().includes(query));

        if (matchesFilter && matchesSearch) {
            matchCount++;
            const grid = eraGrids[item.era];
            if (grid) {
                grid.appendChild(createExhibitCardHTML(item));
            }
        }
    });

    // Update filter indicator
    const indicator = document.getElementById("filterIndicator");
    if (indicator) {
        if (activeSearchQuery !== "") {
            indicator.innerHTML = `Search results for "<strong>${escapeHTML(activeSearchQuery)}</strong>" (${matchCount} thinkers found)`;
        } else if (activeFilter === "all") {
            indicator.innerHTML = `Showing <strong>All 12 Thinkers</strong> across 4 Historical Galleries`;
        } else {
            const eraNames = {
                era1: "Gallery 1: The Birth of Sociology (1800–1914)",
                era2: "Gallery 2: Understanding Modern Society (1914–1970s)",
                era3: "Gallery 3: Late Modernity (1980s–2005)",
                era4: "Gallery 4: Society Today (2005–Present)"
            };
            indicator.innerHTML = `Filtering: <strong>${eraNames[activeFilter]}</strong> (${matchCount} thinkers)`;
        }
    }

    // Toggle gallery section visibility based on filter
    const sections = document.querySelectorAll(".gallery-section");
    sections.forEach(sec => {
        const secEra = sec.getAttribute("data-era");
        if (activeSearchQuery !== "") {
            // Show section if it contains rendered cards
            const grid = sec.querySelector(".exhibits-grid");
            if (grid && grid.children.length > 0) {
                sec.style.display = "block";
            } else if (secEra === "era4") {
                sec.style.display = "block"; // Always keep Society Today visible
            } else {
                sec.style.display = "none";
            }
        } else {
            if (activeFilter === "all" || activeFilter === secEra) {
                sec.style.display = "block";
            } else {
                sec.style.display = "none";
            }
        }
    });

    refreshIcons();
}

function createExhibitCardHTML(item) {
    const card = document.createElement("article");
    card.className = "exhibit-card";
    
    const conceptsTags = item.concepts.slice(0, 4).map(c => `<span class="concept-tag">${escapeHTML(c)}</span>`).join("");

    card.innerHTML = `
        <div>
            <div class="card-top-bar">
                <div class="card-initials-badge">${item.initials}</div>
                <span class="card-lifespan">${item.lifespan}</span>
            </div>
            <h3 class="card-author-name">${escapeHTML(item.name)}</h3>
            <p class="card-origin"><i data-lucide="map-pin" style="width:14px;height:14px;"></i> ${escapeHTML(item.origin)}</p>
            
            <div class="card-intuition-box">
                <span class="card-intuition-label">Why They Believed It</span>
                <p class="card-intuition-text">"${escapeHTML(item.intuitionHeadline)}"</p>
            </div>
        </div>

        <div>
            <div class="card-key-concepts">
                ${conceptsTags}
            </div>
            <button class="card-action-btn" onclick="openExhibitModal('${item.id}')">
                <i data-lucide="book-open"></i> Enter Exhibit Room
            </button>
        </div>
    `;

    return card;
}

// --------------------------------------------------------------------------
// 5. EXHIBIT MODAL / DRAWER LOGIC
// --------------------------------------------------------------------------
function openExhibitModal(id) {
    const item = sociologistsData.find(s => s.id === id);
    if (!item) return;

    currentModalSociologist = item;

    // Header info
    document.getElementById("modalInitials").innerText = item.initials;
    document.getElementById("modalEraBadge").innerText = item.eraTitle;
    document.getElementById("modalAuthorName").innerText = item.name;
    document.getElementById("modalLifespanOrigin").innerText = `${item.lifespan} • ${item.origin}`;

    // Tab 1: Person
    document.getElementById("personBioIntro").innerText = item.personBioIntro;
    document.getElementById("bioEarlyLife").innerText = item.bioEarlyLife;
    document.getElementById("bioTurningPoint").innerText = item.bioTurningPoint;
    document.getElementById("bioLivedExperience").innerText = item.bioLivedExperience;

    // Tab 2: Timeline
    const timelineList = document.getElementById("timelineList");
    timelineList.innerHTML = item.timelineEvents.map(e => `
        <div class="timeline-event-item">
            <span class="event-year">${e.year}</span>
            <div class="event-title">${escapeHTML(e.title)}</div>
            <div class="event-desc">${escapeHTML(e.desc)}</div>
        </div>
    `).join("");

    // Tab 3: Why
    document.getElementById("whyHeadline").innerText = item.intuitionHeadline;
    document.getElementById("whyDetailedExplanation").innerHTML = item.whyDetailedExplanation;
    document.getElementById("whyModernRelevance").innerText = item.whyModernRelevance;

    // Tab 4: Concepts & Quotes
    const conceptsList = document.getElementById("conceptsList");
    conceptsList.innerHTML = item.conceptDetails.map(c => `
        <div class="concept-item-card">
            <h4>${escapeHTML(c.term)}</h4>
            <p>${escapeHTML(c.desc)}</p>
        </div>
    `).join("");

    const quotesList = document.getElementById("quotesList");
    quotesList.innerHTML = item.quotes.map(q => `
        <div class="quote-item">"${escapeHTML(q)}"</div>
    `).join("");

    // Reset tabs to first pane
    switchModalTab("person");

    // Show modal backdrop
    const backdrop = document.getElementById("exhibitModalBackdrop");
    backdrop.classList.add("active");
    refreshIcons();
}

function closeExhibitModal() {
    const backdrop = document.getElementById("exhibitModalBackdrop");
    backdrop.classList.remove("active");
    currentModalSociologist = null;
}

function switchModalTab(tabId) {
    const tabs = document.querySelectorAll(".modal-tabs .tab-btn");
    const panes = document.querySelectorAll(".modal-body .tab-pane");

    tabs.forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    panes.forEach(pane => {
        if (pane.id === `pane-${tabId}`) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });
}

// --------------------------------------------------------------------------
// 6. VISITOR READING JOURNAL LOGIC (LocalStorage + PDF Export)
// --------------------------------------------------------------------------
function updateJournalUI() {
    const countBadge = document.getElementById("journalCount");
    const countText = document.getElementById("entryCountText");
    
    if (countBadge) countBadge.innerText = journalEntries.length;
    if (countText) countText.innerText = journalEntries.length;

    const list = document.getElementById("journalEntriesList");
    if (!list) return;

    if (journalEntries.length === 0) {
        list.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:2rem;">Your reading journal is currently empty. Bookmark exhibit notes or add custom reflections above!</p>`;
        return;
    }

    list.innerHTML = journalEntries.map(entry => `
        <article class="journal-entry-card">
            <div>
                <span class="entry-cat-badge">${escapeHTML(entry.category)}</span>
                <span class="entry-date">${escapeHTML(entry.date)}</span>
                <h4 class="entry-title">${escapeHTML(entry.title)}</h4>
                <p class="entry-text">${escapeHTML(entry.content)}</p>
            </div>
            <button class="delete-entry-btn" onclick="deleteJournalEntry('${entry.id}')" title="Delete Note">
                <i data-lucide="trash-2"></i>
            </button>
        </article>
    `).join("");

    refreshIcons();
}

function saveJournalEntry(title, category, content) {
    if (!title || !content) return;

    const newEntry = {
        id: "note-" + Date.now(),
        title: title,
        category: category || "General Reflection",
        content: content,
        date: new Date().toLocaleString()
    };

    journalEntries.unshift(newEntry);
    localStorage.setItem('sociology_archive_journal', JSON.stringify(journalEntries));
    updateJournalUI();
}

function deleteJournalEntry(id) {
    journalEntries = journalEntries.filter(e => e.id !== id);
    localStorage.setItem('sociology_archive_journal', JSON.stringify(journalEntries));
    updateJournalUI();
}

function openJournalModal() {
    updateJournalUI();
    document.getElementById("journalModalBackdrop").classList.add("active");
    refreshIcons();
}

function closeJournalModal() {
    document.getElementById("journalModalBackdrop").classList.remove("active");
}

function exportJournalToPDF() {
    const printArea = document.getElementById("printEntriesContent");
    if (!printArea) return;

    if (journalEntries.length === 0) {
        alert("Your journal is empty. Add some notes before exporting!");
        return;
    }

    printArea.innerHTML = journalEntries.map(entry => `
        <div class="print-entry-item">
            <span style="font-weight:bold; text-transform:uppercase; font-size:10pt;">[${escapeHTML(entry.category)}] - ${escapeHTML(entry.date)}</span>
            <h3 style="margin:4px 0;">${escapeHTML(entry.title)}</h3>
            <p style="white-space:pre-wrap;">${escapeHTML(entry.content)}</p>
        </div>
    `).join("");

    window.print();
}

// --------------------------------------------------------------------------
// 7. EVENT LISTENERS SETUP
// --------------------------------------------------------------------------
function setupEventListeners() {
    // Navigation Era Buttons
    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            navBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            
            // Sync mobile select
            const mobileSelect = document.getElementById("eraSelectMobile");
            if (mobileSelect) mobileSelect.value = activeFilter;

            renderAllGalleries();
        });
    });

    // Mobile Select Filter
    const mobileSelect = document.getElementById("eraSelectMobile");
    if (mobileSelect) {
        mobileSelect.addEventListener("change", (e) => {
            activeFilter = e.target.value;
            navBtns.forEach(b => {
                if (b.getAttribute("data-filter") === activeFilter) {
                    b.classList.add("active");
                } else {
                    b.classList.remove("active");
                }
            });
            renderAllGalleries();
        });
    }

    // Search Input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            activeSearchQuery = e.target.value;
            renderAllGalleries();
        });
    }

    // Exhibit Modal Tab switching
    const modalTabs = document.querySelectorAll(".modal-tabs .tab-btn");
    modalTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            switchModalTab(tabId);
        });
    });

    // Modal Close Buttons
    document.getElementById("closeModalBtn")?.addEventListener("click", closeExhibitModal);
    document.getElementById("closeJournalBtn")?.addEventListener("click", closeJournalModal);
    document.getElementById("openJournalBtn")?.addEventListener("click", openJournalModal);

    // Backdrop click close
    document.getElementById("exhibitModalBackdrop")?.addEventListener("click", (e) => {
        if (e.target.id === "exhibitModalBackdrop") closeExhibitModal();
    });
    document.getElementById("journalModalBackdrop")?.addEventListener("click", (e) => {
        if (e.target.id === "journalModalBackdrop") closeJournalModal();
    });

    // Save note from Modal buttons
    document.getElementById("saveExhibitNoteBtn")?.addEventListener("click", () => {
        if (currentModalSociologist) {
            saveJournalEntry(
                `Exhibition Bookmark: ${currentModalSociologist.name}`,
                currentModalSociologist.name,
                `"Why They Believed It": ${currentModalSociologist.intuitionHeadline}\n\nCore Concepts: ${currentModalSociologist.concepts.join(", ")}`
            );
            alert(`Bookmarked ${currentModalSociologist.name} to your Visitor Journal!`);
        }
    });

    document.getElementById("openNotePromptBtn")?.addEventListener("click", () => {
        if (currentModalSociologist) {
            closeExhibitModal();
            openJournalModal();
            document.getElementById("noteTitleInput").value = `Reflection on ${currentModalSociologist.name}`;
            document.getElementById("noteCategorySelect").value = currentModalSociologist.name;
            document.getElementById("noteContentInput").focus();
        }
    });

    // Add note form in Journal
    document.getElementById("saveNewNoteBtn")?.addEventListener("click", () => {
        const title = document.getElementById("noteTitleInput").value.trim();
        const cat = document.getElementById("noteCategorySelect").value;
        const content = document.getElementById("noteContentInput").value.trim();

        if (!title || !content) {
            alert("Please enter both a title and content for your reflection note.");
            return;
        }

        saveJournalEntry(title, cat, content);
        document.getElementById("noteTitleInput").value = "";
        document.getElementById("noteContentInput").value = "";
    });

    // Clear all notes
    document.getElementById("clearAllNotesBtn")?.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all notes in your Visitor Journal?")) {
            journalEntries = [];
            localStorage.removeItem('sociology_archive_journal');
            updateJournalUI();
        }
    });

    // Save reflection scenario from Gallery 4
    document.querySelectorAll(".save-scenario-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const scenario = btn.getAttribute("data-scenario");
            saveJournalEntry(
                `Modern Reflection: ${scenario}`,
                "Society Today",
                `Saved reflection on modern society issue: ${scenario}. Exploring how classical & modern sociological lenses apply to 21st century realities.`
            );
            alert(`Saved "${scenario}" reflection to your Visitor Journal!`);
        });
    });

    // PDF Export Button
    document.getElementById("exportPdfBtn")?.addEventListener("click", exportJournalToPDF);

    // Footer Links
    document.getElementById("footerJournalLink")?.addEventListener("click", (e) => {
        e.preventDefault();
        openJournalModal();
    });
    document.getElementById("footerPdfLink")?.addEventListener("click", (e) => {
        e.preventDefault();
        openJournalModal();
        exportJournalToPDF();
    });
}

// Global scope helpers for inline onclick
window.openExhibitModal = openExhibitModal;
window.deleteJournalEntry = deleteJournalEntry;

// Helper: Sanitize HTML
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
