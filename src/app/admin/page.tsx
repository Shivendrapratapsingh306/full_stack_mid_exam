import { redirect } from "next/navigation";
import { getAdminFromCookie } from "@/lib/jwt";

export default async function AdminPage() {
  const admin = await getAdminFromCookie();
  if (admin) {
    redirect("/admin/dashboard");
  } else {
    redirect("/admin/login");
  }
}
