import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../utils/cn';

// TODO: move to a separate file
// eslint-disable-next-line react-refresh/only-export-components
export const BUTTON_VARIANTS = tv({
    base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary-dark',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive-dark',
            outline: 'border-input bg-background hover:bg-input hover:text-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-dark',
            ghost: 'hover:bg-muted hover:text-muted-foreground',
            link: 'text-primary hover:text-primary-dark underline-offset-4',
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof BUTTON_VARIANTS> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(BUTTON_VARIANTS({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export default Button;
