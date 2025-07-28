"use client";
import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
	feature: FeatureType;
	index?: number;
};

export function FeatureCard({ feature, className, index = 0, ...props }: FeatureCardPorps) {
	const p = genDeterministicPattern(index);

	return (
		<div className={cn('relative overflow-hidden p-6', className)} {...props}>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			<feature.icon className="text-foreground/75 size-6" strokeWidth={1} aria-hidden />
			<h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
			<p className="text-muted-foreground relative z-20 mt-2 text-xs font-light">{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genDeterministicPattern(index: number): number[][] {
	// Use a simple deterministic algorithm based on index
	const patterns = [
		[[8, 3], [9, 2], [9, 6], [10, 2], [10, 1]], // Pattern 0
		[[10, 4], [7, 4], [10, 4], [10, 5], [8, 2]], // Pattern 1
		[[7, 5], [8, 2], [10, 1], [7, 2], [8, 1]], // Pattern 2
		[[9, 3], [9, 1], [9, 6], [8, 4], [10, 2]], // Pattern 3
		[[7, 6], [10, 6], [9, 2], [7, 6], [8, 3]], // Pattern 4
		[[8, 6], [7, 4], [10, 1], [9, 4], [7, 6]], // Pattern 5
	];
	
	return patterns[index % patterns.length];
}
