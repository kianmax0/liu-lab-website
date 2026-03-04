export type ResearchArea = {
  id: string;
  title: string;
  summary: string;
  details: string;
  image: string;
};

export const researchAreas: ResearchArea[] = [
  {
    id: "social-homeostasis",
    title: "Social Homeostasis & Loneliness",
    summary: "How does the brain encode the feeling of loneliness?",
    details:
      "We have established quantitative behavioral paradigms and identified specific hypothalamic neurons and circuits that govern social need, revealing a homeostatic process underlying the regulation of social drive. Our work provides a mechanistic framework for understanding loneliness as a biological state — akin to hunger or thirst — that motivates social seeking and is resolved by social contact.",
    image: "",
  },
  {
    id: "tactile-input",
    title: "The Power of Tactile Input",
    summary: "Touch plays a key role in alleviating loneliness.",
    details:
      "We explore how tactile inputs influence social interaction and how sensory information is integrated into the social neural network to satisfy fundamental human and animal needs. By dissecting the sensory pathways that relay touch to limbic and hypothalamic circuits, we aim to understand why physical contact is so essential to social well-being and how its disruption contributes to social disorders.",
    image: "",
  },
  {
    id: "network-dynamics",
    title: "Neural Network Dynamics",
    summary:
      "What are the basic units and operational rules of a social neural network?",
    details:
      "We utilize cutting-edge techniques — including calcium imaging and Neuropixels recordings in freely behaving animals — to decode the complex dynamics of the brain during social interaction. By recording from hundreds of neurons simultaneously, we aim to reveal the population-level codes and dynamic motifs that orchestrate the full spectrum of social behaviors.",
    image: "",
  },
];
