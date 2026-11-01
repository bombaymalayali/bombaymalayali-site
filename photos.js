/* ============================================================
   photos.js · all your photo, cover and exhibition lists live here
   ============================================================
   This one file feeds both the home page and the Portfolio page.

   PHOTOS: every photo or video on the Portfolio page.
     1. A photo:
        { cat: "travel", src: "images/travel/travel-1.jpg", alt: "Describe the photo", w: 1335, h: 2000 }
        (w and h are the photo's pixel width and height)
     2. A short silent looping video clip (.mp4):
        { cat: "aerial", type: "video", src: "images/aerial/clip-1.mp4", alt: "Describe the clip", ratio: "16 / 9" }
     3. A YouTube embed:
        { cat: "travel", type: "youtube", id: "dQw4w9WgXcQ", alt: "Describe the film", ratio: "16 / 9" }

   Categories: "travel" | "architecture" | "aerial" | "landscape" | "portraits" | "wedding" | "other"
   ============================================================ */

const PHOTOS = [
  /* ---- TRAVEL (69) · alt text is a placeholder: replace later ---- */
  { cat: "travel", src: "images/travel/travel-1.jpg", alt: "Travel photo 1", w: 1335, h: 2000 },
  { cat: "travel", src: "images/travel/travel-2.jpg", alt: "Travel photo 2", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-3.jpg", alt: "Travel photo 3", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-4.jpg", alt: "Travel photo 4", w: 2000, h: 1335 },
  { cat: "travel", src: "images/travel/travel-5.jpg", alt: "Travel photo 5", w: 1600, h: 2000 },
  { cat: "travel", src: "images/travel/travel-6.jpg", alt: "Travel photo 6", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-7.jpg", alt: "Travel photo 7", w: 2000, h: 1316 },
  { cat: "travel", src: "images/travel/travel-8.jpg", alt: "Travel photo 8", w: 1600, h: 2000 },
  { cat: "travel", src: "images/travel/travel-9.jpg", alt: "Travel photo 9", w: 1473, h: 2000 },
  { cat: "travel", src: "images/travel/travel-10.jpg", alt: "Travel photo 10", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-11.jpg", alt: "Travel photo 11", w: 2000, h: 1600 },
  { cat: "travel", src: "images/travel/travel-12.jpg", alt: "Travel photo 12", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-13.jpg", alt: "Travel photo 13", w: 2000, h: 1500 },
  { cat: "travel", src: "images/travel/travel-14.jpg", alt: "Travel photo 14", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-15.jpg", alt: "Travel photo 15", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-16.jpg", alt: "Travel photo 16", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-17.jpg", alt: "Travel photo 17", w: 2000, h: 1500 },
  { cat: "travel", src: "images/travel/travel-18.jpg", alt: "Travel photo 18", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-19.jpg", alt: "Travel photo 19", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-20.jpg", alt: "Travel photo 20", w: 2000, h: 1333 },
  { cat: "travel", src: "images/travel/travel-21.jpg", alt: "Travel photo 21", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-22.jpg", alt: "Travel photo 22", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-23.jpg", alt: "Travel photo 23", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-24.jpg", alt: "Travel photo 24", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-25.jpg", alt: "Travel photo 25", w: 2000, h: 1333 },
  { cat: "travel", src: "images/travel/travel-26.jpg", alt: "Travel photo 26", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-27.jpg", alt: "Travel photo 27", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-28.jpg", alt: "Travel photo 28", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-29.jpg", alt: "Travel photo 29", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-30.jpg", alt: "Travel photo 30", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-31.jpg", alt: "Travel photo 31", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-32.jpg", alt: "Travel photo 32", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-33.jpg", alt: "Travel photo 33", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-34.jpg", alt: "Travel photo 34", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-35.jpg", alt: "Travel photo 35", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-36.jpg", alt: "Travel photo 36", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-37.jpg", alt: "Travel photo 37", w: 1125, h: 2000 },
  { cat: "travel", src: "images/travel/travel-38.jpg", alt: "Travel photo 38", w: 1125, h: 2000 },
  { cat: "travel", src: "images/travel/travel-39.jpg", alt: "Travel photo 39", w: 1499, h: 2000 },
  { cat: "travel", src: "images/travel/travel-40.jpg", alt: "Travel photo 40", w: 2000, h: 1000 },
  { cat: "travel", src: "images/travel/travel-41.jpg", alt: "Travel photo 41", w: 2000, h: 1333 },
  { cat: "travel", src: "images/travel/travel-42.jpg", alt: "Travel photo 42", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-43.jpg", alt: "Travel photo 43", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-44.jpg", alt: "Travel photo 44", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-45.jpg", alt: "Travel photo 45", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-46.jpg", alt: "Travel photo 46", w: 2000, h: 1500 },
  { cat: "travel", src: "images/travel/travel-49.jpg", alt: "Travel photo 49", w: 1334, h: 2000 },
  { cat: "travel", src: "images/travel/travel-50.jpg", alt: "Travel photo 50", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-52.jpg", alt: "Travel photo 52", w: 1334, h: 2000 },
  { cat: "travel", src: "images/travel/travel-53.jpg", alt: "Travel photo 53", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-54.jpg", alt: "Travel photo 54", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-55.jpg", alt: "Travel photo 55", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-56.jpg", alt: "Travel photo 56", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-57.jpg", alt: "Travel photo 57", w: 1600, h: 2000 },
  { cat: "travel", src: "images/travel/travel-58.jpg", alt: "Travel photo 58", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-59.jpg", alt: "Travel photo 59", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-60.jpg", alt: "Travel photo 60", w: 2000, h: 1333 },
  { cat: "travel", src: "images/travel/travel-61.jpg", alt: "Travel photo 61", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-62.jpg", alt: "Travel photo 62", w: 2000, h: 1333 },
  { cat: "travel", src: "images/travel/travel-63.jpg", alt: "Travel photo 63", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-64.jpg", alt: "Travel photo 64", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-65.jpg", alt: "Travel photo 65", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-66.jpg", alt: "Travel photo 66", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-67.jpg", alt: "Travel photo 67", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-68.jpg", alt: "Travel photo 68", w: 1333, h: 2000 },
  { cat: "travel", src: "images/travel/travel-69.jpg", alt: "Travel photo 69", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-70.jpg", alt: "Travel photo 70", w: 1500, h: 2000 },
  { cat: "travel", src: "images/travel/travel-71.jpg", alt: "Travel photo 71", w: 2000, h: 1333 },
  { cat: "travel", src: "images/travel/travel-72.jpg", alt: "Travel photo 72", w: 1500, h: 2000 },
  /* ---- ARCHITECTURE (31) · alt text is a placeholder: replace later ---- */
  { cat: "architecture", src: "images/architecture/architecture-1.jpg", alt: "Architecture photo 1", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-2.jpg", alt: "Architecture photo 2", w: 1501, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-3.jpg", alt: "Architecture photo 3", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-4.jpg", alt: "Architecture photo 4", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-7.jpg", alt: "Architecture photo 7", w: 2000, h: 1500 },
  { cat: "architecture", src: "images/architecture/architecture-8.jpg", alt: "Architecture photo 8", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-9.jpg", alt: "Architecture photo 9", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-11.jpg", alt: "Architecture photo 11", w: 1333, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-12.jpg", alt: "Architecture photo 12", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-14.jpg", alt: "Architecture photo 14", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-15.jpg", alt: "Architecture photo 15", w: 1125, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-16.jpg", alt: "Architecture photo 16", w: 1509, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-17.jpg", alt: "Architecture photo 17", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-18.jpg", alt: "Architecture photo 18", w: 2000, h: 1500 },
  { cat: "architecture", src: "images/architecture/architecture-19.jpg", alt: "Architecture photo 19", w: 1499, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-20.jpg", alt: "Architecture photo 20", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-21.jpg", alt: "Architecture photo 21", w: 1125, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-22.jpg", alt: "Architecture photo 22", w: 1499, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-23.jpg", alt: "Architecture photo 23", w: 2000, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-24.jpg", alt: "Architecture photo 24", w: 1333, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-25.jpg", alt: "Architecture photo 25", w: 1125, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-26.jpg", alt: "Architecture photo 26", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-27.jpg", alt: "Architecture photo 27", w: 1125, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-28.jpg", alt: "Architecture photo 28", w: 1125, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-29.jpg", alt: "Architecture photo 29", w: 1125, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-30.jpg", alt: "Architecture photo 30", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-31.jpg", alt: "Architecture photo 31", w: 1600, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-32.jpg", alt: "Architecture photo 32", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-33.jpg", alt: "Architecture photo 33", w: 1500, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-34.jpg", alt: "Architecture photo 34", w: 1333, h: 2000 },
  { cat: "architecture", src: "images/architecture/architecture-35.jpg", alt: "Architecture photo 35", w: 1333, h: 2000 },
  /* ---- AERIAL (7) · alt text is a placeholder: replace later ---- */
  { cat: "aerial", src: "images/aerial/aerial-1.jpg", alt: "Aerial photo 1", w: 2000, h: 1498 },
  { cat: "aerial", src: "images/aerial/aerial-2.jpg", alt: "Aerial photo 2", w: 2000, h: 1497 },
  { cat: "aerial", src: "images/aerial/aerial-3.jpg", alt: "Aerial photo 3", w: 1498, h: 2000 },
  { cat: "aerial", src: "images/aerial/aerial-4.jpg", alt: "Aerial photo 4", w: 2000, h: 1498 },
  { cat: "aerial", src: "images/aerial/aerial-5.jpg", alt: "Aerial photo 5", w: 2000, h: 1333 },
  { cat: "aerial", src: "images/aerial/aerial-6.jpg", alt: "Aerial photo 6", w: 1500, h: 2000 },
  { cat: "aerial", src: "images/aerial/aerial-7.jpg", alt: "Aerial photo 7", w: 2000, h: 1334 },
  /* ---- PORTRAITS (17) · alt text is a placeholder: replace later ---- */
  { cat: "portraits", src: "images/portraits/portrait-1.jpg", alt: "Portrait 1", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-2.jpg", alt: "Portrait 2", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-3.jpg", alt: "Portrait 3", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-4.jpg", alt: "Portrait 4", w: 1501, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-6.jpg", alt: "Portrait 6", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-7.jpg", alt: "Portrait 7", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-8.jpg", alt: "Portrait 8", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-9.jpg", alt: "Portrait 9", w: 2000, h: 1333 },
  { cat: "portraits", src: "images/portraits/portrait-10.jpg", alt: "Portrait 10", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-11.jpg", alt: "Portrait 11", w: 2000, h: 1334 },
  { cat: "portraits", src: "images/portraits/portrait-12.jpg", alt: "Portrait 12", w: 1334, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-13.jpg", alt: "Portrait 13", w: 1334, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-14.jpg", alt: "Portrait 14", w: 2000, h: 1334 },
  { cat: "portraits", src: "images/portraits/portrait-15.jpg", alt: "Portrait 15", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-16.jpg", alt: "Portrait 16", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-17.jpg", alt: "Portrait 17", w: 1500, h: 2000 },
  { cat: "portraits", src: "images/portraits/portrait-18.jpg", alt: "Portrait 18", w: 1600, h: 2000 },
  /* ---- WEDDING (11) · alt text is a placeholder: replace later ---- */
  { cat: "wedding", src: "images/wedding/wedding-1.jpg", alt: "Wedding photo 1", w: 1334, h: 2000 },
  { cat: "wedding", src: "images/wedding/wedding-2.jpg", alt: "Wedding photo 2", w: 1333, h: 2000 },
  { cat: "wedding", src: "images/wedding/wedding-3.jpg", alt: "Wedding photo 3", w: 2000, h: 1429 },
  { cat: "wedding", src: "images/wedding/wedding-4.jpg", alt: "Wedding photo 4", w: 2000, h: 1333 },
  { cat: "wedding", src: "images/wedding/wedding-5.jpg", alt: "Wedding photo 5", w: 2000, h: 1334 },
  { cat: "wedding", src: "images/wedding/wedding-6.jpg", alt: "Wedding photo 6", w: 1333, h: 2000 },
  { cat: "wedding", src: "images/wedding/wedding-7.jpg", alt: "Wedding photo 7", w: 2000, h: 1334 },
  { cat: "wedding", src: "images/wedding/wedding-8.jpg", alt: "Wedding photo 8", w: 2000, h: 1334 },
  { cat: "wedding", src: "images/wedding/wedding-9.jpg", alt: "Wedding photo 9", w: 2000, h: 1334 },
  { cat: "wedding", src: "images/wedding/wedding-10.jpg", alt: "Wedding photo 10", w: 2000, h: 1334 },
  { cat: "wedding", src: "images/wedding/wedding-11.jpg", alt: "Wedding photo 11", w: 1334, h: 2000 },
  /* ---- OTHER (10) · alt text is a placeholder: replace later ---- */
  { cat: "other", src: "images/other/other-1.jpg", alt: "Other photo 1", w: 1600, h: 2000 },
  { cat: "other", src: "images/other/other-2.jpg", alt: "Other photo 2", w: 1600, h: 2000 },
  { cat: "other", src: "images/other/other-3.jpg", alt: "Other photo 3", w: 1600, h: 2000 },
  { cat: "other", src: "images/other/other-4.jpg", alt: "Other photo 4", w: 2000, h: 1500 },
  { cat: "other", src: "images/other/other-5.jpg", alt: "Other photo 5", w: 1333, h: 2000 },
  { cat: "other", src: "images/other/other-6.jpg", alt: "Other photo 6", w: 1333, h: 2000 },
  { cat: "other", src: "images/other/other-7.jpg", alt: "Other photo 7", w: 1333, h: 2000 },
  { cat: "other", src: "images/other/other-8.jpg", alt: "Other photo 8", w: 1333, h: 2000 },
  { cat: "other", src: "images/other/other-9.jpg", alt: "Other photo 9", w: 2000, h: 1125 },
  { cat: "other", src: "images/other/other-10.jpg", alt: "Other photo 10", w: 2000, h: 1335 }
];

/* Category names shown on the site (order = order of the filter buttons).
   A category with no photos is hidden automatically until you add one. */
const GENRES = [
  ["all", "All Works"],
  ["travel", "Travel"],
  ["architecture", "Architecture"],
  ["aerial", "Aerial"],
  ["landscape", "Landscape"],
  ["portraits", "Portraits"],
  ["wedding", "Wedding"],
  ["other", "Other"]
];

/* Categories listed here are hidden everywhere on the site (their photos
   stay in the list above). To show "Other" again, change it to: [] */
const HIDDEN_GENRES = ["other"];

/* HOME PAGE COVERS: one photo per category, shown in this order.
   To swap a cover, change the path. To add a category to the home page
   (for example wedding), add a line for it, then add a comma to the line before. */
const COVERS = {
  aerial: "images/aerial/aerial-1.jpg",
  architecture: "images/architecture/architecture-21.jpg",
  portraits: "images/portraits/portrait-1.jpg",
  travel: "images/travel/travel-32.jpg",
  wedding: "images/wedding/wedding-4.jpg"
  /* landscape: "images/landscape/landscape-1.jpg", */
};

/* EXHIBITIONS: photos or videos from places where your work has been shown.
   While this list is empty, the Exhibitions section stays hidden on the home page.
   Each item can be a photo, an mp4 video or a YouTube video, just like PHOTOS above,
   plus optional title, venue and year, which appear as a caption. Example:
     { title: "EXHIBITION NAME", venue: "VENUE OR CITY", year: "YEAR",
       src: "images/exhibitions/exhibition-1.jpg", alt: "Describe the photo", w: 1600, h: 1067 }
*/
const EXHIBITIONS = [
];
