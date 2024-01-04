import { forwardRef } from "react";

import { twcx } from "../../../../utils/twcx";
import { BaseButton, BaseButtonProps } from "../../base/BaseButton";

export const SimpleButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    { children, className, type = "button", ...rest },
    forwardRef,
  ): JSX.Element => {
    return (
      <BaseButton
        ref={forwardRef}
        className={twcx(
          "h-[32px] rounded-[4px] border-[1px] bg-white font-medium px-[16px] py-[8px]",
          className,
        )}
        type={type}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  },
);

SimpleButton.displayName = "SimpleButton";
