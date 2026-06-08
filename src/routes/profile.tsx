import { useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { User, Mail, GraduationCap, Star, LogOut, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — VLMS" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{name: string, college: string, interests: string[]} | null>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) setEmail(data.user.email || '');
      else navigate({ to: "/" });
    };
    fetchUser();

    const profileStr = localStorage.getItem('currentUserProfile');
    if (profileStr) {
      try {
        setProfile(JSON.parse(profileStr));
      } catch (e) {}
    }
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('currentUserProfile');
    window.location.href = "/";
  };

  if (!profile) return null;

  return (
    <div className="px-6 lg:px-10 py-12 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="size-4" /> Back to Dashboard
      </Link>
      
      <div className="p-8 rounded-2xl border border-border bg-card shadow-sm relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="size-24 rounded-full bg-cyan/20 border-2 border-cyan text-cyan flex items-center justify-center shrink-0">
            <span className="text-4xl font-display font-bold">
              {profile.name ? profile.name.charAt(0).toUpperCase() : <User className="size-10" />}
            </span>
          </div>
          
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground mb-1">{profile.name}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-4" />
                <span>{email}</span>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  <GraduationCap className="size-4" /> College
                </div>
                <div className="font-medium">{profile.college || 'Not specified'}</div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  <Star className="size-4 text-purple-400" /> Interests
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profile.interests && profile.interests.length > 0 ? (
                    profile.interests.map(i => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20">
                        {i}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-muted-foreground">None selected</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end border-t border-border/50">
              <button 
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="size-4" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
