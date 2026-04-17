"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface OceanWaveProps {
	children?: React.ReactNode;
	className?: string;
	speed?: number;
	intensity?: number;
}

export default function OceanWave({
	children,
	className,
	speed = 0.15,
	intensity = 0.2,
}: OceanWaveProps) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const frame = requestAnimationFrame(() => setReady(true));
		return () => cancelAnimationFrame(frame);
	}, []);

	return (
		<div
			className={cn("relative overflow-hidden", className)}
			style={{ position: "relative" }}
		>
			{ready && (
				<GrainGradient
					colors={["#0066FF", "#00AAFF", "#004488"]}
					colorBack="#00000000"
					speed={speed}
					scale={0.6}
					rotation={-30}
					offsetX={0.1}
					offsetY={-0.15}
					softness={0.7}
					intensity={intensity}
					noise={0.2}
					shape="wave"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: 0,
					}}
				/>
			)}
			<div style={{ position: "relative", zIndex: 1 }}>{children}</div>
		</div>
	);
}