import { useButton } from "react-aria";
import { useRef, RefObject } from "react";
interface InnerButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  elementType: "button" | "a";
  [x: string]: any;
  type?: "button" | "submit" | "reset";
  className?: string;
}
const InnerButton = (props: InnerButtonProps) => {
  let { children, elementType, href, className } = props;
  let ref = useRef<any>();
  const { buttonProps } = useButton({ ...props, elementType }, ref);
  return href ? (
    <a ref={ref} className={className} {...buttonProps}>
      {children}
    </a>
  ) : (
    <button ref={ref} className={className} {...buttonProps}>
      {children}
    </button>
  );
};
interface ButtonProps extends InnerButtonProps {
  tw?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}
export const Button = (props: ButtonProps) => {
  let { children, variant = "primary", size = "medium", disabled, tw } = props;
  return (
    <InnerButton
      disabled={disabled}
      className={`font-black rounded-none px-10 py-4 bg-black text-white ${tw}`}
      {...props}
    >
      {children}
    </InnerButton>
  );
};
