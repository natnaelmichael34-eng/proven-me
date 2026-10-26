"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGoogleSignIn() {
    setError("");
    setLoading(true);
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
    if (error) {
      setLoading(false);
      setError(error.message || "Unable to continue with Google.");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/dashboard",
    });

    setLoading(false);
    if (error) {
      setError(error.message || "Unable to create your account.");
      return;
    }
    router.push("/dashboard");
  }

  return <main className="auth page"><div className="glass authbox"><Link className="logo" href="/">Proven<span>Me</span></Link><div className="eyebrow" style={{marginTop:32}}>Start studying</div><h1>Create account</h1><p className="muted">Create one account for your guides, podcasts, quizzes, tutor sessions, and progress.</p><div className="oauth"><button className="oauthBtn" type="button" onClick={handleGoogleSignIn} disabled={loading}>Continue with Google</button><button className="oauthBtn" type="button" disabled>Continue with Apple</button></div><div className="divider"><span>OR SIGN UP WITH EMAIL</span></div><form onSubmit={handleSubmit}><div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" /></div><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></div><div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="new-password" minLength={8} maxLength={128} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" /></div>{error && <p className="error" role="alert">{error}</p>}<button className="btn primary" type="submit" disabled={loading} style={{width:"100%"}}>{loading ? "Creating account…" : "Create account"} <span>→</span></button></form><p className="muted" style={{marginTop:22}}>Already have an account? <Link href="/sign-in" style={{color:"#fff",fontWeight:700}}>Sign in</Link></p><p className="muted" style={{fontSize:11,marginTop:20}}>Google sign-in is configured in the app. It needs Google OAuth credentials in the deployment environment.</p></div></main>;
}
