import { IonActionSheet, IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { image } from 'ionicons/icons';
import { useState } from 'react';

const Tab1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Action Sheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          onClick={() => {setIsOpen(!isOpen)}}
        >
          <IonIcon icon={image} />
          Open
        </IonButton>
        <IonActionSheet 
          isOpen={isOpen}
          header='Actions'
          buttons={
            [
              {
                text: 'Delete',
                role: 'destructive',
                data: {
                  action: 'delete'
                }
              },
              {
                text: 'Cancel',
                role: 'cancel',
                data: {
                  action: 'cancel',
                },
              },
            ]
          }
        />  
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
