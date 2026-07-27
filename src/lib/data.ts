import { BlogPost, Project, SocialLink, StreamSchedule } from '@/types';

export const streamerInfo = {
  name: "MaddWrath",
  username: "maddwrath",
  tagline: "Welcome to the realm of MaddWrath!",
  bio: "Gaming enthusiast and content creator bringing you epic gameplay, exciting moments, and a community built on great vibes. Join the madness!",
  avatar: "/profilepic.png",
  banner: "/images/banner.jpg",
  location: "Australia, Melbourne",
  yearsStreaming: 5,
  totalFollowers: 850,
  totalViews: 12500,
  favoritePlatforms: ["PC", "PlayStation", "Xbox"],
  favoriteGenres: ["MMOs", "Adventure", "FPS", "ARPG", "Indie"],
  currentGame: "Old School Runescape",
  streamingDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  streamingTime: "8:00 PM - 12:00 AM EST"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Twitch",
    url: "https://twitch.tv/maddwrath",
    icon: "twitch",
    color: "#9146FF"
  },
  {
    platform: "Discord",
    url: "https://discord.gg/A6Xddn4YEq",
    icon: "discord",
    color: "#5865F2"
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@maddwrath_?lang=en-GB",
    icon: "tiktok",
    color: "#ec4899" 
  },
  {
    platform: "Kick",
    url: "https://kick.com/maddwrath",
    icon: "play",
    color: "#53FC18"
  }
];

export const streamSchedule: StreamSchedule[] = [
  
  {
    day: "Tuesday",
    time: "7 PM – 10 PM AEST",
    game: "Action Adventures",
    description: "Thrilling adventures"
  },
  {
    day: "Wednesday",
    time: "7 PM – 10 PM AEST",
    game: "Action Adventures",
    description: "Old School Runescape"
  },
  {
    day: "Thursday",
    time: "7 PM – 10 PM AEST",
    game: "FPS Games",
    description: "competitive gameplay"
  },
  {
    day: "Friday",
    time: "7 PM – 10 PM AEST",
    game: "Variety Night",
    description: "viewer suggestions"
  },
  {
    day: "Saturday",
    time: "7 PM – 10 PM AEST",
    game: "Variety Night",
    description: "Chat Interaction"
  }
];

// Add more posts here when ready (e.g. Old School Runescape)
export const blogPosts: BlogPost[] = [
  {
    title: "Guild Wars 2 Beginner Guide: Tips, Leveling & More",
    excerpt:
      "A beginner-friendly Guild Wars 2 guide covering tips, leveling, classes, mounts, gold farming, and endgame progression.",
    href: "https://maddwrathgw2.vercel.app/",
    image: "/images/blog/guild-wars-2.jpg",
    date: "2026-07-26",
    tags: ["Guild Wars 2", "Beginner Guide", "MMO"],
  },
  {
    title: "Old School Runescape Guide (Coming Soon)",
    excerpt:
      "An OSRS beginner guide is on the way. Join the Discord for updates, tips, and stream talk in the meantime.",
    href: "https://discord.gg/A6Xddn4YEq",
    image: "/images/blog/osrs.jpg",
    date: "2026-07-26",
    tags: ["OSRS", "Coming Soon", "MMO"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Epic Gaming Marathon",
    description: "12-hour gaming marathon featuring multiple games and raising funds for gaming accessibility charity.",
    image: "/images/gaming-marathon.jpg",
    date: "2024-06-15",
    tags: ["Marathon", "Charity", "Community"],
    link: "https://youtube.com/watch?v=gaming-marathon",
    featured: true
  },
  {
    id: "2",
    title: "MaddWrath Community Events",
    description: "Regular community events including game nights, tournaments, and special collaborations with other streamers.",
    image: "/images/community-events.jpg",
    date: "2024-05-01",
    tags: ["Community", "Events", "Collaboration"],
    link: "https://discord.gg/maddwrath-events",
    featured: true
  },
  {
    id: "3",
    title: "Game Review Series",
    description: "In-depth reviews and first impressions of new releases, helping viewers decide what games to play next.",
    image: "/images/game-reviews.jpg",
    date: "2024-04-20",
    tags: ["Reviews", "Gaming", "Content"],
    link: "https://youtube.com/playlist?list=maddwrath-reviews",
    featured: false
  },
  {
    id: "4",
    title: "Viewer Challenge Nights",
    description: "Interactive streams where viewers suggest challenges and game modes for entertaining gameplay sessions.",
    image: "/images/challenge-nights.jpg",
    date: "2024-03-30",
    tags: ["Interactive", "Challenges", "Entertainment"],
    featured: false
  }
];
