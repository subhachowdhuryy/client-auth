import { UserButton, useUser, SignedIn, SignedOut } from '@clerk/clerk-react'
import { cn } from '../lib/utils'

export default function Navbar() {
  const { user, isLoaded } = useUser()
console.log('User:', user)
  console.log('Is Loaded:', isLoaded)
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b z-50"
      )}
    >
      <div className="text-xl font-bold text-indigo-700">Employee Management Portal</div>
      <div className="flex items-center gap-4">
        <SignedIn>
          {isLoaded && user && (
            <span className="text-base font-medium text-gray-700">
              {user.username} 
            </span>
          )}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <UserButton afterSignOutUrl="/" />
        </SignedOut>
      </div>
    </nav>
  )
}