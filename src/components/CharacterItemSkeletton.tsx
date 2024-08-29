import {
	IonButton,
	IonItem,
	IonLabel,
	IonSkeletonText,
	IonThumbnail,
} from '@ionic/react';

const CharacterItemSkeletton: React.FC = () => {
	return (
		<IonItem>
			<IonLabel>
				<IonSkeletonText
					style={{
						width: '20%',
						margin: 'auto',
					}}
				/>
			</IonLabel>
			<IonItem slot='start' style={{ minWidth: '300px', width: '30%' }}>
				<IonThumbnail slot='end'>
					<IonSkeletonText />
				</IonThumbnail>
				<IonLabel>
					<IonSkeletonText />
				</IonLabel>
			</IonItem>
			<IonButton slot='end'>Voir le détail</IonButton>
		</IonItem>
	);
};

export default CharacterItemSkeletton;
