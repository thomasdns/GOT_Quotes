import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonButton, IonBackButton, IonButtons } from '@ionic/react';
import { useParams } from 'react-router-dom';
import './Detail.css';

interface Character {
  name: string;
  slug: string;
  house: {
    slug: string;
    name: string;
  } | null;
  quotes: string[];
}

const Details: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.gameofthronesquotes.xyz/v1/characters/${slug}`);
      const data = await response.json();
      setCharacter(data);
    };

    fetchData();
  }, [slug]);

  if (!character) return <div>Loading...</div>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{character.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLabel>
          <h2>{character.name}</h2>
          <p><strong>House:</strong> {character.house?.name || 'No House'}</p>
          <p><strong>Quotes:</strong></p>
          <ul>
            {character.quotes.map((quote, index) => (
              <li key={index}>{quote}</li>
            ))}
          </ul>
        </IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Details;
