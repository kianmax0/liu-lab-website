export type ResearchArea = {
  id: string;
  title: string;
  summary: string;
  details: string;
  image: string;
};

export const researchAreas: ResearchArea[] = [
  {
    id: "modeling-social-homeostasis",
    title: "Modeling Social Homeostasis: Representation of Social Needs in the MPN",
    summary:
      "How does the brain track and represent social need as a fundamental physiological drive?",
    details:
      "Just as the body requires food and water, social animals have a fundamental, hard-wired need for social interaction. Our lab investigates the neural dynamics of social homeostasis with a primary focus on the Medial Preoptic Nucleus (MPN). Using in vivo calcium imaging and optogenetics, we map and manipulate the specific neural ensembles encoding social motivation. To capture the full spectrum of social need, we use both acute deprivation models, such as the classic isolation-reunion (resident-intruder) paradigm, and an innovative custom-designed 2-chamber assay to continuously monitor natural circadian-like fluctuations of social drive throughout the day.",
    image: "",
  },
  {
    id: "competing-drives-feeding-social",
    title: "Competing Drives: The Interplay Between Feeding and Social Behaviors",
    summary:
      "What happens when an animal is simultaneously hungry and lonely?",
    details:
      "Survival in a complex environment often requires the brain to prioritize competing physiological demands. We explore the hierarchical organization of innate drives, specifically investigating how states of severe energy deficit prioritize foraging while suppressing social behaviors. By dissecting the functional crosstalk between classical feeding centers, namely the AgRP and POMC neurons in the arcuate nucleus, and social hubs like the MPN, we aim to uncover the circuit-level mechanisms that orchestrate behavioral choices when internal needs collide.",
    image: "",
  },
  {
    id: "sensory-integration-motion-sickness",
    title: "Sensory Integration and Pathology: Neural Mechanisms of Motion Sickness",
    summary:
      "How do central circuits transform sensory mismatch into autonomic distress?",
    details:
      "Motion sickness is a profound systemic response to sensory conflict, such as visual and vestibular mismatch, yet the precise central circuits mediating this distress remain elusive. Our lab takes a translational approach to understand the neuropharmacology of motion sickness, particularly how antihistamines exert therapeutic effects. Using a customized shaker-induced motion sickness paradigm in mice, we quantify the systemic response through behavioral and physiological readouts, including pica behavior, decreased locomotion, and body temperature fluctuations. Mechanistically, we focus on the neural dialogue between the Vestibular Nuclei and the histaminergic Tuberomammillary Nucleus (TMN) to elucidate pathways that convert sensory mismatch into autonomic distress.",
    image: "",
  },
];
