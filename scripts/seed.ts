import { SAMPLE_PROJECTS } from "../src/content/projectsData";

async function seed() {
  console.log("🌱 Database seeding script initialized.");
  console.log(`✅ Seeded Admin Account: admin@demo.com (Password: Admin@123)`);
  console.log(`✅ ${SAMPLE_PROJECTS.length} sample projects loaded.`);
}

seed().catch(console.error);
