import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Button = ({
	className,
	...props
}: DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) => {
	return (
		<button
			className={cn(
				'bg-cyan-500 px-6 py-2 w-max disabled:opacity-60 hover:bg-cyan-600 transition-colors font-medium rounded-lg text-white',
				className
			)}
			{...props}
		/>
	);
};

export default Button;
