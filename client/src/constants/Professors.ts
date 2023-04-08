export interface Professor {
    name: { first: string, last: string };
    id: string;
    email: string | null;
    phone: string | null;
    office: string | null;
    website: string | null;
    webpage: string | null;
    courses?: string[];
    activities?: string | null;
    biography?: string | null;
    interests?: string | null;
    research?: string | null;
    rating: number | null;
    difficulty: number | null;
    reviews: number | null;
    tags: string[];

}
export const professors: Professor[] = [
    {
        name: {
            last: "Anderson",
            first: "Emma"
        },
        email: "emmaanderson@cics.umass.edu",
        phone: "(413) 577-0050",
        tags: [],
        office: "228 CS Building",
        website: null,
        webpage: "https://www.cics.umass.edu/people/anderson-emma",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "anderson-emma"
    },
    {
        name: {
            last: "Ramamritham",
            first: "Krithivasan"
        },
        email: "krithi@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "https://sites.google.com/site/ramamrithamkrithi/home/",
        webpage: "https://www.cics.umass.edu/faculty/directory/ramamritham_krithivasan",
        interests: "Real-time systems, transaction processing in real-time databases, data management on the Web.",
        research: "In the area of hard real-time systems, Professor Ramamritham's interests are in the architectural and operating system support for hard real-time systems, scheduling mechanisms for multi-tasking environments under dynamic conditions, and the composable design of adaptable software systems that integrate hard real-time with fault-tolerance, including issues relating to the design-time and run-time assurance of their correctness, timeliness, predicatibility and reliability properties.  In the database area, Professor Ramamritham is interested in supporting novel, advanced applications that expand the limits of traditional databases, especially transaction systems. Here, Professor Ramamritham's work aims to enhance the performance and functionality of applications (such as workflows and information retrieval) that require or can benefit from transactional support, by exploiting semantic information about the objects, operations, transaction model, and the application. In the area of real-time databases, Professor Ramamritham's work  focuses on integrating active, real-time, temporal and multimedia databases for time-constrained applications. Priority assignment and real-time transaction scheduling in active real-time databases, real-time logging and recovery, temporal consistency and scheduling in temporal databases, and multimedia databases are some of the current topics under investigation.",
        activities: "Prof. Ramamritham served as Program Chair for the Real-Time Systems Symposium in 1994 and as General Chair in 1995. Also, he was a vice-chair for the Conference on Data Engineering in 1995 and has served on numerous program committees of conferences and workshops devoted to databases as well as real-time systems. He is an editor of IEEE Transactions on Parallel and Distributed Systems, the Real-Time Systems Journal, the International Journal of Applied Software Technology, and the Distributed Systems Engineering Journal. He has co-authored two IEEE tutorial texts on real-time systems, a text on advances in database transaction processing, and a forthcoming text on scheduling in real-time systems. Professor Ramamritham is a Fellow of the IEEE and ACM and a senior member of the IEEE.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "ramamritham-krithivasan"
    },
    {
        name: {
            last: "Barrington",
            first: "David A. Mix"
        },
        email: "barring@cs.umass.edu",
        phone: "(413) 545-4329",
        tags: [],
        office: "210 CS Building",
        website: "http://www.cs.umass.edu/~barring/",
        webpage: "https://www.cics.umass.edu/faculty/directory/barrington_david",
        interests: "Complexity of computation, circuit complexity, boolean function complexity, theory of automata, mathematical logic, theory of algorithms.",
        research: "Professor Barrington's current research is in complexity theory, examining the resources needed by various abstract computing devices, both sequential and parallel, to solve various mathematical problems. In particular, Professor Barrington has discovered new relationships between combinatorial complexity (circuits and branching programs), the theory of finite automata and definability by first-order logic.",
        activities: "Professor Barrington was named a UMass Amherst Lilly Fellow for 1994-1995.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "barrington-david a. mix"
    },
    {
        name: {
            last: "Dávila",
            first: "Jaime"
        },
        email: "jaimedavila@umass.edu",
        phone: null,
        tags: [],
        office: "A137 LGRC",
        website: "https://people.cs.umass.edu/~jaimedavila/",
        webpage: "https://www.cics.umass.edu/people/davila-jaime",
        interests: "Deep Learning, Neural Networks, Machine Learning, Artificial Intelligence, the Open Software Movement, Big Data and Privacy, Dialogic Techniques, the effect of different curricula and approaches on Introductory Computer Science courses.",
        research: "Most recently, Jaime had been working on replicating human morpho-semantic transformation with deep learning neural networks. Jaime is currently analyzing the way in which these networks meet their intended tasks in order to illuminate how humans might be performing them. He has also been evolving neural networks to solve agent-based competitive games under dynamic environmental conditions.",
        activities: "Jaime was the Principal Investigator for an NSF S-STEM grant from 2011-2016, concentrating on recruiting and retaining underrepresented community college transfer students in STEM disciplines.  He served on NSF panels for S-STEM grants yearly since 2013. Previously he served as a reviewer for the NSF for their Information and Intelligent Systems program. Jaime has also reviewed papers for publications such as the Control and Cybernetics, the Journal of Diversity in Higher Education, Intelligent Systems Design and Applications, the Consortium for Computer Science in Colleges, (Eastern Conference), and the BioSystems Journal.  He was a co-organizer for the 2009 and 2010 Five College Summer Intergroup Dialogue training Institutes, and the 2012 Five Colleges Faculty Seminar on Dialogic Practices in the Classroom.  Jaime has been a member of the Board of Directors of the Hitchcock Center for Environmental Education since 2014, and also a member of their executive committee since 2017.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "dávila-jaime"
    },
    {
        name: {
            last: "Bloom",
            first: "Toby"
        },
        email: "toby@tobybloom.com",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/people/bloom-toby",
        interests: "Bioinformatics, Data Visualization, Multi-modal data integration, Data Warehousing of complex data",
        research: "Professor Bloom's research is in the area of bioinformatics.   Her current interests are in multi-modal data integration, analysis, and visualization of genomic and clinical data. A focus has been bringing the tools of data analysis to the genomic scientists and biologists without computational expertise, who are working with very large and complex genomic data sets.",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "bloom-toby"
    },
    {
        name: {
            last: "Dickson",
            first: "Paul"
        },
        email: "pdickson@ithaca.edu",
        phone: null,
        tags: [],
        office: null,
        website: "https://faculty.ithaca.edu/pdickson/",
        webpage: "https://www.cics.umass.edu/people/dickson-paul",
        interests: "",
        research: "Professor Dickson's work focuses on computer science pedagogy using image processing techniques to facilitate capture of lecture material and to automatically turn that material into indexed multimedia presentations. This work is part of the Presentations Automatically Organized from Lectures (PAOL) project which is currently being run in collaboration with the University of Massachusetts Amherst.",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "dickson-paul"
    },
    {
        name: {
            last: "Arroyo",
            first: "Ivon"
        },
        email: "ivon@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A259 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/arroyo-ivon",
        interests: "Multimedia learning, wearable and mobile devices for learning, mathematics education, computer science education, development of abstract thought, K-12, affect and learning, culturally-congruent technologies for learning, instructional strategy, didactics in learning systems, learning with novel technologies, intelligent tutoring systems, personalized learning systems, individual differences, learner characteristics and learning, educational data mining, and student modeling.",
        research: "A true hybrid across disciplines, Ivon Arroyo specializes in learning sciences, computer science, and educational/cognitive psychology. Her expertise is in the design of novel technologies for learning and assessment for K-12 students studying mathematics.",
        activities: "Best paper award, 2009 - 14th International Conference on Artificial Intelligence in Education\n\tBest paper award, 2010 - 3rd International Conference on Educational Data Mining\n\tNomination to Best paper award, 2010 - 10th International Conference on Intelligent Tutoring Systems\n\tFulbright Fellow, 1996 - Fulbright Masters Program\n\tFirst prize at the XXIII JAIIO undergraduate student-level contest, 1994 - SADIO (Argentine Society of Informatics), for the research and development project on COMPUTER VISION",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "arroyo-ivon"
    },
    {
        name: {
            last: "Bissias",
            first: "George"
        },
        email: "gbiss@cs.umass.edu",
        phone: null,
        tags: [],
        office: "272 CS Building",
        website: "https://people.cs.umass.edu/~gbiss/",
        webpage: "https://www.cics.umass.edu/people/bissias-george",
        interests: "Distributed systems and databases, cryptocurrencies, and network and data privacy.",
        research: "George's ongoing research creates systems for secure, large-scale data processing and analysis. He also develops and analyzes cryptocurrency protocols such as Bitcoin.",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "bissias-george"
    },
    {
        name: {
            last: "Sondheimer",
            first: "Norman K."
        },
        email: "normans@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/faculty/directory/sondheimer_norman",
        interests: "New approaches to the interdisciplinary challenges and fundamental issues that underlie digital government, electronic commerce and education. Active in areas such as K-12 Computer Science Education, Equipment Health Management, Electronic Health Records and Online Dispute Resolution.",
        research: "Dr. Sondheimer has championed efforts in a variety of areas of Computer Science for many years. He has supervised the fielding of diagnostic tools for medical imaging, locomotive, jet engine and building systems equipment. He helped lead the effort to create remote monitoring centers. With the Auton Lab at the Carnegie Mellon University, he responded to challenges by the US Air Force and US Navy to prove data routinely collected by them can provide substantially early warning of systematic equipment failures.",
        activities: "Proudest Professional Achievements  Supervising the development and transfer to the market of a dramatic set of technical innovations, including: E-commerce Marketplaces, Controls for Green Household Appliances, Remote Maintenance Systems for Electro-Mechanical Devices, and Decision Models for Scheduling Television Programs, as well as, helping shape the CMMS incentive system to incentivize the acceptance of patient generated data into Electronic Health Records.  Leading the fight for Connecticut Public Act No. 19-128: An Act Concerning Computer Science Instruction in Public Scools.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "sondheimer-norman k."
    },
    {
        name: {
            last: "Albrecht",
            first: "Jeannie"
        },
        email: "jeannie@cs.williams.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://www.cs.williams.edu/~jeannie/",
        webpage: "https://www.cics.umass.edu/people/albrecht_jeannie",
        interests: "Design and performance of distributed systems and computer networks, particularly\nfocusing on reliability, scalability, and extensibility achieved over the wide-area.",
        research: "Professor Albrecht is currently working on the Global Environment for Network Innovations (GENI) project sponsored by the National Science Foundation. She is Co-chair for the GENI Working Group on Experiment Workflow and Services.",
        activities: "Dr. Albrecht is a member of ACM, IEEE, and USENIX Computing Associations.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "albrecht-jeannie"
    },
    {
        name: {
            last: "McCallum",
            first: "Andrew"
        },
        email: "mccallum@cs.umass.edu",
        phone: "(413) 545-1323",
        tags: [],
        office: "244 CS Building",
        website: "http://www.cs.umass.edu/~mccallum/",
        webpage: "https://www.cics.umass.edu/faculty/directory/mccallum_andrew",
        interests: "Information extraction, knowledge discovery from text, statistical natural language processing, machine learning, graphical models.",
        research: "The main goal of McCallum's research is to dramatically increase our ability to mine actionable knowledge from unstructured text. He is especially interested in information extraction from the Web, understanding the connections among people and between organizations, expert finding, social network analysis, and mining the scientific literature. Toward this end he and his group develop and employ various methods in statistical machine learning, natural language processing, information retrieval and data mining---tending toward probabilistic approaches and graphical models. He is one of the pioneers in the development of conditional random fields. As a demonstration of his research, his group has created the research paper search engine at http://www.rexa.info.",
        activities: "Professor McCallum has over 50 research publications spanning machine learning, natural language processing and reinforcement learning. He is the PI on a prestigious NSF Medium ITR grant, and Co-PI on another. In 2004 and 2007, he received the IBM Faculty Partnership award. In 2004, one of his papers won Honorable Mention at AAAI. Prof. McCallum was selected as a UMass Amherst Lilly Teaching Fellow for the 2005-2006 academic year, and received the College of Natural Sciences and Mathematics (NSM) Outstanding Faculty Research Award in 2007. He is an action editor on the board of the Journal of Machine Learning Research, and has served on the program committees for many technical conferences, including IJCAI, AAAI, ICML, NIPS, UAI, ACL, and HLT. He has given invited talks in academia and industry, including MIT, Stanford, CMU, UT Austin, Xerox PARC, IBM Research, Microsoft Research, AT&T Research and Google. In 2003, he gave a tutorial, \"Information Extraction from the World Wide Web,\" at the Neural Information Processing Systems (NIPS) conference in Vancouver, Canada and at the KDD Conference.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "mccallum-andrew"
    },
    {
        name: {
            last: "Rissland",
            first: "Edwina L."
        },
        email: "rissland@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~rissland/",
        webpage: "https://www.cics.umass.edu/people/rissland_edwina",
        interests: "Case-based reasoning, AI and Law, concept formation and evolution, CBR and IR, cyberlaw.",
        research: "Professor Rissland's current areas of research include include case-based reasoning (CBR), AI and legal reasoning, CBR and information retrieval, mixed paradigm reasoning, and cyberlaw.",
        activities: "Since September 2003, Professor Rissland has been serving as NSF Program Director for the Artificial Intelligence and Cognitive Science (AICS) Program in the Division of Information and Intelligence Systems (IIS) within the CISE Directorate of the National Science Foundation. Currently she is serving as leader for the Robust Intelligence cluster.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "rissland-edwina l."
    },
    {
        name: {
            last: "Manmatha",
            first: "R."
        },
        email: "manmatha@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://ciir.cs.umass.edu/~manmatha/",
        webpage: "https://www.cics.umass.edu/faculty/directory/manmatha_r",
        interests: "Multimedia indexing and retrieval, image and video retrieval, document image analysis, digital libraries, computer vision, information retrieval.",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "manmatha-r."
    },
    {
        name: {
            last: "Spector",
            first: "Lee"
        },
        email: "lspector@amherst.edu",
        phone: null,
        tags: [],
        office: null,
        website: "https://www.amherst.edu/people/facstaff/lspector",
        webpage: "https://www.cics.umass.edu/faculty/directory/spector_lee",
        interests: "Artificial intelligence, evolutionary computation, software synthesis, cognitive science, and quantum computing.",
        research: "Professor Spector teaches and conducts research in artificial intelligence, artificial life, and a variety of areas at the intersections of computer science with cognitive science, physics, evolutionary biology, and the arts. Recent projects have included the development of new computational problem-solving methods based on Darwinian evolution, applications of these methods to problems in software synthesis, mathematics, quantum computing, and the development of simulations to test theories in evolutionary biology.",
        activities: "In 2003 Professor Spector received the highest honor bestowed by the National Science Foundation for excellence in both teaching and research, the NSF Director's Award for Distinguished Teaching Scholars. He has won several other awards and honors, including two gold medals in the Human Competitive Results competition of the Genetic and Evolutionary Computation Conference and election as a Fellow of the International Society for Genetic and Evolutionary Computation. He serves on the Executive Board of ACM SIGEVO, a special interest group of the Association for Computing Machinery. He is also the Editor-in-Chief of the Springer journal Genetic Programming and Evolvable Machines, an Associate Editor for the ACM journal Transactions on Evolutionary Learning and Optimization, and a member of the editorial board of the MIT Press journal Evolutionary Computation. Professor Spector's research has been supported by grants from the National Science Foundation, the Defense Advanced Research Projects Agency, and private foundations.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "spector-lee"
    },
    {
        name: {
            last: "Rozpedek",
            first: "Filip"
        },
        email: null,
        phone: null,
        tags: [],
        office: "A211E LGRC",
        website: "https://sites.google.com/view/filiprozpedek",
        webpage: "https://www.cics.umass.edu/people/rozpedek-filip",
        interests: "Quantum information theory, quantum optics, quantum communication, quantum networks, quantum repeaters, quantum cryptography, quantum error correction, entanglement distribution and routing, entanglement distillation, quantum key distribution",
        research: "Filip's research focuses on designing novel quantum communication, quantum repeater and quantum network architectures. In his research he combines various techniques from quantum information theory, mathematical optimisation, quantum optics as well as physics of quantum devices in order to bring closer the realisation of practical quantum networks. One such strategy that has been a focus of Filip's recent research is the use of bosonic quantum error correcting codes for quantum repeaters. Filip has been also actively involved in modelling proof-of-principle quantum repeater experiments and optimizing entanglement distillation schemes.",
        activities: "Filip is actively involved with the NSF Center for Quantum Networks. During his PhD he contributed to the European quantum network development efforts within the Quantum Internet Alliance, a consortium within the EU Quantum Flagship. Filip is also active in outreach and knowledge dissemination; recently he was involved in designing a Quantum Key Distribution demonstration, The Quantum Photo Booth, which run on the IBM quantum hardware and which was presented at APS March Meeting 2022. He has served as a reviewer for major conferences and journals in physics and quantum information science as well as acted as an independent expert for IEEE Spectrum.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "rozpedek-filip"
    },
    {
        name: {
            last: "Berman",
            first: "Fran"
        },
        email: "fberman@umass.edu",
        phone: null,
        tags: [],
        office: "336 CS Building",
        website: "https://people.cs.umass.edu/~fberman/",
        webpage: "https://www.cics.umass.edu/people/berman-fran",
        interests: "Public Interest Technology, Data Stewardship and Cyberinfrastructure, Internet of Things, Social impacts of Technology",
        research: "Berman is a data scientist whose work focuses on the social and environmental impacts of information technology, and in particular of the Internet of Things (IoT) -- a deeply interconnected ecosystem of billions of devices and systems that are transforming commerce, science and society. Berman's research focuses on the overarching ecosystem needed to guide the development of information technologies that maximize benefits, minimize risks, and promote individual protections, the public interest, and planetary responsibility.",
        activities: "Berman is a Fellow of the Association of Computing Machinery (ACM), a Fellow of the Institute of Electrical and Electronics Engineers (IEEE), and a Fellow of the American Association for the Advancement of Science (AAAS). She currently serves as a member of the Board of Trustees of the Alfred P. Sloan Foundation and the National Council on the Humanities. Berman previously served as Chair of the Board of Trustees of the Anita Borg Institute for Women and Technology, as co-Chair of the National Academies Board on Research Data and Information, as co-Chair of the Blue Ribbon Task Force on Sustainable Digital Preservation and Access, as co-Chair of the National Science Foundation Advisory Committee for the Computer and Information Science and Engineering Directorate, and as Chair of the Information, Computing and Communication Section (Section T) of the American Association for the Advancement of Science, among other positions. For her accomplishments, leadership, and vision, Berman has been recognized by the Library of Congress as a \"Digital Preservation Pioneer\", as one of the top women in technology by BusinessWeek and Newsweek, and as one of the top technologists by IEEE Spectrum.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "berman-fran"
    },
    {
        name: {
            last: "Barto",
            first: "Andrew G."
        },
        email: "barto@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "https://people.cs.umass.edu/~barto/",
        webpage: "https://www.cics.umass.edu/faculty/directory/barto_andrew",
        interests: "Learning in machines and animals; theories and models of motivation, reward, and addiction from psychology, neuroscience, and artificial intelligence; reinforcement learning theory and applications; fairness and safety of reinforcement learning applications.",
        research: "Professor Barto's research centers on learning in natural and artificial systems. His current research focuses on connections between reinforcement learning and neuroscience, with particular focus on the nature of reward signals in the brain and biologically plausible methods for artificial neural network learning.",
        activities: "Emeritus Professor Barto is an associate editor of Neural Computation, a member of the Advisory Board of the Journal of Machine Learning Research, and a member of the editorial board of Adaptive Behavior. He is a Fellow of the American Association for the Advancement of Science, a Fellow and Life Member of the IEEE, and a member of the Society for Neuroscience. He received the 2004 IEEE Neural Network Society Pioneer Award for contributions to the field of reinforcement learning, the IJCAI-17 Award for Research Excellence for groundbreaking and impactful research in both the theory and application of reinforcement learning, and a University of Massachusetts Neurosciences Lifetime Achievement Award in 2019. He has published over one hundred papers and chapters in journals, books, and conference and workshop proceedings. He is co-author with Richard Sutton of the book \"Reinforcement Learning: An Introduction,\" MIT Press, 1998 -a much-expanded second edition of which was published in 2018. He was also co-editor with Jennie Si, Warren Powell, and Don Wunch II of the \"Handbook of Learning and Approximate Dynamic Programming,\" Wiley-IEEE Press, 2004.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "barto-andrew g."
    },
    {
        name: {
            last: "Woolf",
            first: "Beverly"
        },
        email: "bev@cs.umass.edu",
        phone: "(413) 545-4265",
        tags: [],
        office: "A257 LGRC",
        website: "https://centerforknowledgecommunication.org/",
        webpage: "https://www.cics.umass.edu/faculty/directory/woolf_beverly",
        interests: "",
        research: "Beverly Woolf has more than 20 years experience in educational computer science research, production of intelligent tutoring systems and development of multimedia systems. She is author of the 2009 book Building Intelligent Interactive Tutors and is the (co)author of over 150 technical papers. She has delivered tutorial, training programs and keynote addresses and served on panels in more than twenty countries.",
        activities: "Dr. Woolf was appointed a Presidential Innovation Fellow in 2013 and was on loan to the U.S. National Science Foundation. She is also a Fellow of the Association for the Advancement of Artificial Intelligence (AAAI) and has delivered numerous international invited talks, served as Program Co-Chair or Executive Board Member for several conferences. She has received several awards for best paper, poster or video in a conference and has served on several journal editorial, conference review and advisory boards, including IEEE Computer and AAAI Spring Symposium.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "woolf-beverly"
    },
    {
        name: {
            last: "Sarvghad Batn Moghaddam",
            first: "Ali"
        },
        email: "asarv@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A211J LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/sarvghad-batn-moghaddam-ali",
        interests: "Information Visualization, Visual Analytics, Human-Computer Interaction, Interaction Design, and Computer Supported Collaborative Work.",
        research: "Dr. Sarvghad's research investigates novel visualization and interaction techniques for supporting exploratory data analysis and sense-making. He is also interested in the application of advanced visualization and data analysis techniques to solve real-world problems in various fields such as healthcare and business.",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "sarvghad batn moghaddam-ali"
    },
    {
        name: {
            last: "Chiu",
            first: "Joe"
        },
        email: "joechiu@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A255 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/chiu-joe",
        interests: "Program phases, performance measurement and optimization, garbage collection.",
        research: "Program phase detection and prediction, dynamic CPU clock frequency adjustment, garbage collection, mobile computing.",
        activities: "Dissertation Writing Fellowship, 2018 spring, UMass.",
        rating: 3,
        difficulty: 4,
        reviews: 71,
        id: "chiu-joe"
    },
    {
        name: {
            last: "Hosking",
            first: "Antony"
        },
        email: "antony.hosking@anu.edu.au",
        phone: null,
        tags: [],
        office: null,
        website: "https://cs.anu.edu.au/people/tony-hosking",
        webpage: "https://www.cics.umass.edu/people/hosking-antony",
        interests: "Programming language design and implementation.",
        research: "Professor Hosking work on problems arising in software security, object persistence, object databases, distribution, memory management (garbage collection), managed language runtimes, language virtual machines, optimizing compilers, object persistence, object databases, distribution, memory management (garbage collection), and architectural support for programming languages and applications.",
        activities: "ACM Distinguished Scientist, 2012.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "hosking-antony"
    },
    {
        name: {
            last: "Suri",
            first: "Neeraj"
        },
        email: "suri@cics.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "https://ssg.lancs.ac.uk/people/suri/",
        webpage: "https://www.cics.umass.edu/people/suri-neeraj",
        interests: "",
        research: "Trustworthy (Dependable & Secure) Systems and Software",
        activities: "Suri has been awarded the following:",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "suri-neeraj"
    },
    {
        name: {
            last: "Vardoyan",
            first: "Gayane"
        },
        email: "gvardoyan@cics.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/people/vardoyan-gayane",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "vardoyan-gayane"
    },
    {
        name: {
            last: "Yu",
            first: "Hong"
        },
        email: "hongyu@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/faculty/directory/hong_yu",
        interests: "Information retrieval, extraction, natural language processing, summarization, human-computer interaction, with a focus on biomedical applications.",
        research: "Professor Yu's research interests are in the areas of information retrieval, extraction, natural language processing, summarization, human-computer interaction, with a focus on biomedical applications. She has led the development of many systems, including the biomedical question answering system AskHERMES (http://www.askhermes.org), the adverse drug event pharmacovigilance system (http://www.ADErepository.org), the innovative biomedical figure search system (http://figuresearch.askhermes.org), and the NoteAid systems that help patients comprehend electronic medical records (http://ClinicalNotesAid.org).",
        activities: "Professor Yu has served as co-Chair in the biomedical natural language processing sections of the Pacific Symposium of Biocomputing and IEEE International Conference on Bioinformatics & Biomedicine. She is a member of the editorial board of the Journal of Biomedical Informatics, and is the PI of several National Institutes of Health funded projects. She was a recipient of the National Library of Medicine (NLM) pre-doctoral training grant to Columbia University and is one of the six \"star trainees\" selected by NLM on its celebration of 175th anniversary. Her first paper in biomedical informatics was nominated as one of the best papers in the American Medical Informatics Association Fall Symposium of 1999. Her work is included as best paper in IMIA Yearbook of Medical Informatics 2011, described in \"Translational Bioinformatics 2012 Year in Review\" by Russ Altman, and featured in Science, Nature, BioInform, the Pulitzer-winning Milwaukee Journal Sentinel, and the Milwaukee Public Radio.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "yu-hong"
    },
    {
        name: {
            last: "Berger",
            first: "Emery"
        },
        email: "emery@cs.umass.edu",
        phone: "(413) 577-4211",
        tags: [],
        office: "378 CS Building",
        website: "http://emeryberger.com",
        webpage: "https://www.cics.umass.edu/faculty/directory/berger_emery",
        interests: "Programming languages, runtime systems, and operating systems, with a particular focus on systems that transparently improve reliability, security, and performance.",
        research: "Professor Berger's research spans programming languages, runtime systems, and operating systems, with a particular focus on systems that transparently improve reliability, security, and performance. He is the creator of a number of influential software systems including Hoard, a fast and scalable memory manager that accelerates multithreaded applications (used by companies including British Telecom, Cisco, Credit Suisse, Reuters, Royal Bank of Canada, SAP, and Tata, and on which the Mac OS X memory manager is based); DieHard, an error-avoiding memory manager that directly influenced the design of the Windows 7 Fault-Tolerant Heap; and DieHarder, a secure memory manager that was an inspiration for hardening changes made to the Windows 8 heap.",
        activities: "Professor Berger's honors include a Microsoft Research Fellowship, an NSF CAREER Award, a Lilly Teaching Fellowship, Most Influential Paper Awards from ASPLOS, OOPSLA, and PLDI, and five papers selected as CACM Research Highlights. Professor Berger currently is serving in his second term as an elected member-at-large of the SIGPLAN Executive Committee. He spent a decade as Associate Editor of the ACM Transactions on Programming Languages and Systems, served as Program Chair for PLDI 2016 and is currently serving as co-Program Chair for ASPLOS 2021. In addition, he developed and maintains the widely-used CSrankings website. Professor Berger was named an ACM Fellow in 2019.",
        rating: 2,
        difficulty: 4.2,
        reviews: 20,
        id: "berger-emery"
    },
    {
        name: {
            last: "Kaplan",
            first: "Scott"
        },
        email: "sfkaplan@cs.umass.edu",
        phone: "(413) 545-4206",
        tags: [],
        office: "372 CS Building",
        website: "https://www.cs.amherst.edu/~sfkaplan/",
        webpage: "https://www.cics.umass.edu/faculty/directory/kaplan_scott",
        interests: "",
        research: "Professor Kaplan's primary research focus lies in OS- and run-time-level memory management. His current interests include fair sharing virtual memory systems, prefetching and clustering, heap-size adaptive garbage collectors, and memory management for grid/cluster computing",
        activities: "Professor Kaplan's recent professional service includes acting as a Referee for the Performance Evaluation Review and served on the Program Committee of the USENIX Annual Technical Conference. He recently received National Science Foundation, Collaborative Research: A Five-College Partnership for Information Assurance Education, award and was acknowledged in the Faculty Research Award Program for Amherst College in January of 2004",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "kaplan-scott"
    },
    {
        name: {
            last: "Osterweil",
            first: "Leon"
        },
        email: "ljo@cs.umass.edu",
        phone: "(413) 545-2186",
        tags: [],
        office: "316A CS Building",
        website: "http://laser.cs.umass.edu/people/ljo.html",
        webpage: "https://www.cics.umass.edu/faculty/directory/osterweil_leon",
        interests: "Process modeling and process programs, analysis of concurrency, software architectures, ecommerce and egovernment, medical processes and medical safety.",
        research: "Professor Osterweil  is developing process programming technology in the context of a distributed process-centered environment. A process centered environment interprets process programs, using them to coordinate the efforts of people, computers, and software tools. It also provides a platform for the evaluation, comparison, analysis, evolution and improvement of software development processes and their support. Programming software development processes will lead to better understanding and improvement of sotware production, as well as providing more effective computerized  support for such processes.",
        activities: "",
        rating: 3.3,
        difficulty: 2,
        reviews: 2,
        id: "osterweil-leon"
    },
    {
        name: {
            last: "Rosenberg",
            first: "Arnold L."
        },
        email: "rsnbrg@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~rsnbrg/",
        webpage: "https://www.cics.umass.edu/people/rosenberg_arnold",
        interests: "Theoretical and algorithmic aspects of modern computing environments, such as clusters and grids.",
        research: "Professor Rosenberg's research focuses on developing algorithmic models and techniques to deal with the new modalities of \"collaborative computing\" that result from emerging technologies such as cluster computing, web computing, and grid computing. He is the (co)author of more than 150 technical papers on these and other topics in theoretical computer science and discrete mathematics, and he is the coauthor of a 2001 book: Graph Separators, with Applications.",
        activities: "Professor Rosenberg is a Fellow of the ACM, a Fellow of the IEEE, and a Golden Core member of the IEEE Computer Society. He serves on several journal editorial and advisory boards. He is the Program Chair for the 2005 Heterogeneous Computing Workshop and the 2006 International Parallel and Distributed Processing Symposium. He received the UMass Amherst College of Natural Sciences and Mathematics (NSM) Outstanding Teaching Award (1997) and Outstanding Research Award (2004). He also served as mentor to five Lilly Teaching Fellows (a competitive UMass Amherst program for junior faculty). In addition, he received the ACM Recognition of Service Award (2001, 2002, 2003).",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "rosenberg-arnold l."
    },
    {
        name: {
            last: "Niekum",
            first: "Scott"
        },
        email: "sniekum@cs.umass.edu",
        phone: "(413) 545-1862",
        tags: [],
        office: "374 CS Building",
        website: null,
        webpage: "https://www.cics.umass.edu/people/niekum-scott",
        interests: "Imitation learning, reinforcement learning, AI safety, robotic manipulation, and human-robot interaction.",
        research: "The goal of Professor Niekum's research is to enable personal robots to be deployed in the home and workplace with minimal intervention by robotics experts. In settings such as these, robots do not operate in isolation, but have continual interactions with people and objects in the world. With this in mind, his research focuses on developing algorithms to solve problems that robot learners encounter in real-world interactive settings. Thus, this work draws roughly equally from both machine learning and robotics, including topics such as imitation learning, reinforcement learning, safety, manipulation, and human-robot interaction.  Specifically, he is interested in addressing the following questions: How can human demonstrations and interactions be used to bootstrap the learning process? How can robots autonomously improve their understanding of the world through embodied interaction? And how can robots learn from heterogenous, noisy interactions and still provide strong probabilistic guarantees of correctness and safety?",
        activities: "Professor Niekum is a recipient of the National Science Foundation CAREER Award and the AFOSR Young Investigator Award. While in his position as an Assistant Professor at The University of Texas at Austin, he also received the College of Natural Sciences Teaching Excellence Award. Prof. Niekum regularly serves as an area chair, associate editor, or reviewer for machine learning and robotics conferences and journals including NeurIPS, ICML, ICLR, RSS, CoRL, ICRA, IROS, HRI, AAAI, IJCAI, JMLR, IJRR, and TRO.",
        rating: 1.8,
        difficulty: 4.4,
        reviews: 4,
        id: "niekum-scott"
    },
    {
        name: {
            last: "Miklau",
            first: "Gerome"
        },
        email: "miklau@cs.umass.edu",
        phone: "(413) 545-4032",
        tags: [],
        office: "304 CS Building",
        website: "http://www.cs.umass.edu/~miklau/",
        webpage: "https://www.cics.umass.edu/faculty/directory/miklau_gerome",
        interests: "Database research with an emphasis on privacy and security; database theory; semi-structured data.",
        research: "Professor Miklau's research interests are in the area of Database research with an emphasis on security; database theory; semi-structured data. The objective of his research is to enable secure and trustworthy data management in both conventional database systems and distributed environments like the World Wide Web. His work focuses on classical security concerns such as confidentiality, privacy, and integrity of data.",
        activities: "Professor Miklau received the 2005 University of Washington William Chan Memorial Dissertation Award, 2006 ACM SIGMOD Dissertation Award, and a 2007 NSF CAREER Award.",
        rating: 4,
        difficulty: 3.3,
        reviews: 15,
        id: "miklau-gerome"
    },
    {
        name: {
            last: "Avrunin",
            first: "George"
        },
        email: "avrunin@cs.umass.edu",
        phone: "(413) 545-4251",
        tags: [],
        office: "316A CS Building",
        website: "http://ext.math.umass.edu/~avrunin/",
        webpage: "https://www.cics.umass.edu/people/avrunin_george",
        interests: "Concurrency, testing and analysis, real-time, cohomology of finite groups.",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "avrunin-george"
    },
    {
        name: {
            last: "Allan",
            first: "James"
        },
        email: "allan@cs.umass.edu",
        phone: "(413) 545-3240",
        tags: [],
        office: "370 CS Building",
        website: "https://www.cs.umass.edu/~allan/",
        webpage: "https://www.cics.umass.edu/faculty/directory/allan_james",
        interests: "Information retrieval, event-based information organization, controversy and misinformation detection.",
        research: "Professor Allan's research focuses on information retrieval, event-based information organization, as well as minimally interactive retrieval and organization. He also explores how novelty can be incorporated into retrieval algorithms, techniques for querying across languages, and methods for recognizing controversial or misleading information in text on the internet.",
        activities: "Professor Allan serves on the organizing and program committees for major conferences in the area (SIGIR, CIKM, WSDM, etc), has been an associate editor of ACM's Transactions on Information Systems (TOIS) journal and Elsevier's Information Processing and Management (IPM) journal, and has served as chair of the SIGIR organization. He is currently on the editorial board of Foundation and Trends in Information Retrieval. With his students, he received Best Paper awards in SIGIR in 2001 and in 2006 as well as a Best Student Paper from CHIIR in 2017. He also received a SIGIR Test of Time Award for a 1998 paper on event detection and tracking. In 2018, he was elected to the CRA Board of Directors and then to the CRA Executive Committee as Treasurer.",
        rating: 4.1,
        difficulty: 3.6,
        reviews: 31,
        id: "allan-james"
    },
    {
        name: {
            last: "Meliou",
            first: "Alexandra"
        },
        email: "ameli@cs.umass.edu",
        phone: "(413) 545-3788",
        tags: [],
        office: "330 CS Building",
        website: "http://people.cs.umass.edu/~ameli",
        webpage: "https://www.cics.umass.edu/faculty/directory/alexandra_meliou",
        interests: "Data management, data quality, provenance, causality, explanations, data accessibility, and algorithmic bias.",
        research: "Professor Meliou's research interests are in the area of data and information management, with an emphasis on the challenges of dealing with imperfect data, such as data with errors, skews, and biases. Her work offers crucial insights into data quality issues, through frameworks that diagnose the causes of errors and identify repairs in the processes that produce the data. Her research promotes users' trust in both data and systems through support for understanding and explanations. An overarching goal of her work is to augment data management with user-facing functionality that helps people make sense of their data and use it effectively.",
        activities: "Professor Meliou has received recognitions for research, teaching, and service, including a CACM Research Highlight, an ACM SIGMOD Research Highlight Award, an ACM SIGSOFT Distinguished Paper Award, an NSF CAREER Award, a Google Faculty Research Award, multiple Distinguished Reviewer Awards, and a Lilly Fellowship for Teaching Excellence.  Professor Meliou regularly serves on the organizing and program committees of premier venues in data management research.  In addition to her research, she is passionate about teaching, and about promoting the recruitment and retainment of women and other underrepresented groups in computer science.",
        rating: 4,
        difficulty: 3,
        reviews: 3,
        id: "meliou-alexandra"
    },
    {
        name: {
            last: "Rahimi",
            first: "Negin"
        },
        email: "rahimi@cs.umass.edu",
        phone: "(413) 545-4852",
        tags: [],
        office: "360 CS Building",
        website: "https://people.cs.umass.edu/~rahimi/",
        webpage: "https://www.cics.umass.edu/people/rahimi-negin",
        interests: "",
        research: "",
        activities: "",
        rating: 0,
        difficulty: 0,
        reviews: 0,
        id: "rahimi-negin"
    },
    {
        name: {
            last: "O'Neill",
            first: "Adam"
        },
        email: "adamo@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A329 LGRC",
        website: "https://groups.cs.umass.edu/oneill/",
        webpage: "https://www.cics.umass.edu/people/oneill-adam",
        interests: "Practice-oriented theory of cryptography, cryptography in novel computing environments.",
        research: "Professor O'Neill's research runs along two main threads.  First, he studies the practice-oriented theory of outsourced database protocols, which allow a client to store its database on an untrusted server while simultaneously hiding as much information about the data as possible for the server and allowing the client to make queries.  This is novel as for efficiency some information about the data has to be revealed to the server.  Second, he studies the design and analysis of deployable or deployed protocols in the ``random oracle model,'' which models a cryptographic hash function as a truly random function.",
        activities: "Professor O'Neill was selected as a scholar by the Achievement Rewards for College Scientists Foundation from 2008-2010.",
        rating: 3.3,
        difficulty: 4.5,
        reviews: 6,
        id: "o'neill-adam"
    },
    {
        name: {
            last: "Cable",
            first: "Marvin"
        },
        email: "mcable@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A246 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/cable-marvin",
        interests: "",
        research: "",
        activities: "",
        rating: 4.6,
        difficulty: 3.4,
        reviews: 5,
        id: "cable-marvin"
    },
    {
        name: {
            last: "O'Connor",
            first: "Brendan"
        },
        email: "brenocon@cs.umass.edu",
        phone: "(413) 577-2503",
        tags: [],
        office: "238 CS Building",
        website: "https://cs.umass.edu/~brenocon",
        webpage: "https://www.cics.umass.edu/faculty/directory/oconnor_brendan",
        interests: "Natural language processing, computational social science, statistical machine learning, social media.",
        research: "Brendan O'Connor is an associate professor in the College of Information and Computer Sciences at the University of Massachusetts Amherst, who works in the intersection of computational social science and natural language processing - studying how social factors influence language technologies, and how to better understand social trends with text analysis. For example, he has investigated racial bias in NLP technologies, political events reported in news, language in Twitter, and crowdsourcing foundations of NLP. He is a recipient of the NSF CAREER and Google Faculty Research awards, has received a best paper award, and his research has been cited thousands of times and been featured in the media. At UMass Amherst, he is affiliated with the Computational Social Science Institute and Center for Data Science. His PhD was completed in 2014 from Carnegie Mellon University's Machine Learning Department, and he has previously been a Visiting Fellow at the Harvard Institute for Quantitative Social Science, and worked in the Facebook Data Science group and at the company Crowdflower; he started studying the intersection of AI and social science in Symbolic Systems (BS/MS) at Stanford University.",
        activities: "",
        rating: 1.7,
        difficulty: 3.3,
        reviews: 15,
        id: "o'connor-brendan"
    },
    {
        name: {
            last: "Mazumdar",
            first: "Arya"
        },
        email: "arya@cs.umass.edu",
        phone: "(413) 545-0359",
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~arya",
        webpage: "https://www.cics.umass.edu/people/mazumdar-arya",
        interests: "Error Correcting Codes, Information Theory, Statistical Reconstruction, Distributed Optimization",
        research: "Arya's research in error-correcting codes has produced the first efficiently implementable family of codes over permutations, as well as the best known fundamental limits of locally repairable codes for distributed storage. Arya's current research interests include recent advances of statistical machine learning in the application domains of interactive learning algorithms, statistical reconstructions, community detection and distributed optimization. Arya is also very much interested in fundamental problems that involve trade-offs between communication and computation in distributed settings.",
        activities: "Arya is a recipient of the 2015 NSF CAREER award, the 2020 EURASIP JASP Best Paper Award,  and the 2010 IEEE ISIT Jack K. Wolf Paper Award. He is also a recipient of the 2011 Distinguished Dissertation Fellowship Award from the University of Maryland.  Arya's works have been regularly appearing in the top venues of information theory and machine learning, multiple times as spotlight papers. Arya is an associate editor of IEEE Transactions on Information Theory and an area editor of Now Publishers Foundation and Trends Series.",
        rating: 3.2,
        difficulty: 3.8,
        reviews: 21,
        id: "mazumdar-arya"
    },
    {
        name: {
            last: "Musco",
            first: "Cameron"
        },
        email: "cmusco@cs.umass.edu",
        phone: null,
        tags: [],
        office: "234 CS Building",
        website: "https://people.cs.umass.edu/~cmusco/",
        webpage: "https://www.cics.umass.edu/people/musco-cameron",
        interests: "Algorithm design, theoretical computer science, numerical linear algebra, machine learning & data science, biological distributed algorithms.",
        research: "Professor Musco studies algorithm design, working at the intersection of theoretical computer science, numerical linear algebra, data science, and machine learning.  He is particularly interested in the power of randomized approximation algorithms and in streaming, distributed, and low-memory computation. His most significant contributions have been in developing fast randomized methods for fundamental linear algebraic problems, often with applications to data science and machine learning.",
        activities: "Professor Musco has received an NSF CAREER award, a Google Research Scholar Award, and an NSF Graduate Research Fellowship. He is also a recipient of the UMass CICS Dean's Award for Anti-Racism Leadership. He regularly serves on program committees and reviews for top venues in theoretical computer science, machine learning, and numerical computation.",
        rating: 4.9,
        difficulty: 4.5,
        reviews: 13,
        id: "musco-cameron"
    },
    {
        name: {
            last: "Clarke",
            first: "Lori"
        },
        email: "clarke@cs.umass.edu",
        phone: "(413) 545-1328",
        tags: [],
        office: "316A CS Building",
        website: "http://laser.cs.umass.edu/people/clarke.html",
        webpage: "https://www.cics.umass.edu/faculty/directory/clarke_lori",
        interests: "Dr. Clarke's research is in the area of software engineering, primarily focusing on model checking of concurrent systems and requirements engineering. Recently she has been investigating applying software engineering technologies to detect errors and vulnerabilities in complex, human-intensive processes in domains such as healthcare, scientific workflow, and digital government. She is also involved in several efforts to increase participation of underrepresented groups in computing research.",
        research: "",
        activities: "Dr. Clark is a Fellow of the ACM and IEEE, and a board member of the Computing Research Association's Committee on the Status of Women in Computing Research (CRA-WP). She received the 2012 ACM Special Interest Group on Software Engineering (SIGSOFT) Outstanding Research Award, the 2011 University of Massachusetts Outstanding Accomplishments in Research and Creative Activity Award, the 2009 College of Natural Sciences and Mathematics Outstanding Faculty Service Award, the 2004 University of Colorado, Boulder Distinguished Engineering Alumni Award, the 2002 SIGSOFT Distinguished Service Award, a 1993 University Faculty Fellowship, and the 1991 University of Massachusetts Distinguished Faculty Chancellor's Medal. She is a former vice chair of the Computing Research Association (CRA), co-chair of CRA-WP, IEEE Publication Board member, associate editor of ACM Transactions on Programming Languages and Systems (TOPLAS) and IEEE Transactions on Software Engineering (TSE), member of the CCR NSF advisory board, ACM SIGSOFT secretary/treasurer, vice-chair and chair, IEEE Distinguished Visitor, and ACM National Lecturer. She has written numerous papers, served on many program committees, and was program co-chair of the 14th and general chair of the 25th International Conference on Software Engineering. She has been a Principal Investigator on a number of NSF, DoD, and DARPA projects.",
        rating: 2.1,
        difficulty: 2.5,
        reviews: 6,
        id: "clarke-lori"
    },
    {
        name: {
            last: "Lehnert",
            first: "Wendy G."
        },
        email: "lehnert@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~lehnert/",
        webpage: "https://www.cics.umass.edu/faculty/directory/lehnert_wendy",
        interests: "",
        research: "",
        activities: "In 1984 Professor Lehnert received the Presidential Young Investigator Award from the National Science Foundation in recognition for her work in artificial intelligence, and in 1991 she was elected Fellow of the American Association for Artificial Intelligence. In 1993 Professor Lehnert served as a Program Co-Chair for the National Conference on Artificial Intelligence. In 1996, she was honored as a UMass Amherst Distinguished Faculty Lecturer and received the Chancellor's Medal. Professor Lehnert has served on scientific advisory boards for the National Science Foundation, the National Library of Medicine, and has served as a member of the Information Science and Technology Committee for the Advanced Research Projects Agency of the Department of Defense. Professor Lehnert has been elected to the membership of the Board of Counselors for the American Association for Artificial Intelligence, as well as the Governing Board for the Cognitive Science Society, and she has also served as a senior editor for Cognitive Science. She has published nine books and over 100 journal articles, conference papers and book chapters.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "lehnert-wendy g."
    },
    {
        name: {
            last: "Smith",
            first: "David"
        },
        email: "dasmith@ccs.neu.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://www.ccs.neu.edu/home/dasmith/",
        webpage: "https://www.cics.umass.edu/faculty/directory/smith_david",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "smith-david"
    },
    {
        name: {
            last: "Hamalainen",
            first: "Jeffrey"
        },
        email: "jhamalainen@umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/people/hamalainen-jeffrey",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "hamalainen-jeffrey"
    },
    {
        name: {
            last: "Streinu",
            first: "Ileana"
        },
        email: "streinu@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://cs.smith.edu/fac_istreinu.php",
        webpage: "https://www.cics.umass.edu/faculty/directory/streinu_ileana",
        interests: "Combinatorial and Computational Geometry.",
        research: "Professor Streinu's research interests include:",
        activities: "Professor Streinu was Program committee member for the 14th Annual Fall Workshop on Computational Geometry, MIT, Nov. 19-20, 2004. She was the Co-organizer (with Jack Snoeyink) of Geometry of Protein Modelling , a Special Session at the American Math. Society Regional Meeting 997, Rider University, Lawrenceville, NJ, April 17-18, 2004, and was the organizer of the Workshop on the Geometry of Modelling Proteins at Bellairs Research Institute of McGill Univ. in Barbados, Jan. 16-23, 2004. In a 2006 ceremony marking its 140th anniversary, the Romanian Academy awarded Streinu the George Moisil Award, their highest recognition in the area of Theoretical Computer Science, for a paper published in 2004.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "streinu-ileana"
    },
    {
        name: {
            last: "Biswas",
            first: "Joydeep"
        },
        email: "joydeepb@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://joydeepb.com",
        webpage: "https://www.cics.umass.edu/people/biswas-joydeep",
        interests: "Robot Perception, Motion Planning, Control Systems, AI, Deployed Robot Systems",
        research: "My ultimate goal is to have self-sufficient autonomous mobile robots working in human environments, performing tasks accurately and robustly. In support of this goal, I am interested in research in perception, planning, and control applied to autonomous mobile robots. My research in perception involves developing models and representations for a dynamic world, and algorithms to build and perform inference based on such models. My interests in planning include motion planning, multi-robot coordination, and task-based planning in domains including service mobile robots, and robot soccer.",
        activities: "Professor Biswas' research on autonomous service mobile robots and robot soccer has been covered by several media and news articles. As a PhD student he was the recipient of the 2015 Siebel Scholarship. He has served on the Program Committee for the RoboCup Symposium, and continues to serve on the Executive Committee of the RoboCup Small Size League.",
        rating: 1.7,
        difficulty: 3.9,
        reviews: 13,
        id: "biswas-joydeep"
    },
    {
        name: {
            last: "Mahadevan",
            first: "Sridhar"
        },
        email: "mahadeva@cics.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~mahadeva/",
        webpage: "https://www.cics.umass.edu/faculty/directory/mahadevan_sridhar",
        interests: "Artificial intelligence, cognitive science, machine learning, reinforcement learning, robot learning, sequential decision-making.",
        research: "Professor Mahadevan's research interests span several subfields of artificial intelligence and computer science, including machine learning, multi-agent systems, planning, perception, and robotics. His research in machine learning has been eclectic, ranging from pioneering work in explanation-based learning where his thesis introduced the model of learning apprentices for knowledge acquisition from experts, to the first rigorous study of concept learning with prior determination knowledge using the framework of Probably Approximately Correct (PAC) learning. Over the past decade, his research has centered around a general framework for autonomous learning and sequential decision-making, which studies how agents embedded in real-world environments can acquire knowledge on how to act from a stream of noisy percepts.  The framework is rigorously validated using temporal statistical process models, principally Markov decision processes. His recent research has focused on hierarchical probabilistic models, including hierarchical hidden Markov processes, semi-Markov decision processes, and hierarchical partially observable Markov decision processes. Professor Mahadevan has also developed state-of-the-art applications, including mobile robot navigation in indoor office environments, an active vision system for finding objects in cluttered rooms, and coordination among teams of factory agents optimizing production control.",
        activities: "Professor Mahadevan is an Associate Editor of Machine Learning and the Journal of Machine Learning Research. From 1997-2000, he was on the editorial board of the Journal for AI Research. He has been on numerous program committees for AAAI, ICML, IJCAI, NIPS, and IROS conferences. In 2001 and 2000, he served as the area chair for reinforcement learning at the ICML and NIPS conferences. In 2001, he co-authored a paper with his students Rajbala Makar and Mohammad Ghavamzadeh that received the best student paper award in the 5th International Conference on Autonomous Agents. In 1999, he co-authored a paper with Gang Wang that received the best paper award (runner-up) at the 16th International Conference on Machine Learning. In 1993, he co-edited (with Jonathan Connell) the book Robot Learning published by Kluwer Academic Press. He is a co-founder of LookAhead Decisions Inc. based in Berkeley, CA. Professor Mahadevan received an NSF CAREER Award in 1995.",
        rating: 3.8,
        difficulty: 3.8,
        reviews: 10,
        id: "mahadevan-sridhar"
    },
    {
        name: {
            last: "Moss",
            first: "J. Eliot"
        },
        email: "moss@cs.umass.edu",
        phone: "(413) 545-4206",
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~moss/",
        webpage: "https://www.cics.umass.edu/faculty/directory/moss_j-eliot",
        interests: "Object-oriented languages (emphasis on implementation), performance measurement and optimization, garbage collection, transactional memory.",
        research: "Professor Moss's current research interests focus on transactions, garbage collection algorithms, language virtual machines, and chaos in computer performance.",
        activities: "Professor Moss is an ACM Fellow (named in 2007) and an IEEE Fellow (named in 2010). He received a National Science Foundation Presidential Young Investigator Award in 1987, a University of Massachusetts Amherst Lilly Teaching Fellowship in 1991, and a UMass TEACHnology Fellowship in 2005. In fall 2009, Professor Moss received the UMass Amherst Chancellor's Award for Outstanding Accomplishments in Research and Creative Activity. In 2013 he was co-recipient of the Edsger J. Dijkstra Prize in Distributed Computing for his work on transactional memory.",
        rating: 1.9,
        difficulty: 3.5,
        reviews: 20,
        id: "moss-j. eliot"
    },
    {
        name: {
            last: "Rahman",
            first: "Tauhidur"
        },
        email: "trahman@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "https://www.tauhidurrahman.com/",
        webpage: "https://www.cics.umass.edu/people/rahman-tauhidur",
        interests: "Mobile and ubiquitous computing, human health and behavior modeling with statistical signal processing and machine learning, novel on-body and off-body sensor development with embedded systems and applied physics.",
        research: "Prof. Rahman aims to develop next-generation mobile health technologies that leverages naturally generated and backscattered acoustic and electromagnetic waves from the human body (e.g., heart, skin, lung) and its surrounding environment (e.g, air, food) to unobtrusively, continuously and passively extract information about high-level health and behavioral variables including eating behavior, sleep, alcohol addiction, spread of infectious diseases and food quality.\nHis research involves (1) low-level sensor development to capture observable low-level physical signals from our bodies and surrounding environments with high fidelity, (2) signal interpretation algorithm development to map these low-level physical signals to relevant biological and behavioral measurements, and (3) mobile computing to run these algorithms in low power and resource settings. His research is interdisciplinary and employs core concepts and theories from different domains including applied physics, embedded and mobile computing, signal processing, machine learning, health sciences and medicine. Professor Rahman's long-term research vision is to rethink the core physical mechanisms of existing health technologies and to impact the way we diagnose diseases, track and manage our health.",
        activities: "Professor Rahman was a recipient of the Google Ph.D. Fellowship in 2016 in mobile computing. He also received an Outstanding Teaching Award in 2015 from Cornell University. Some of his other notable accomplishments include finalist in Qualcomm innovation fellowship in 2015, one best paper award in ACM Digital Health 2016, one best paper honorable mention award in ACM Ubicomp 2015. He co-chaired the 1st workshop on Digital Biomarkers 2017 (collocated with MobiSys 2017) in Niagara Falls, NY. His research has received several press coverages including Wall Street Journal, NewScientist, MIT Technology Review.",
        rating: 5,
        difficulty: 3.3,
        reviews: 4,
        id: "rahman-tauhidur"
    },
    {
        name: {
            last: "Xiong",
            first: "Cindy Ya"
        },
        email: "yaxiong@umass.edu",
        phone: null,
        tags: [],
        office: "A217E LGRC",
        website: "https://cyxiong.com/",
        webpage: "https://www.cics.umass.edu/people/xiong-cindy-ya",
        interests: "Data Visualization, Human-Computer Interaction, Visual Perception and Cognition, Decision Making",
        research: "We increasingly rely on visualizations to answer questions and make decisions about data. By tapping the power of our visual processing system, visualized data - maps, infographics, flow charts, word clouds, and network diagrams - can massively enhance our ability to analyze and understand patterns in order to make data-driven decisions. However, relying on visualized data may also subject us to powerful biases that can significantly influence what we see and decide.",
        activities: "Professor Xiong's research at the intersection of human perception, cognition, and data visualization has received awards at premier venues in psychology and data visualization, including Psychonomics and IEEE VIS. She is one of the founding leaders of VISxVISION (visxvision.com), a partnership dedicated to increasing collaboration between visualization researchers and perceptual + cognitive psychologists. She organized workshops, symposiums, and panels across both psychology and visualization venues to promote interdisciplinary research in these fields.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "xiong-cindy ya"
    },
    {
        name: {
            last: "Wilson",
            first: "Mark"
        },
        email: "markwilson@umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://markcwilson.site/",
        webpage: "https://www.cics.umass.edu/people/wilson-mark",
        interests: "Computational discrete mathematics; combinatorial algorithms; computational social science (social choice, voting, electoral system design, resource allocation, game theory, diffusion and learning in networks)",
        research: "Mark's research is focused on three main areas: networks and data science, collective decisions and actions, and asymptotic and enumerative combinatorics.  His research methodology often involves deriving new algorithms for computational problems, or evaluating performance of algorithms via probabilistic analysis and numerical simulations.",
        activities: "Mark is currently involved in a 2019-2021 NSF \"Harnessing the Data Revolution\" multi-institution grant  to study the relation between brain structure, individual decisions and group decisions, via brain scans, online experiments and simulations.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "wilson-mark"
    },
    {
        name: {
            last: "Rattigan",
            first: "Matthew"
        },
        email: "rattigan@cs.umass.edu",
        phone: "(413) 545-1395",
        tags: [],
        office: "A135 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/rattigan-matthew",
        interests: "Computing for the common good, causal learning, equity and inclusion, entrepreneurship.",
        research: "Matt is focused on applying Data Science and Machine Learning techniques toward applications that benefit the public interest.  He seeks to identify partnerships between academia and organizations in the public, private, and non-profit sectors who are interested in using data to advance social good initiatives.",
        activities: "",
        rating: 4.5,
        difficulty: 3.3,
        reviews: 30,
        id: "rattigan-matthew"
    },
    {
        name: {
            last: "Thomas",
            first: "Philip"
        },
        email: "pthomas@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A353A LGRC",
        website: "http://psthomas.com",
        webpage: "https://www.cics.umass.edu/people/thomas-philip",
        interests: "Reinforcement learning, decision making, and AI safety.",
        research: "Professor Thomas's research interests are in reinforcement learning, decision making, and AI safety. He is most interested in designing reinforcement learning algorithms that are more biologically plausible than existing algorithms, or which provide various forms of safety guarantees that make them viable for high-risk applications (e.g., medical applications). Towards these goals he has performed extensive work on (high-confidence) off-policy policy evaluation methods, with preliminary experiments for both digital marketing and medical applications. He has also studied methods for performing deep reinforcement learning without the need for the biologically implausible propagation of information backwards through the neural network.",
        activities: "Professor Thomas has published in top AI conferences and journals, including the prestigious journal Science, and testified to the U.S. House Committee on Financial Services, Task Force on Artificial Intelligence in 2020. He is Co-PI on an Army Research Grant (IoBT), an NSF grant (FMitF), and the Armstrong Award. He has also received significant funding from Adobe Research. Prof. Thomas regularly serves as an area chair for NeurIPS and ICML, and served as the Workshops Co-chair for RLDM 2019. He has served as a reviewer for NeurIPS, ICML, AAAI, IJCAI, UAI, IROS, ICLR, RLDM, Nature, JAIR, MLJ, and JMLR.",
        rating: 3.6,
        difficulty: 4.3,
        reviews: 12,
        id: "thomas-philip"
    },
    {
        name: {
            last: "Trim",
            first: "Michelle"
        },
        email: "mtrim@cs.umass.edu",
        phone: "(413) 545-4450",
        tags: [],
        office: "A347 LGRC",
        website: "http://www.cics.umass.edu/~mtrim",
        webpage: "https://www.cics.umass.edu/faculty/directory/trim_michelle",
        interests: "",
        research: "",
        activities: "",
        rating: 2,
        difficulty: 3.1,
        reviews: 33,
        id: "trim-michelle"
    },
    {
        name: {
            last: "Verts",
            first: "William"
        },
        email: "verts@cs.umass.edu",
        phone: "(413) 545-1719",
        tags: [],
        office: "A357 LGRC",
        website: "http://www.cs.umass.edu/~verts/",
        webpage: "https://www.cics.umass.edu/faculty/directory/verts_william",
        interests: "",
        research: "",
        activities: "",
        rating: 4.1,
        difficulty: 2.5,
        reviews: 171,
        id: "verts-william"
    },
    {
        name: {
            last: "Irwin",
            first: "David"
        },
        email: "irwin@ecs.umass.edu",
        phone: "(413) 545-5822",
        tags: [],
        office: null,
        website: "http://www.ecs.umass.edu/~irwin/",
        webpage: "https://www.cics.umass.edu/faculty/directory/irwin_david",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "irwin-david"
    },
    {
        name: {
            last: "Krastanov",
            first: "Stefan"
        },
        email: "skrastanov@cics.umass.edu",
        phone: null,
        tags: [],
        office: "A211F LGRC",
        website: "https://lab.krastanov.org",
        webpage: "https://www.cics.umass.edu/people/krastanov-stefan",
        interests: "Quantum Information Science, Error Correcting Codes, Hardware Modeling",
        research: "Stefan works on the design, control, and optimization of quantum hardware for computation and networking, from its analog physical description up to the compilation of error-corrected logical circuitry running on it. His research centers around leaky abstraction boundaries between the many layers of technologies making up the field of quantum computing and quantum information science.",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "krastanov-stefan"
    },
    {
        name: {
            last: "Sproull",
            first: "Robert"
        },
        email: "rfsproull@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/faculty/directory/sproull_bob",
        interests: "Computer systems, especially operating systems, networking, and computer graphics. Also asynchronous circuit design.",
        research: "I have no active research program, but have broad interests in computer science. My research career has ventured into computer graphics, networking, computer printing, asynchronous (hardware) systems, and operating systems. Perhaps a summary phrase might be design and engineering of systems. I am eager to kibitz on graduate student projects consistent with my interests and abilities. I'm working on a few home automation projects, but it's not clear whether research problems lie therein.",
        activities: "Sproull is chair of the Computer Science and Telecommunications Board of the National Research Council and also serves on the Computing Community Consortium Council. He is a director of Applied Microcircuits Corp., a fabless semiconductor company in Sunnyvale, CA. He was elected to the National Academy of Engineering in 1997, and a Fellow of the American Academy of Arts and Sciences in 2002.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "sproull-robert"
    },
    {
        name: {
            last: "Grupen",
            first: "Roderic"
        },
        email: "grupen@cs.umass.edu",
        phone: "(413) 545-3280",
        tags: [],
        office: "A337 LGRC",
        website: "http://www-robotics.cs.umass.edu/~grupen/home.html",
        webpage: "https://www.cics.umass.edu/faculty/directory/grupen_roderic",
        interests: "Autonomous sensorimotor systems, developmental robotics, robot learning, mobile manipulation, dexterous mobility and manipulation, robot hands, tactile sensing, cognitive robotics, embedded control signal interpretation",
        research: "Professor Grupen conducts research on embodied intelligent systems by integrating mechanisms, control theory, machine learning, and cognitive processing. His laboratory builds dexterous machines that develop in a manner inspired by infant human development and that write their own programs and knowledge structures. Grupen and his students are currently working on personal robots for health care applications, robots designed to explore other planets, robots that learn how to work along side humans, and field robotics systems. His approach relies on structuring the search for behavior by expressing the intrinsic dynamics of physical processes and acquiring policies for robot control tasks using on-line reinforcement learning. The Laboratory for Perceptual Robotics uses this framework as the basis for a computational model of sensorimotor development in humans and machines.",
        activities: "Professor Grupen is the Co-Editor-in-Chief of the Robotics and Autonomous Systems Journal, serves on the Editorial Board of the Journal of Artificial Intelligence for Engineering Design, Analysis and Manufacturing (AI EDAM), has served as a member of the Editorial Board for the Autonomous Robots Journal Special Issue on Learning in Autonomous Robots (ARJ-LAR), and is a member several Technical Committees and Program Committees. Professor Grupen received the Outstanding Teaching Award of the School of Natural Sciences and Mathematics, University of Massachusetts Amherst.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "grupen-roderic"
    },
    {
        name: {
            last: "Fiterau Brostean",
            first: "Ina"
        },
        email: "mfiterau@cs.umass.edu",
        phone: "(413) 577-0064",
        tags: [],
        office: "222 CS Building",
        website: "http://www.cs.umass.edu/~mfiterau",
        webpage: "https://www.cics.umass.edu/people/fiterau-brostean-ina",
        interests: "Machine learning, Ensembles, Multimodal data fusion, Hybrid models, Healthcare applications.",
        research: "Ina aims to build hybrid systems that learn expressive representations of multimodal, heterogeneous data for predictive models designed to interact with human users. My current research revolves around hybrid methods for multimodal data, especially data from the healthcare domain. Ongoing projects: (1) Modeling disease trajectories and forecasting clinical outcomes by integrating multi-resolution, irregularly-sampled time series and images; (2) Weakly-supervised Transfer Learning of Models and Representations; (3) Online Adaptive Policies for Representation Learning.",
        activities: "Ina is the recipient of the Marr Prize for Best Paper at ICCV 2015 and of Star Research Award at the Annual Congress of the Society of Critical Care Medicine 2016. Madalina has co-organized NIPS workshops on the topic of Machine Learning in Healthcare in 2013, 2014, 2016, 2017 and 2018.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "fiterau brostean-ina"
    },
    {
        name: {
            last: "Croft",
            first: "W. Bruce"
        },
        email: "croft@cs.umass.edu",
        phone: "(413) 545-0463",
        tags: [],
        office: "368 CS Building",
        website: "http://www.cs.umass.edu/~croft",
        webpage: "https://www.cics.umass.edu/faculty/directory/croft_w-bruce",
        interests: "Information retrieval and search engines.",
        research: "Professor Croft's research interests are in many areas of information retrieval, including retrieval models, representation, Web search, query processing, cross-lingual retrieval, and search architectures. He has published more than 250 articles on these and other subjects. His h-index is 100 according to his Google Scholar profile. He has been involved in the organization of many workshops and conferences and has given many keynote presentations. Through the joint Lemur Project with CMU, his group has provided open-source search engines and research tools to many in the academic and industrial IR community.",
        activities: "Dr. Croft was a member of the National Research Council Computer Science and Telecommunications Board, 2000-2003, and Editor-in-Chief of ACM Transactions on Information Systems, 1995-2002. Dr. Croft was elected a Fellow of ACM in 1997, received the Research Award from the American Society for Information Science and Technology in 2000, and received the Gerard Salton Award, a lifetime achievement award, from the ACM Special Interest Group in Information Retrieval (SIGIR) in 2003 for significant and sustained research contributions to information retrieval. In 2013, he received the UKeiG Tony Kent Stix Award and, in 2014, the IEEE Computer Society Technical Achievement Award. He received the UMass Amherst College of Natural Sciences and Mathematics (NSM; now CNS) Outstanding Faculty Award in 2001, the UMass Amherst NSM Outstanding Service Award in 2005, and a UMass Amherst Samuel F. Conti Faculty Fellowship Award for 2007-08.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "croft-w. bruce"
    },
    {
        name: {
            last: "Lee",
            first: "Ivan"
        },
        email: "silee@cs.umass.edu",
        phone: "(413) 545-3968",
        tags: [],
        office: "A351B LGRC",
        website: "http://ahhalab.org/",
        webpage: "https://www.cics.umass.edu/faculty/directory/lee-sunghoon",
        interests: "Mobile and personalized health, wearable health sensing, embedded systems, sensor data analytics, clinical science.",
        research: "Professor Lee's research interests are in Mobile & Personalized Health, focusing on the use of digital technologies to understand health conditions and promote health behavioral change in individuals with motor/cognitive impairments, such as stroke, Parkinson's disease, traumatic brain injuries, osteoarthritis, etc. With a primary focus on evolution, his specific research interests include 1) developing novel sensors and remote monitoring solutions that are motivated by practical medical needs, 2) design appropriate human studies, and 3) applying human-centered approaches to quantitatively and qualitatively analyze the efficacy of the developed solutions.",
        activities: "Ivan is a recipient of the NSF CRII Award (2018) and the NIH Trailblazer Award for Young Investigators (2018). His work has won a number of cover-page/featured article awards, best paper awards, best demo awards, and runner-ups at premier academic venues including IEEE TNSRE, IEEE JBHI, ACM SenSys, and ACM MobiSys. He is currently an Academic Editor of PLOS ONE and an Associate Editor of the IEEE OJEMB. He is also serving as an elected Standing Member of the Technical Committee on Wearable Biomedical Sensors and System of the IEEE EMBS. Ivan has served as technical program committee members and workshop chairs for several flagship conferences in the area of wearable computing and health informatics. Ivan also frequently serves on scientific review panels for funding agencies such as the NSF, NIH, and DARPA.",
        rating: 2.9,
        difficulty: 3.6,
        reviews: 9,
        id: "lee-ivan"
    },
    {
        name: {
            last: "Zhang",
            first: "Hao"
        },
        email: "hao.zhang@umass.edu",
        phone: null,
        tags: [],
        office: "A357 LGRC",
        website: "https://hcr.cs.umass.edu/people/hzhang",
        webpage: "https://www.cics.umass.edu/people/zhang-hao",
        interests: "Robotics, lifelong autonomy, human-robot teaming, and robot learning and adaptation.",
        research: "Professor Zhang's research focuses on lifelong collaborative autonomy, with the goals to enable intelligent robots to operate over long periods of time and naturally collaborate with humans and adaptively work with other robots as teammates. His research specifically addresses introspective adaptation, context-aware navigation, multirobot collaboration, and peer-to-peer human-robot teaming in unstructured, dynamic, novel, and potentially adversarial environments. Professor Zhang is also interested in interdisciplinary research to develop fundamentally new concepts and systems that can be demonstrated on real robots in real-world applications, such as manufacturing, connected autonomous driving, robot-assisted inspection and repair, environment exploration and monitoring, and internet of robotic things. Broadly, Professor Zhang's expertise lies at the intersection of robotics, artificial intelligence, and machine learning.",
        activities: "Professor Zhang is the recipient of a National Science Foundation CAREER Award and a DARPA Young Faculty Award (YFA) that recognized his contributions to human-inspired and human-integrated robot adaptation. While in his position at the Colorado School of Mines, he also received the Excellence in Research Awards. Professor Zhang publishes at top robotics conferences and journals, and has received multiple best paper nominations and awards. He also regularly serves as an area chair, associate editor, or reviewer for RSS, CoRL, ICRA, IROS, IJRR, TRO, and RA-L.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "zhang-hao"
    },
    {
        name: {
            last: "Pon-Barry",
            first: "Heather"
        },
        email: "ponbarry@mtholyoke.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/content/pon-barry-heather",
        interests: "Spoken language processing, human-robot interaction, computer science education.",
        research: "Professor Pon-Barry develops computational methods that analyze the acoustics and intonation of spoken language to augment traditional speech recognition---to move beyond just the words a person says and incorporate other signals. She uses these methods to create intelligent, adaptive speech interfaces in the context of human-robot interaction, human-computer interaction, and human-human interaction. Pon-Barry has worked on a wide range of projects including spoken dialogue systems, intelligent tutoring systems, recognition of uncertainty in speech, and analysis of acoustic-prosodic entrainment.",
        activities: "Professor Pon-Barry received a Computer Science Capacity Award from Google in 2015 to establish MaGE (Megas and Gigas Educate), a new peer education and mentoring program at Mount Holyoke College. She also received a Computer Science Engagement Award from Google in 2015. Pon-Barry was supported by a National Defense Science and Engineering Graduate Fellowship (NDSEG), and a National Science Foundation (NSF) Graduate Research Fellowship during her graduate work, where she was named a Siebel Scholar (class of 2013).",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "pon-barry-heather"
    },
    {
        name: {
            last: "Siegelmann",
            first: "Hava"
        },
        email: "hava@cs.umass.edu",
        phone: "(413) 577-4282",
        tags: [],
        office: "276 CS Building",
        website: "https://groups.cs.umass.edu/binds/",
        webpage: "https://www.cics.umass.edu/faculty/directory/siegelmann_hava",
        interests: "Advanced Lifelong learning AI, Enhanced Time-aware AI, Innovations in Biological Computation, Super-Turing computation, Computational Neuroscience and Learning, Complex Dynamical systems, Human-robot interface, Health applications, Government and Industrial applications.",
        research: "Senior faculty for bio-inspired AI, Dr. Siegelmann is an internationally known UMass Provost Professor in Computer Science and a recognized expert in neural networks. She is a core member of the University of Massachusetts Neuroscience and Behavior Program and director of the Biologically Inspired Neural and Dynamical Systems (BINDS) Laboratory. She has been particularly acclaimed for her groundbreaking work in computation beyond the Turing limit, and for achieving advanced learning capabilities through a new type of Artificial Intelligence: Lifelong Learning. Siegelmann conducts highly interdisciplinary research in next-generation machine learning, neural networks, intelligent machine-human collaboration, and computational studies of the brain - with application to AI, data science, and high-tech industry. Prof. Siegelmann is a co-inventor of the Support Vector Clustering (SVC) algorithm, which is widely used across industry and government. Among her recent Nature publications is Biological Underpinning of Lifelong Learning AI, a bio-inspired replay algorithm for advanced lifelong learning, dual fractal structure & function of the human brain, and identification of a previously unknown brain connectome mechanism, which enables cognitive abstraction.",
        activities: "Siegelmann's long list of awards includes the Obama Presidential BRAIN Initiative award, the ALON fellowship, the Donald O. Hebb Award of the International Neural Network Society (INNS) for \"contribution to biological learning;\" she was named a Distinguished Lecturer of the IEEE Computational Intelligence Society and was given DARPA's Meritorious Public Service medal. Siegelmann is a fellow of both the IEEE and the INNS; she served on INNS' Board of Governors from 2012 to 2020 and previously as Program Chair of the International Joint Conference on Neural Networks (IJCNN); Siegelmann was recently named a UMass Provost Professor. She has been serving as a vice-chair on the Neural Network Technical Committee (NNTC) of the IEEE Computational Intelligence Society (CIS), as well as on the IEEE CIS Outstanding PhD Dissertation Award committee and the IEEE Task Force on Ethical and Social Implications of Computational Intelligence. Siegelmann is an associate editor of the Frontiers in Computational Neuroscience journal and has served as an editor for numerous other major journals. Siegelmann was the founding chair of INNS' diversity committee; she also serves as a co-chair of UMass' diversity council of the university senate. Siegelmann is a leader in increasing awareness of ethical issues in AI and in supporting minorities and women in STEM fields.",
        rating: 3,
        difficulty: 3.4,
        reviews: 15,
        id: "siegelmann-hava"
    },
    {
        name: {
            last: "Anderson",
            first: "Gordon"
        },
        email: "gordon@cs.umass.edu",
        phone: "(413) 545-4747",
        tags: [],
        office: "A349B LGRC",
        website: "https://www.cs.umass.edu/~gordon/",
        webpage: "https://www.cics.umass.edu/faculty/directory/anderson_gordon",
        interests: "",
        research: "",
        activities: "",
        rating: 3,
        difficulty: 3.1,
        reviews: 84,
        id: "anderson-gordon"
    },
    {
        name: {
            last: "Venkataramani",
            first: "Arun"
        },
        email: "arun@cs.umass.edu",
        phone: "(413) 545-3651",
        tags: [],
        office: "236 CS Building",
        website: "http://www.cs.umass.edu/~arun/",
        webpage: "https://www.cics.umass.edu/faculty/directory/venkataramani_arun",
        interests: "Distributed Systems and Networking.",
        research: "",
        activities: "Professor Venkataramani was the co-recipient of the J.C. Browne Fellowship that is awarded to an outstanding graduate student in Computer Sciences at UT Austin. He was ranked in the top 40 among more than 100,000 candidates from around India in the entrance examination to the IITs.",
        rating: 1.8,
        difficulty: 4.6,
        reviews: 57,
        id: "venkataramani-arun"
    },
    {
        name: {
            last: "Castro da Silva",
            first: "Bruno"
        },
        email: "bsilva@cs.umass.edu",
        phone: null,
        tags: [],
        office: "278 CS Building",
        website: "https://people.cs.umass.edu/~bsilva/",
        webpage: "https://www.cics.umass.edu/people/castro-da-silva-bruno",
        interests: "Reinforcement learning, decision making, robotics, and AI safety.",
        research: "Professor da Silva is interested in designing reinforcement learning (RL) algorithms that can solve large sets of diverse real-life problems, while ensuring that the learning process is safe according to criteria defined by a designer. To achieve this goal, his research focuses primarily on two key problems: (1) how to design general-purpose RL algorithms capable of autonomously decomposing complex tasks into simpler sub-problems, for which specialized reusable and composable skills be can be learned; and (2) how to ensure that these skills are learned in a way that meets user-specified safety requirements with high probability. These are fundamental questions that underlie the gap between what artificial intelligence agents can - in principle - do and what we can effectively get them to do given our current algorithms. \nThe ultimate goal of Professor da Silva's work is to design the necessary tools so that reinforcement learning algorithms can be widely used to solve challenging real-world tasks in homes and in the workplace, in a safe way, and with as little human intervention as possible. \nMore broadly, Professor da Silva's research interests lie in the intersection of machine learning, reinforcement learning, optimal control theory, and robotics, and include the construction of hierarchical policies, active learning, open-ended learning, biologically-plausible intrinsic motivation mechanisms, Bayesian optimization applied to control, and machine learning algorithms with high-probability safety and fairness guarantees.", activities: "Professor da Silva has published in top AI, machine learning, and robotics conferences and journals, including ICML, AAAI, IJCAI, and Science. He also received multiple Distinguished Reviewer and Distinguished Senior Program Committee Member awards. Professor da Silva regularly serves as a senior program committee member and as a reviewer for most premier conferences on machine learning and robotics, including NeurIPS, ICML, AAAI, IJCAI, AAMAS, UAI, IROS, ICRA, ICLR, RLDM, JAIR, and JMLR. Professor da Silva received the Outstanding Teaching Assistant Award in Computer Science; an award granted by the University of Massachusetts and sponsored by Yahoo! for innovations in teaching and training. In addition to his research, Professor da Silva is also passionate about teaching and about encouraging women and other underrepresented groups in computer science to pursue STEM careers.",
        rating: 5,
        difficulty: 2.9,
        reviews: 7,
        id: "castro da silva-bruno"
    },
    {
        name: {
            last: "Brun",
            first: "Yuriy"
        },
        email: "brun@cs.umass.edu",
        phone: "(413) 577-0233",
        tags: [],
        office: "302 CS Building",
        website: "http://people.cs.umass.edu/~brun",
        webpage: "https://www.cics.umass.edu/faculty/directory/brun_yuriy",
        interests: "Software engineering and systems research, focusing on software fairness and bias, self-adaptive systems, and distributed systems.",
        research: "Professor Brun's research focuses on making it easier to build and deploy software systems, and ensuring that they abide by desirable behavioral constraints. His research is centered around automation and software behavior. He develops techniques that automatically enforce behavior on systems, automatically mine behavioral models of software to help developers understand system behavior, and automatically repair systems to satisfy the behavioral requirements imposed on them. He works closely with developers to understand the challenges they face and to build tools to help them. He works closely with systems to understand where they go wrong and how to automate preventing that from happening. The long-term goal of this research is self-adaptive systems that self-monitor, self-manage, and self-correct their own behavior to achieve high-level goals in dynamic, constrained environments.  Focusing on software fairness, Professor Brun has developed automated techniques to test software, particularly software that uses machine learning or other data mining methods, for bias, and to help enforce fairness constraints during the learning process.",
        activities: "Professor Brun received the US National Science Foundation (NSF) CAREER Award in 2015, the SEAMS Most Influential (test of time) Paper Award in 2020, the IEEE TCSC Young Achiever in Scalable Computing Award in 2013, three ACM SIGSOFT and SIGPLAN Distinguished Paper Awards in 2011, 2017, and 2019, a Best Paper Award in 2017, a Microsoft Research Software Engineering Innovation Foundation Award in 2014, a Google Faculty Research Award in 2015, a Lilly Fellowship for Teaching Excellence in 2017, a College Outstanding Teacher Award in 2017, and two Distinguished Reviewer Awards.  He is a Distinguished Member of the ACM. His work on privacy in cloud computing was a finalist in the ACM Doctoral Dissertation Competition in 2008. Professor Brun regularly serves on program committees of premier conferences on software engineering. One of Professor Brun's passions is promoting science and technology to young and underrepresented future scientists; he serves as a judge at middle- and high-school science fairs and mentors undergraduates in research and in pursuing graduate careers.",
        rating: 4.8,
        difficulty: 3,
        reviews: 5,
        id: "brun-yuriy"
    },
    {
        name: {
            last: "Jensen",
            first: "David"
        },
        email: "jensen@cs.umass.edu",
        phone: "(413) 545-9677",
        tags: [],
        office: "308 CS Building",
        website: "https://groups.cs.umass.edu/jensen/",
        webpage: "https://www.cics.umass.edu/faculty/directory/jensen_david",
        interests: "Machine learning, data science, causal inference, computational social science.",
        research: "Professor Jensen's research focuses on machine learning and data science for analyzing large social, technological, and computational systems.  His current research focuses on methods for constructing accurate causal models from observational and experimental data, with applications to social science, fraud detection, security, and systems management.  Additional research interests include explainable machine learning, statistical relational learning, research methods in computer science, evaluation of machine learning systems, and data science for public policy and social good.",
        activities: "Professor Jensen directs the Knowledge Discovery Laboratory, which he founded in 2000, and he serves as Associate Director of the UMass Computational Social Science Institute.  He regularly serves on program committees for several conferences, including the International Conference on Machine Learning, the Conference on Uncertainty in Artificial Intelligence, the ACM SIGKDD Conference on Knowledge Discovery and Data Mining, and the IEEE International Conference on Data Mining.  He served on the Board of Directors of the ACM Special Interest Group on Knowledge Discovery and Data Mining (2005-2013), the Defense Science Study Group (2006-2007), and DARPA's Information Science and Technology Group (2007-2012).  In 2011, he received the Outstanding Teacher Award from the UMass College of Natural Sciences.",
        rating: 4.7,
        difficulty: 3,
        reviews: 90,
        id: "jensen-david"
    },
    {
        name: {
            last: "Towsley",
            first: "Donald"
        },
        email: "towsley@cs.umass.edu",
        phone: "(413) 545-0207",
        tags: [],
        office: "A327 LGRC",
        website: "http://www-net.cs.umass.edu/personnel/towsley.html",
        webpage: "https://www.cics.umass.edu/faculty/directory/towsley_donald",
        interests: "Quantum networking and distributed computing, distributed learning and inference",
        research: "Professor Towsley's research spans a wide range of activities from quantum and classical networking and secure communications to distributed learning and inference. He pioneered the area of network tomography and the use of fluid models for the analysis and control of large networks. More recently he pioneered the theoretical study of covert communications and is one of the leading researchers in the area of quantum networking. He is one of the highly cited computer scientists with over 250 articles in leading journals.",
        activities: "Professor Towsley has been an Editor-in-Chief of the IEEE/ACM Transactions on Networking, and a co-founding Editor-in-Chief of ACM Transactions on Modeling and Performance Evaluation of Computing Systems. He has also served on numerous editorial boards and as program chair of numerous conferences. He is a five-time recipient of the Best Paper Award of the ACM Sigmetrics Conference and has received four Test of Time Awards for his work.  Towsley is the recipient of one of the IEEE's most prestigious honors, the 2007 IEEE Koji Kobayashi Computers and Communications Award. He has also received Achievement Awards from ACM SIGCOMM and ACM SIGMETRICS.  He is a Fellow of the IEEE and of the ACM.  He also received a UMass Amherst Distinguished Faculty Lecturer award in 2002, a UMass Amherst College of Natural Sciences and Mathematics Faculty Research Award in 2003, a  Samuel F. Conti Faculty Fellowship Award in 2008, and a UMass Award for Outstanding Accomplishments in Research and Creative Activity, 2008.  Last, he was elected to the Brazilian Academy of Sciences as a corresponding member.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "towsley-donald"
    },
    {
        name: {
            last: "Weems",
            first: "Charles"
        },
        email: "weems@cs.umass.edu",
        phone: "(413) 545-3163",
        tags: [],
        office: "342 CS Building",
        website: "http://www.cs.umass.edu/~weems/index.html",
        webpage: "https://www.cics.umass.edu/faculty/directory/weems_charles",
        interests: "Computer architecture, interface between architecture and compilers and run-time systems, microarchitecture, memory systems, parallel architectures and applications, GPU computing.",
        research: "Professor Weems's research interests include computer architecture, memory system architecture, branch prediction, parallel and associative architectures, heterogeneous parallel architectures, media processors, general purpose GPU computing, parallel applications, and integration of compile-time and run-time information in high-performance systems.",
        activities: "Professor Weems is a senior member of IEEE, a member of the advisory committee of the IEEE Technical Committee on Parallel Processing and has served as Vice-Chair of that TC, and is a distinguished member of the ACM. He has edited special issues of Machine Vision and Applications, IEEE Computer, and Parallel Processing Letters, is an area editor for Parallel Computing. He has been General Co-Chair of the IEEE International Parallel and Distributed Processing Symposium three times. He is also the co-author of twenty-eight widely used introductory computer science texts and three monographs. He is a recipient of the University Distinguished Teaching Award.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "weems-charles"
    },
    {
        name: {
            last: "Hanson",
            first: "Allen R."
        },
        email: "hanson@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A231 LGRC",
        website: "http://vis-www.cs.umass.edu/~hanson/home.html",
        webpage: "https://www.cics.umass.edu/faculty/directory/hanson_allen",
        interests: "Computer vision, image interpretation, mobile robotics, aerial image analysis, motion, stereo, 3-D reconstruction, sensor calibration, education.",
        research: "Professor Hanson's research reflects a broad interest in computer vision and visual information processing, including knowledge-based image understanding, analysis of motion sequences, autonomous vehicle navigation, and parallel architectures for computer vision. Emphasis on practical systems is supported by research on databases for visual image processing, photo-interpretation of aerial images, biomedical image analysis, automated robotic manufacturing and assembly, real-time control of intelligent vehicles, and development environments for vision research.",
        activities: "Professor Hanson founded Amerinex Artificial Intelligence Corporation and Dataviews Corporation (formerly VI Corporation), both of which are visual technology oriented companies located in the Amherst, Massachusetts area. He is a member of the IEEE, ACM, and AAAI and has served on the editorial boards of several technical journals.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "hanson-allen r."
    },
    {
        name: {
            last: "Gummeson",
            first: "Jeremy"
        },
        email: "gummeson@cs.umass.edu",
        phone: null,
        tags: [],
        office: "211C Knowles Engineering Building",
        website: "https://www.linkedin.com/in/jeremy-gummeson-1755a8b/",
        webpage: "https://www.cics.umass.edu/people/gummeson-jeremy",
        interests: "Wearable computing, Energy harvesting, RFID systems, backscatter communication, Green computing, Wireless sensor networks.",
        research: "Jeremy's current research spans several areas including energy harvesting wearable devices, backscatter communication systems, distributed wireless sensing, optimizations for home-scale green computing, and low power environmental sensors.",
        activities: "Recipient of the \"Leading the Way\" award at Hewlett Packard (2015). IEEE Outstanding Senior (2006), First recipient of the \"Betterment of the ECE Department\" award (2006), and outstanding teaching assistant award (2006).",
        rating: 5,
        difficulty: 3.3,
        reviews: 7,
        id: "gummeson-jeremy"
    },
    {
        name: {
            last: "Liberatore",
            first: "Marc"
        },
        email: "liberato@cs.umass.edu",
        phone: "(413) 545-3061",
        tags: [],
        office: "318 CS Building",
        website: "http://www.cs.umass.edu/~liberato/",
        webpage: "https://www.cics.umass.edu/faculty/directory/liberatore_marc",
        interests: "Anonymity systems, file and network forensics.",
        research: "Marc's research currently focuses on improving network forensic tools and techniques.",
        activities: "",
        rating: 4.6,
        difficulty: 3.2,
        reviews: 39,
        id: "liberatore-marc"
    },
    {
        name: {
            last: "Richards",
            first: "Tim"
        },
        email: "richards@cs.umass.edu",
        phone: "(413) 545-4704",
        tags: [],
        office: "A351A LGRC",
        website: "https://www.cs.umass.edu/~richards",
        webpage: "https://www.cics.umass.edu/faculty/directory/richards_tim",
        interests: "",
        research: "",
        activities: "",
        rating: 4.8,
        difficulty: 3.3,
        reviews: 66,
        id: "richards-tim"
    },
    {
        name: {
            last: "Huber",
            first: "Meghan"
        },
        email: "mehuber@umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "https://mie.umass.edu/faculty/meghan-huber",
        webpage: "https://www.cics.umass.edu/people/huber-meghan",
        interests: "",
        research: "Meghan Huber's research lies at the intersection of robotics and human neuromotor control, and focuses on understanding how humans and robots can learn from the physical interactions of one another.",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "huber-meghan"
    },
    {
        name: {
            last: "Thota",
            first: "Neena"
        },
        email: "nthota@cs.umass.edu",
        phone: "(413) 545-4595",
        tags: [],
        office: "A353B LGRC",
        website: "http://blogs.umass.edu/nthota",
        webpage: "https://www.cics.umass.edu/faculty/directory/thota-neena",
        interests: "",
        research: "",
        activities: "",
        rating: 2,
        difficulty: 3.9,
        reviews: 44,
        id: "thota-neena"
    },
    {
        name: {
            last: "Grabowicz",
            first: "Przemek"
        },
        email: "grabowicz@cs.umass.edu",
        phone: "(413) 577-1506",
        tags: [],
        office: "362 CS Building",
        website: "https://people.cs.umass.edu/~grabowicz",
        webpage: "https://www.cics.umass.edu/people/grabowicz-przemek",
        interests: "Fair and explainable machine learning, computational social science, social computing systems, network science, causality.",
        research: "Professor Grabowicz's research contributes statistical methods to understand and augment fundamental social processes in systems of our information society. The ambition of his research is to design fair and representative social computing systems, such as rating systems in social media, predictive models of human decision-making, and recommender systems. Important questions concerning the design of these systems include: how to train non-discriminatory machine learning models and how to prevent biases in social evaluations? Professor Grabowicz studies fairness, social influence, group formation, information diffusion, and information processing using multilevel probabilistic graphical models, information theory, network science, and causal inference.",
        activities: "Professor Grabowicz received a prestigious computational social science grant from the Volkswagen Foundation in 2017, the Data Challenge prize from the Waterloo Institute for Complexity & Innovation in 2013, the Jae Predoc fellowship from the Spanish National Research Council in 2009, and the M. Krol scholarship in 2004-2008 from the Warsaw University of Technology. He has served as an Area Chair for ECML-PKDD and ICWSM, on the program committees for several scientific conferences, including WWW, ICWSM, WebSci, SocInfo, IC2S2, NetSci, and as a reviewer for multiple scientific journals. He signed the Cost of Knowledge open letter in 2012.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "grabowicz-przemek"
    },
    {
        name: {
            last: "Merlino",
            first: "Nick"
        },
        email: "nmerlino@umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/people/merlino-nick",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "merlino-nick"
    },
    {
        name: {
            last: "Serafini",
            first: "Marco"
        },
        email: "marco@cs.umass.edu",
        phone: "(413) 577-0354",
        tags: [],
        office: "A335 LGRC",
        website: "https://marcoserafini.github.io",
        webpage: "https://www.cics.umass.edu/people/serafini-marco",
        interests: "",
        research: "",
        activities: "",
        rating: 2.4,
        difficulty: 3.3,
        reviews: 20,
        id: "serafini-marco"
    },
    {
        name: {
            last: "Hajiesmaili",
            first: "Mohammad"
        },
        email: "hajiesmaili@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A323 LGRC",
        website: "https://groups.cs.umass.edu/hajiesmaili",
        webpage: "https://www.cics.umass.edu/people/hajiesmaili-mohammad",
        interests: "Carbon-intelligent computing, data-driven online optimization",
        research: "Mohammad's research centers on studying fundamental design problems under uncertainty in a wide range of application domains. More specifically, Mohammad uses theoretical tools from optimization, machine learning, and algorithm, to design rigorous systems that work provably efficient in uncertain settings. The current target application domains are (i) computer networks and data center optimization; and (ii) energy systems, including electric vehicles.",
        activities: "Professor Hajiesmaili's research is supported by an NSF CAREER Award, a Google Faculty Research Award, and other grants from NSF, VMWare, and Adobe. Five of his recent papers were selected as the finalists for the best paper award in ACM eEnergy 2015, 2016, 2020, and 2021. He serves on the Program Committee for multiple conferences such as ACM Sigmetrics and ACM eEnergy.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "hajiesmaili-mohammad"
    },
    {
        name: {
            last: "Kim",
            first: "Donghyun"
        },
        email: "donghyunkim@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A325 LGRC",
        website: "https://groups.cs.umass.edu/daros",
        webpage: "https://www.cics.umass.edu/people/kim-donghyun",
        interests: "Robotics, Legged Locomotion, Dynamics and Control, Vision Sensing, Machine Learning",
        research: "Donghyun has been focusing on developing control architectures for dynamic legged robots. He emphasizes the experimental validation of the developed formulations and the discussion of fundamental problems in robotic systems operating in the real physical world. He devises control systems including sensing, planning, and feedback controllers by accounting for robot dynamics, real-time constraints, and hardware limitations. Donghyun is extending the research field to perception and machine intelligence to make the robotic system more dynamic and versatile. His ultimate goal is to build robots that can rapidly and autonomously explore over all-type terrains like humans and animals.",
        activities: "Donghyun awarded the best paper award in Transactions on Mechatronics in 2020. His work published in Transactions on Robotics in 2016 is selected as a finalist of the best whole-body control paper and video. Donghyun has served as a reviewer for major conferences and journals in robotics and control.",
        rating: 5,
        difficulty: 3,
        reviews: 2,
        id: "kim-donghyun"
    },
    {
        name: {
            last: "Shenoy",
            first: "Prashant"
        },
        email: "shenoy@cs.umass.edu",
        phone: "(413) 577-0850",
        tags: [],
        office: "A333 LGRC",
        website: "http://www.cs.umass.edu/~shenoy/",
        webpage: "https://www.cics.umass.edu/faculty/directory/shenoy_prashant",
        interests: "Distributed systems, networking, and sustainability.",
        research: "Professor Shenoy's research focuses on systems issues for distributed systems ranging from large server clusters to networks of small sensors. Current research projects in his lab include (i) cloud and edge computing, (ii) mobile computing and Internet of Things, and (iii) energy and sustainability.",
        activities: "Prof. Shenoy's research has won seventeen best paper or best paper runner-up awards, and an ACM Sigmetrics Test of Time award. He has been the recipient of a Conti Research Fellowship,  NASA AES Innovation award,  NSF Career Award, IBM Faculty Partnership Award, Google Faculty award, a Lilly Foundation Teaching Fellowship, the Univ. of Texas Computer Science Best Dissertation Award, and an IIT Bombay Silver Medal. He is a Fellow of the ACM, IEEE, and AAAS.",
        rating: 4.6,
        difficulty: 3.8,
        reviews: 7,
        id: "shenoy-prashant"
    },
    {
        name: {
            last: "Iyyer",
            first: "Mohit"
        },
        email: "miyyer@cs.umass.edu",
        phone: null,
        tags: [],
        office: "258 CS Building",
        website: "https://people.cs.umass.edu/~miyyer/",
        webpage: "https://www.cics.umass.edu/people/iyyer-mohit",
        interests: "",
        research: "",
        activities: "",
        rating: 4.3,
        difficulty: 3.6,
        reviews: 7,
        id: "iyyer-mohit"
    },
    {
        name: {
            last: "Kermani",
            first: "Parviz"
        },
        email: "parviz@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A263 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/kermani-parviz",
        interests: "",
        research: "",
        activities: "",
        rating: 4.2,
        difficulty: 3.6,
        reviews: 16,
        id: "kermani-parviz"
    },
    {
        name: {
            last: "Wang",
            first: "Rui"
        },
        email: "ruiwang@cs.umass.edu",
        phone: "(413) 545-3147",
        tags: [],
        office: "270 CS Building",
        website: "http://www.cs.umass.edu/~ruiwang/",
        webpage: "https://www.cics.umass.edu/faculty/directory/wang_rui",
        interests: "Computer graphics, global illumination algorithms, real-time rendering, graphics hardware, 3D scanning and image processing",
        research: "Professor Wang's research interests are in computer Graphics: Global Illumination Algorithms, Real-Time Rendering, 3D Scanning and Reconstruction, Graphics Hardware, Image Processing. His dissertation research focuses on developing new interactive techniques for high-quality, realistic image synthesis using wavelet-based precomputation.",
        activities: "Professor Wang received an NSF CAREER award in 2008.",
        rating: 4.3,
        difficulty: 3.8,
        reviews: 68,
        id: "wang-rui"
    },
    {
        name: {
            last: "Macbeth",
            first: "Jamie"
        },
        email: "jmacbeth@smith.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://jamiemacbeth.com/",
        webpage: "https://www.cics.umass.edu/people/macbeth-jamie",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "macbeth-jamie"
    },
    {
        name: {
            last: "Le",
            first: "Hung"
        },
        email: "hungle@cs.umass.edu",
        phone: null,
        tags: [],
        office: "332 CS Building",
        website: "https://hunglvosu.github.io",
        webpage: "https://www.cics.umass.edu/people/le-hung",
        interests: "Algorithm design, theoretical computer science, combinatorial optimization, graph algorithms, metric embedding, distributed algorithms.",
        research: "Professor Le has been focusing on designing algorithms for graph problems. He is particularly interested in understanding the power and limits of structures of graphs in algorithm design. His major contributions include efficient approximation algorithms for the Travelling Salesperson Problem, constructions of optimally sparse and light networks, and providing theoretical guarantees for local search heuristics.",
        activities: "Professor Le was awarded PIMS postdoctoral fellowship. He co-chaired the SIAM Symposium on Simplicity in Algorithms (SOSA21). He has served as a reviewer for major conferences and journals in theoretical computer science.",
        rating: 5,
        difficulty: 5,
        reviews: 1,
        id: "le-hung"
    },
    {
        name: {
            last: "Flaherty",
            first: "Patrick"
        },
        email: "pflaherty@umass.edu",
        phone: "(413) 545-1796",
        tags: [],
        office: "1444 LGRT",
        website: "http://www.math.umass.edu/directory/faculty/patrick-flaherty",
        webpage: "https://www.cics.umass.edu/people/flaherty-patrick",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "flaherty-patrick"
    },
    {
        name: {
            last: "Du",
            first: "Xian"
        },
        email: "xiandu@umass.edu",
        phone: "(413) 577-0941",
        tags: [],
        office: "S421 Life Science Laboratories",
        website: "https://mie.umass.edu/faculty/xian-du",
        webpage: "https://www.cics.umass.edu/people/du-xian",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "du-xian"
    },
    {
        name: {
            last: "Klemperer",
            first: "Peter"
        },
        email: "pklemperer@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/people/klemperer-peter",
        interests: "",
        research: "",
        activities: "",
        rating: 1.8,
        difficulty: 3.3,
        reviews: 4,
        id: "klemperer-peter"
    },
    {
        name: {
            last: "Diao",
            first: "Yanlei"
        },
        email: "yanlei.diao@polytechnique.edu",
        phone: "(413) 545-1135",
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~yanlei/",
        webpage: "https://www.cics.umass.edu/faculty/directory/diao_yanlei",
        interests: "Information architectures, data streams, data dissemination, XML query pro-cessing, and learning-based data processing.",
        research: "Professor Diao's research interests are Information architectures, data streams, data dissemination, XML query pro-cessing, and learning-based data processing.",
        activities: "",
        rating: 1,
        difficulty: 2.5,
        reviews: 2,
        id: "diao-yanlei"
    },
    {
        name: {
            last: "Zink",
            first: "Michael"
        },
        email: "zink@ecs.umass.edu",
        phone: "(413) 545-4465",
        tags: [],
        office: "ECE",
        website: "http://www.ecs.umass.edu/index.pl?id=6263&isa=Category&op=show",
        webpage: "https://www.cics.umass.edu/faculty/directory/zink_michael",
        interests: "Integrative Systems Engineering, sense-and-response sensor networks, sensor virtualization, distribution of high-bandwidth, high-volume data, the design and analysis of long-distance wireless networks, and network measurements",
        research: "He works in the fields of sensor and distribution networks for high bandwidth data. Further research interests are in wide-area multimedia distribution for wired and wireless environments and network protocols. He is one of the developers of the KOMSSYS streaming platform.",
        activities: "Dr. Zink is a member of IEEE and ACM. He received the Best Paper Award at Multimedia Computing and Networking in 2008.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "zink-michael"
    },
    {
        name: {
            last: "Lesser",
            first: "Victor R."
        },
        email: "lesser@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://mas.cs.umass.edu/lesser.html",
        webpage: "https://www.cics.umass.edu/faculty/directory/lesser_victor",
        interests: "Multi-agent systems, agents, real-time decision making, information gathering, situation assessment and interpretation of sensory data.",
        research: "Professor Lesser's major research focus is on the control and organization of complex AI systems. Professor Lesser is considered a leading researcher in the areas of Multi-Agent Systems/Distributed AI, Intelligent Distributed Sensor Networks, Real-time AI, and Blackboard Systems. He has also made contributions in the areas of speech and sound understanding, diagnostics, adaptive signal processing, intelligent user interfaces, and computer architecture.",
        activities: "Professor Lesser is a Founding Fellow of the Association for the Advancement of Artificial Intelligence (AAAI) and an IEEE Fellow. He was General Chair of the first international conference on Multi-Agent Systems (ICMAS) in 1995, and Founding President of the International Foundation of Autonomous Agents and Multi-Agent Systems (IFAAMAS) in 1998. To honor his contributions to the field of multi-agent systems, IFAAMAS established the \"Victor Lesser Distinguished Dissertation Award.\" He received the UMass Amherst College of Natural Sciences and Mathematics (NSM) Outstanding Teaching Award (2004) and Outstanding Research Award (2008), and the Chancellor's Award for Outstanding Accomplishments in Research and Creative Activity (2008). Professor Lesser was also the recipient of the IJCAI-09 Award for Research Excellence.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "lesser-victor r."
    },
    {
        name: {
            last: "Fountain",
            first: "Jane"
        },
        email: "jfountai@umass.edu",
        phone: "(413) 545-1007",
        tags: [],
        office: null,
        website: "http://people.umass.edu/jfountai/",
        webpage: "https://www.cics.umass.edu/faculty/directory/fountain_jane",
        interests: "Organization theory, information technology and politics, economic sociology, public policy, political sociology, gender, and science, technology and society.",
        research: "Professor Fountain is the founder and Director of the National Center for Digital Government , based at UMass Amherst, which was established with support from the National Science Foundation to build research and infrastructure for the emerging field of research on technology and governance. The National Center has sponsored research workshops, seminars, doctoral fellowships and visiting researchers from around the world in addition to its active research programs. Professor Fountain also directs the new Science, Technology and Society Initiative, a campus-wide effort at UMass Amherst. The STS Initiative serves as a catalyst for research partnerships between social, natural and physical scientists on campus and beyond. It is designed to build social science, policy and cross-disciplinary research on the range of social, political and economic challenges and research questions posed by emerging technologies. Fountain is a Senior Researcher at the Center for Hierarchical Manufacturing, principal investigator of the International Dimensions of Ethics in Science and Engineering project (IDEESE) and co-principal investigator of the Commonwealth Alliance for Information Technology Education (CAITE). Fountain also directs the Women in the Information Age Project , which was established with a gift from PriceWaterhouseCoopers. This project examines the participation of women in computing and information-technology related fields and, with its partner institutions, seeks to increase the number of women experts in information and communication technologies.",
        activities: "Among many other publications, Fountain is the author of Building the Virtual State: Information Technology and Institutional Change (Brookings Institution Press, 2001), which was awarded an Outstanding Academic Title in 2002 by Choice and translated into Chinese, Portuguese and Japanese. Her articles appear scholarly journals including Governance, the National Civic Review, Technology in Society , Science and Public Policy, and The Communications of the Association for Computing Machinery. Fountain is currently a member of the World Economic Forum Global Advisory Council on the Future of Government. She is a member of American Bar Association blue ribbon commission on the Future of e-Rulemaking. She has served on several advisory bodies for organizations including the Social Science Research Council, the Internet Policy Institute, the National Science Foundation. She has given invited lectures and keynote addresses and worked with governments and research institutions including the World Bank, the European Commission, Knowledge Management Asia Pacific, Japan, Portugal, the Netherlands, Nicaragua, Chile, Estonia, Hungary, Slovenia, Saudi Arabia, and the United Arab Emirates. For a list of Fountain's grants, honors and awards, view http://people.umass.edu/jfountai/research.htm#honors. For information on her academic appointments, professional activities, and service, view http://people.umass.edu/jfountai/affiliations.htm.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "fountain-jane"
    },
    {
        name: {
            last: "Gan",
            first: "Chuang"
        },
        email: "chuangg@cics.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: null,
        webpage: "https://www.cics.umass.edu/people/gan-chuang",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "gan-chuang"
    },
    {
        name: {
            last: "Houmansadr",
            first: "Amir"
        },
        email: "amir@cs.umass.edu",
        phone: "(413) 577-2580",
        tags: [],
        office: "206 CS Building",
        website: "https://cs.umass.edu/~amir/",
        webpage: "https://www.cics.umass.edu/faculty/directory/houmansadr_amir",
        interests: "Privacy-Enhancing Technologies, Network Security, Adversarial Machine Learning",
        research: "Amir's research group evaluates the privacy of in-the-wild Internet services, such as messaging applications, IoT devices, and machine learning APIs,  and designs and implements tools to enhance the privacy of Internet users, such as anti-censorship systems. To this end, Amir's research group combines the development of practical systems with rigorous theoretical analysis, and incorporates techniques from various disciplines such as computer networking, cryptography, and information theory. The specific problems his research group is currently exploring include Internet censorship resistance, network traffic analysis, covert communications, and machine learning security and privacy. Amir's research has found flaws in popular privacy-preserving tools, and has led to the advent of novel designs to overcome these problems.",
        activities: "Amir's work has been publicized in the media through interviews, and he has received several awards for his research, including an NSF CAREER Award in 2016, a Google Faculty Research Award in 2015, and the 2013 Best Practical Paper award of the IEEE Symposium on Security & Privacy (Oakland). Amir serves regularly on the technical program committees and editorial boards of top-tier conferences and journals in the area of security and privacy.",
        rating: 4.3,
        difficulty: 2.4,
        reviews: 7,
        id: "houmansadr-amir"
    },
    {
        name: {
            last: "Adrion",
            first: "Rick"
        },
        email: "adrion@umass.edu",
        phone: "(413) 545-2475",
        tags: [],
        office: "224A CS Building",
        website: "https://sites.google.com/view/rickadrionswebsite",
        webpage: "https://www.cics.umass.edu/faculty/directory/adrion_richards",
        interests: "CS Education research; CS Education policy and models for state and local change; impact of instructional technology on teaching and learning; history of computing and information sciences, and applications and models for technology transfer and diffusion.",
        research: "After a long career in software engineering, analysis and testing, Professor Adrion's current research interests are in equity, diversity and inclusion; pedagogy and technologies for computer science teaching and learning, automatic capture and indexing of active classroom activities, multimedia authoring tools, and constructivist learning environments. Adrion has led a number of large regional and national programs, including the Commonwealth Information Technology Initiative (CITI) 2003–2006, the Commonwealth Alliance for Information Technology Education (CAITE) 2006–2012, and the Expanding Computing Education Pathways Alliance from 2011–2019.",
        activities: "Professor Adrion is a Fellow of the Association for Computing Machinery and the American Association for the Advancement of Science. He was the founding Editor-in-Chief of ACM Transactions on Software Engineering and Methodology. He has served on the organizing and program committees for numerous conferences, including as General Chair of the IEEE International Conference on Software Engineering and the ACM Symposium on the Foundations of Software Engineering. He has served on several federal advisory committees and boards, including NSF/CISE, NSF/CDA. NSF/NCRI, NIH/NLM. NIH/NINDS, NASA/CESDIS, NRC/COSEPUP and the National Superconducting Supercollider. He was a founding member of the Computing Research Association (CRA) Board of Directors.",
        rating: 2.7,
        difficulty: 3,
        reviews: 3,
        id: "adrion-rick"
    },
    {
        name: {
            last: "Ganesan",
            first: "Deepak"
        },
        email: "dganesan@cs.umass.edu",
        phone: "(413) 545-2450",
        tags: [],
        office: "A343 LGRC",
        website: "http://www.cs.umass.edu/~dganesan/",
        webpage: "https://www.cics.umass.edu/faculty/directory/ganesan_deepak",
        interests: "Wireless health sensing, ubiquitous computing, wireless communication, embedded systems, energy harvesting, and machine learning for sensor data.",
        research: "Professor Ganesan's research is at the intersection of low-power sensing and communication, networked systems, and machine learning to enable pervasive sensing at scale for societal applications. His recent work includes the design of ultra-low passive radios for wearables, novel wearable technologies such as low-power eye trackers to monitor health signals, and robust detection of important health targets such as drug use, smoking, and over-eating. He is a thrust lead on the NIH funded MD2K Center for Excellence on Mobile Sensor-to-Knowledge and on the executive committee of the Center for Personal Health Monitoring at UMass Amherst.",
        activities: "Professor Ganesan received the NSF CAREER Award in 2006 and the IBM Faculty Award in 2008. He was selected as a UMass Junior Faculty Fellow in 2008, and a UMass Lilly Teaching Fellow in 2009. He was a Program co-chair for ACM SenSys 2010, IEEE SECON 2013, and co-founded the ACM HotWireless workshop in 2014. His recent work has been recognized by a Best Paper Award Runner-up at Mobicom 2014, a Best Paper Award at CHI 2013, and two honorable mentions at Ubicomp 2013.",
        rating: 3.9,
        difficulty: 3,
        reviews: 11,
        id: "ganesan-deepak"
    },
    {
        name: {
            last: "Zamani",
            first: "Hamed"
        },
        email: "zamani@cs.umass.edu",
        phone: "(413) 545-0129",
        tags: [],
        office: "350 CS Building",
        website: "https://groups.cs.umass.edu/zamani/",
        webpage: "https://www.cics.umass.edu/people/zamani-hamed",
        interests: "Information retrieval, recommender systems, and machine learning.",
        research: "Professor Zamani's research focuses on designing and evaluating statistical and machine learning models with applications to (interactive) information access systems, including search engines, recommender systems, and question answering. Towards these goals he has developed efficientand effective deep learning models for various foundational information retrieval tasks, e.g., document ranking, in addition to some emerging applications, e.g., conversational search.",
        activities: "Professor Zamani serves on the program committees for major conferences in information retrieval (SIGIR, CIKM, WWW, WSDM, etc), and has served as a guest editor of ACM Transactions on Information Systems (TOIS). He received the Outstanding Graduate Student Award and Outstanding Dissertation Award from the College of Information and Computer Sciences at the University of Massachusetts Amherst in 2017 and 2020, respectively.",
        rating: 5,
        difficulty: 2,
        reviews: 1,
        id: "zamani-hamed"
    },
    {
        name: {
            last: "Learned-Miller",
            first: "Erik"
        },
        email: "elm@cs.umass.edu",
        phone: "(413) 545-2742",
        tags: [],
        office: "202 CS Building",
        website: "http://www.cs.umass.edu/~elm/",
        webpage: "https://www.cics.umass.edu/faculty/directory/learned-miller_erik",
        interests: "Computer vision and machine learning. Deep learning. Probabilistic and statistical methods in vision and image processing. Non-parametric and distribution-free statistics. Information theoretic methods. Unsupervised and semi-supervised learning. Low-shot learning.",
        research: "Professor Learned-Miller's interests can be broadly categorized as applying ideas and methods from machine learning to problems in computer vision. His research has included work on the following problems: learning from one example (one-shot learning), face recognition and face detection, segmentation of moving objects in video, algorithms for the joint alignment of unlabeled images, and text recognition. He has produced some of the most widely used benchmarks in face recognition research, including Labeled Faces in the Wild and the Face Detection Database and Benchmark. His current work focuses on unsupervised, self-supervised, and semi-supervised learning, and on mechanisms for regulating face recognition technology.",
        activities: "Professor Learned-Miller received the Microsoft-MIT graduate student fellowship. He holds a patent for \"apparatus for neurosurgical stereotactic procedures.\" Learned-Miller is on the editorial board of the Journal of Machine Learning Research and was program chair for the 2015 Computer Vision and Pattern Recognition conference. He received an NSF CAREER Award in 2006. In 2019, he received the Mark Everingham Award for contributions to the computer vision community for his development of the Labeled Faces in the Wild database.",
        rating: 1.6,
        difficulty: 3.3,
        reviews: 13,
        id: "learned-miller-erik"
    },
    {
        name: {
            last: "Krishnamurthy",
            first: "Akshay"
        },
        email: "akshay@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "https://www.cics.umass.edu/~akshay",
        webpage: "https://www.cics.umass.edu/faculty/directory/krishnamurthy-akshay",
        interests: "Statistical Machine Learning, Interactive Learning, Reinforcement Learning",
        research: "Professor Krishnamurthy's research interests are in machine learning and statistics. He is most interested in design and analysis of machine learning algorithms that judiciously acquire data in a feedback-driven manner, a paradigm referred to as interactive learning. His work in this area spans both unsupervised methods for exploratory data analysis and supervised methods for complex prediction problems. His recent focus is on sample-efficient exploration in reinforcement learning.",
        activities: "Professor Krishnamurthy was awarded the National Science Foundation Graduate Research Fellowship during his Ph.D. in 2010. He also received the Best Student Paper Award at the Asilomar Conference on Signals, Systems and Computers in 2013.",
        rating: 2.5,
        difficulty: 3.9,
        reviews: 11,
        id: "krishnamurthy-akshay"
    },
    {
        name: {
            last: "Parvini",
            first: "Ghazaleh"
        },
        email: "gparvini@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A231 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/parvini-ghazaleh",
        interests: "Algorithms, Combinatorial Algorithms, Graph Theory, Computational Biology, Discrete Mathematics",
        research: "Ghazaleh's current research focuses on Phylogenetic Decisiveness. Phylogenetic Decisiveness is in close relation with the No-rainbow Coloring Problem in Graph Theory which is known to be NP-Complete. Her main interest is trying to give some exact or randomized algorithms and finding new bounds to make the naive algorithm faster and more efficient.",
        activities: "",
        rating: 3.5,
        difficulty: 4.3,
        reviews: 21,
        id: "parvini-ghazaleh"
    },
    {
        name: {
            last: "Xiong",
            first: "Jie"
        },
        email: "passionxj@gmail.com",
        phone: null,
        tags: [],
        office: "A341 LGRC",
        website: "https://people.cs.umass.edu/~jxiong/",
        webpage: "https://www.cics.umass.edu/people/xiong-jie",
        interests: "",
        research: "",
        activities: "2020: ACM MobiCom Best Paper Honourable Mention\n\t 2019: ACM SenSys Best Paper Candidate\n\t 2018: ACM SenSys Best Poster Award\n\t 2016: BCS/CHPC Distinguished Dissertation Award, runner-up\n\t 2014: ACM CoNEXT Best Paper Award\n\t 2012: Google European Doctoral Fellowship\n\t 2010: ACM SIGCOMM Student Research Competition 3rd place",
        rating: 4.1,
        difficulty: 2.6,
        reviews: 14,
        id: "xiong-jie"
    },
    {
        name: {
            last: "Zuckerman",
            first: "Ethan"
        },
        email: "ethanz@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A141 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/zuckerman-ethan",
        interests: "Civic media, online community governance, digital public infrastructure, quantitative studies of media attention, technology and social change.",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "zuckerman-ethan"
    },
    {
        name: {
            last: "Zick",
            first: "Yair"
        },
        email: "yzick@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A217C LGRC",
        website: "https://people.cs.umass.edu/~yzick/",
        webpage: "https://www.cics.umass.edu/people/zick-yair",
        interests: "Game theory, fair division, strategic collaborative behavior, and their applications in various domains. Also interested in algorithmic transparency, and ethics in AI/ML.",
        research: "Yair Zick is currently working on a variety of topics at the intersection of game theory, fair division and AI. His core interests are in computational aspects of game theory and fair division. Currently, he works on the fair allocation of indivisible resources, with a particular focus on justice criteria such as envy-freeness, stability and diversity. He is also interested in making machine learning models more trustworthy, by ensuring that we can explain their decisions in a reasonable manner, while preserving other criteria such as fairness and privacy. Finally, he is interested in applying machine learning concepts to game theory, in particular in how learning-theoretic concepts can be applied to obtain data-driven solutions to problems in game theory and economics.",
        activities: "2011 AAMAS Best Student Paper award\n\t2014 Victor Lesser IFAAMAS Distinguished Dissertation award\n\t2016 ACM EC Best Paper award\n\t2017 Singapore NRF fellowship\n\t2019 NUS Faculty of Law TRAIL fellowship\n\t2020 AAAI Outstanding Senior Program Committee Member Award",
        rating: 4,
        difficulty: 3.5,
        reviews: 2,
        id: "zick-yair"
    },
    {
        name: {
            last: "Taneja",
            first: "Jay"
        },
        email: "jtaneja@umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://www.jaytaneja.com",
        webpage: "https://www.cics.umass.edu/people/taneja-jay",
        interests: "Design of mobile and networked systems; technology for development; data science.",
        research: "Professor Taneja studies the application of computing tools to measuring and managing infrastructure in the developed and developing world, including energy and building systems, but also transportation, water, and sanitation systems.",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "taneja-jay"
    },
    {
        name: {
            last: "Obara",
            first: "Justin"
        },
        email: "jobara@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A265 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/obara-justin",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "obara-justin"
    },
    {
        name: {
            last: "Guan",
            first: "Hui"
        },
        email: "huiguan@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A217D LGRC",
        website: "https://guanh01.github.io/",
        webpage: "https://www.cics.umass.edu/people/guan-hui",
        interests: "Programming Systems, Machine Learning, Deep Learning, High Performance Computing",
        research: "Guan's research lies in the intersection of machine mearning and programming systems. Her current research focuses on improving machine learning (e.g., speed, scalability, reliability) through innovations in algorithms and programming systems (e.g., compilers, runtime). She is also interested in leveraging machine learning to improve high-performance computing.",
        activities: "NCSU ECE Distinguished Dissertation Award, NCSU, 2020\n\tIBM PhD Fellowship, IBM, 2015-2018",
        rating: 2.5,
        difficulty: 2.9,
        reviews: 8,
        id: "guan-hui"
    },
    {
        name: {
            last: "Mei",
            first: "Siobhan"
        },
        email: "siobhanander@umass.edu",
        phone: null,
        tags: [],
        office: "338 CS Building",
        website: null,
        webpage: "https://www.cics.umass.edu/people/mei-siobhan",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "mei-siobhan"
    },
    {
        name: {
            last: "Lan",
            first: "Andrew"
        },
        email: "andrewlan@cs.umass.edu",
        phone: null,
        tags: [],
        office: "230 CS Building",
        website: "https://people.umass.edu/~andrewlan/",
        webpage: "https://www.cics.umass.edu/people/lan-andrew",
        interests: "Personalized education, convex optimization, probabilistic models, machine learning, signal processing.",
        research: "Andrew's research focuses on the development of human-in-the-loop machine learning methods to enable scalable, effective, and fail-safe personalized learning in education, by collecting and analyzing massive and multi-modal learner and content data. This massive and multi-modal learner and content data can be collected in both traditional classrooms and online learning platforms, e.g., during massive open online courses (MOOCs). His vision is to develop a system that delivers high-quality, affordable, and personalized learning experiences to every learner in the world. He is also broadly interested in areas including convex optimization, probabilistic models, machine learning, and signal processing.",
        activities: "Andrew serves regularly on program committees of several conferences on educational data mining, machine learning, and signal processing. He has also co-organized a series of workshops on machine learning for education; see http://ml4ed.cc/ for details. Some of his works have been integrated into OpenStax Tutor, a commercial-grade personalized learning platform.",
        rating: 3.9,
        difficulty: 3.5,
        reviews: 34,
        id: "lan-andrew"
    },
    {
        name: {
            last: "Minea",
            first: "Marius"
        },
        email: "marius@cs.umass.edu",
        phone: "(413) 545-1734",
        tags: [],
        office: "A261 LGRC",
        website: "https://people.cs.umass.edu/~marius/",
        webpage: "https://www.cics.umass.edu/people/minea-marius",
        interests: "Formal methods with focus on model checking, program analysis, modeling and verification of security protocols, symbolic execution and testing.",
        research: "Marius' research lies at the intersection of formal verification, security, and software engineering. He applies techniques grounded in formal methods to analyze the correctness and security of software systems, including protocols, web applications and services. He has worked on formally modeling security properties and attacks, extracting abstract verifiable models from programs, and is particularly interested in detecting program errors and vulnerabilities.",
        activities: "Marius has co-authored papers that won Best Paper Awards at Euro-VHDL 1992 and 1994, and received a Romanian student-voted national teaching award (\"Bologna Professor\") in 2015. Marius was a PC co-chair for the International Conference on Risks and Security of Internet and Systems (CRiSIS) in 2010, and serves on the PC of conferences and as reviewer for journals in formal methods, security and software engineering.",
        rating: 3.1,
        difficulty: 4.9,
        reviews: 174,
        id: "minea-marius"
    },
    {
        name: {
            last: "Haas",
            first: "Peter"
        },
        email: "phaas@cs.umass.edu",
        phone: "(413) 545-3140",
        tags: [],
        office: "204 CS Building",
        website: "https://people.cs.umass.edu/~phaas",
        webpage: "https://www.cics.umass.edu/people/haas-peter",
        interests: "Information management; mining, analytics, and exploration of massive data; probabilistic database systems; machine learning; modeling and computer simulation of complex stochastic systems.",
        research: "Professor Haas' research centers on the application of techniques from applied probability and statistics to the design, performance analysis, and control of systems for information management, mining, integration, exploration, learning, and optimization. Other projects focus on techniques for modeling, simulation, design, and control of complex systems, especially discrete-event stochastic systems, as well as on the interface of simulation and information management.",
        activities: "Professor Haas is a Fellow of both ACM and INFORMS and a member of Sigma Xi. He served as Vice President and then President of the INFORMS Simulation Society (I-Sim) from 2008-2012, and he joined the Winter SImulation Conference Board in 2020. He serves on the editorial boards of ACM Transactions on Modeling and Computer Simulation (where he has co-edited three special issues), and ACM Transactions on Databases. He served on the editorial board of Operations Research from 1995 to 2018, and from 2007 to 2013 he was an Associate Editor for the VLDB Journal, where he co-edited a special issue on Uncertain and Probabilistic Databases. He was Program Chair for the 2019 Winter Simulation Conference, and has been co-chair of the 2011 and 2017 I-Sim Research Workshops. He has served on numerous program committees for conferences including SIGMOD, VLDB, PODS, SSDBM, and KDD. Within IBM, he has been granted over 30 patents and was designated a Master Inventor in 2012, as well as earning an Outstanding Technical Achievement Award, Outstanding Innovation Award, and Research Division Award for his contributions to IBM products including the IBM DB2 Database System. He is a six-time winner of the IBM Research Division Pat Goldberg Memorial Paper Award, an IBM record. Other awards include a 2019 and a 2016 SIGMOD Research Highlights Award, 2018 EDBT Best Paper Award, 2016 VLDB Best Paper Award, 2011 NIPS Big Learning Workshop Best Paper Award, 2007 SIGMOD Test-of-Time Award, and the I-Sim 2003 Outstanding Publication Award for his monograph on stochastic Petri nets. His work has twice been recognized in the Research Highlights section of Communications of the ACM.",
        rating: 4.5,
        difficulty: 4,
        reviews: 11,
        id: "haas-peter"
    },
    {
        name: {
            last: "Immerman",
            first: "Neil"
        },
        email: "immerman@cs.umass.edu",
        phone: "(413) 545-1862",
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~immerman/",
        webpage: "https://www.cics.umass.edu/faculty/directory/immerman_neil",
        interests: "Logic in Computer Science, computer-aided verification, complexity theory, database theory.",
        research: "Professor Immerman is one of the key developers of an active research program called descriptive complexity. This area applies logic to computational complexity, discerning strong mathematical structure underlying standard complexity measures. In a striking series of results, Professor Immerman has shown how all important complexity measures have natural descriptive characterizations. Using this characterization of complexity classes, Professor Immerman showed the very surprising result that non-deterministic space is closed under complement. The negation of this result was a common, well-believed conjecture that had stood open for twenty-five years. Robert Szelepcsenyi proved this result independently.",
        activities: "Professor Immerman is the winner, jointly with Robert Szelepcsenyi, of the 1995 Godel Prize in theoretical computer science. He has chaired several program committees (International Workshop on Logic and Computational Complexity, Finite Model Theory Workshop, and Structure in Complexity Theory Workshop), served on many program committees, including LICS, PODS, STOC, and Structures, and served on a number of editorial boards (SIAM Journal of Computing, Chicago Journal of Theoretical Computer Science, Information and Computation, and Journal of Symbolic Logic). He currently serves as an associate editor on Logical Methods in Computer Science and edits the Logic and Complexity column for the ACM SigLog newsletter. He is also an ACM Fellow and a Guggenheim Fellow.",
        rating: 4.2,
        difficulty: 3.5,
        reviews: 24,
        id: "immerman-neil"
    },
    {
        name: {
            last: "Mahyar",
            first: "Narges"
        },
        email: "nmahyar@cs.umass.edu",
        phone: "(413) 577-0063",
        tags: [],
        office: "A211H LGRC",
        website: "http://groups.cs.umass.edu/nmahyar/",
        webpage: "https://www.cics.umass.edu/people/mahyar-narges",
        interests: "Human-Computer Interaction (HCI), Information Visualization, Digital Civics, Social Computing, Crowdsourcing, and Design Thinking.",
        research: "Professor Mahyar's research falls at the intersection of social computing and design with the goal of augmenting groups' abilities to solve complex problems. She designs, develops, and evaluates novel social computing and visualization techniques that help people (both experts and non-experts) make better decisions. More recently, she has focused on exploring new strategies for scaling and diversifying public engagement in massive decision-making processes related to civic issues. Her work aims to advance civic technology that alleviates social inequality by including marginalized perspectives and leveraging the diversity of viewpoints and experiences to drive collective innovation. To build these technologies, she works closely with domain experts and affected population groups to understand their activities, current challenges, and ultimate goals.",
        activities: "Professor Mahyar's research on digital civics has been covered by several news articles. Her research papers have received awards at the premier venues in Visualization, Social computing, and Landscape Architecture, including the outstanding paper award from Council of Educators in Landscape Architecture 2017, the honorable mention award from Interactive Surfaces and Spaces conference in 2016 and the best paper award from IEEE VAST 2014. Currently, she is serving as the paper co-chair for ACM Creativity and Cognition Conference 2021. She has served on organizing committee for IEEE VIS 2019 conference, and program committee of CHI 2018 Late-Breaking Work (LBW), Creativity and Cognition Conference (CC), Interactive Surfaces and Spaces (ISS), Graphics Interface (GI), and regularly reviews for most major conferences and journals on HCI, visualization and social computing.",
        rating: 2.4,
        difficulty: 3.5,
        reviews: 8,
        id: "mahyar-narges"
    },
    {
        name: {
            last: "Domke",
            first: "Justin"
        },
        email: "domke@cs.umass.edu",
        phone: "(413) 545-4032",
        tags: [],
        office: "208 CS Building",
        website: "https://people.cs.umass.edu/~domke/",
        webpage: "https://www.cics.umass.edu/faculty/directory/domke-justin",
        interests: "Machine Learning, Probabilistic Graphical Models, Convex Optimization, Structured Learning",
        research: "The world is full of uncertainty and explicitly modeling and reasoning about this uncertainty is often helpful in making predictions. Professor Domke's research focuses on two related issues: the computational challenges this reasoning presents, and how to make methods work well when the phenomena being modeled is too complex to be modeled exactly. Specifically, he works on algorithms for better reasoning in probabilistic graphical models, how to learn when using an approximate reasoning algorithm, and integrating probabilistic models with other machine learning tools to help address problems too complex to model exactly. Often these algorithms are inspired by problems in computer vision.",
        activities: "Professor Domke serves on the program committee or reviews for most major machine learning and computer vision conferences and journals, and was recognized as an outstanding reviewer at CVPR 2011 and NIPS 2013.",
        rating: 2,
        difficulty: 3.6,
        reviews: 19,
        id: "domke-justin"
    },
    {
        name: {
            last: "Zilberstein",
            first: "Shlomo"
        },
        email: "shlomo@cs.umass.edu",
        phone: "(413) 545-4189",
        tags: [],
        office: "A359 LGRC",
        website: "https://groups.cs.umass.edu/shlomo/",
        webpage: "https://www.cics.umass.edu/faculty/directory/zilberstein_shlomo",
        interests: "Artificial intelligence, automated planning, decision theory, autonomous agents and multi-agent systems, resource-bounded reasoning, metacognition, heuristic search, combinatorial optimization, reinforcement learning.",
        research: "Professor Zilberstein's research in artificial intelligence is focused on the computational foundations of automated reasoning and action. He studies the implications of uncertainty and limited computational resources on the design of autonomous agents. In most practical settings, it is not feasible to find optimal plans or actions, making it necessary to resort to some form of approximate reasoning. This raises a simple fundamental question: what does it mean for an agent to be \"rational\" when it does not have enough knowledge or computational power to derive the best course of action? Professor Zilberstein's approach to this problem is based on probabilistic reasoning and decision-theoretic principles, used both to develop planning algorithms and to monitor their execution and maximize the value of computation. He has developed meta-level control mechanisms that reason explicitly about the cost of decision-making and can optimize the amount of deliberation (or \"thinking\") an agent does before taking action. This research spans both theoretical issues and the development of effective algorithms and applications. Zilberstein's most recent work has produced new models and algorithms to tackle these challenges in situations involving multiple decision makers operating in either collaborative or adversarial domains.",
        activities: "Professor Zilberstein is a Fellow of the Association for the Advancement of Artificial Intelligence (AAAI). He is recipient of the University of Massachusetts Chancellor's Medal (2019), the IFAAMAS Influential Paper Award (2019), the AAAI Distinguished Service Award (2019), National Science Foundation RIA Award (1994) and CAREER Award (1996), and the Israel Defense Prize (1992). He received Best Paper Awards from ECAI (1998), AAMAS (2003), IAT (2005), MSDM (2008), ICAPS (2010), and AAAI (2017 Computational Sustainability Track), and the Lady Davis Visiting Professorship at the Technion (2000). He is the past Editor-in-Chief of the Journal of Artificial Intelligence Research, Associate Editor of Artificial Intelligence, Autonomous Systems and Multi-Agent Systems, and Annals of Mathematics and Artificial Intelligence. He served as Chair of the Conference Committee of the AAAI Conference (AAAI-17, AAAI-16, AAAI-15), Program Chair of the International Conference on Automated Planning and Scheduling (ICAPS-15, ICAPS-04), and Program Chair of the International Symposium on Artificial Intelligence and Mathematics (ISAIM-06). He has served on numerous boards and award committees, as Chairman of the AI Access Foundation, President of ICAPS (2010-12), and an elected Councilor of AAAI (2011-14).",
        rating: 3.4,
        difficulty: 3.3,
        reviews: 9,
        id: "zilberstein-shlomo"
    },
    {
        name: {
            last: "Gong",
            first: "Weibo"
        },
        email: "gong@cics.umass.edu",
        phone: "(413) 545-0384",
        tags: [],
        office: null,
        website: "http://www-unix.ecs.umass.edu/~gong/",
        webpage: "https://www.cics.umass.edu/faculty/directory/gong_weibo",
        interests: "Complex modeling and control and communication security.",
        research: "RESEARCH PROJECTS OF CSMCL:",
        activities: "IEEE Transactions on Automatic Control George Axelby Outstanding Paper Award, 1997. IEEE Fellow, 1999. Engineering College Outstanding Senior Faculty Award, 2002.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "gong-weibo"
    },
    {
        name: {
            last: "Marlin",
            first: "Ben"
        },
        email: "marlin@cs.umass.edu",
        phone: "(413) 545-4493",
        tags: [],
        office: "A355 LGRC",
        website: "https://groups.cs.umass.edu/marlin/",
        webpage: "https://www.cics.umass.edu/faculty/directory/marlin_benjamin",
        interests: "Machine learning, probabilistic models, approximate inference and learning techniques, non-likelihood-based model estimation, missing data, time series.",
        research: "Professor Marlin's research interests lie at the intersection of artificial intelligence, machine learning and statistics. He is particularly interested in hierarchical graphical models and approximate inference/learning techniques including Markov Chain Monte Carlo and variational Bayesian methods. His current research has a particular emphasis on models and algorithms for multivariate time series data. His current applied work is focusing on machine learning-based analytics for clinical and mobile health (mHealth) data. In the past, he has worked on a broad range of applications including collaborative filtering and ranking, unsupervised structure discovery and feature induction, object recognition and image labeling, and natural language processing, and he continues to consult on projects in these areas.",
        activities: "Professor Marlin is a 2014 National Science Foundation CAREER award recipient and a 2013 Yahoo! Faculty Research Engagement Program award recipient. He has received awards for his work on collaborative filtering and recommender systems including the Best Technical Paper award at the ACM Conference on Recommender Systems in 2009 and an invitation to the Best Papers track at the International Joint Conference on Artificial Intelligence in 2011. Professor Marlin was the general co-chair for the 2014 Meaningful Use of Complex Medical Data Symposium and has served on the senior program committees of top machine learning conferences including NIPS, ICML and UAI. Professor Marlin held fellowships from the Killam Trusts and the Pacific Institute for the Mathematical Sciences while pursuing postdoctoral research at the University of British Columbia. He held a Canadian Graduate Scholarship from the Natural Sciences and Engineering Research Council of Canada, the top Canadian doctoral scholarship in the Sciences, while at the University of Toronto.",
        rating: 4.3,
        difficulty: 4,
        reviews: 9,
        id: "marlin-ben"
    },
    {
        name: {
            last: "Marquard",
            first: "Jenna"
        },
        email: "marquard@engin.umass.edu",
        phone: "(413) 545-0646",
        tags: [],
        office: null,
        website: "http://mie.umass.edu/faculty/jenna-marquard",
        webpage: "https://www.cics.umass.edu/faculty/directory/marquard_jenna",
        interests: "",
        research: "",
        activities: "",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "marquard-jenna"
    },
    {
        name: {
            last: "Thompson",
            first: "Laure"
        },
        email: "laurejt@cs.umass.edu",
        phone: null,
        tags: [],
        office: "A217F LGRC",
        website: "https://people.cs.umass.edu/~laurejt/",
        webpage: "https://www.cics.umass.edu/people/thompson-laure",
        interests: "Natural language processing, machine learning, digital humanities, computational social science",
        research: "Laure Thompson's research bridges machine learning and natural language processing with humanistic scholarship. She builds tools and creates methodologies that enable scholars to use machine learning and statistical methods for studying humanities collections at scale. Her research focuses on understanding what computational models actually learn and how we can intentionally change what they learn. Since her work is centered on humanities applications, she works with a wide range of cultural heritage corpora: from texts of science fiction novels and medieval manuscripts to images of avant-garde journals and magical gems from the ancient Mediterranean.",
        activities: "",
        rating: 1.1,
        difficulty: 4.6,
        reviews: 8,
        id: "thompson-laure"
    },
    {
        name: {
            last: "Gill",
            first: "Phillipa"
        },
        email: "phillipa@cs.umass.edu",
        phone: "(413) 545-3217",
        tags: [],
        office: null,
        website: "https://people.cs.umass.edu/~phillipa/",
        webpage: "https://www.cics.umass.edu/faculty/directory/gill-phillipa",
        interests: "Computer networking and security, network measurement, network interference, and reliability with a focus on designing tools and techniques to detect and mitigate network interference on the Internet. She also informs her work by interacting with the relevant stakeholders in related disciplines (e.g., law, political science) and the network operator community.",
        research: "Professor Gill's work focuses on many aspects of computer networking and security with a focus on designing novel network measurement techniques to understand online information controls, network interference, and interdomain routing. She leads the ICLab project which is working to develop a network measurement platform specifically for online information controls.",
        activities: "Her honors include being included on N2Women's list of top networking women to watch in 2016 and being recognized on MIT Technology Review's list of top 35 innovators in 2017. She has received an NSF CAREER Award, a Google Research Award, Best Paper Awards at the Internet Measurement Conference (2013) and Passive and Active Measurement Conference (2008), and a Best Presentation Award at the IBM Workshop for Frontiers of Cloud Computing. She was also a finalist for the Anita Borg Fellowship in 2009 and 2010.",
        rating: 0,
        difficulty: 0,
        reviews: 0,
        id: "gill-phillipa"
    },
    {
        name: {
            last: "Wileden",
            first: "Jack"
        },
        email: "jack@cs.umass.edu",
        phone: "(413) 545-0289",
        tags: [],
        office: "242 CS Building",
        website: "http://www.cs.umass.edu/~jack/",
        webpage: "https://www.cics.umass.edu/faculty/directory/wileden_jack",
        interests: "Programming languages, interoperability, databases, bioinformatics.",
        research: "",
        activities: "Professor Wileden is a member of the Association for Computing Machinery, a senior member of IEEE and a golden core member of the IEEE Computer Society. He has served as an editor of the IEEE Transactions on Parallel and Distributed Systems, as an ACM National Lecturer and as an IEEE Distinguished Visitor. He received the IEEE CS Meritorious Service Award in 1995 and the IEEE CS Golden Core Member Award in 1997. He has presented tutorials on interoperability, on object management and on tools for developers of distributed software systems in the U.S., South America, Europe, Australia and Japan.",
        rating: 3.1,
        difficulty: 2.9,
        reviews: 29,
        id: "wileden-jack"
    },
    {
        name: {
            last: "Sitaraman",
            first: "Ramesh"
        },
        email: "ramesh@cs.umass.edu",
        phone: "(413) 545-3279",
        tags: [],
        office: "310 CS Building",
        website: "https://groups.cs.umass.edu/ramesh",
        webpage: "https://www.cics.umass.edu/faculty/directory/sitaraman_ramesh",
        interests: "Internet-scale distributed systems, Content delivery networks, Cloud computing, Algorithms, and Theoretical Computer Science.",
        research: "Prof. Sitaraman's research focuses on all aspects of Internet-scale distributed systems, including algorithms, architectures, performance, energy efficiency, and user behavior. During a stint in industry, he helped create the world's first major content delivery network (CDN). He is best known for pioneering large distributed systems that currently deliver much of the world's web, videos, applications, and online services to billions of users around the world.",
        activities: "Prof. Sitaraman is a Fellow of the ACM and the IEEE, cited for his pioneering work on content delivery networks and Internet-scale distributed systems. He is a recipient of the inaugural ACM SIGCOMM Networking Systems for his work on the Akamai CDN, the world's first major CDN. He is also a recipient of an Excellence in DASH Award (First Place) for his work on adaptive bitrate (ABR) algorithms that are now part of the standard MPEG-DASH reference video player used in commercial video streaming. He is a recipient of the College Outstanding Teacher Award (COTA) from the College of Natural Sciences, where he was one among two chosen that year from the college that had 550 faculty in 13 departments and 2 schools. He is a recipient of the Distinguished Teaching Award (DTA), the highest recognition of teaching on campus, where he was one of among four chosen that year from the university with about 1450 faculty.  He is also a recipient of an NSF Research Initiation Award, an NSF CAREER Award, and a Lilly Fellowship.",
        rating: 4.6,
        difficulty: 3.4,
        reviews: 29,
        id: "sitaraman-ramesh"
    },
    {
        name: {
            last: "Levine",
            first: "Brian"
        },
        email: "bnl@umass.edu",
        phone: null,
        tags: [],
        office: "306 CS Building",
        website: "http://www.cs.umass.edu/~brian",
        webpage: "https://www.cics.umass.edu/faculty/directory/levine_brian",
        interests: "Child rescue and digital forensics, networking, network security, and cryptoeconomics",
        research: "Professor Levine's research and teaching focus on security in the context of the Internet and mobile systems, including topics in child rescue, privacy, blockchains, cellular networks, and peer-to-peer networking. Prof. Levine's work on thwarting child exploitation is funded in part by the Department of Justice and often in collaboration with Internet Crimes Against Children (ICAC) Task Forces. His research group's joint projects with the FBI and ICAC have had international impact, resulting in the rescue of hundreds of children from sexually abusive situations by investigators using his lab's tools.",
        activities: "He received a CAREER award in 2002 for work in peer-to-peer networking. He was a UMass Lilly Teaching Fellow in 2003 and was awarded the College of Natural Sciences' Outstanding Teacher Award in 2007. In 2008, he received the Alumni Award for Excellence in Science and Technology from the Univ. at Albany. He served as an associate editor of IEEE/ACM Transactions on Networking from 2005-2010. He was the TPC Co-Chair of ACM MobiCom 2011, TPC co-Chair the 2011 and 2012 Digital Forensics Research Conferences. He was awarded the Outstanding Research Award from the UMass College of Natural Sciences in 2011. In 2012, he was invited to give testimony to the US Sentencing Commission hearing on \"Federal Child Pornography Offenses.\" In 2013, he was a keynote speaker for the USENIX SYSTOR conference. In 2015, he was a keynote speaker at the annual Yahoo Tech Pulse Conference. In 2016, he was selected as a UMass Amherst Spotlight scholar. In 2017, he and co-authors received the 2017 IEEE Infocom Test of Time Award for a paper from 2006 that has been \"widely recognized to have a significant impact on the research community.\" In 2019, he gave an invited talk at USENIX Security on the harmful role darknets have played in the sexual exploitation of children. In 2020, he was named an ACM Fellow: \"For contributions to network forensics, security, and privacy, and for thwarting crimes against children\".",
        rating: 4.4,
        difficulty: 3,
        reviews: 20,
        id: "levine-brian"
    },
    {
        name: {
            last: "Kurose",
            first: "James"
        },
        email: "kurose@cs.umass.edu",
        phone: "(413) 545-1585",
        tags: [],
        office: "376 CS Building",
        website: "http://www-net.cs.umass.edu/personnel/kurose.html",
        webpage: "https://www.cics.umass.edu/faculty/directory/kurose_james",
        interests: "Computer network protocols and architecture, network measurement, sensor networks, and multimedia communication.",
        research: "Professor Kurose's research interests are in the areas of computer network protocols and architecture, network measurement, sensor networks, and multimedia communication. He is also interested in the development of asynchronous learning materials and pedagogy, particularly the use of Internet-based multimedia material.",
        activities: "Jim has served as Editor-in-Chief of the IEEE Transactions on Communications and was the founding Editor-in-Chief of the IEEE/ACM Transactions on Networking. He has been active in the program committees for IEEE Infocom, ACM SIGCOMM, ACM SIGMETRICS, and the ACM Internet Measurement conferences for a number of years, and has served as Technical Program Co-Chair for these conferences. He is the recipient of several conference best paper awards, the IEEE Infocom Achievement Award, the ACM SIGCOMM award, and the ACM Sigcomm Test of Time Award. He has also received the IEEE Taylor Booth Education Medal and teaching awards from the National Technological University, the UMass College of Natural Science and Mathematics, and the Northeast Association of Graduate Schools. He is a Fellow of the IEEE and the ACM, and a member of the National Academy of Engineering.",
        rating: 4.9,
        difficulty: 2.6,
        reviews: 18,
        id: "kurose-james"
    },
    {
        name: {
            last: "McGregor",
            first: "Andrew"
        },
        email: "mcgregor@cs.umass.edu",
        phone: null,
        tags: [],
        office: "334 CS Building",
        website: "http://www.cs.umass.edu/~mcgregor/",
        webpage: "https://www.cics.umass.edu/faculty/directory/mcgregor_andrew",
        interests: "Theoretical computer science.",
        research: "Professor McGregor's research includes algorithms for processing massive data sets and data streams; computing with noisy or incomplete data; clustering; coding and information theory. His work appears in theoretical computer science, database, data mining, coding theory, and machine learning publications.",
        activities: "Prof. McGregor received the National Science Foundation CAREER Award in 2010 and the ACM PODS Alberto O. Mendelzon Test-of-Time Award in 2020. He received the Lilly Teaching Fellowship in 2012 and the College of Information and Computer Sciences Outstanding Teacher Award in 2016. He directs TRIPODS Institute for Theoretical Foundations of Data Science at UMass.",
        rating: 4.7,
        difficulty: 3.4,
        reviews: 11,
        id: "mcgregor-andrew"
    },
    {
        name: {
            last: "Swanier",
            first: "Cheryl"
        },
        email: "cswanier@cs.umass.edu",
        phone: "(413) 545-1220",
        tags: [],
        office: "A233 LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/people/swanier-cheryl",
        interests: "Human Computer Interaction (HCI) and Computer Science Education research; Broadening Participation in Computing. Computer Science Education policy; college deans' attitudes towards teaching and learning.",
        research: "After a long career in computing, both industry and academia, Professor Swanier's current research interests are in computer science education, human computer interaction with an emphasis in visual programming of educational simulations with end user programming and educational gaming technologies, broadening participation in computing, equity, diversity and inclusion; and pedagogy for computer science teaching and learning.",
        activities: "Professor Swanier was selected as a Visiting Research Scientist at Google in Mountain View, California in 2017 and she received the 2016-17 Google igniteCS Award. Professor Swanier is a recipient of both the 2017 NCWIT Seed Fund Award and the 2013 NCWIT Undergraduate Research Mentoring Award. Professor Swanier is also the recipient of the 2013 Champion of Change for Tech Inclusion Award given by the White House.  She was recognized by Ebony Magazine as one of the 100 Most Influential African Americans in the December-January 2013-14 issue. Professor Swanier serves as a Program Evaluator for ABET with the Computing Accreditation Commission (CAC). She serves on the steering committee for NCWIT Academic Alliance and previously served as a NCWIT Pacesetter.  She has served on several national committees including ABET, Grace Hopper, Anita Borg, and other NCWIT committees. She also serves as a member of the Savannah State University Advisory Board for the Department of Computer Science. Dr. Swanier is the founder and CEO of Swanier Consulting, LLC. Professor Swanier is also the founder and CEO of the non-profit Small Ijose Swanier Foundation (SIS Foundation), Inc. One of the programs implemented through the SIS Foundation, Inc. is the Kewl Girlz Kode summer learning program. Professor Swanier facilitates presentations to provide undergraduates with opportunities to gain information on research experiences, internships, and on exploring the graduate experience.",
        rating: 1.4,
        difficulty: 2.3,
        reviews: 19,
        id: "swanier-cheryl"
    },
    {
        name: {
            last: "Kalogerakis",
            first: "Vangelis"
        },
        email: "kalo@cs.umass.edu",
        phone: "(413) 545-1952",
        tags: [],
        office: "250 CS Building",
        website: "http://www.cs.umass.edu/~kalo/",
        webpage: "https://www.cics.umass.edu/faculty/directory/kalogerakis_evangelos",
        interests: "Computer graphics and vision: geometric modeling, 3D deep learning, animation, shape analysis and synthesis, scene modeling, 3D reconstruction",
        research: "Evangelos Kalogerakis' research deals with the development of graphics+vision algorithms and techniques, empowered by AI/ML, to help people to easily create and process representations of the 3D visual world. He is particularly interested in algorithms that generate 3D models of objects, scenes, animations, and intelligently process 3D scans, geometric data, collections of shapes, images, and video.",
        activities: "Evangelos Kalogerakis' research is supported by NSF awards and donations from Adobe. He has co-authored more than 50 papers; most of them are published at top-tier computer science venues and journals, such as TOG, SIGGRAPH, SIGGRAPH ASIA, CVPR, ICCV, ECCV, UIST, and TVCG.  He was listed as one of the 100 most cited computer graphics scholars in the world between 2009 and 2019, and received the \"Most Influential Scholar Award Honorable Mention for outstanding and vibrant contributions to the field Computer Graphics\" awarded by Tsinghua's AMiner academic network.  He received the NSERC Alexander Graham fellowship and the international EPFL Dimitris N. Chorafas award for his PhD work.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "kalogerakis-vangelis"
    },
    {
        name: {
            last: "Moll",
            first: "Robbie"
        },
        email: "moll@cs.umass.edu",
        phone: "(413) 545-4315",
        tags: [],
        office: "A217B LGRC",
        website: null,
        webpage: "https://www.cics.umass.edu/faculty/directory/moll_robert",
        interests: "Knowledge-based systems, combinatorial optimization.",
        research: "Professor Moll's primary research area is in interactive web-based education. He is currently principal investigator on a grant from the U.S. Department of Education entitled \"Building a Java Instructor Community: An Online Plan for Improving Introductory Computer Science Teaching and Learning\". Professor Moll also has a continuing interest in AI methods applied to combinatorial optimization.",
        activities: "Professor Moll served as the Computer Science Department's Associate Chair for Academic Programs. He was a 2005-2006 recipient of the College of Natural Science and Mathematics Outstanding Faculty Service Award.",
        rating: null,
        difficulty: null,
        reviews: null,
        id: "moll-robbie"
    },
    {
        name: {
            last: "Sheldon",
            first: "Dan"
        },
        email: "sheldon@cs.umass.edu",
        phone: "(413) 545-4843",
        tags: [],
        office: "246 CS Building",
        website: "http://cs.umass.edu/~sheldon",
        webpage: "https://www.cics.umass.edu/faculty/directory/sheldon_dan",
        interests: "Computational ecology and environmental science; machine learning; probabilistic modeling and inference; network models; optimization.",
        research: "The primary goal of Professor Sheldon's research is to develop algorithms to understand and make decisions about the environment using large data sets. He seeks to answer foundational questions (what are the general models and principles that underlie big data problems in ecology?) and also to build applications that transform large-scale data resources into scientific knowledge and policy. Some examples of his work include: spatial optimization to conserve endangered species, continent-scale modeling of bird migration, and biological interpretation of weather radar data across the US. Methodologically, Professor Sheldon's primary interests are machine learning, probabilistic inference, and network modeling. His work has contributed broadly applicable new approaches for reasoning about aggregate data in probabilistic graphical models, and for optimization of diffusion processes in networks.",
        activities: "Professor Sheldon is a co-PI on the four-year National Science Foundation grant \"BirdCast: Novel Machine Learning Methods for Understanding Continent-Scale Bird Migration\".",
        rating: 5,
        difficulty: 3.5,
        reviews: 25,
        id: "sheldon-dan"
    },
    {
        name: {
            last: "Maji",
            first: "Subhransu"
        },
        email: "smaji@cs.umass.edu",
        phone: "(413) 577-2570",
        tags: [],
        office: "274 CS Building",
        website: "https://cs.umass.edu/~smaji",
        webpage: "https://www.cics.umass.edu/faculty/directory/maji_subhransu",
        interests: "Computer Vision and Machine Learning",
        research: "Professor Maji's research spans computer vision and machine learning. He is interested in building AI systems with rich visual reasoning capabilities enabling a wide range of applications. His research includes developing architectures for visual understanding that are robust, efficient, and have the ability to learn from a few examples. His research is also interdisciplinary where he develops novel computer vision algorithms for problems in Ecology and Astronomy.",
        activities: "Professor Maji was awarded the Google graduate fellowship during his Ph.D in 2008. He won the medal for graduating on top of the Computer Science department of IIT Kanpur in 2006. For his work he has received the best paper award at WACV 2015, the best paper honorable mention at CVPR 2018, and the National Science Foundation CAREER award in 2018. His research is supported by the National Science Foundation, as well as faculty grants from Facebook, NVIDIA, and Adobe. He is an associate editor of IJCV and regularly serves on the program committees of leading computer vision and machine learning conferences. He is also a part-time Amazon scholar, and in the past has enjoyed working at Google, INRIA, Microsoft Research, the CLSP center at JHU, and Oxford University.",
        rating: 3.5,
        difficulty: 4,
        reviews: 8,
        id: "maji-subhransu"
    },
    {
        name: {
            last: "Karkar",
            first: "Ravi"
        },
        email: "rkarkar@umass.edu",
        phone: null,
        tags: [],
        office: "A211G LGRC",
        website: "https://people.cs.umass.edu/~rkarkar/",
        webpage: "https://www.cics.umass.edu/people/karkar-ravi",
        interests: "",
        research: "",
        activities: "",
        rating: 0,
        difficulty: 0,
        reviews: 0,
        id: "karkar-ravi"
    },
    {
        name: {
            last: "Wallach",
            first: "Hanna"
        },
        email: "wallach@cs.umass.edu",
        phone: null,
        tags: [],
        office: null,
        website: "http://www.cs.umass.edu/~wallach",
        webpage: "https://www.cics.umass.edu/faculty/directory/wallach_hanna",
        interests: "Computational Social Science, Machine Learning Analysis of Structured\nand Unstructured Data, Bayesian Statistics",
        research: "Professor Wallach's primary research goal is to develop new mathematical models and computational tools for analyzing vast quantities of structured and unstructured data in order to identify and answer social science questions. Specifically, she is interested in analyzing complex data regarding communication and collaboration within scientific and technological innovation communities, in order to advance the study of science and innovation policy. To this end, she works on techniques for aggregating and representing amounts of information from multiple data sources with disparate emphases, methods for analyzing relational and social network data, efficient algorithms for inference, and robust methods for reasoning under uncertain information. Professor Wallach's research contributes to machine learning, Bayesian statistics, and, in collaboration with social scientists, to the nascent fields of science and innovation policy and, more generally, computational social science.",
        activities: "In 2010, Professor Wallach (along with co-authors Ryan Prescott Adams and Zoubin Ghahramani) won the Best Paper Award at AISTATS. She is currently a co-PI on a three-year National Science Foundation grant to develop \"New Methods to Enhance Our Understanding of the Diversity of Science.\" In addition to her research, she works to promote and support women's involvement in computing. In 2006, she co-founded an annual workshop for women in machine learning. Previously, Professor Wallach was awarded the University of Edinburgh's 2001/2002 prize for Best M.Sc. Student in Cognitive Science. While an undergrad, she won the award for the best computer science student in the 2001 U.K. Science Engineering and Technology Awards.",
        rating: 4,
        difficulty: 4,
        reviews: 3,
        id: "wallach-hanna"
    }
]