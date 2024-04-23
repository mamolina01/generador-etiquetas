export const validateFiles = (profile, isLogged) => {
	if (isLogged) {
		if (!!profile.instagram && !!profile.whatsapp) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};
