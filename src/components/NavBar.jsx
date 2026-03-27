"use client";

import { Bell, ShoppingCart, User, CreditCard, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pfp = "/img/ronaldo.jpg";

  return (
    <div className="w-full h-14 border-b flex items-center px-6 bg-white">
      <div className="ml-auto flex items-center gap-6">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5 text-gray-700" />
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="w-5 h-5 text-black" />
          <span className="absolute -top-1 -right-1 text-[10px] bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </Button>

        <div className="h-6 w-px bg-gray-300" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer">
              <Avatar className="w-8 h-8">
                <AvatarImage src={pfp} />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>

              <div className="text-left leading-tight">
                <p className="text-sm font-bold text-black">Admin User</p>
                <p className="text-xs text-black">KSHRD</p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <p className="font-semibold text-sm">Admin User</p>
              <p className="text-sm text-muted-foreground">admin@hrdshop.com</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
