import { User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
