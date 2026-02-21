/**
 * @fileOverview بيانات أعضاء فريق CVEEEZ
 * TODO: املأ البيانات الحقيقية من https://www.cveeez.net/#team
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mohamed Ahmed",
    role: "CEO & Founder",
    initials: "MA"
  },
  {
    id: "2",
    name: "Sarah Khalil",
    role: "Lead Software Engineer",
    initials: "SK"
  },
  {
    id: "3",
    name: "Ahmed Ibrahim",
    role: "Operations Manager",
    initials: "AI"
  },
  {
    id: "4",
    name: "Nouran Ali",
    role: "Product Designer",
    initials: "NA"
  }
];
