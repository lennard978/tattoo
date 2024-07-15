import { AnimatedText } from "../components/AnimatedText";
import imgUrl from '/images/tattoo221.jpg'

export const Home = () => {
	return (
		<div className=" bg-header h-screen bg-fixed bg-center bg-cover flex justify-center items-center text-white">
			<div className=" flex flex-col text-center mt-14">
				<p className=" text-6xl px-4 font-OpenSans">
					<AnimatedText text="Tattoo Yeli" />
				</p>
			</div>
		</div>
	);
};
