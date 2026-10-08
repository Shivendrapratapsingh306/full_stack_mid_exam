"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FlameIcon, ArrowRightIcon } from "@/components/ui/icons";
import { loginSchema } from "@/validators/auth.schema";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const validation = loginSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setAuthError(json.error?.message || "Invalid credentials.");
      } else {
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch {
      setAuthError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-20 sm:py-32 min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7C2D12]/30 rounded-full blur-[150px] pointer-events-none" />

      <Container size="small">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F2660A] to-[#7C2D12] text-white shadow-ember-glow mb-4">
              <FlameIcon className="w-6 h-6 animate-pulse" />
            </div>
            <h1 className="text-3xl font-extrabold font-heading text-[#F5F5F4]">
              Studio CMS Authentication
            </h1>
            <p className="text-xs text-[#A8A29E] mt-2">
              Protected login for studio administrators
            </p>
          </div>

          <Card variant="glass" className="border-[#F2660A]/30 shadow-ember-glow p-8">
            {authError && (
              <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-200 text-xs mb-6">
                {authError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
                  Admin Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@demo.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0C0A09] border border-white/10 text-[#F5F5F4] placeholder-[#A8A29E]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#F2660A]"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-[#0C0A09] border border-white/10 text-[#F5F5F4] placeholder-[#A8A29E]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#F2660A]"
                />
                {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password}</p>}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isLoading}
                disabled={isLoading}
                className="w-full justify-center text-sm py-3.5 shadow-ember-glow"
                rightIcon={<ArrowRightIcon className="w-4 h-4" />}
              >
                LOG IN TO CMS DASHBOARD
              </Button>
            </form>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <span className="text-[11px] text-[#A8A29E]">
                Test Credentials: <code className="text-[#F2660A]">admin@demo.com</code> / <code className="text-[#F2660A]">Admin@123</code>
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
