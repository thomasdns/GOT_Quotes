type Character = {
	name: string;
	slug: string;
	house: {
		name: string;
		slug: string;
	} | null;
	quotes: string[];
};

export default Character;
