export interface FaqType {
  answer: string;
  id: string;
  question: string;
}

export const faqsData: FaqType[] = [
  {
    id: "2274b606-a043-4899-839a-f236d88bbe98",
    question: "What is the Barcelona Developers Conference?",
    answer:
      "Two days to share knowledge and experiences, meet enthusiasts and geeks and learn about new technologies related to Backend and frontend development, Agile, DevOps, Cloud, and many others.",
  },
  {
    id: "13eedebd-59a8-48c5-8897-6270a617ae75",
    question: "Why should i participate?",
    answer:
      "This conference is the perfect stage to discover how others are using your favourite technology. " +
      "There is something interesting for any kind of tech passionate: on the backend Java & JVM, Python, Rust, Go, to Frontend with JavaScript, TypeScript and Web assembly; Also, Cloud, Kubernetes, and DevOps, Agile, Big Data, Machine Learning and more",
  },
];
