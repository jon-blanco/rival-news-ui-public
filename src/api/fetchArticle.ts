// src/api/mockApi.ts

export interface Article {
  id: number;
  headline: string;
  coreFactsContent: string;
  articleContent: string;
}

// Simulate a delay to mimic real API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const dummyArticle: Article = {
  id: 1,
  headline: "Big News Today",
  coreFactsContent: `
    <ul>
      <li>First core fact</li>
        <ul>
          <li>Sub-fact</li>
          <li>Another sub-fact</li>
        </ul>
      <li>Second core fact</li>
    </ul>
  `,
  articleContent: `
    <p>This is a paragraph of text in the news article. <strong>Strong emphasis</strong> can be very interesting! I'm going to make this even longer so that we can see if the text is really long that way when it over flows we are not extinging to the sides of the page. This is important because articles can be rather long sometimes and we need to make sure that everything is spaced accordingly otherwise the styling will be 'icky'</p>
    <ul>
      <li>First point</li>
      <li>Second point</li>
    </ul>
  `,
};

export const fetchArticle = async (): Promise<Article> => {
  await delay(500); // Simulate network latency
  return dummyArticle;
};
