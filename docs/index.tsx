export const frontmatter = {
  pageType: "custom"
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-16 px-16 pt-32">
      <div className="flex flex-col items-center gap-16 text-center lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-nowrap rounded-full border p-1 px-2 py-1 text-center font-semibold text-primary text-sm">
            Copy &amp; Own
          </div>
          <h1 className="font-semibold text-7xl text-foreground">WindCraft Starter Kit</h1>
          <h2 className="px-8 font-semibold text-4xl text-muted-foreground">React Template Components</h2>
          <div className="text-lg">
            React Aria components + Tailwind CSS &amp; Variants + Inspiration by Shadcn UI + Recharts &amp; Viridis + ❤️
          </div>
          <div className="flex gap-4">
            <a
              className="rounded-md bg-primary px-4 py-2 font-semibold text-base text-primary-foreground"
              href="/guide/"
            >
              Quick Start
            </a>
            <a
              className="rounded-md bg-secondary px-4 py-2 font-semibold text-base text-secondary-foreground"
              href="https://github.com/tinytek-io/windcraft-ui"
            >
              Github
            </a>
          </div>
        </div>
        <div className="max-w-xl">
          <img src="/windcraft-logo.webp" alt="WindCraft Logo" />
        </div>
      </div>

      <section className="flex w-full max-w-7xl flex-col gap-8">
        <h2 className="font-semibold text-4xl">Features</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Crafted for Startups</div>
            <div>
              Boost your “Time to first feature” with our React template components and focus on building your product.
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Best in class accessibility</div>
            <div>
              We build using the best in class React Aria Components, ensuring that our components are accessible to all
              users.
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Copy and own</div>
            <div>
              Components should be part of your code base, not a dependency. Copy and own our components to make them
              your own.
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Customizable theme</div>
            <div>Make your components look like your brand. Customize the theme to match your brand colors.</div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Dark mode</div>
            <div>We support dark mode out of the box. Just toggle the theme to switch between light and dark mode.</div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border-2 border-border p-4">
            <div className="font-semibold text-xl">Figma design (coming soon)</div>
            <div>We maintain a Figma design file that you can use to design your components.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
