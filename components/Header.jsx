import { SignedOut, SignInButton, UserButton, SignedIn} from '@clerk/nextjs'
import { User } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
     <SignedOut>
        <SignInButton />
     </SignedOut>

     <SignedIn>
        <UserButton />
     </SignedIn>
    </div>
  )
}

export default Header