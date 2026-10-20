/**
 * Team members.
 *
 * Only add information each person has confirmed. Do NOT invent surnames,
 * job titles, bios, credentials or photos.
 *
 * Optional fields, filled in later:
 *  - role:  confirmed job title, e.g. "Content Lead"
 *  - photo: path to an image in /public/team/, e.g. "/team/amelia.jpg"
 */

export type TeamMember = {
  name: string;
  role?: string;
  photo?: string;
};

export const team: TeamMember[] = [
  { name: "Mikhail" },
  { name: "Amelia Prats" },
  { name: "Taya" },
  { name: "Azhad" },
  { name: "Will" },
  { name: "Timur" },
];
