export type Author = { name: string; labMember?: boolean };

export type Publication = {
  year: number;
  title: string;
  authors: Author[];
  venue: string;
  pdfUrl?: string;
  codeUrl?: string;
  doiUrl?: string;
};

export const publications: Publication[] = [
  // ── 2025 ──────────────────────────────────────────────────
  {
    year: 2025,
    title:
      "A hypothalamic circuit underlying the dynamic control of social homeostasis.",
    authors: [
      { name: "D Liu", labMember: true },
      { name: "M Rahman" },
      { name: "A Johnson" },
      { name: "R Amo" },
      { name: "I Tsutsui-Kimura" },
      { name: "ZA Sullivan" },
    ],
    venue: "Nature 640 (8060), 1000–1010.",
    pdfUrl: "",
    doiUrl: "https://doi.org/10.1038/s41586-025-08740-2",
  },
  {
    year: 2025,
    title: "Molecular and Cellular Basis of Instinctive Social Need.",
    authors: [{ name: "D Liu", labMember: true }, { name: "C Dulac" }],
    venue: "Current Opinion in Neurobiology.",
    pdfUrl: "",
    doiUrl: "https://doi.org/10.1016/j.conb.2025.102934",
  },

  // ── 2022 ──────────────────────────────────────────────────
  {
    year: 2022,
    title:
      "A preoptic neuronal population controls fever and appetite during sickness.",
    authors: [
      { name: "JA Osterhout" },
      { name: "V Kapoor" },
      { name: "SW Eichhorn" },
      { name: "E Vaughn" },
      { name: "JD Moore" },
      { name: "D Liu", labMember: true },
      { name: "D Lee" },
    ],
    venue: "Nature 606 (7916), 937–944.",
    pdfUrl: "",
    doiUrl: "https://doi.org/10.1038/s41586-022-04793-z",
  },

  // ── 2014 ──────────────────────────────────────────────────
  {
    year: 2014,
    title:
      "Medial prefrontal activity during delay period contributes to learning of a working memory task.",
    authors: [
      { name: "D Liu", labMember: true },
      { name: "X Gu" },
      { name: "J Zhu" },
      { name: "X Zhang" },
      { name: "Z Han" },
      { name: "W Yan" },
      { name: "Q Cheng" },
      { name: "J Hao" },
      { name: "H Fan" },
    ],
    venue: "Science 346 (6208), 458–463.",
    pdfUrl: "",
    doiUrl: "https://doi.org/10.1126/science.1256573",
  },
];
