import Link from "next/link";

export default function SignIn() {
  return <main className="auth page"><div className="glass authbox"><div className="eyebrow">Welcome back</div><h1 style={{fontSize:48}}>Sign in</h1><p className="muted">Your saved study progress belongs to your account.</p><form><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@example.com" /></div><div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" placeholder="••••••••" /></div><button className="btn primary" type="button" style={{width:"100%"}}>Sign in</button></form><p className="muted" style={{marginTop:22}}>New here? <Link href="/sign-up" style={{color:"#7dd3fc"}}>Create an account</Link></p></div></main>;
}
