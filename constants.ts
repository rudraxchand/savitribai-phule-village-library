import { StatItem, ProgramCategory, BookCategory } from './types';

export const COLORS = {
  blue: '#0047AB',
  red: '#DC143C',
  yellow: '#FFD700',
  cream: '#F5F5DC',
  beige: '#E8D5C4',
  brown: '#4A3728',
};

export const STATS: StatItem[] = [
  { label: "Members", value: "530" },
  { label: "Books", value: "2000+" },
  { label: "Daily Footfall", value: "140+" },
  { label: "Villages", value: "4" },
];

export const IMPACT_DETAILS: StatItem[] = [
  { label: "Staff", value: "2", sublabel: "Dedicated Librarians" },
  { label: "Gender Ratio", value: "68%", sublabel: "Female Members" },
  { label: "Age Group", value: "5-21+", sublabel: "Years Old" },
];

export const READING_PROGRAMS: ProgramCategory = {
  title: "Reading Programs",
  color: "bg-dalitRed",
  items: [
    "Read Aloud Sessions",
    "Storytelling Circles",
    "Interactive Book Talks",
    "Early Learning & Literacy"
  ]
};

export const OTHER_PROGRAMS: ProgramCategory = {
  title: "Creative & Skills",
  color: "bg-dalitBlue",
  items: [
    "Art & Craft Sessions",
    "Film Screenings",
    "Basic Computer Skills",
    "Story Writing Workshops",
    "Community Events"
  ]
};

export const BOOK_COLLECTIONS: BookCategory[] = [
  { title: "Dalit Literature" },
  { title: "Poetry & Picture Books" },
  { title: "Children's Fiction" },
  { title: "Non-Fiction" },
  { title: "NCERT & UP Board" },
];