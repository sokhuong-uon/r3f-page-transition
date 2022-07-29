import { animated } from "@react-spring/three";
import { ReactThreeFiber, useFrame } from "@react-three/fiber";
import { useRef } from "react";
type FanComponentsProps = {
	fanRotation: ReactThreeFiber.Object3DProps["rotation"];
};

export const FanComponents = ({ fanRotation }: FanComponentsProps) => {
	const wing = useRef<THREE.Mesh>(null!);
	const fan = useRef<THREE.Group>(null!);

	useFrame(() => {
		wing.current.rotation.z += 0.05;
	});

	return (
		<>
			<animated.group ref={fan} rotation={fanRotation}>
				{/* head */}
				<group>
					<mesh>
						<torusBufferGeometry args={[2, 0.2, 16, 32]}></torusBufferGeometry>
						<meshBasicMaterial></meshBasicMaterial>
					</mesh>

					<mesh ref={wing}>
						<planeBufferGeometry args={[3, 1, 1]}></planeBufferGeometry>
						<meshBasicMaterial></meshBasicMaterial>
					</mesh>
				</group>

				{/* support */}
				<mesh position={[0, -3, -0.6]}>
					<boxBufferGeometry args={[1, 5]}></boxBufferGeometry>
					<meshBasicMaterial color={"black"}></meshBasicMaterial>
				</mesh>
			</animated.group>
		</>
	);
};
