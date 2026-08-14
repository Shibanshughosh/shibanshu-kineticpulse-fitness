// ================================================================
// KINETICPULSE — MASTER DATA STORE
// Full Mon–Sun schedule, trainers, programs, membership tiers
// ================================================================
import { images } from './imageConfig';

export const heroAssets = {
  heroBg: images.hero.local,
  fallbackHeroBg: images.hero.fallback,
};

export const studioStats = [
  { label: "Active Members", value: "1,240+", icon: "Users" },
  { label: "Weekly Classes", value: "45+", icon: "Calendar" },
  { label: "Master Coaches", value: "12", icon: "Award" },
  { label: "Member Retention", value: "99.4%", icon: "TrendingUp" }
];

export const featuredPrograms = [
  {
    id: "hiit-conditioning",
    title: "High-Octane HIIT",
    tagline: "Maximum Caloric Burn & Athletic Stamina",
    description: "Heart-pounding interval training engineered with kettlebells, rowers, and plyometrics to spike your metabolic rate for 48 hours post-workout.",
    duration: "45 Min",
    intensity: "High Intensity",
    calories: "650–850 kcal",
    image: images.programs.hiit.local,
    fallbackImage: images.programs.hiit.fallback,
    features: ["Heart Rate Tracking", "Functional Kettlebell Work", "Endurance Circuits"]
  },
  {
    id: "reformer-pilates",
    title: "Dynamic Reformer Pilates",
    tagline: "Core Precision, Posture & Sculpted Power",
    description: "State-of-the-art Allegro 2 Reformers combined with low-impact spring resistance to build lean muscle density, core control, and flexible strength.",
    duration: "50 Min",
    intensity: "Moderate / Controlled",
    calories: "400–550 kcal",
    image: images.programs.pilates.local,
    fallbackImage: images.programs.pilates.fallback,
    features: ["Balanced Body Reformers", "Spinal Alignment Focus", "Deep Core Engagement"]
  },
  {
    id: "power-lifting",
    title: "Barbell & Power Lifting",
    tagline: "Heavy Compound Strength & Hypertrophy",
    description: "Master foundational compound lifts—squats, deadlifts, and bench press—with dedicated Eleiko platforms, calibrated plates, and expert coaching.",
    duration: "60 Min",
    intensity: "Heavy Strength",
    calories: "500–700 kcal",
    image: images.programs.powerlifting.local,
    fallbackImage: images.programs.powerlifting.fallback,
    features: ["Eleiko Olympic Racks", "1-on-1 Form Audits", "Progressive Overload Logs"]
  },
  {
    id: "sauna-recovery",
    title: "Infrared Sauna & Cold Plunge",
    tagline: "Cellular Regeneration & Contrast Therapy",
    description: "Accelerate athletic recovery in 3°C ice plunge tubs followed by 75°C full-spectrum infrared sauna cabins to flush lactic acid and eliminate fatigue.",
    duration: "45 Min",
    intensity: "Active Recovery",
    calories: "Recovery Mode",
    image: images.programs.sauna.local,
    fallbackImage: images.programs.sauna.fallback,
    features: ["Filtered Cold Plunges", "Full-Spectrum Infrared", "Zero-Gravity Loungers"]
  }
];

