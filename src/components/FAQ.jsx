import { useState } from "react";
import { Accordion } from "./Accordion";

export const FAQ = () => {
	const [expanded, setExpanded] = useState(false);

	const accordionsIds = [
		{
			title: "How to prepare yourself for a tattoo session ?",
			description: [
				{
					text: "1. Rest and Sleep Well This might be easier said than done, because you are all excited about getting a new tattoo, and can’t wait for the appointment. But being well rested is one of the best ways to make sure you’re ready for the upcoming day.",
				},
				{
					text: "2. Eat Healthy and Drink Water Make sure to eat a full meal and drink plenty of water before coming to your appointment. Getting tattooed usually takes a toll on the body, so your body needs fuel to get through the day. You can also bring snacks with you to the tattoo appointment.",
				},
				{
					text: "3. Avoid Heavy Training I advise not to start beating your personal records at the gym the day before or the day of the tattoo appointment. Your body needs to be fully rested, and ready for the new tattoo. It would also be a lot easier for you to sit in the chair if your muscles aren’t sore from the workout."
				},
				{
					text: "4. Avoid Partying/Alcohol/Drugs This goes without saying. It is no fun being hung over. Having a splitting headache and feeling nauseous is one thing. You would probably want to lay in your bed the entire day and not move a muscle, just wait for the bed to stop turning. Now picture this scene, but add someone poking you with needles for hours. Welcome to a whole new circle of hell. 🙂"
				},
				{
					text: "5. No Tanning It is crucial to keep the amount of melanin (natural pigment) in your skin as low as possible. Tattoo ink is injected into a deeper layer of the skin than melanin is situated, so the melanin will almost put like a brown tinted glass over your tattoo, and in result it will muddy the colors. Regarding that I strongly advise to avoid direct sunlight, and to try not to get a sunburn. You can achieve that by either protecting the area to be tattooed with clothing and/or by wearing a high SPF sunblock, I recommend using at least SPF50. It is also advised against using self tanning creams/lotions etc."
				},
				{
					text: "6. No Scrubs When showering, please don’t exfoliate your skin. Exfoliating makes skin renew itself and the new skin is fragile, making it harder to tattoo.This of course does not mean you shouldn’t shower or wash yourself, just don’t scrub your skin too much.You also do not need to shave the area yourself."
				},
				{
					text: "7. Moisturizing is key The skin is a tricky canvas, and tattooing a dry, non-elastic canvas isn’t any easier.I recommend to apply moisturizing lotion/cream/coconut oil on the to be tattooed area for one week before the appointment."
				}
			]
		},
		{
			title: "How to take care after tattoo",
			description: [
				{
					text: "On your first night, there’s a chance your tattoo will still bleed. The blood can dry overnight and stick to your clothes or bedding. If this happens, gently take the fabric off. DO NOT force it off or be rough with it. If it still does not come off, wet the area with lukewarm water and gently slide it off."
				},
				{
					text: "Fresh tattoos sometimes “weep” during the first couple of days, meaning that plasma and ink form a thin moist coating on the skin. This can be DABBED with a clean paper towel. Press the paper towel to the skin and remove. Do not wipe the tattoo or be rough with it. Do not panic when you see the colors of the tattoo on the paper towel, or on your hands as you clean it. This is simply excess ink being secreted from the surface or the skin. To avoid stains, use towels and bedsheets with darker tones and wear dark clothing."
				},
				{
					text: "Before you start, make sure your hands are clean and you have unscented antibacterial soap ready. Avoid soap with fragrance, moisture beads or scrubs."
				},
				{
					text: "1. Carefully remove the bandage and tape. If you feel the bandage sticking to the tattoo, wet it with lukewarm water and gently slide it off."
				},
				{
					text: "2. Make a lather in your hands with soap and warm water. NO washcloths, bath towels, or sponges on a fresh tattoo."
				},
				{
					text: "3. Gently clean the tattoo using a circular motion until all ointment and plasma are removed."
				},
				{
					text: "4. Rinse the tattoo gently until the skin is clean."
				},
				{
					text: "5. Pat dry with a clean towel or paper towel then allow to fully air dry for a minimum of 10 minutes. DO NOT SCRUB."
				},
				{
					text: "6. Once the tattoo is dry, apply a very small amount of Bepanthen. Gently rub the ointment into your tattoo. Dab any excess off with a clean paper towel."
				},
				{
					text: "Applying too much ointment can cause your tattoo to “suffocate.” Apply only a very thin coat so your tattoo can breathe. Clean your tattoo this way once a day in the shower for the first 2-3 days."
				}
			]
		},
		{
			title: "Your Daily Tattoo Aftercare Routine",
			description: [
				{
					text: "Apply the Bepanthen 2-3 times a day (Remember, keep it light!) for the first 5-7 days or until your tattoo starts to flake/peel like a sunburn. When the peeling begins, switch to a regular FRAGRANCE FREE lotion for an additional 2 weeks. Your tattoo should be completely healed within 2-4 weeks."
				},
				{
					text: "If you have extremely sensitive skin, the lotion may cause breakouts. If this happens, just reduce the number of your daily lotion application."
				},
				{
					text: "After the first few days, your tattoo may become itchy or begin to form flaky scabs. They will fall off on their own, so DO NOT PICK OR SCRATCH AT YOUR TATTOO. Doing so can cause some of the pigment to disappear, and your tattoo may not heal properly. Keep it moisturized and the scabs will eventually dissipate."
				}
			]
		},
		{
			title: "Important Dos and Don’ts",
			description: [
				{
					text: "• Clean towels, bedding and clothes are highly recommended during the healing process."
				},
				{
					text: "• Showering is fine, however, please DO NOT soak your tattoo for at least 2 weeks. This means no swimming, baths or submerging your tattoo in water for long periods of time."
				},
				{
					text: "• Avoid direct sunlight on your tattoo for at least 2 weeks and your tattoo is completely healed. After that, I advise putting on a sunblock (minimum SPF 50) on your tattoo whenever you find yourself in direct sunlight for the rest of your life. The sun will undoubtedly cause damage and compromise the longevity of your tattoo."
				},
				{
					text: "• Wear loose clothing (preferably cotton) and avoid constricting accessories like bra straps and tight waistbands over a fresh tattoo. Avoid dirty, sweaty or itchy clothing as they can create healing problems."
				}
			]
		},
	];

	return (
		<div>
			{accordionsIds.map((item, i) => (
				<Accordion
					key={i}
					i={i}
					expanded={expanded}
					setExpanded={setExpanded}
					title={item.title}
					description={item.description}
				/>
			))}
		</div>
	);
};
