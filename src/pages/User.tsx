
import React from 'react';
import { menuController } from '@ionic/core/components';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';

const Users: React.FC = () => {
	useIonViewDidEnter(() => {
		menuController.enable(true);
		return () => {
			menuController.enable(false);
		};
	});
	return (
		<>
			<IonMenu contentId='usersPage'>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Menu Content</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className='ion-padding'>
					<IonButtons>
						<IonButton href='/topics'>Go Topics</IonButton>
						<IonButton href='/contracts'>Go Contracts</IonButton>
					</IonButtons>
				</IonContent>
			</IonMenu>
			<IonPage id='usersPage'>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot='start'>
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className='ion-padding'>UI goes here...</IonContent>
			</IonPage>
		</>
	);
};

export default Users;