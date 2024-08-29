import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, useIonRouter } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import './Home.css';

interface Character {
  name: string;
  slug: string;
  house: {
    slug: string;
    name: string;
  } | null;
  quotes: string[];
}

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const router = useIonRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.gameofthronesquotes.xyz/v1/characters');
      const data = await response.json();
      setCharacters(data);
    };

    fetchData();
  }, []);

  const handleDetailClick = (slug: string) => {
    router.push(`/details/${slug}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game of Thrones Characters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {characters.map((character) => (
            <IonItem key={character.slug}>
              <IonLabel>
                <h2>{character.name}</h2>
                <p>{character.house?.name || 'No House'}</p>
              </IonLabel>
              <IonButton onClick={() => handleDetailClick(character.slug)}>Details</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
