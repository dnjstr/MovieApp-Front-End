import { useLocation } from 'react-router-dom';

export const useActiveLink = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-orange-600' : 'hover:text-orange-600';
  };

  return getLinkClass;
};
