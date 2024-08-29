import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSkeletonText,
    IonList,
} from '@ionic/react';

const SkeletonCharacter: React.FC = () => {
    return (
        <>
            {/* Squelette pour le nom du personnage et sa maison */}
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>
                        <IonSkeletonText animated style={{ width: '80%' }} />
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonSkeletonText animated style={{ width: '60%' }} />
                </IonCardContent>
            </IonCard>
            {/* Squelette pour les citations */}
            <IonList>
                {Array.from({ length: 3 }).map((_, index) => (
                    <IonCard key={index}>
                        <IonCardContent>
                            <IonSkeletonText animated style={{ width: '100%' }} />
                            <IonSkeletonText animated style={{ width: '90%' }} />
                            <IonSkeletonText animated style={{ width: '95%' }} />
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonList>
        </>
    );
};

export default SkeletonCharacter;