// Full Mon–Sun Class Schedule (5 classes per day = 35 entries)
export const classScheduleData = [
  // ── MONDAY ──
  { id: "c1", day: "Monday", time: "06:30 AM", title: "Sunrise HIIT Blast", category: "HIIT", instructor: "Marcus Vance", room: "Main Athletic Arena", spotsLeft: 3, status: "Filling Fast", duration: "45m" },
  { id: "c2", day: "Monday", time: "08:00 AM", title: "Reformer Precision & Flow", category: "Pilates", instructor: "Elena Rostova", room: "Pilates Studio A", spotsLeft: 1, status: "1 Slot Left", duration: "50m" },
  { id: "c3", day: "Monday", time: "12:00 PM", title: "Lunch Express Strength", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 6, status: "Open", duration: "45m" },
  { id: "c4", day: "Monday", time: "06:00 PM", title: "Metabolic Conditioning", category: "HIIT", instructor: "Soren Thorne", room: "Main Athletic Arena", spotsLeft: 0, status: "Waitlist Only", duration: "60m" },
  { id: "c5", day: "Monday", time: "07:30 PM", title: "Infrared Recovery Session", category: "Recovery", instructor: "Dr. Aris Thorne", room: "Recovery Sanctuary", spotsLeft: 4, status: "Open", duration: "45m" },

  // ── TUESDAY ──
  { id: "c6", day: "Tuesday", time: "07:00 AM", title: "Barbell Squat & Pull Clinic", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 4, status: "Open", duration: "60m" },
  { id: "c7", day: "Tuesday", time: "09:30 AM", title: "Sculpt & Stretch Reformer", category: "Pilates", instructor: "Maya Lin", room: "Pilates Studio A", spotsLeft: 2, status: "Filling Fast", duration: "50m" },
  { id: "c8", day: "Tuesday", time: "12:30 PM", title: "Athletic Power HIIT", category: "HIIT", instructor: "Marcus Vance", room: "Main Athletic Arena", spotsLeft: 7, status: "Open", duration: "45m" },
  { id: "c9", day: "Tuesday", time: "05:30 PM", title: "Contrast Therapy & Mobility", category: "Recovery", instructor: "Dr. Aris Thorne", room: "Recovery Sanctuary", spotsLeft: 5, status: "Open", duration: "45m" },
  { id: "c10", day: "Tuesday", time: "07:00 PM", title: "Evening Olympic Lifting", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 0, status: "Waitlist Only", duration: "60m" },

  // ── WEDNESDAY ──
  { id: "c11", day: "Wednesday", time: "06:00 AM", title: "Pre-Dawn Conditioning", category: "HIIT", instructor: "Soren Thorne", room: "Main Athletic Arena", spotsLeft: 5, status: "Open", duration: "50m" },
  { id: "c12", day: "Wednesday", time: "09:00 AM", title: "Core & Balance Reformer", category: "Pilates", instructor: "Elena Rostova", room: "Pilates Studio A", spotsLeft: 3, status: "Open", duration: "50m" },
  { id: "c13", day: "Wednesday", time: "11:30 AM", title: "Strength & Hypertrophy", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 6, status: "Open", duration: "60m" },
  { id: "c14", day: "Wednesday", time: "05:00 PM", title: "Speed & Agility HIIT", category: "HIIT", instructor: "Marcus Vance", room: "Main Athletic Arena", spotsLeft: 2, status: "Filling Fast", duration: "45m" },
  { id: "c15", day: "Wednesday", time: "07:30 PM", title: "Deep Tissue & Cold Plunge", category: "Recovery", instructor: "Dr. Aris Thorne", room: "Recovery Sanctuary", spotsLeft: 8, status: "Open", duration: "45m" },

  // ── THURSDAY ──
  { id: "c16", day: "Thursday", time: "07:00 AM", title: "Kettlebell Power Flow", category: "HIIT", instructor: "Marcus Vance", room: "Main Athletic Arena", spotsLeft: 4, status: "Open", duration: "45m" },
  { id: "c17", day: "Thursday", time: "09:30 AM", title: "Athletic Reformer Intervals", category: "Pilates", instructor: "Maya Lin", room: "Pilates Studio A", spotsLeft: 0, status: "Waitlist Only", duration: "50m" },
  { id: "c18", day: "Thursday", time: "12:00 PM", title: "Deadlift Mastery Clinic", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 3, status: "Filling Fast", duration: "60m" },
  { id: "c19", day: "Thursday", time: "06:00 PM", title: "Threshold Conditioning", category: "HIIT", instructor: "Soren Thorne", room: "Main Athletic Arena", spotsLeft: 1, status: "Filling Fast", duration: "55m" },
  { id: "c20", day: "Thursday", time: "07:30 PM", title: "Infrared Sauna Wind-Down", category: "Recovery", instructor: "Dr. Aris Thorne", room: "Recovery Sanctuary", spotsLeft: 6, status: "Open", duration: "45m" },

  // ── FRIDAY ──
  { id: "c21", day: "Friday", time: "06:30 AM", title: "Friday Ignite HIIT", category: "HIIT", instructor: "Marcus Vance", room: "Main Athletic Arena", spotsLeft: 5, status: "Open", duration: "45m" },
  { id: "c22", day: "Friday", time: "08:30 AM", title: "Posture Perfect Pilates", category: "Pilates", instructor: "Elena Rostova", room: "Pilates Studio A", spotsLeft: 4, status: "Open", duration: "50m" },
  { id: "c23", day: "Friday", time: "12:00 PM", title: "Power Hour Strength", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 7, status: "Open", duration: "60m" },
  { id: "c24", day: "Friday", time: "05:30 PM", title: "End-of-Week Burn", category: "HIIT", instructor: "Soren Thorne", room: "Main Athletic Arena", spotsLeft: 0, status: "Waitlist Only", duration: "50m" },
  { id: "c25", day: "Friday", time: "07:00 PM", title: "Full Recovery Protocol", category: "Recovery", instructor: "Dr. Aris Thorne", room: "Recovery Sanctuary", spotsLeft: 9, status: "Open", duration: "60m" },

  // ── SATURDAY ──
  { id: "c26", day: "Saturday", time: "08:00 AM", title: "Weekend Warrior HIIT", category: "HIIT", instructor: "Marcus Vance", room: "Main Athletic Arena", spotsLeft: 2, status: "Filling Fast", duration: "60m" },
  { id: "c27", day: "Saturday", time: "09:30 AM", title: "Saturday Reformer Flow", category: "Pilates", instructor: "Elena Rostova", room: "Pilates Studio A", spotsLeft: 0, status: "Waitlist Only", duration: "50m" },
  { id: "c28", day: "Saturday", time: "11:00 AM", title: "Olympic Lift Masterclass", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 5, status: "Open", duration: "75m" },
  { id: "c29", day: "Saturday", time: "01:00 PM", title: "Plyometrics & Agility", category: "HIIT", instructor: "Soren Thorne", room: "Main Athletic Arena", spotsLeft: 3, status: "Open", duration: "45m" },
  { id: "c30", day: "Saturday", time: "04:00 PM", title: "Contrast Therapy Premium", category: "Recovery", instructor: "Dr. Aris Thorne", room: "Recovery Sanctuary", spotsLeft: 7, status: "Open", duration: "60m" },

  // ── SUNDAY ──
  { id: "c31", day: "Sunday", time: "09:00 AM", title: "Sunday Strength Reset", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 8, status: "Open", duration: "60m" },
  { id: "c32", day: "Sunday", time: "10:30 AM", title: "Restorative Pilates Flow", category: "Pilates", instructor: "Maya Lin", room: "Pilates Studio A", spotsLeft: 4, status: "Open", duration: "60m" },
  { id: "c33", day: "Sunday", time: "12:00 PM", title: "Active Recovery HIIT", category: "HIIT", instructor: "Marcus Vance", room: "Main Athletic Arena", spotsLeft: 6, status: "Open", duration: "45m" },
  { id: "c34", day: "Sunday", time: "02:00 PM", title: "Parasympathetic Reset", category: "Recovery", instructor: "Dr. Aris Thorne", room: "Recovery Sanctuary", spotsLeft: 10, status: "Open", duration: "60m" },
  { id: "c35", day: "Sunday", time: "05:00 PM", title: "Week Prep Power Session", category: "Strength", instructor: "Jaxson Cole", room: "Iron Vault", spotsLeft: 1, status: "Filling Fast", duration: "55m" }
];

