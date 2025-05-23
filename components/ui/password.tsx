import * as React from "react";

import { cn } from "@/lib/utils";
import { Input, InputProps } from "./input";
import { Separator } from "./separator";
import { Button } from "./button";
import { EyeIcon } from "lucide-react";
import { useState } from "react";

const Password = React.forwardRef<
  HTMLInputElement,
  InputProps & { containerClassName?: string }
>(({ className, containerClassName, ...props }, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={cn(
        "flex border rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-ring",
        containerClassName
      )}
    >
      <Input
        type={show ? "text" : "password"}
        className={cn(
          "rounded-l-md rounded-r-none border-none focus-visible:ring-none",
          className
        )}
        ref={ref}
        {...props}
        placeholder="•••••••••••••"
      />
      <Separator orientation="vertical" className="border-l h-10" />
      <Button
        tabIndex={-1}
        size="sm"
        variant={"ghost"}
        className="h-10 rounded-none"
        type="button"
        onClick={() => setShow((prev) => !prev)}
      >
        <EyeIcon className="h-4 w-4" />
      </Button>
    </div>
  );
});
Password.displayName = "Password";

export { Password };
