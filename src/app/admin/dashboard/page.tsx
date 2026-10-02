"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FlameIcon, ShieldCheckIcon, MailIcon, ZapIcon } from "@/components/ui/icons";

interface EnquiryItem {
  _id: string;
  name: string;
  email: string;
  company?: string;
  budget: string;
  service: string;
  message: string;
  status: "NEW" | "READ" | "REPLIED" | "ARCHIVED";
  createdAt: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [adminUser, setAdminUser] = useState<{ email: string; role: string } | null>(null);
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      // 1. Check Me Auth
      const meRes = await fetch("/api/v1/auth/me");
      const meJson = await meRes.json();

      if (!meRes.ok || !meJson.success) {
        router.push("/admin/login");
        return;
      }
      setAdminUser(meJson.data);

      // 2. Fetch Enquiries
      const enqRes = await fetch("/api/v1/enquiries");
      const enqJson = await enqRes.json();

      if (enqRes.ok && enqJson.success) {
        setEnquiries(enqJson.data || []);
      }
    } catch {
      setError("Failed to load CMS dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/v1/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter((e) => e.status === "NEW").length;
  const totalProjects = 4; // Sample/DB project stats
  const publishedProjects = 4;

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-12">
      <Container size="large">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="live">ADMIN CMS ACTIVE</Badge>
              {adminUser && <span className="text-xs font-mono text-[#F2660A]">{adminUser.email}</span>}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#F5F5F4]">
              Studio CMS Dashboard
            </h1>
          </div>

          <Button variant="outline" size="sm" onClick={handleLogout}>
            Logout Session
          </Button>
        </div>

        {/* Overview Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <Card variant="glass">
            <div className="flex items-center gap-3 mb-2">
              <ZapIcon className="w-5 h-5 text-[#F2660A]" />
              <span className="text-xs font-mono uppercase text-[#A8A29E]">Total Projects</span>
            </div>
            <p className="text-3xl font-extrabold font-heading text-[#F5F5F4]">{totalProjects}</p>
          </Card>

          <Card variant="glass">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono uppercase text-[#A8A29E]">Published</span>
            </div>
            <p className="text-3xl font-extrabold font-heading text-emerald-400">{publishedProjects}</p>
          </Card>

          <Card variant="glass">
            <div className="flex items-center gap-3 mb-2">
              <MailIcon className="w-5 h-5 text-[#FF8A1E]" />
              <span className="text-xs font-mono uppercase text-[#A8A29E]">Total Enquiries</span>
            </div>
            <p className="text-3xl font-extrabold font-heading text-[#F5F5F4]">{totalEnquiries}</p>
          </Card>

          <Card variant="glass">
            <div className="flex items-center gap-3 mb-2">
              <FlameIcon className="w-5 h-5 text-[#FACC15] animate-pulse" />
              <span className="text-xs font-mono uppercase text-[#A8A29E]">New Leads</span>
            </div>
            <p className="text-3xl font-extrabold font-heading text-[#FACC15]">{newEnquiries}</p>
          </Card>
        </div>

        {/* Enquiries Listing Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-[#F5F5F4] font-heading mb-6">
            Stored Contact Enquiries ({enquiries.length})
          </h2>

          {loading ? (
            <div className="p-8 text-center text-[#A8A29E]">Loading CMS enquiries...</div>
          ) : error ? (
            <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-200 text-sm">
              {error}
            </div>
          ) : enquiries.length === 0 ? (
            <Card variant="glass" className="text-center py-12">
              <MailIcon className="w-8 h-8 text-[#A8A29E] mx-auto mb-3" />
              <p className="text-sm text-[#A8A29E]">No client enquiries stored in database yet.</p>
            </Card>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#1A1614]">
              <table className="w-full text-left text-xs sm:text-sm text-[#F5F5F4]">
                <thead className="bg-[#0C0A09] uppercase text-[10px] tracking-wider text-[#A8A29E] border-b border-white/10">
                  <tr>
                    <th className="p-4">Name & Email</th>
                    <th className="p-4">Company</th>
                    <th className="p-4">Budget</th>
                    <th className="p-4">Service</th>
                    <th className="p-4">Message</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {enquiries.map((enq) => (
                    <tr key={enq._id} className="hover:bg-white/5">
                      <td className="p-4 font-semibold">
                        <div>{enq.name}</div>
                        <div className="text-xs text-[#A8A29E] font-mono">{enq.email}</div>
                      </td>
                      <td className="p-4 text-[#A8A29E]">{enq.company || "—"}</td>
                      <td className="p-4">
                        <Badge variant="ember">{enq.budget}</Badge>
                      </td>
                      <td className="p-4">{enq.service}</td>
                      <td className="p-4 max-w-xs truncate text-[#A8A29E]">{enq.message}</td>
                      <td className="p-4">
                        <Badge variant={enq.status === "NEW" ? "gold" : "outline"}>
                          {enq.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-[#A8A29E] text-xs font-mono">
                        {new Date(enq.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
