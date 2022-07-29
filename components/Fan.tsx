import { OrbitControls } from "@react-three/drei";
import { Canvas, ReactThreeFiber } from "@react-three/fiber";
import { FanComponents } from "./FanComponents";

type FanProps = {
	fanRotation: ReactThreeFiber.Object3DProps["rotation"];
};

export const Fan = ({ fanRotation }: FanProps) => {
	return (
		<div className="w-full h-full cc">
			<Canvas className="bg-teal-600">
				<OrbitControls></OrbitControls>
				<FanComponents fanRotation={fanRotation}></FanComponents>
			</Canvas>
		</div>
	);
};
