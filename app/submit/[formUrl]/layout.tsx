import { UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "@/components/theme-switcher";
import Logo from "@/components/logo";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <ThemeSwitcher />
      </nav>
      <main className="flex w-ful flex-grow">{children}</main>
    </div>
  );
}

export default Layout;