export const masterTrainers = [
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Head of High Performance & HIIT",
    specialty: "Olympic Weightlifting & Metabolic Conditioning",
    certifications: ["NSCA-CSCS", "CrossFit Level 3 Coach", "EXOS Performance Specialist"],
    experience: "11+ Years",
    bio: "Former collegiate decathlete turned elite strength coach. Marcus specializes in explosive athletic power development and body recomposition. His training philosophy blends science-based periodization with high-energy group dynamics.",
    image: images.trainers.marcus.local,
    fallbackImage: images.trainers.marcus.fallback,
    instagram: "@marcusvance_fit",
    rating: 4.98,
    sessionsCoached: "3,400+"
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Director of Reformer Pilates",
    specialty: "Biomechanical Posture & Athletic Reformer",
    certifications: ["Balanced Body Master Trainer", "PMA Certified", "Physical Therapy B.S."],
    experience: "9+ Years",
    bio: "Classical ballet dancer trained in Moscow. Elena seamlessly blends clinical biomechanics with dynamic resistance to forge iron core stability. She has helped 500+ clients recover from postural imbalances and athletic injuries.",
    image: images.trainers.elena.local,
    fallbackImage: images.trainers.elena.fallback,
    instagram: "@elena_pilatespro",
    rating: 4.99,
    sessionsCoached: "2,850+"
  },
  {
    id: "jaxson-cole",
    name: "Jaxson Cole",
    role: "Master Strength & Hypertrophy Coach",
    specialty: "Compound Powerlifting & Muscle Architecture",
    certifications: ["USAPL National Referee", "NASM-CPT", "Precision Nutrition Level 2"],
    experience: "8+ Years",
    bio: "Competitive powerlifter with a 720lb deadlift record. Jaxson mentors athletes through safe technique, progressive overload, and customized nutrition protocols designed to maximize muscular output while minimizing injury risk.",
    image: images.trainers.jaxson.local,
    fallbackImage: images.trainers.jaxson.fallback,
    instagram: "@jaxsoncole_power",
    rating: 4.97,
    sessionsCoached: "2,200+"
  },
  {
    id: "dr-aris-thorne",
    name: "Dr. Aris Thorne",
    role: "Sports Scientist & Recovery Lead",
    specialty: "Cryotherapy, Infrared & Muscle Regeneration",
    certifications: ["Ph.D. Kinesiology", "CSCS", "Certified Recovery Specialist"],
    experience: "12+ Years",
    bio: "Pioneer in thermal contrast therapy and parasympathetic recovery systems. Dr. Thorne designs scientifically backed recovery routines for peak performance athletes, optimizing sleep quality, hormonal balance, and HRV metrics.",
    image: images.trainers.aris.local,
    fallbackImage: images.trainers.aris.fallback,
    instagram: "@dr_aris_recovery",
    rating: 5.0,
    sessionsCoached: "4,100+"
  }
];

