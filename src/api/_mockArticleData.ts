import { Article } from './fetchArticle';

export const mockArticleData: Article[] = [
  {
    id: 1,
    headline:
      'New Study Shows Virtual Reality Therapy Helps Reduce Anxiety by 40%',
    author: {
      id: 1,
      name: 'Jordan Keller',
      bio: 'Jordan Keller is a senior health correspondent at MedTech Journal with a background in psychology and digital health innovation.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: Virtual Reality Therapy</h1>
      <ul>
          <li><strong>Study findings:</strong> A recent study found that virtual reality (VR) therapy can reduce anxiety symptoms by up to 40% in patients suffering from social anxiety and generalized anxiety disorders.</li>
          <li><strong>Study duration:</strong> The clinical trial was conducted over 12 months with 500 participants.</li>
          <li><strong>VR platforms used:</strong> The study used Oculus Rift and HTC Vive VR platforms to create controlled therapeutic environments.</li>
          <li><strong>Participants' response:</strong> Over 85% of participants reported feeling more in control of their anxiety symptoms after six weeks of VR therapy.</li>
      </ul>
    `,
    articleContent: `
      <p>In a groundbreaking study, scientists have discovered that virtual reality (VR) therapy can significantly reduce anxiety symptoms by up to 40% in individuals with social and generalized anxiety disorders. Conducted by the Center for Mental Health Innovations, this year-long study involved 500 participants, each of whom underwent a 12-week therapy regimen using Oculus Rift and HTC Vive VR platforms.</p>

      <p>The immersive virtual environments were carefully designed to simulate common anxiety triggers, such as public speaking and social interactions, allowing participants to face and gradually reduce their anxiety responses. Researchers found that 85% of participants reported improved control over their symptoms, with many noting significant progress after just six weeks.</p>

      <p>The study’s lead researcher, Dr. Emily Chan, commented, “Our findings suggest that virtual reality therapy can be an effective and accessible treatment for anxiety disorders, particularly for individuals who may not respond well to traditional therapy methods.”</p>

      <p>Following the success of the trial, there is growing interest in expanding VR therapy programs to include treatments for other mental health conditions, such as PTSD and depression. The study’s results are expected to have a profound impact on the future of mental health treatment, providing patients with new options for addressing their conditions in a safe, controlled, and highly customizable virtual environment.</p>
    `,
    publishedAt: '2024-05-12',
  },
  {
    id: 2,
    headline:
      'AI Breakthrough Enables Real-Time Climate Prediction With 98% Accuracy',
    author: {
      id: 2,
      name: 'Leslie Morgan',
      bio: 'Leslie Morgan is a technology journalist with a focus on AI and machine learning advancements in climate science.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: AI Climate Prediction</h1>
      <ul>
          <li><strong>New AI model:</strong> Scientists have developed an AI model capable of predicting climate changes with 98% accuracy in real-time.</li>
          <li><strong>Global data:</strong> The model uses vast datasets from around the world, including ocean temperatures and atmospheric pressure readings.</li>
          <li><strong>Applications:</strong> The breakthrough has immediate applications in disaster prevention, agriculture, and environmental policy.</li>
      </ul>
    `,
    articleContent: `
      <p>A groundbreaking achievement in the field of artificial intelligence (AI) has led to the development of a real-time climate prediction model capable of delivering forecasts with 98% accuracy. This model, which has been hailed as a transformative tool in environmental science, uses a combination of machine learning algorithms and massive datasets collected from satellites, ocean buoys, and atmospheric stations worldwide.</p>

      <p>The research, led by scientists at the Climate Science Institute, marks a significant leap forward in our ability to predict natural disasters and mitigate their impact. “This is a game-changer for climate research,” said Dr. Abigail Turner, the lead scientist on the project. “For the first time, we can make accurate, real-time predictions that will help governments and organizations plan more effectively for extreme weather events, droughts, and other climate-related challenges.”</p>

      <p>The AI model is already being tested in various industries, including agriculture and disaster preparedness, where real-time data can inform decisions on resource allocation, emergency responses, and infrastructure development. As climate change continues to present an increasing global threat, the importance of accurate, timely predictions has never been greater.</p>
    `,
    publishedAt: '2024-06-15',
  },
  {
    id: 3,
    headline:
      'SpaceX Announces Plans for First Civilian Mission to Mars by 2027',
    author: {
      id: 3,
      name: 'Diana Mitchell',
      bio: 'Diana Mitchell covers aerospace and space exploration for Orbit News and has been reporting on SpaceX since its inception.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: SpaceX Mars Mission</h1>
      <ul>
          <li><strong>Mission announcement:</strong> SpaceX has announced its first civilian mission to Mars, slated for launch in 2027.</li>
          <li><strong>Passenger selection:</strong> The mission will carry 10 civilians, selected through a global lottery and training program.</li>
          <li><strong>Mission objectives:</strong> The mission's goal is to establish the first human settlement on Mars.</li>
      </ul>
    `,
    articleContent: `
      <p>SpaceX has once again pushed the boundaries of human exploration with the announcement of its first civilian mission to Mars, set for launch in 2027. The mission, which will carry 10 civilians selected through a global lottery, marks a historic step toward realizing Elon Musk’s vision of establishing a human settlement on the Red Planet.</p>

      <p>Those selected will undergo rigorous physical and psychological training to prepare for the unprecedented journey. While details of the training program are still under wraps, SpaceX has confirmed that it will involve extensive simulations of Martian conditions, space travel acclimatization, and survival training.</p>

      <p>Musk’s announcement was met with excitement and skepticism in equal measure, with many experts questioning whether the timeline is realistic given the current technological and logistical challenges. However, SpaceX’s success in launching reusable rockets and the Starship’s advancements in deep space travel suggest that the goal may be more attainable than critics realize.</p>

      <p>Should the mission succeed, it would pave the way for future civilian trips and the eventual colonization of Mars, a feat that has captivated humanity’s imagination for decades.</p>
    `,
    publishedAt: '2024-07-10',
  },
  {
    id: 4,
    headline:
      'Breakthrough Gene Therapy Cures Rare Genetic Disorder in Infants',
    author: {
      id: 4,
      name: 'Alicia Torres',
      bio: 'Alicia Torres is a senior medical correspondent for HealthTech World, specializing in genetic research.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: Gene Therapy Cure</h1>
      <ul>
          <li><strong>Gene therapy breakthrough:</strong> Scientists have successfully cured a rare genetic disorder in infants using gene therapy.</li>
          <li><strong>Treatment success rate:</strong> The therapy has a 95% success rate in clinical trials.</li>
          <li><strong>FDA approval:</strong> The treatment has been fast-tracked for approval by the FDA.</li>
      </ul>
    `,
    articleContent: `
      <p>In a major medical breakthrough, scientists have successfully cured a rare genetic disorder in infants using a new form of gene therapy. The disorder, which affects only a small number of newborns each year, was previously considered untreatable and often led to severe developmental issues or early death.</p>

      <p>The experimental gene therapy, which has been in clinical trials for the past three years, works by replacing the defective gene responsible for the disorder with a healthy one. In the trials, the therapy achieved a 95% success rate, with most infants showing complete remission of symptoms within a few months of receiving treatment.</p>

      <p>The FDA has fast-tracked the approval process for the therapy, and it is expected to be available for wider use within the next two years. Researchers are hopeful that this success will pave the way for similar treatments for other genetic disorders, offering new hope to thousands of families worldwide.</p>
    `,
    publishedAt: '2024-08-05',
  },
  {
    id: 5,
    headline: 'Self-Driving Cars to Be Fully Legalized in California by 2026',
    author: {
      id: 5,
      name: 'Ben Shepard',
      bio: 'Ben Shepard is an automotive technology expert writing for Tech Drive Magazine.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: Self-Driving Cars Legalization</h1>
      <ul>
          <li><strong>Legalization date:</strong> California plans to fully legalize self-driving cars by 2026, according to state officials.</li>
          <li><strong>Safety regulations:</strong> New safety regulations will accompany the legalization to ensure public safety.</li>
      </ul>
    `,
    articleContent: `
      <p>The future of transportation is fast approaching as California announces plans to fully legalize self-driving cars by 2026. The state, which has long been at the forefront of autonomous vehicle development, is expected to pass new legislation that will allow self-driving cars to operate without human drivers on public roads.</p>

      <p>According to state officials, the new laws will be accompanied by stringent safety regulations to ensure the protection of both passengers and pedestrians. These regulations include mandatory safety certifications for all autonomous vehicles, as well as requirements for continuous monitoring of vehicle performance through cloud-based systems.</p>

      <p>While the announcement has been met with enthusiasm from tech companies and advocates of autonomous technology, concerns remain about potential job losses in the transportation industry and the readiness of the technology to handle complex urban environments.</p>

      <p>California’s decision is expected to set a precedent for other states, which are likely to follow suit in the coming years. The move toward fully autonomous vehicles represents a significant shift in how society approaches mobility and could have far-reaching implications for everything from urban planning to environmental policy.</p>
    `,
    publishedAt: '2024-09-12',
  },
  {
    id: 6,
    headline: 'Tech Giants Invest $5 Billion in Quantum Computing Research',
    author: {
      id: 6,
      name: 'Isaac Reynolds',
      bio: 'Isaac Reynolds writes about cutting-edge technology at The Innovation Hub.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: Quantum Computing Investment</h1>
      <ul>
          <li><strong>Investment amount:</strong> Major tech companies have invested $5 billion into quantum computing research.</li>
          <li><strong>Research goals:</strong> The funds will be used to accelerate advancements in quantum processors and algorithms.</li>
      </ul>
    `,
    articleContent: `
      <p>In a move that underscores the growing importance of quantum computing, several major tech companies have announced a combined investment of $5 billion into research and development in the field. The funds will be used to accelerate progress in quantum processors and algorithms, with the goal of making quantum computing commercially viable within the next decade.</p>

      <p>Quantum computing, which leverages the principles of quantum mechanics to perform calculations at speeds far beyond the capabilities of classical computers, has the potential to revolutionize industries ranging from pharmaceuticals to finance. With the ability to solve complex problems that are currently unsolvable by even the most powerful supercomputers, quantum computing could unlock new breakthroughs in areas such as drug discovery, cryptography, and materials science.</p>

      <p>Among the companies leading the charge are IBM, Google, and Microsoft, each of which has already made significant strides in the development of quantum hardware and software. The new investment is expected to accelerate the pace of innovation and bring the technology closer to widespread adoption.</p>
    `,
    publishedAt: '2024-10-02',
  },
  {
    id: 7,
    headline: 'Researchers Discover New Exoplanet Capable of Supporting Life',
    author: {
      id: 7,
      name: 'Tara Jacobs',
      bio: 'Tara Jacobs is an astrophysicist and science writer for Space Horizons Magazine.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: New Exoplanet Discovery</h1>
      <ul>
          <li><strong>Exoplanet discovery:</strong> Astronomers have discovered an exoplanet in the habitable zone of its star system, potentially capable of supporting life.</li>
          <li><strong>Distance from Earth:</strong> The exoplanet is located 120 light-years away from Earth.</li>
      </ul>
    `,
    articleContent: `
      <p>Astronomers have announced the discovery of a new exoplanet located in the habitable zone of its star system, raising the possibility that it could support life. The planet, which has been designated Kepler-1658c, is 120 light-years away from Earth and has an atmospheric composition that is similar to that of our own planet.</p>

      <p>The discovery was made using data from the Kepler Space Telescope, which has been instrumental in the identification of exoplanets over the past decade. Kepler-1658c is believed to have a rocky surface and a stable climate, making it one of the most promising candidates for hosting life outside of our solar system.</p>

      <p>While further research is needed to determine the planet’s true potential for supporting life, the discovery has generated excitement within the scientific community. “This is a significant step forward in our search for life beyond Earth,” said Dr. Laura Greene, an astrophysicist involved in the project. “The more we learn about planets like Kepler-1658c, the closer we get to answering one of humanity’s most fundamental questions: Are we alone in the universe?”</p>
    `,
    publishedAt: '2024-10-12',
  },
  {
    id: 8,
    headline:
      'Major Breakthrough in Nuclear Fusion Brings Clean Energy Closer to Reality',
    author: {
      id: 8,
      name: 'Mark Freeman',
      bio: 'Mark Freeman covers energy innovations for Green Future Journal.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: Nuclear Fusion Breakthrough</h1>
      <ul>
          <li><strong>Fusion breakthrough:</strong> Scientists have achieved a sustained nuclear fusion reaction, marking a major step toward clean, limitless energy.</li>
          <li><strong>Energy output:</strong> The reaction produced more energy than was used to start it, a key milestone in nuclear fusion research.</li>
      </ul>
    `,
    articleContent: `
      <p>In what could be the most significant development in clean energy technology in decades, scientists have successfully achieved a sustained nuclear fusion reaction that produces more energy than it consumes. This breakthrough, which has been pursued for decades, marks a major step toward realizing nuclear fusion as a viable source of clean, limitless energy.</p>

      <p>Fusion, the process that powers the sun, has long been viewed as the “holy grail” of energy production due to its potential to generate massive amounts of power without producing harmful emissions or long-lasting radioactive waste. However, replicating this process on Earth has proven to be one of the most difficult challenges in modern science.</p>

      <p>The successful experiment, which took place at the International Thermonuclear Experimental Reactor (ITER) in France, involved the use of powerful magnets to contain and control the fusion reaction. For the first time, scientists were able to sustain the reaction long enough to produce more energy than was used to initiate it, a milestone that had eluded researchers for decades.</p>
    `,
    publishedAt: '2024-10-15',
  },
  {
    id: 9,
    headline:
      'Blockchain Adoption Grows in Supply Chain Management, Improving Transparency',
    author: {
      id: 9,
      name: 'Eva Roberts',
      bio: 'Eva Roberts writes about blockchain and fintech for Digital Economy Digest.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: Blockchain in Supply Chain</h1>
      <ul>
          <li><strong>Adoption rate:</strong> Blockchain technology is now used by over 70% of global supply chain companies to improve transparency and traceability.</li>
          <li><strong>Key benefits:</strong> The technology helps prevent fraud and improves efficiency in tracking goods across borders.</li>
      </ul>
    `,
    articleContent: `
      <p>Blockchain technology, once associated primarily with cryptocurrencies, has found a new and critical application in supply chain management. According to a recent industry report, more than 70% of global supply chain companies have adopted blockchain technology to improve transparency and traceability in the movement of goods across borders.</p>

      <p>The decentralized ledger system offered by blockchain enables companies to track the journey of products from the manufacturer to the consumer with unprecedented accuracy. By providing a tamper-proof record of each transaction along the supply chain, blockchain helps to reduce fraud, ensure the authenticity of goods, and streamline logistics processes.</p>

      <p>“Blockchain has the potential to revolutionize supply chain management,” said Lisa Tan, a supply chain analyst at Global Logistics Insights. “With this technology, companies can provide consumers with greater confidence that the products they’re buying are safe, authentic, and ethically sourced.”</p>
    `,
    publishedAt: '2024-10-18',
  },
  {
    id: 10,
    headline: 'Scientists Develop New Vaccine for Malaria, with 95% Efficacy',
    author: {
      id: 10,
      name: 'Sophie Clarke',
      bio: 'Sophie Clarke is a medical science reporter at Global Health Today.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    coreFactsContent: `
      <h1>Core Facts: Malaria Vaccine</h1>
      <ul>
          <li><strong>Vaccine efficacy:</strong> A new malaria vaccine has been developed with a 95% efficacy rate, showing promising results in clinical trials.</li>
          <li><strong>Global impact:</strong> The vaccine could save millions of lives, particularly in regions where malaria is endemic.</li>
      </ul>
    `,
    articleContent: `
      <p>In a landmark achievement for global health, scientists have developed a new vaccine for malaria that has shown a remarkable 95% efficacy rate in early clinical trials. The vaccine, which has been in development for over a decade, could potentially save millions of lives, particularly in Africa and Southeast Asia, where malaria is most prevalent.</p>

      <p>Malaria, a mosquito-borne disease that claims the lives of more than 400,000 people each year, has long been a focus of global health initiatives. Despite efforts to control the spread of the disease, the development of an effective vaccine has remained elusive—until now.</p>

      <p>The new vaccine, which targets the parasite responsible for malaria, has shown promising results in clinical trials involving thousands of participants. Researchers are optimistic that it will be approved for widespread use within the next few years, marking a major victory in the fight against one of the world’s deadliest diseases.</p>
    `,
    publishedAt: '2024-10-20',
  },
];
