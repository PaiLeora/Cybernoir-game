export const cases = [
  {
    id: 1,
    title: "The Neon Nights Murder",
    description: "A prominent tech CEO found dead in his penthouse under mysterious circumstances.",
    difficulty: "Easy",
    estimatedTime: "30 mins",
    reward: 1000,
    solution: "Elena Vasquez",
    background: "In the neon-lit streets of Neo-Tokyo 2087...",
    suspects: ["Elena Vasquez", "Dr. James Wong", "Sarah Chen", "Victor Kane"],
    clues: [
      { id: "clue1", type: "document", title: "Encrypted Email", content: "Found on victim's computer..." },
      { id: "clue2", type: "image", title: "Security Footage", content: "Shows someone entering..." }
    ]
  },
  {
    id: 2,
    title: "The Phantom Hacker",
    description: "A series of cyber attacks targeting government systems.",
    difficulty: "Medium",
    estimatedTime: "45 mins",
    reward: 1500,
    solution: "Victor Kane",
    suspects: ["Victor Kane", "Anonymous", "DarkShadow"],
    clues: [
      { id: "clue1", type: "log", title: "Server Logs", content: "Unauthorized access detected..." }
    ]
  }
]

export default cases
