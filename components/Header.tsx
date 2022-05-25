import Image from 'next/image'
import React from 'react'
import {
  MenuIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
} from '@heroicons/react/solid'
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-md">
      <div className="relative h-10 w-20">
        <Image objectFit="contain" src="/reddit-logo.jpg" layout="fill" />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search box */}
      <form
        className="flex flex-1 items-center space-x-2 
        rounded-lg border border-gray-200 bg-gray-100 px-3 py-1"
      >
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* Sign in / Sign out button */}
      {session ? (
        <div
          className="hidden cursor-pointer items-center space-x-2 
        border border-gray-100 p-2 lg:flex"
          onClick={() => signOut()}
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image src="/reddit-login.png" layout="fill" />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0" />
        </div>
      ) : (
        <div
          className="hidden cursor-pointer items-center space-x-2 
        border border-gray-100 p-2 lg:flex"
          onClick={() => signIn()}
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image src="/reddit-login.png" layout="fill" />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header
