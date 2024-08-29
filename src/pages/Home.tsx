import {
	IonButton,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonSelect,
	IonSelectOption,
	IonSkeletonText,
	IonText,
	IonThumbnail,
	IonTitle,
	IonToolbar,
	SelectChangeEventDetail,
	useIonViewWillEnter,
} from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import CharacterItem from '../components/CharacterItem';
import Character from '../types/Character';
import { IonSelectCustomEvent } from '@ionic/core';
import CharacterItemSkeletton from '../components/CharacterItemSkeletton';

const Home: React.FC = () => {
	const [characters, setCharacters] = useState([]);
	const [filteredCharacters, setFilteredCharacters] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState('All');
	const [loading, setLoading] = useState(true);

	const handleSelectHouse = (
		e: IonSelectCustomEvent<SelectChangeEventDetail>
	) => {
		setSelectedFilter(e.detail.value);
		const newFilteredCharacters = characters.filter(
			(element: Character) => {
				if (e.detail.value === 'All') {
					return element;
				} else if (!element.house) {
					if (e.detail.value === 'No house attached') {
						return element;
					} else {
						// do nothing
					}
				} else if (e.detail.value === element.house.name) {
					return element;
				}
			}
		);
		console.log(newFilteredCharacters);
		setFilteredCharacters(newFilteredCharacters);
	};

	useIonViewWillEnter(() => {
		const getData = async () => {
			try {
				const request = await fetch(
					'https://api.gameofthronesquotes.xyz/v1/characters'
				);

				const data = await request.json();

				setTimeout(() => {
					setCharacters(data);
					setFilteredCharacters(data);
					setLoading(false);
				}, 2000);
			} catch (error) {
				console.log(error, 'Oups, prb pdt la récup des characters');
			}
		};

		getData();
	});
	return (
		<IonPage>
			<IonHeader translucent={true}>
				<IonToolbar>
					<IonTitle slot='start'>GOT Quotes</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonItem>
					<IonSelect
						placeholder='Select a House'
						value={selectedFilter}
						onIonChange={handleSelectHouse}
					>
						<div slot='label'>House</div>
						<IonSelectOption value='All'>
							All houses
						</IonSelectOption>
						<IonSelectOption value='House Stark of Winterfell'>
							House Stark of Winterfell
						</IonSelectOption>
						<IonSelectOption value='House Lannister of Casterly Rock'>
							House Lannister of Casterly Rock
						</IonSelectOption>
						<IonSelectOption value='House Baratheon of Dragonstone'>
							House Baratheon of Dragonstone
						</IonSelectOption>
						<IonSelectOption
							value={`House Targaryen of King's Landing`}
						>
							House Targaryen of King's Landing
						</IonSelectOption>
						<IonSelectOption
							value={`House Bolton of the Dreadfort`}
						>
							House Bolton of the Dreadfort
						</IonSelectOption>
						<IonSelectOption value={`House Greyjoy of Pyke`}>
							House Greyjoy of Pyke
						</IonSelectOption>
						<IonSelectOption value={`No house attached`}>
							No house attached
						</IonSelectOption>
						<IonSelectOption value={`House Tarly of Horn Hill`}>
							House Tarly of Horn Hill
						</IonSelectOption>
						<IonSelectOption value={`House Tarth of Evenfall Hall`}>
							House Tarth of Evenfall Hall
						</IonSelectOption>
					</IonSelect>
				</IonItem>
				<IonList>
					{!loading &&
						filteredCharacters.length > 0 &&
						filteredCharacters.map((character: Character) => {
							return (
								<CharacterItem
									key={character.slug}
									character={character}
								/>
							);
						})}

					{
						//loading && new Array(10).fill(<CharacterItemSkeletton />)
					}
					{loading && (
						<>
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
							<CharacterItemSkeletton />
						</>
					)}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Home;
