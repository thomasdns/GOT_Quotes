import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonItem,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React from 'react';

const Topics: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonButton href='/users'>Retour</IonButton>
					</IonButtons>
					<IonTitle>Page Title</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>UI goes here...</IonContent>
		</IonPage>
	);
};

export default Topics;