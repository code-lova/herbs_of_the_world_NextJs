"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import useUser from '@/hooks/useUser';
import { User } from '@/types';

type UserContextType = {
  user: User | null;
  isLoading: boolean;
  refetchUser: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoading, refetch } = useUser();
  const [userState, setUser] = useState<User | null>(user);

  // Update userState when user data from useUser changes
  React.useEffect(() => {
    if(!isLoading){
      setUser(user);
    }
  }, [user, isLoading]);

  return (
    <UserContext.Provider
      value={{
        user: userState,
        isLoading,
        refetchUser: refetch,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within a UserProvider');
  return context;
};
