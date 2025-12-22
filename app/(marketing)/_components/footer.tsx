import Link from "next/link";
import {
  IconShieldLock,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandDiscord,
} from "@tabler/icons-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Security", href: "#" },
      { label: "Team", href: "#" },
      { label: "Enterprise", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Legal", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <IconShieldLock className="size-6 text-primary" />
              <span className="font-bold text-xl">Fast Auth</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The fastest way to add secure authentication to your Next.js
              applications. Open source and built for modern developers.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconBrandTwitter className="size-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconBrandGithub className="size-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconBrandDiscord className="size-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="font-semibold text-foreground tracking-tight">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-foreground transition-colors hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Fast Auth Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
