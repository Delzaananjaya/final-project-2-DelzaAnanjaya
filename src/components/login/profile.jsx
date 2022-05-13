import { FaUserCircle } from 'react-icons/fa';
import { Button } from '../ui';
import MenuItem from './menu-item';

function Profile({ username }) {
  return (
    <div className="relative hidden group md:block">
      <div className="flex items-center text-white">
        <Button className="flex items-center max-w-xs text-sm rounded-full bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <FaUserCircle className="w-10 h-10 rounded-full" />
        </Button>
        <p className="text-lg text-white ml-1.5 capitalize">{username}</p>
      </div>
      <MenuItem />
    </div>
  );
}

export default Profile;
