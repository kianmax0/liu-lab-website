export type Member = {
  name: string;
  role: string;
  photo: string;
  interests: string;
  website?: string;
  email?: string;
};

export const pi: Member = {
  name: "Ding LIU, Ph.D.",
  role: "Principal Investigator · Assistant Professor, School of Life Sciences",
  photo: "/images/team/DingLIU.jpg",
  interests:
    "Social homeostasis, hypothalamic circuits, loneliness, neural dynamics",
  website: "",
  email: "liuding@westlake.edu.cn",
};

export const currentMembers: Member[] = [
  {
    name: "Yuki DAI",
    role: "Postdoctoral Fellow",
    photo: "/images/team/YukiDAI.jpg",
    interests: "The relationship between social and hunger",
  },
  {
    name: "Chenxing WEI",
    role: "RA",
    photo: "/images/team/ChenxingWEI.jpg",
    interests: "Research interests to be updated.",
  },
  {
    name: "Qian RAO",
    role: "RA",
    photo: "/images/team/QianRAO.jpg",
    interests: "Research interests to be updated.",
  },
  {
    name: "Yibo YUAN",
    role: "RA",
    photo: "/images/team/YiboYUAN.jpg",
    interests: "Research interests to be updated.",
  },
  {
    name: "Tianyang CHEN",
    role: "Administrative Assistant",
    photo: "/images/team/TianyangCHEN.jpg",
    interests: "Administrative support and lab coordination.",
  },
  {
    name: "Ziyan YAN",
    role: "Visiting Student",
    photo: "/images/team/ZiyanYAN.jpg",
    interests: "Research interests to be updated.",
  },
  {
    name: "Kun ZHAO",
    role: "Undergraduate",
    photo: "/images/team/KunZHAO.jpg",
    interests: "Research interests to be updated.",
  },
  {
    name: "Bokai CAO",
    role: "Ph.D. Student",
    photo: "/images/team/BokaiCAO.jpg",
    interests: "Research interests to be updated.",
  },
  {
    name: "Zimeng GAO",
    role: "Ph.D. Student",
    photo: "/images/team/ZimengGAO.jpg",
    interests: "Research interests to be updated.",
  },
];

export const alumni: Member[] = [];
