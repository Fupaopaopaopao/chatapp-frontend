import SiderbarHeader from './siderbar/SiderbarHeader'
import { useChatStore } from '../../store/useChatStore'
import UserBtn from '../UserBtn'

const Sidebar = () => {
  const { users } = useChatStore()
  return (
    <div className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <SiderbarHeader />

      <div className="flex flex-col">
        <UserBtn filteredUsers={users} />
      </div>
    </div>
  )
}

export default Sidebar
