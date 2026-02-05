import React, { useState } from 'react'
import { Users } from 'lucide-react'
import { useChatStore } from '../../../store/useChatStore'

const SiderbarHeader = () => {
  const [showOnlineOnly, setShowOnlineOnly] = useState(false)

  const { onlineUsers } = useChatStore()

  return (
    <div className="flex flex-col border-b border-base-300 w-full p-5 gap-2">
      <div className="flex gap-2">
        <Users className="size-6" />
        <span className="font-medium hidden lg:block">Contacts</span>
      </div>
      {/* online toggle */}
      <div className="mt-3 hidden lg:flex items-center gap-2">
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
            className="checkbox checkbox-sm"
          />
          <span className="text-sm">Show online only</span>
        </label>
        <span className="text-xs text-zinc-500">
          ({onlineUsers.length - 1} online)
          {/* (4 online) */}
        </span>
      </div>
    </div>
  )
}

export default SiderbarHeader
