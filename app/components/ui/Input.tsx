"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface InputBaseProps {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}

interface InputAsInput extends InputBaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputBaseProps> {
  as?: "input";
}

interface InputAsTextarea extends InputBaseProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof InputBaseProps> {
  as: "textarea";
}

type InputProps = InputAsInput | InputAsTextarea;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  function Input({ label, error, required, className = "", as = "input", ...props }, ref) {
    const inputId = props.id || props.name;
    const errorId = error && inputId ? `${inputId}-error` : undefined;

    const baseInputClasses =
      "w-full rounded-md border bg-white px-3.5 py-2.5 text-text text-base transition-colors placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary";

    const errorClasses = error
      ? "border-error focus:ring-error focus:border-error"
      : "border-border";

    const inputClasses = `${baseInputClasses} ${errorClasses} ${className}`.trim();

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-text">
          {label}
          {required && (
            <span className="text-error ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </label>

        {as === "textarea" ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={inputId}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={errorId}
            aria-required={required}
            className={`${inputClasses} min-h-[120px] resize-y`}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={inputId}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={errorId}
            aria-required={required}
            className={inputClasses}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error && (
          <p id={errorId} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
