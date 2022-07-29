import Link from "next/link";

export const Header = () => {
	return (
		<header className="absolute top-0 z-10 flex items-center justify-end w-full h-10 gap-2 px-2">
			<Link href={"/"} className="w-10 h-full">
				<a>Home</a>
			</Link>
			<Link href={"/about"} className="w-10 h-full">
				<a>About</a>
			</Link>
		</header>
	);
};
