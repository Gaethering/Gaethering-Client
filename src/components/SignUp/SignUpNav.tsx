import { SignUpStep, SIGNUP_STEPS } from './SignUp.type';
import { NavIndicator, StepLine, StyledNav } from './SignUpNav.style';

function SignUpNav<T>({ step }: { step: SignUpStep }) {
  return (
    <StyledNav>
      {Array(SIGNUP_STEPS)
        .fill(null)
        .map((_, i) => (
          <NavIndicator
            key={`step${i}`}
            className={i + 1 === step ? 'active' : undefined}
          >
            {step}
          </NavIndicator>
        ))}
      <StepLine />
    </StyledNav>
  );
}

export default SignUpNav;
