export const validateFiles = (profile) => {
	if (!!profile.instagram && !!profile.whatsapp) {
		return true;
	} else {
		return false;
	}
};
