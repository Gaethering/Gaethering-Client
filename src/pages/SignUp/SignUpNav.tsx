import { NavLink } from 'react-router-dom';

const getNavState = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) => (isActive ? 'active' : isPending ? 'pending' : undefined);

function SignUpNav() {
  return (
    <nav>
      <NavLink to={'1'} className={getNavState}>
        1
      </NavLink>
      <NavLink to={'2'} className={getNavState}>
        2
      </NavLink>
      <NavLink to={'3'} className={getNavState}>
        3
      </NavLink>
      <NavLink to={'4'} className={getNavState}>
        4
      </NavLink>
    </nav>
  );
}

export default SignUpNav;
