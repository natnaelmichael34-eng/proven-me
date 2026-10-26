"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/dashboard",
    });

    setLoading(false);
    if (error) {
      setError(error.message || "Unable to sign in. Check your email and password.");
      return;
    }
    router.push("/dashboard");
  }

  return <main className="auth page"><div className="glass authbox"><Link className="logo" href="/">Proven<span>Me</span></Link><div className="eyebrow" style={{marginTop:32}}>Welcome back</div><h1>Sign in</h1><p className="muted">Pick up where you left off and keep your study progress in one place.</p><div className="oauth"><button className="oauthBtn" type="button" disabled>Continue with Google</button><button className="oauthBtn" type="button" disabled>Continue with Apple</button></div><div className="divider"><span>OR CONTINUE WITH EMAIL</span></div><form onSubmit={handleSubmit}><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></div><div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /></div>{error && <p className="error" role="alert">{error}</p>}<button className="btn primary" type="submit" disabled={loading} style={{width:"100%"}}>{loading ? "Signing in…" : "Sign in"} <span>→</span></button></form><p className="muted" style={{marginTop:22}}>New here? <Link href="/sign-up" style={{color:"#fff",fontWeight:700}}>Create an account</Link></p><p className="muted" style={{fontSize:11,marginTop:20}}>Email/password accounts are connected. Google and Apple require provider credentials before they can be enabled.</p></div></main>;
}
