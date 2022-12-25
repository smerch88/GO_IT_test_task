import { useState, useEffect } from 'react';
import FolowCard from './FolowCard/FolowCard';

export const App = () => {
  const [users, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        id: 1,
        user: 'Elon Reeve Musk',
        tweets: 777,
        followers: 100500,
        avatar: '/src/components/FolowCard/pictures/hanselAvatar.png',
        followStatus: false,
      },
    ]);
  }, []);

  return (
    <>
      {users.map(item => (
        <FolowCard
          key={item.id}
          tweets={item.tweets}
          followers={item.followers}
          followStatus={item.followStatus}
          avatar={item.avatar}
          user={item.user}
        />
      ))}
    </>
  );
};
