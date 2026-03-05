export type Member = {
  name: string;
  role: string;
  photo: string;
  interests: string;
  website?: string;
  email?: string;
};

export const pi: Member = {
  name: "Ding Liu, Ph.D.",
  role: "Principal Investigator · Assistant Professor, School of Life Sciences",
  photo: "/images/team/ding.jpg",
  interests:
    "Social homeostasis, hypothalamic circuits, loneliness, neural dynamics",
  website: "",
  email: "liuding@westlake.edu.cn",
};

export const currentMembers: Member[] = [
  {
    name: "Open Position",
    role: "Postdoctoral Fellow",
    photo: "",
    interests: "Neuropixels recording in freely behaving animals",
  },
  {
    name: "Open Position",
    role: "Postdoctoral Fellow",
    photo: "",
    interests: "Calcium imaging, sensory–circuit interactions",
  },
  {
    name: "Open Position",
    role: "Ph.D. Student",
    photo: "",
    interests: "Systems neuroscience, social behavior",
  },
];

export const alumni: Member[] = [];
