import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";
import { siteRoutes } from "@/lib/site-routes";

export function JoheiewiseproLoginPage() {
  return (
    <>
      <JohnLewisSiteHeader />
      <main className="flex-1 bg-[#f7f4ef] px-4 py-10 text-[#141414] sm:py-14 lg:py-16">
        <section className="mx-auto grid max-w-[1120px] overflow-hidden bg-white shadow-[0_26px_90px_-60px_rgba(20,20,20,0.38)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-[#102b2b] px-6 py-10 text-white sm:px-10 lg:flex lg:min-h-[42rem] lg:flex-col lg:justify-between lg:px-12 lg:py-12">
            <div>
              <p className="jl-eyebrow text-white/78">Secure access</p>
              <h1 className="mt-5 max-w-[11ch] text-[2.75rem] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[4rem] lg:text-[4.55rem]">
                Welcome back
              </h1>
              <p className="mt-6 max-w-[31rem] text-[1.02rem] leading-7 text-white/82">
                Sign in to manage your Joheiewisepro account, review orders and save your favourite home and lifestyle finds.
              </p>
            </div>
            <div className="mt-12 border-t border-white/18 pt-6 text-sm leading-6 text-white/72 lg:mt-0">
              <p>This is a Joheiewisepro account page for this site only.</p>
              <p className="mt-2">Never enter third-party account credentials on pages you do not recognise.</p>
            </div>
          </div>

          <div className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="max-w-[30rem]">
              <p className="jl-eyebrow text-[#6f665e]">My Joheiewisepro</p>
              <h2 className="mt-4 text-[2rem] font-medium leading-tight tracking-[-0.035em] text-[#141414]">
                Sign in to your account
              </h2>
              <p className="mt-3 text-[0.95rem] leading-6 text-[#5d5750]">
                Use your email address and password to continue to your WordPress account area.
              </p>

              <form action={siteRoutes.wpLogin} method="post" className="mt-8 space-y-5">
                <input type="hidden" name="redirect_to" value={siteRoutes.wpAccount} />
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#141414]">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="log"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full border border-[#bfb8b0] bg-white px-4 text-base text-[#141414] outline-none transition-colors placeholder:text-[#8a8178] focus:border-[#102b2b]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <label htmlFor="password" className="block text-sm font-medium text-[#141414]">
                      Password
                    </label>
                    <a href={siteRoutes.wpLostPassword} className="text-sm underline underline-offset-[3px] hover:text-[#5d5750]">
                      Forgotten password?
                    </a>
                  </div>
                  <input
                    id="password"
                    name="pwd"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="mt-2 h-12 w-full border border-[#bfb8b0] bg-white px-4 text-base text-[#141414] outline-none transition-colors placeholder:text-[#8a8178] focus:border-[#102b2b]"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm leading-6 text-[#3f3a34]">
                  <input
                    type="checkbox"
                    name="rememberme" value="forever" className="mt-1 h-4 w-4 accent-[#102b2b]"
                  />
                  <span>Keep me signed in on this device.</span>
                </label>

                <button
                  type="submit" name="wp-submit" value="Log In"
                  className="flex h-12 w-full items-center justify-center bg-[#102b2b] px-5 text-base font-medium text-white transition-colors hover:bg-[#1b3a3a]"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-8 border-t border-[#ded8d1] pt-7">
                <h3 className="text-[1.15rem] font-medium tracking-[-0.02em] text-[#141414]">
                  New to Joheiewisepro?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5d5750]">
                  Create an account to save delivery details, track orders and build your wish list.
                </p>
                <a
                  href={siteRoutes.wpAccount}
                  className="mt-5 inline-flex h-11 items-center justify-center border border-[#102b2b] px-5 text-sm font-medium text-[#102b2b] transition-colors hover:bg-[#102b2b] hover:text-white"
                >
                  Create an account
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <JohnLewisSiteFooter />
    </>
  );
}
