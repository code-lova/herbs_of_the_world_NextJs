// components/UserCreationDate.tsx

import React from 'react';
import { formatDate } from '@/utils/dateFormatter';
import { UserCreationDateProps } from '@/types';


const UserCreationDate: React.FC<UserCreationDateProps> = ({ createdAt }) => {
  const date = new Date(createdAt);

  return (
    <div className="text-sm text-gray-500 dark:text-gray-400">
      {formatDate(date)}
    </div>
  );
};

export default UserCreationDate;
