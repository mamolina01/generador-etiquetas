import React from "react";

export const HeaderSticker = ({ user }) => {
	return (
		<div className="grid grid-cols-2 ">
			<div className="grid col-span-1">
				<img
					src={user.logo}
					alt="logo-marca"
					className="w-20 h-20 lg:w-28 lg:h-28 object-cover mx-auto rounded-full"
				/>
			</div>
			<div className="grid col-span-1 content-evenly">
				<div className="flex justify-start gap-1 place-items-center">
					<img src="/Instagram.png" alt="" className="w-5 h-5 md:w-6 md:h-6" />
					<p className="text-xs md:text-base font-bold uppercase">{user.instagram}</p>
				</div>
				<div className="flex justify-start gap-1 place-items-center">
					<img src="/whatsapp.png" alt="" className="w-5 h-5 md:w-6 md:h-6" />
					<p className="text-xs md:text-base font-bold">{user.whatsapp}</p>
				</div>
			</div>
		</div>
	);
};
