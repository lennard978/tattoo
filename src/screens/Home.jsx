import { AnimatedText } from "../components/AnimatedText";

export const Home = () => {
	return (
		<div className=" bg-header h-screen bg-fixed bg-center bg-cover flex justify-center items-center text-white">
			<div className=" flex flex-col text-center">
				<p className=" text-6xl font-OpenSans">
					<AnimatedText text="Tattoo" />
				</p>
				<p className=" text-6xl font-OpenSans">
					<AnimatedText text="Yeli" />
				</p>
			</div>
		</div>
	);
};
