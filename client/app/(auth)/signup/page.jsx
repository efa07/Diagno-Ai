'use client';

import { useState } from 'react';
import {
  Loader2,
  Palette,
  Users,
  Cloud,
  ShieldCheck,
} from 'lucide-react';

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  // Google login: hit your Express backend
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:4000/auth/google';
  };



  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4">
      <style jsx>{`
        .login-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          position: relative;
          overflow: hidden;
        }
        .login-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }
        .login-btn:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="z-10 w-full max-w-6xl">
        <div className="bg-secondary/50 overflow-hidden rounded-[40px] shadow-2xl">
          <div className="grid min-h-[700px] lg:grid-cols-2">
            {/* Left Side */}
            <div className="brand-side relative m-4 rounded-3xl bg-[url('https://cdn.midjourney.com/299f94f9-ecb9-4b26-bead-010b8d8b01d9/0_0.webp?w=800&q=80')] bg-cover p-12 text-white">
              <div>
                <div className="mb-12 text-lg font-semibold uppercase">
                  DiagnoAI
                </div>
                <h1 className="mb-4 text-6xl font-medium">
                  Smarter Healthcare, Faster Diagnosis
                </h1>
                <p className="mb-12 text-xl opacity-80">
                  Empower doctors and patients with AI-assisted diagnosis
                  and real-time patient management.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Palette size={16} />,
                      title: 'AI-Powered Assistance',
                      desc: 'Get quick insights and recommendations',
                    },
                    {
                      icon: <Users size={16} />,
                      title: 'Patient Management',
                      desc: 'Track and manage patient records seamlessly',
                    },
                    {
                      icon: <Cloud size={16} />,
                      title: 'Secure Cloud Storage',
                      desc: 'Access patient data anytime, anywhere',
                    },
                    {
                      icon: <ShieldCheck size={16} />,
                      title: 'HIPAA-Level Security',
                      desc: 'Keep sensitive data fully protected',
                    },
                  ].map(({ icon, title, desc }, i) => (
                    <div
                      key={i}
                      className="feature-item animate-fadeInUp flex items-center"
                      style={{ animationDelay: `${0.2 * (i + 1)}s` }}
                    >
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
                        {icon}
                      </div>
                      <div>
                        <div className="font-semibold">{title}</div>
                        <div className="text-sm opacity-70">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center p-12">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-light uppercase">
                    Welcome back
                  </h2>
                  <p className="mt-2 text-sm text-stone-600">
                    Sign in to access Diagno
                  </p>
                </div>

                <form  className="space-y-6">
                  {/* add below later email/password */}

                  <button
                    type="submit"
                    className="login-btn relative flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-white transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span className="ml-2">Signing in...</span>
                      </>
                    ) : (
                      'Sign in to your account'
                    )}
                  </button>

                  <div className="relative text-center text-sm text-stone-500">
                    <div className="absolute inset-0 flex items-center">
                      <div className="border-border w-full border-t"></div>
                    </div>
                    <span className="relative px-2">Or continue with</span>
                  </div>

                  {/* Google Login Button */}
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="border-border bg-secondary text-foreground hover:bg-secondary/80 flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm shadow-sm"
                      onClick={handleGoogleLogin}
                    >
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="h-5 w-5"
                        alt="Google"
                      />
                      <span className="ml-2">Sign in with Google</span>
                    </button>
                  </div>
                </form>

                <div className="text-muted-foreground mt-8 text-center text-sm">
                  Don&apos;t have an account?{' '}
                  <a href="#" className="text-primary hover:text-primary/80">
                    Sign up for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
