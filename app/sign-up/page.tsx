import Link from "next/link";

export default function SignUp() {
  return <main className="auth page"><div className="glass authbox"><div className="eyebrow">Start studying</div><h1 style={{fontSize:48}}>Create account</h1><p className="muted">Create your account so your study progress can follow you across devices.</p><form><div className="field"><label htmlFor="name">Name</label><input id="name" name="name" placeholder="Your name" /></div><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@example.com" /></div><div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" placeholder="Create a password" /></div><button className="btn primary" type="button" style={{width:"100%"}}>Create account</button></form><p className="muted" style={{marginTop:22}}>Already have an account? <Link href="/sign-in" style={{color:"#7dd3fc"}}>Sign in</Link></p></div></main>;
}
