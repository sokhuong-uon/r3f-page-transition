import { useSpring } from "@react-spring/three";
import { ReactThreeFiber } from "@react-three/fiber";
import { Fan } from "./Fan";

type SameProps = {
	route: string;
};

const Same = ({ route }: SameProps) => {
	const { fanRotation } = useSpring({
		fanRotation: route === "/" ? [0, -Math.PI / 4, 0] : [0, Math.PI / 4, 0],
		config: {
			duration: 1000,
		},
	});

	return (
		<div className="w-full h-full ">
			<Fan
				fanRotation={
					fanRotation as unknown as ReactThreeFiber.Object3DProps["rotation"]
				}
			></Fan>
		</div>
	);
};

export default Same;
