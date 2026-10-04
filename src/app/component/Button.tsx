"use client";

import Link from "next/link";
import React from "react";
import { authClient } from "../lib/auth-client";

const Button = () => {
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="flex gap-3">
      {session?.user ? (
        <button
          onClick={handleSignOut}
          className="bg-red-700 hover:bg-red-800 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-all"
        >
          সাইন আউট
        </button>
      ) : (
        <>
          <Link href="/singin">
            <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              সাইন ইন
            </button>
          </Link>

          <Link href="/singup">
            <button className="bg-red-700 hover:bg-red-800 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-all">
              সাইন আপ
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Button;