export const membershipTiers = [
  {
    id: "day-pass",
    name: "Single Day Pass",
    priceMonthly: 35,
    priceAnnual: 35,
    billingText: "Per Single Visit",
    popular: false,
    badge: "Flexible Access",
    tagline: "Perfect for traveling athletes or trying out our elite studio facilities.",
    features: [
      "Full access to Main Athletic Arena & Lifting Vault",
      "1 Group Class (HIIT or Strength)",
      "Complimentary Locker & Towel Service",
      "Access to Protein Smoothie Bar",
      "Standard Member Lounge Access"
    ],
    ctaText: "Get Day Pass"
  },
  {
    id: "unlimited-all-access",
    name: "Unlimited All-Access",
    priceMonthly: 189,
    priceAnnual: 151,
    billingText: "Billed monthly · Cancel anytime",
    popular: true,
    badge: "Most Popular",
    tagline: "Complete access to all group classes, Reformer studio, and contrast recovery.",
    features: [
      "Unlimited HIIT, Powerlifting & Strength Classes",
      "Unlimited Reformer Pilates Access",
      "Daily Infrared Sauna & Cold Plunge Sessions",
      "1 Monthly InBody 770 Composition Scan",
      "Guest Pass: 2 Complimentary Passes / Month",
      "Priority 7-Day Advance Class Booking",
      "15% Discount on Pro Shop & Supplements"
    ],
    ctaText: "Claim Membership"
  },
  {
    id: "vip-private-performance",
    name: "VIP Private Performance",
    priceMonthly: 350,
    priceAnnual: 280,
    billingText: "Billed monthly · All-inclusive",
    popular: false,
    badge: "Elite VIP",
    tagline: "Dedicated 1-on-1 coaching, personalized macros, and permanent private locker.",
    features: [
      "Everything in Unlimited All-Access Tier",
      "4 Private 1-on-1 Personal Coaching Sessions / mo",
      "Dedicated Assigned Coach & Custom App Plan",
      "Custom Macro & Performance Nutrition Protocol",
      "Permanent Private Heated Locker & Laundry",
      "Unlimited Guest Passes (Bring a friend anytime)",
      "VIP Priority Booking Window (14 Days in advance)"
    ],
    ctaText: "Join VIP Tier"
  }
];

export const memberTestimonials = [
  {
    id: 1,
    name: "Samantha Sterling",
    role: "Tech Executive & Marathoner",
    tier: "Unlimited All-Access Member",
    quote: "The combination of high-intensity kettlebell work and Reformer Pilates completely changed my running performance. Dropped 12 minutes off my marathon PR in 4 months!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Venture Partner",
    tier: "VIP Private Member",
    quote: "KineticPulse feels like a private athletic club for elite performers. Marcus's coaching on compound lifts cured my chronic lower back tension within weeks.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Chloe Rodriguez",
    role: "Architect & Pilates Enthusiast",
    tier: "Unlimited All-Access Member",
    quote: "The contrast recovery setup with the 3°C cold plunge and infrared sauna is unbeatable. The studio vibe is electrified yet mature and supportive.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    rating: 5
  }
];

export const instagramGallery = [
  {
    id: "g1",
    title: "Reformer Core Focus",
    image: images.gallery.post1.local,
    fallbackImage: images.gallery.post1.fallback,
    likes: "428"
  },
  {
    id: "g2",
    title: "Heavy Deadlift Grind",
    image: images.gallery.post2.local,
    fallbackImage: images.gallery.post2.fallback,
    likes: "892"
  },
  {
    id: "g3",
    title: "Cold Plunge Recovery",
    image: images.gallery.post3.local,
    fallbackImage: images.gallery.post3.fallback,
    likes: "614"
  },
  {
    id: "g4",
    title: "Kettlebell HIIT Arena",
    image: images.gallery.post4.local,
    fallbackImage: images.gallery.post4.fallback,
    likes: "1,120"
  }
];
