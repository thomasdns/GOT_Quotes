import {
	IonBackButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewDidEnter,
	IonSkeletonText,
	IonCardSubtitle,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Character from '../types/Character';
import SkeletonCharacter from '../components/SkeletonCharacter';

const Details: React.FC = () => {
	const [character, setCharacter] = useState<Character | null>(null);
	const [loading, setLoading] = useState(true);

	const params: { slug: string } = useParams();
	useIonViewDidEnter(() => {
		const getData = async () => {
			try {
				const request = await fetch(
					`https://api.gameofthronesquotes.xyz/v1/character/${params.slug}`
				);

				const data = await request.json();

				setTimeout(() => {
					setCharacter(data[0]);
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
					<IonItem slot='end'>
						<IonBackButton />
					</IonItem>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				{loading && <SkeletonCharacter /> }
				{character && (
					<>
					<IonCard>
						<IonCardHeader>
							<IonCardTitle>{character.name}</IonCardTitle>
						</IonCardHeader>

						<IonCardContent>
						<IonLabel>
							{character.house?.name || 'No house attached'}
						</IonLabel>
						</IonCardContent>
					</IonCard>

					<IonList>
					{character.quotes.map((quote) => {
							return <p key={quote}>{quote}</p>;
						})}
					</IonList>
					
					</>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Details;
